# Delphi corpus — what's been indexed

Append-only log. Anyone (human or agent) checking "is X already in delphi?" reads this first. Add a row whenever you `index_repository`, `index_paper`, or `index_dataset` via the `mcp__synsci-delphi__*` tools.

**Boundary recap (full rules in `AGENTS.md` Delphi section):**
- Only external content. No local mirrors. No our-own source. No library docs context7 covers.
- Symbol search Python/JS/TS only.
- HF datasets indexed = cards only (no rows).

---

## Code repositories

| Indexed | Repo URL | Branch / commit | Why |
|---------|----------|-----------------|-----|
| _(none yet)_ | | | |

## Papers (arxiv ID or local PDF path)

| Indexed | Source | Title | Why |
|---------|--------|-------|-----|
| _(none yet)_ | | | |

## HuggingFace datasets

| Indexed | Dataset ID | Why |
|---------|------------|-----|
| _(none yet)_ | | |

---

## Suggested first batches (not indexed yet — proposed)

### Multimodal video paper corpus (use case 1, ~20 papers)
- VideoBERT, ViViT, CLIP, BLIP-2, ImageBind, X-CLIP, LanguageBind, Video-LLaMA, Video-LLaVA, MemGPT (Letta), Generative Agents, SAM, Whisper, Llama 3 vision, RT-DETR, Grounding DINO, AudioCLIP, Ego4D paper, EPIC-KITCHENS paper

### Reference code repos (use case 2, ~5 repos, Python/JS/TS only)
- `openai/CLIP`
- `facebookresearch/segment-anything`
- `huggingface/transformers`
- `letta-ai/letta` or `mem0ai/mem0`
- `memvai/memvai-python` (if public)

### HF dataset cards (use case 3, ~30 cards, week 2)
- Kinetics-700, Ego4D, EPIC-KITCHENS, HowTo100M, MSR-VTT, WebVid, ActivityNet, AVA, Charades, Something-Something v2, etc.

## Refresh / cleanup

Delphi has no auto-update. Re-run `mcp__synsci-delphi__index_repository` with `force_reindex=True` after a repo bumps. Same for papers (rare). Periodic audit: `mcp__synsci-delphi__list_repositories` / `list_papers` / `list_datasets` and prune anything stale or unused via the corresponding `delete_*` tool.
