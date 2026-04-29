# video-thing

Built **on top of mem[v]** (https://memv.ai). Meta DAT (Ray-Ban / AI glasses SDK) and Adobe Premiere Pro UXP (editing-side plugin surface) are **separate surfaces — do not bridge**.

## Where to look first

- **mem[v]:** `docs/memv/README.md` (catalog). Skills under `.claude/skills/memv-*/` auto-fire on memv tasks. `docs/memv/llms-full.txt` for one-shot whole-corpus reads.
- **Meta DAT:** `docs/meta-wearables/README.md` (routing across 21 guides + 94 API class pages).
- **Premiere UXP:** `docs/premiere-uxp/README.md` (routing across 431 markdown pages — generic UXP platform vs Premiere-specific API split).
- **Delphi corpus:** `docs/delphi-corpus/_indexed.md` (what's been indexed in the synsci-delphi MCP).

## Standing rules (always true)

1. **Spaces are isolation boundaries.** Every memory write needs `space_id`. No global writes.
2. **`workspaceId` (MCP) == `space_id` (SDK).** Same value, different name.
3. **Use SDK types directly** (`from memvai import ...`). Don't invent wrappers.
4. **No hand-rolled HTTP** for mem[v]. SDK only. Escape hatches in `docs/memv/sdk/advanced.md`.
5. **Multimodal-first.** Push raw text/files/video. Don't pre-process.
6. **Read `docs/memv/sdk/error-handling.md` BEFORE wrapping any mem[v] call** in try/except.
7. **`mcp__memv__*` tools are dev-time only — never from app code.** See skill `memv-mcp-vs-sdk`.
8. **Never guess SDK shapes.** If `docs/memv/` doesn't show it, flag — don't invent.
9. **mem[v], Meta DAT, and Premiere UXP are separate surfaces.** Do not bridge in code.

## First time touching SDK code?

Run skill `memv-bootstrap`. Handles install, `MEMV_API_KEY`, smoke-tests.

## memv MCP (4 tools, agent-side only)

`whoami`, `list_workspaces`, `add_memory(workspaceId, memories[])`, `search_memory(query, workspaceId?, maxResults?)`. For anything else (file/video upload, space CRUD, graph, batch, error handling) → SDK in app code. Decision tree in skill `memv-mcp-vs-sdk`.

## Delphi MCP (`mcp__synsci-delphi__*`) — external corpus only

| Need | Tool |
|------|------|
| External arxiv papers | `search_papers` |
| External code repos (Python/JS/TS only) | `search_code` / `search_symbols` |
| HF dataset discovery (cards only) | `search_datasets` |
| Library docs (React, Next.js, etc) | `mcp__context7__query-docs` (NOT delphi) |
| Our local mirrors / our own source | `Read` / `rg` (NOT delphi) |

Limits: never index our local mirrors or own source. Symbol search Python/JS/TS only — Kotlin/Swift/Go/Rust/C++ files index but `search_symbols` returns nothing for them. `generate_report` is markdown string-concat (title + abstract + chunks + first 20 citations + first 20 equations), NOT LLM synthesis. `research` (any mode: quick/deep/oracle) requires a configured provider — default Gemini, needs `GEMINI_API_KEY` in delphi server env. Equation/citation extraction is regex (false positives on inline `$x$`). HF datasets = cards only, no rows. **Log every index in `docs/delphi-corpus/_indexed.md`.**

## Refresh local doc mirrors

```bash
./scripts/sync-memv-docs.sh             # mem[v] docs (Tier 2: llms.txt + per-page curl)
./scripts/sync-meta-wearables-docs.sh   # Meta DAT docs (Tier 3: Playwright scrape)
./scripts/sync-premiere-uxp-docs.sh     # Premiere UXP docs (Tier 1: git clone source)
```

Tier hierarchy used when integrating a new vendor surface: (1) git clone source markdown if vendor publishes it, (2) `llms.txt` + per-page curl if Mintlify-style, (3) Playwright + Turndown only if React-rendered with no source available.
