// Full scraper for Meta Wearables Device Access Toolkit (DAT SDK) docs.
//
// v2 fixes (vs v1):
//   - Discover guide URLs from the /docs/develop hub (24 pages) instead of
//     llms.txt (only 7 pages — Meta's llms.txt is incomplete relative to nav).
//   - Post-process Turndown output to split joined bullet runs caused by
//     Meta's div-based (no <ul>/<li>) bullet rendering.
//
// Strategy:
//   1. Visit /docs/develop → enumerate every guide URL from the nav.
//   2. Visit /docs/reference/android/dat/0.6 + /docs/reference/ios_swift/dat/0.6
//      → enumerate every API class URL per platform.
//   3. For each URL: navigate (networkidle), find the main content element,
//      strip nav/header/footer chrome, convert to Markdown via Turndown,
//      normalize bullets, save to disk.
//   4. Emit a _manifest.json listing what got pulled and when.
//
// Output layout (under DEST):
//   guides/<slug>.md
//   api/android/<short_class_name>.md
//   api/ios/<short_class_name>.md
//   _manifest.json

import { chromium } from 'playwright';
import TurndownService from 'turndown';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DEST = path.join(ROOT, 'docs', 'meta-wearables');
const BASE = 'https://wearables.developer.meta.com';
const SNAPSHOT_DATE = new Date().toISOString().slice(0, 10);

const HUBS = {
  guides: `${BASE}/docs/develop/`,
  android: `${BASE}/docs/reference/android/dat/0.6`,
  ios: `${BASE}/docs/reference/ios_swift/dat/0.6`,
};

await fs.mkdir(path.join(DEST, 'guides'), { recursive: true });
await fs.mkdir(path.join(DEST, 'api', 'android'), { recursive: true });
await fs.mkdir(path.join(DEST, 'api', 'ios'), { recursive: true });

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '_',
});
turndown.remove(['script', 'style', 'noscript']);

// ---- Step 1: launch browser, enumerate URLs ----
const browser = await chromium.launch();
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh) meta-wearables-docs-mirror/0.2 (+contact: drPod)',
});
const page = await ctx.newPage();

console.log('==> [1/3] enumerating URLs from hubs');
async function enumerateLinks(hub, prefix) {
  await page.goto(hub, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  const links = await page.$$eval('a[href]', as =>
    as.map(a => a.getAttribute('href')).filter(Boolean)
  );
  return [...new Set(links)]
    .filter(l => l.startsWith(prefix))
    .map(l => l.replace(/\/$/, ''))
    .filter(l => l !== prefix.replace(/\/$/, ''))    // drop the hub itself
    .sort();
}

const guideRel = await enumerateLinks(HUBS.guides, '/docs/');
// keep only top-level /docs/<slug> pages, drop /docs/reference, /docs/develop, /docs/support
const guideUrls = guideRel
  .filter(l => l.match(/^\/docs\/[^/]+$/))
  .filter(l => !['/docs/develop', '/docs/reference', '/docs/support'].includes(l))
  .map(l => `${BASE}${l}`);
console.log(`    guides: ${guideUrls.length}`);

const androidUrls = (await enumerateLinks(HUBS.android, '/docs/reference/android/dat/0.6/'))
  .map(l => `${BASE}${l}`);
console.log(`    android API: ${androidUrls.length}`);

const iosUrls = (await enumerateLinks(HUBS.ios, '/docs/reference/ios_swift/dat/0.6/'))
  .map(l => `${BASE}${l}`);
console.log(`    ios API: ${iosUrls.length}`);

const total = guideUrls.length + androidUrls.length + iosUrls.length;
console.log(`    TOTAL: ${total}`);

// ---- Step 2: scrape each URL ----
console.log('==> [2/3] scraping pages');

function slugFromUrl(url) {
  const last = url.replace(/\/$/, '').split('/').pop();
  // strip Android FQ-prefix `com_meta_wearable_dat_<area>_` and iOS `mwdat<area>_` prefix
  let slug = last
    .replace(/^com_meta_wearable_dat_[a-z]+(?:_[a-z]+)?_/, '')
    .replace(/^mwdat[a-z]+_/, '');
  return slug || last;
}

async function extractMarkdown(page) {
  const html = await page.evaluate(() => {
    const clone = document.body.cloneNode(true);
    // strip obvious chrome
    const noiseSelectors = [
      'script', 'style', 'noscript',
      'header', 'footer', 'nav',
      '[role="navigation"]', '[role="banner"]', '[role="contentinfo"]',
      '[aria-label*="navigation" i]', '[aria-label*="footer" i]',
      'button', 'form', 'svg',
    ];
    for (const sel of noiseSelectors) {
      for (const el of clone.querySelectorAll(sel)) el.remove();
    }
    // find smallest container above h1 with substantial text
    const h1 = clone.querySelector('h1');
    if (h1) {
      let node = h1.parentElement;
      while (node && node !== clone) {
        if (node.innerText && node.innerText.length > 800) return node.outerHTML;
        node = node.parentElement;
      }
    }
    return clone.innerHTML;
  });

  let md = turndown.turndown(html);

  // Normalize joined bullet runs:
  // Meta renders bullets as div-with-CSS, no <ul>/<li>. Turndown sees them as
  // inline text and emits "-   text-   text" with no newline. Insert newlines
  // before any "-   " that follows a non-newline character.
  md = md.replace(/(\S)(-\s{3})/g, '$1\n$2');
  // Collapse runs of 3+ blank lines to 2
  md = md.replace(/\n{3,}/g, '\n\n');

  return md;
}

const manifest = { snapshot: SNAPSHOT_DATE, source: BASE, scraper_version: '0.2', pages: [] };
let scraped = 0, failed = 0;

async function scrapeOne(url, outDir, label) {
  try {
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    if (!resp || resp.status() >= 400) {
      console.log(`    SKIP ${url} (status ${resp?.status()})`);
      failed++;
      return;
    }
    await page.waitForTimeout(800);
    const title = await page.title();
    const md = await extractMarkdown(page);
    const slug = slugFromUrl(url);
    const filePath = path.join(outDir, `${slug}.md`);
    const header = `<!-- source: ${url} | scraped: ${SNAPSHOT_DATE} -->\n\n`;
    await fs.writeFile(filePath, header + md);
    manifest.pages.push({ url, file: path.relative(DEST, filePath), title, bytes: Buffer.byteLength(md) });
    scraped++;
    if (scraped % 10 === 0) console.log(`    [${label}] ${scraped}/${total}`);
  } catch (e) {
    console.log(`    FAIL ${url}: ${e.message}`);
    failed++;
  }
}

console.log('  guides...');
for (const url of guideUrls) await scrapeOne(url, path.join(DEST, 'guides'), 'guides');

console.log('  android API...');
for (const url of androidUrls) await scrapeOne(url, path.join(DEST, 'api', 'android'), 'android');

console.log('  iOS API...');
for (const url of iosUrls) await scrapeOne(url, path.join(DEST, 'api', 'ios'), 'ios');

await browser.close();

// ---- Step 3: write manifest ----
console.log('==> [3/3] writing manifest');
manifest.totals = {
  guides: guideUrls.length,
  android: androidUrls.length,
  ios: iosUrls.length,
  scraped,
  failed,
};
await fs.writeFile(path.join(DEST, '_manifest.json'), JSON.stringify(manifest, null, 2));

console.log(`\n==> done. ${scraped} scraped / ${failed} failed (target ${total})`);
console.log(`    output: ${DEST}`);
