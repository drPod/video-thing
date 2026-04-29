#!/usr/bin/env bash
# Mirror Meta Wearables Device Access Toolkit (DAT SDK) docs to docs/meta-wearables/.
# Usage: ./scripts/sync-meta-wearables-docs.sh
#
# Two artifacts are pulled:
#   1. llms.txt + llms-full.txt — Meta's own index + condensed all-in-one blob
#      (handy as a quick-orientation reference).
#   2. Full mirror of every doc page — 21 guides + 46 Android API class pages
#      + 48 iOS Swift API class pages = 115 markdown files. Driven by the
#      Node Playwright scraper in scripts/scrape-meta-wearables/, which:
#        - discovers URLs from the /docs/develop and per-platform API ref hubs
#        - renders each (Meta is React-only — no static .md endpoint exists)
#        - extracts main content, strips chrome, converts to markdown
#        - normalizes Meta's div-based bullet rendering into proper md lists
#
# Requires: bash, curl, node, and the npm deps under
#   scripts/scrape-meta-wearables/node_modules (run `npm i` once if missing).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$ROOT/docs/meta-wearables"
SCRAPER="$ROOT/scripts/scrape-meta-wearables"
BASE="https://wearables.developer.meta.com"

mkdir -p "$DEST"
cd "$DEST"

echo "==> [1/2] index + condensed blob"
curl -fsSL "$BASE/llms.txt" -o llms.txt
curl -fsSL "$BASE/llms.txt?full=true" -o llms-full.txt
echo "    llms.txt: $(wc -c < llms.txt) bytes"
echo "    llms-full.txt: $(wc -c < llms-full.txt) bytes"

echo "==> [2/2] full page mirror via Playwright (115 pages)"
if [ ! -d "$SCRAPER/node_modules" ]; then
  echo "    installing scraper deps..."
  (cd "$SCRAPER" && npm install --no-fund --no-audit --silent)
fi
node "$SCRAPER/scrape.mjs"

echo "==> done. snapshot date: $(date +%Y-%m-%d)"
du -sh "$DEST"
