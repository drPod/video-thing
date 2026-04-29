#!/usr/bin/env bash
# Mirror Adobe Premiere Pro UXP docs to docs/premiere-uxp/.
# Usage: ./scripts/sync-premiere-uxp-docs.sh
#
# Source: https://github.com/AdobeDocs/uxp-premiere-pro
# This is the Gatsby source for https://developer.adobe.com/premiere-pro/uxp/
#
# Best-case pattern: vendor publishes the markdown source on GitHub,
# so we git-clone instead of scraping the rendered site. ~431 .md/.mdx
# files including auto-built API reference pages — all real source,
# nothing generated at build time.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$ROOT/docs/premiere-uxp"
TMP="$(mktemp -d -t uxp-ppro-XXXXXX)"
REPO="https://github.com/AdobeDocs/uxp-premiere-pro.git"

trap "rm -rf '$TMP'" EXIT

echo "==> [1/3] cloning $REPO (shallow)"
git clone --depth 1 --quiet "$REPO" "$TMP"
upstream_sha=$(git -C "$TMP" rev-parse HEAD)
upstream_date=$(git -C "$TMP" log -1 --format=%ci HEAD)

echo "==> [2/3] copying src/pages → $DEST/pages (markdown only)"
rm -rf "$DEST/pages"
mkdir -p "$DEST"
# only copy markdown — images are tutorial screenshots agents can't consume
# (~41.5MB of PNGs vs ~0.6MB of markdown). Image URLs in markdown still
# resolve to the live Adobe CDN if a human renders the page.
(
  cd "$TMP/src/pages"
  find . -type f \( -name "*.md" -o -name "*.mdx" \) -print0 | \
    while IFS= read -r -d '' f; do
      mkdir -p "$DEST/pages/$(dirname "$f")"
      cp "$f" "$DEST/pages/$f"
    done
)

# also keep the nav config — it tells you the sidebar structure for the API ref
mkdir -p "$DEST/_nav"
cp "$TMP"/reference-*.js "$DEST/_nav/" 2>/dev/null || true

# pull upstream README + LICENSE for provenance
cp "$TMP/README.md" "$DEST/_upstream-README.md"
cp "$TMP/LICENSE" "$DEST/_upstream-LICENSE" 2>/dev/null || true

echo "==> [3/3] writing snapshot metadata"
cat > "$DEST/_snapshot.json" <<EOF
{
  "source_repo": "AdobeDocs/uxp-premiere-pro",
  "upstream_commit": "$upstream_sha",
  "upstream_committed": "$upstream_date",
  "synced_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "pages": $(find "$DEST/pages" -type f \( -name '*.md' -o -name '*.mdx' \) | wc -l | tr -d ' ')
}
EOF

echo
echo "==> done"
cat "$DEST/_snapshot.json"
echo
du -sh "$DEST"
