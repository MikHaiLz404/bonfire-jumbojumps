# MVP Scope Recommendation — 7–7.5 Month Plan

**Based on:** `docs/2026-May-21-scope.md` + Game Design Analysis
**Updated:** 2026-05-21

---

## Timeline Mapping

| Phase | Months | Scope |
|---|---|---|
| **M1: Playable Prototype** | 0–2.5 | Core board (7×9), merge mechanics, energy system, generators |
| **M2: Vertical Slice** | 2.5–4.5 | Town building, story (Ch1-5), NPC orders, decoration |
| **M3: Alpha Build** | 4.5–6 | Full 3 areas, IAP, guild/social, battle pass, events |
| **M4: Beta & Commercial Ready** | 6–7.5 | Polish, optimization, QA, soft launch ready |

---

## Recommended MVP Scope

### Core Gameplay — Board Size (7×9 at Launch)

| Item | Rationale |
|---|---|
| **Board: 7×9 (63 cells)** | Full PRD spec from day 1 |
| **Expandable via Remote Config** | Future areas/chains can expand board dynamically |

**Why:** Full scope agreed upon. 7×9 board is the target for the 7–7.5 month timeline with 5-member team.

### Chains — 20 Chains at 10 Tiers (MVP)

| Phase | Chains | Tiers |
|---|---|---|
| MVP (M1-M3) | 20 chains | 10 tiers live |
| Post-Launch | 30 chains | 15 tiers live |

Starting at 10 tier caps the art workload: 20 chains × 10 tiers = **200 merge-item icons** at launch.

### Areas — 3 at Launch, Expand to 6

| Phase | Areas |
|---|---|
| MVP | 3 areas |
| Post-Launch | Additional areas via live content |

### Story — 15 Chapters (Full Scope)

| Item | Spec |
|---|---|
| Chapters at Launch | 15 chapters (full scope) |
| Chapter Length | 30–60 min each |
| Dialogue | ~15,000–20,000 words total |
| Cutscenes | Static art + text box + VFX sequencing |
| Post-Launch | Additional chapters via live content |

### Monetization — Core at Launch

| Phase | Features |
|---|---|
| MVP (M1-M3) | Energy refills, starter pack, piggy bank, gem SKUs, battle pass |
| Post-Launch | Event pass, rewarded ads, VIP/Club pass, offerwall |

### Events — Weekend Events at M3

| Phase | Features |
|---|---|
| MVP (M1-M2) | Daily rewards, daily orders only |
| M3+ | Weekend events (Ranking, Banner, Mission types) |
| Post-Launch | All 6 event types per PRD |

### Social — Light at MVP

| Item | Phase | Rationale |
|---|---|---|
| Friend Energy Gifting | M3 | Light social, high retention |
| Guild System | M4 / Post-Launch | Full guild with chat, leaderboards |

---

## Recommended Team Structure for 7–7.5 Month Timeline

### Engine: Unity 2021 LTS+

- Unity has stronger mobile F2P tooling, Merge Mansion / Seaside Escape reference architecture
- Clean Architecture + MVVM + UniRx + VContainer

### Team Size (5 Members — Recommended)

| Role | Count | Notes |
|---|---|---|
| Game Designer | 1 | Core loop + economy |
| Lead Developer | 1 | Engine + architecture |
| Developer | 2 | UI, backend integration |
| Artist | 1 | Merge items, characters, UI |
| QA | 1 | |
| **Total** | **5** | |

### Milestones

| Month | Milestone |
|---|---|
| **M1 (0–2.5)** | Game design doc, tech spec, story bible locked. Core merge loop playable. |
| **M2 (2.5–4.5)** | Orders + NPC system, town building, story, 3 areas, alpha test. |
| **M3 (4.5–6)** | IAP integration, guild/social, battle pass, weekend events, soft launch. |
| **M4 (6–7.5)** | Polish, optimization, QA, global launch (Android first, iOS simultaneous or 2 weeks later). |

---

## Key Differentiator: Southeast Asian Theme

**Thailand-inspired coastal village with light magical elements** — "Lantern & Legend" narrative.

Feature Analysis rates **Southeast Asian Theme** as:
- **Market Saturation:** Very Low
- **Opportunity:** High
- **Recommended Priority:** MVP (full scope)

Thai-inspired soft-power flavor — globally readable, not exclusionary. Lantern light, coastal warmth, folk-tale spirits.

---

## Summary

| Feature | Spec | Timeline |
|---|---|---|
| Board | 7×9 (63 cells) | MVP |
| Chains | 20 chains / 10 tiers live | MVP → 30/15 post-launch |
| Areas | 3 areas | MVP → 6 post-launch |
| Chapters | 15 chapters | MVP (full scope) |
| Events | Daily + Weekend at MVP | Full 6 types post-launch |
| Guild | M4 / Post-Launch | Full guild + chat |
| Team | 5 members | Duration: 7–7.5 months |

**Total Effort:** 687 Man-Days

**Promise:** Full scope delivered within 7–7.5 months with the recommended 5-member team.