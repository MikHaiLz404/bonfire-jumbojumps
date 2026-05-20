# Ralph Loop Review — 2026-05-12

## Documents Reviewed
- `docs/MVP_Scope_Recommendation.md` — 6-month phased MVP roadmap
- `PRD.md` — Full product requirements
- `CLAUDE.md` — Project overview

---

## What We Have (Pre-Production Phase)

| Item | Status |
|---|---|
| **PRD.md** | Complete — full product requirements |
| **docs/MVP_Scope_Recommendation.md** | Complete — 6-month phased roadmap |
| **brief/** | 18-page visual brief assets |
| **CLAUDE.md** | Project overview documented |
| **Engine Decision** | Pending (Unity vs Godot not confirmed) |
| **Source Code** | None — "no source code has been written yet" per CLAUDE.md |

---

## What We Need to Do Next

Based on MVP_Scope_Recommendation.md M1 milestones:

### High Priority (M1)
- [ ] **Confirm engine** — Unity (recommended) or Godot
- [ ] **Game design doc** — locked core loop + economy doc
- [ ] **Tech spec** — architecture document for chosen engine
- [ ] **Story bible** — 5-7 chapter lean cliffhanger format
- [ ] **Art direction** — locked visual style

### Implementation (M2-M3)
- [ ] **Core merge loop** — 6×8 board, 2-to-1 merge rule, energy system
- [ ] **Board UI** — grid, cells, drag-drop interaction
- [ ] **Generators** — item production, regen timing, tap-unlock
- [ ] **NPC Orders** — order queue, reward system, story integration
- [ ] **3 Areas** — first Thai-inspired area with art assets

### Monetization & Infrastructure
- [ ] **IAP integration** — energy refills, starter pack, gem SKUs
- [ ] **Cloud save** — cross-device sync (mandatory per PRD)
- [ ] **Analytics** — GameAnalytics or Firebase with custom event catalog
- [ ] **Remote config** — server-side econ, prices, A/B ready

### MVP Phase Roadmap

| Month | Target |
|---|---|
| M1 | Design docs, tech spec, story bible, art direction locked |
| M2 | Core merge loop playable, energy, board UI |
| M3 | Orders + NPC, 3 areas, alpha test |
| M4 | IAP integration, daily rewards, weekend events, soft launch |
| M5 | Battle pass, character collection, polish |
| M6 | Global launch (Android first, iOS simultaneous or 2 weeks later) |

---

## Key Decisions Pending

1. **Engine selection** — Unity recommended (stronger mobile F2P tooling) vs Godot (requires justification)
2. **Board size** — Start 6×8 (MVP), expand to 7×9 via remote config post-launch
3. **Chains** — Start 20 chains/10 tiers (200 icons), expand to 30 chains/15 tiers
4. **Areas** — Start 3, expand to 6 by Beta MVP
5. **Chapters** — Start 5-7, live cadence post-launch
6. **Social features** — Friend energy gifting at Beta, Guild system post-launch

---

## Current Project State

**Planning/PRD complete. Zero source code written.**

Ready to begin implementation once engine and tech decisions are finalized.