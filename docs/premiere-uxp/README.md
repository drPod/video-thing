# Adobe Premiere Pro UXP — local docs

Mirrored from the Gatsby source repo `AdobeDocs/uxp-premiere-pro`. **Snapshot:** see `_snapshot.json` for upstream commit + sync date. **Refresh:** `./scripts/sync-premiere-uxp-docs.sh`.

431 markdown pages, ~600KB. Tutorial screenshots (.png/.jpg) **not mirrored** — agents can't consume them. Image URLs in markdown still resolve to Adobe CDN if a human renders the page locally.

## Two API surfaces — DON'T confuse them

| Surface | Lives in | Scope |
|---------|----------|-------|
| **`pages/uxp-api/`** | reference-{js,css,html,spectrum} | **Generic UXP platform** — works in Photoshop / Premiere / InDesign / XD identically. Browser-like APIs (Crypto, fetch, WebSocket, Storage) plus UXP additions. |
| **`pages/ppro_reference/`** | classes / events / constants | **Premiere-Pro-specific** — Project, Sequence, TrackItem, AudioTrack, Encoder, Marker, etc. THIS is the surface that touches video editing. |

When working on video-thing's Premiere plugin, **most code touches `ppro_reference/`**. `uxp-api/` only matters for plugin chrome (panels, dialogs, IO, networking).

## Layout

```
pages/
  index.md                    landing page
  changelog/                  what's new each Premiere release
  introduction/               start here
    essentials/               dev-tools, nomenclature, tech-stack
  plugins/                    how plugins work
    concepts/                 entrypoints, manifest, panels-and-commands
    tutorials/                7 step-by-step tutorials (HOT for first plugin)
    distribution/             marketplace, install, listing, package, review-guidelines
    hybrid-plugins/           UXP + CEP coexistence
    advanced/
  ppro_reference/             Premiere-Pro-specific API (320KB)
    classes/                  59 class pages (Application, Project, Sequence, ...)
    events/                   4 event types
    constants/                enum-like
  uxp-api/                    generic UXP platform API (1.2MB — bulk of the corpus)
    reference-js/             147 pages — JS APIs (browser-like + UXP additions)
    reference-css/            114 pages — CSS supported in UXP
    reference-html/           19 pages — HTML elements supported in UXP
    reference-spectrum/       27 pages — Adobe Spectrum design system components
  resources/
    fundamentals/             core concepts deep-dives
    starters-samples/         sample plugin pointers
    recipes/                  11 cookbook recipes
    migration_guides/         CEP→UXP, ExtendScript→UXP
    faq/

_nav/                         original Gatsby sidebar config (reference-*.js)
_snapshot.json                upstream commit + sync date
_upstream-README.md           original repo README
_upstream-LICENSE             Adobe license (Apache 2.0 per file header)
```

## Hot paths for first plugin (read in this order)

1. `pages/introduction/index.md` + `pages/introduction/essentials/*` — orient
2. `pages/plugins/concepts/manifest/index.md` — plugin manifest shape
3. `pages/plugins/concepts/entrypoints/index.md` — what hooks Premiere calls
4. `pages/plugins/concepts/panels-and-commands/index.md` — UI surface
5. `pages/plugins/tutorials/add-panels/index.md` — first runnable tutorial
6. `pages/plugins/tutorials/add-commands/index.md` — second tutorial
7. `pages/ppro_reference/classes/application.md` + `project.md` + `sequence.md` — main API anchors
8. `pages/plugins/distribution/install/index.md` — how to load your plugin into Premiere

## Hot paths for video-thing's plugin specifically

If you're going to push clips/markers/sequences from Premiere → mem[v], the relevant Premiere API surface:

- `pages/ppro_reference/classes/project.md` — read project state
- `pages/ppro_reference/classes/sequence.md` — current sequence
- `pages/ppro_reference/classes/trackitem.md` — clips on the timeline
- `pages/ppro_reference/classes/marker*.md` — markers (potential memv-memory anchors)
- `pages/ppro_reference/classes/encodermanager.md` — export pipeline
- `pages/ppro_reference/events/` — event types to subscribe to (timeline changes, project open/save)

## How to query

431 markdown files / 600KB total. Don't `Read` everything — too big for one prompt. Use one of:

1. **`Read` the specific file** if you know the class / topic from the layout above.
2. **`Glob` then `Read`** for known patterns: `pages/ppro_reference/classes/*.md`, `pages/plugins/tutorials/*/index.md`.
3. **`rg` for symbol hunts**: `rg -nC3 'class Sequence' pages/ppro_reference/`.
4. **Whole-section `Read`** for broad work: `pages/plugins/tutorials/` is small (~7 tutorials, all worth reading once).

## Refreshing

```bash
./scripts/sync-premiere-uxp-docs.sh
```

Idempotent. Shallow-clones upstream `main`, copies markdown only, updates `_snapshot.json` with new commit SHA + date.

Adobe pushes to `AdobeDocs/uxp-premiere-pro` regularly; refresh on a schedule that matches your active development cadence.

## Why git-clone, not scrape

Adobe publishes the Gatsby SOURCE on GitHub. That source IS markdown. Scraping the rendered Gatsby site would round-trip through React, lose structure, and risk breaking on every Adobe site redesign. Cloning the repo gives lossless source + clean diffs on every refresh.

Pattern hierarchy used across this project:

| Tier | Vendor publishes | Cost | Used for |
|------|------------------|------|----------|
| 1 | Markdown source on GitHub | one `git clone` | **Premiere UXP** (this) |
| 2 | `llms.txt` + per-page `.md` | curl loop | mem[v] |
| 3 | React-rendered HTML, no source | Playwright + Turndown | Meta DAT |

Always probe Tier 1 first.
