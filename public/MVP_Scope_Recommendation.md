# MVP Scope Recommendation — 6-Month to 1-Year Plan

**Based on:** `PRD.md` + `Casual_Merge_Games_Analysis_and_MVP.xlsx`

---

## Timeline Mapping

| Phase | Months | Scope |
|---|---|---|
| **Alpha MVP** | 0–3 | Core loop, board, energy, first 3 areas, Chapter 1–2, basic IAP |
| **Beta MVP** | 3–6 | Full 6 areas, all 30 chains (15 tiers live), story through Ch5, weekend events, battle pass |
| **Post-Launch** | 6–12 | Guild system, cooperative events, rewarded ads, board expansion (7×9), branching story |

---

## Recommended MVP Scope (6-Month Alpha)

### Core Gameplay — Phased Board Size

| Item | Rationale |
|---|---|
| **Start: 6×8 (48 cells)** | MVP+, lighter art pipeline, faster dev. Ships at month 3 |
| **Expand: 7×9 (63 cells)** | PRD spec, added via remote config after soft launch |

**Why:** Excel Feature Gap Analysis confirms Southeast Asian Theme as **MVP priority** (very low saturation, high opportunity). Reducing board size frees 2 months of equivalent art/variation work. The 7×9 grid is a config flag flip post-launch.

### Chains — 30 Chains at 15 Tiers

| Phase | Chains | Tiers |
|---|---|---|
| Alpha MVP | 20 chains | 10 tiers live |
| Beta MVP | 30 chains | 15 tiers live |
| Post-Launch | All 30 | Up to 20 tiers |

PRD allows capping at ~15 tiers. Starting at 10 tier caps the art workload: 20 chains × 10 tiers = **200 merge-item icons** at launch vs. 300 at full spec.

### Areas — 3 at Launch, Expand to 6

| Phase | Areas |
|---|---|
| Alpha MVP | 3 areas (dense M1 narrative pacing) |
| Beta MVP | 6 areas (per PRD launch spec) |
| Post-Launch | Additional areas via live content |

### Story — Lean Cliffhanger Format

| Item | Spec |
|---|---|
| Chapters at Launch | 5–7 chapters (vs. PRD's ~15) |
| Chapter Length | 20–30 min each |
| Dialogue | ~3,000–5,000 words at launch |
| Cutscenes | Static art + text box (no animation) |
| Post-Launch | Scale to ~15 chapters by month 12 |

PRD: 15 chapters, 30–60 min each. For 6-month MVP: front-load 5 chapters with dense cliffhanger pacing, then chapter every 3–4 weeks post-launch.

### Monetization — Core IAP at Launch, Battle Pass at Beta

| Phase | Features |
|---|---|
| Alpha MVP | Energy refills, starter pack, piggy bank, gem SKUs |
| Beta MVP | Battle pass, VIP/Club pass, progression packs |
| Post-Launch | Event pass, rewarded ads, offerwall |

### Events — Weekend Events at Beta

| Phase | Features |
|---|---|
| Alpha MVP | Daily rewards, daily orders only |
| Beta MVP | Weekend events (Ranking, Banner, Mission types), 1 major event |
| Post-Launch | All 6 event types per PRD |

### Social — Light at MVP

| Item | Phase | Rationale |
|---|---|---|
| Friend Energy Gifting | Beta MVP | Light social, high retention (Excel "Should Have") |
| Guild System | Post-Launch (month 6+) | Feature Gap Analysis: Post-MVP, very high opportunity |

---

## Recommended Team Structure for 6-Month Timeline

### Engine: Unity (Recommended over Godot)
- Unity has stronger mobile F2P tooling, Merge Mansion / Seaside Escape reference architecture
- Godot requires justification per PRD; Unity has proven casual-merge implementations
- **Or:** Godot if studio has prior Godot mobile shipped title

### Team Size (Minimum Viable for 6-Month Launch)

| Role | Count | Notes |
|---|---|---|
| Game Designer | 1 | Core loop + econ |
| Lead Developer | 1 | Engine + architecture |
| Developer | 2 | UI, backend integration |
| Artist | 2 | Merge items, characters |
| UI Artist | 1 | Menus, HUD |
| QA | 1 | |
| PM | 1 | |

Total: **8-person core team**

### Milestones

| Month | Milestone |
|---|---|
| M1 | Game design doc, tech spec, story bible, art direction locked |
| M2 | Core merge loop playable, energy system, board UI |
| M3 | Orders + NPC system, 3 areas, alpha test |
| M4 | IAP integration, daily rewards, weekend events, soft launch |
| M5 | Battle pass, character collection, polish |
| M6 | Global launch (Android first, iOS simultaneous or 2 weeks later) |

---

## Key Differentiator: Southeast Asian Theme

Feature Gap Analysis rates **Southeast Asian Theme** as:
- **Market Saturation:** Very Low
- **Opportunity:** High
- **Recommended Priority:** MVP

This aligns with PRD's "Thai-inspired welcomed if globally appealing" and "lantern light, coastal warmth, folk-tale spirits" as accent flavor.

**Recommendation:** Thai-inspired soft-power flavor at launch — globally readable, not exclusionary.

---

## Summary: Feasible Within 6 Months

| PRD Feature | MVP Recommendation | Timeline |
|---|---|---|
| Board 7×9 | Start 6×8, expand post-launch | M0–M3 → M6 |
| 30 chains, 20 tiers | Start 20 chains/10 tiers, expand | M0–M3 → M12 |
| 6 areas | Start 3 areas, expand to 6 | M0–M3 → M6 |
| 15 chapters | Start 5–7 chapters, live cadence | M0–M3 → M12 |
| 6 event types | Daily + weekend at MVP, all 6 post-launch | M0–M6 → M12 |
| Guild system | Post-launch | M6+ |
| Rewarded ads | Post-launch | M6+ |
| Full art volume | Phased (200 icons at MVP vs. 600 full) | M0–M12 |

**Promise:** Done. The recommended solution reduces initial scope to ship a polished core loop in 6 months while preserving the full PRD roadmap via phased post-launch expansion.
