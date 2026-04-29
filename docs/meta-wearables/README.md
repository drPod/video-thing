# Meta Wearables Device Access Toolkit (DAT SDK) — local docs

Mirrored from `https://wearables.developer.meta.com/docs/`. **Snapshot: 2026-04-28.** Refresh: `./scripts/sync-meta-wearables-docs.sh`.

## What's here

```
docs/meta-wearables/
  llms.txt          ~3KB    vendor's own index file
  llms-full.txt    ~72KB    vendor's condensed-all-in-one blob
  guides/             21    every page from /docs/develop nav
  api/android/        46    every Android class/enum page
  api/ios/            48    every iOS Swift class/enum page
  _manifest.json            scrape metadata (URLs, titles, sizes, snapshot date)
```

**115 mirrored pages, ~772KB total.** Full Android + iOS API reference plus all 21 developer guides. Renders as clean markdown — bullets, code blocks, internal links preserved.

## When to use what

| Task | Read first |
|------|-----------|
| Orient yourself, "what is DAT" | `llms-full.txt` (condensed, single blob) |
| iOS-specific integration | `guides/build-integration-ios.md` then `api/ios/<class>.md` |
| Android-specific integration | `guides/build-integration-android.md` then `api/android/<class>.md` |
| Permissions, lifecycle, mock device | `guides/permissions-requests.md`, `guides/lifecycle-events.md`, `guides/mock-device-kit.md` |
| Looking up a specific class/enum | `api/<platform>/<lowercase-class-name>.md` |
| What changed in 0.6 | `guides/version-dependencies.md`, `guides/knownissues.md` |
| AI-assisted dev (Claude/Cursor/Copilot) | `guides/ai-assisted*.md` |

The vendor's `llms-full.txt` covers everything in 72KB but with truncated class summaries; the full per-class pages live under `api/<platform>/`. Use the blob to orient, the per-class files for accuracy.

## How the mirror is built

Meta's docs site is React-rendered. There is no `.md` endpoint, no sitemap, no llms-full.txt with full per-class content. The pull is therefore Playwright-based:

```
scripts/sync-meta-wearables-docs.sh
  → curl llms.txt + llms-full.txt
  → node scripts/scrape-meta-wearables/scrape.mjs
       1. enumerate URLs from /docs/develop, /docs/reference/android/dat/0.6,
          /docs/reference/ios_swift/dat/0.6
       2. for each URL: render in headless Chromium, extract main content
          (strip nav/header/footer/buttons/svg), convert HTML→Markdown via
          Turndown, normalize Meta's div-based bullets
       3. write to docs/meta-wearables/{guides,api/android,api/ios}/
       4. emit _manifest.json
```

`node_modules/` under `scripts/scrape-meta-wearables/` is gitignored — re-installed automatically on first refresh.

## Note on isolation from mem[v]

This SDK is **deliberately separate** from the mem[v] tooling under `docs/memv/`. No bridge skills, no shared abstractions. Treat them as independent surfaces.
