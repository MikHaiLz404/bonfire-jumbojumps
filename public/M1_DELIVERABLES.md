# M1 Deliverables — 2026-05-21

## Status: ✅ Planning Complete, Ready for Implementation

---

## Documents Delivered

| # | Document | Path | Status |
|---|---|---|---|
| 1 | Tech Spec | `docs/TECH_SPEC.md` | ✅ Complete |
| 2 | Game Design Doc | `docs/GAME_DESIGN_DOC.md` | ✅ Complete |
| 3 | Story Bible | `docs/STORY_BIBLE.md` | ✅ Complete |
| 4 | 2026-May-21 Scope | `docs/2026-May-21-scope.md` | ✅ Complete (new) |
| 5 | Feature Overviews | `docs/*.md` | ✅ Complete |

---

## Architecture Summary

**Engine:** Unity 2021 LTS+
**Architecture:** Clean Architecture + MVVM + UniRx + VContainer
**Firebase Stack:** Analytics, Remote Config, Auth, Firestore, Cloud Messaging

**Key Specs:**
- Board: 7×9 (63 cells)
- Chains: 20 chains, 10 tiers live (MVP)
- Energy: 100 cap, regen 1/2min
- Storage: 20 off-board slots
- Areas: 3 (MVP)
- Chapters: 15 (full launch scope)
- **Total Effort:** 687 Man-Days

---

## Story Summary — "Lantern & Legend"

**Protagonist:** มะลิ (Mali) — young designer, returns home to help aunt's fabric shop

**15 Chapters (Full Launch Scope):**
1. กลับมาบ้าน (Coming Home) → Area 1 + 3 chains
2. ความลับของผ้าเกา (Secret of Old Fabric) → Area 1 expanded
3. สิ่งที่คลองเล่า (What the Canal Says) → Area 2 + 5 chains
4. ผีช่วยงาน (Spirits Help Out) → Area 3 + 7 chains
5. งานรื่นเริง (The Festival) → All areas + 10 chains
6-15. Full story arc via progressive unlock

**6 Supporting Characters:**
- คุณป้ามะลิ (Aunt) — shop owner, has secrets
- พี่แดง (Daeng) — tailor, childhood friend
- น้องปิ่น (Pin) — village child, spirit believer
- ลุงสมหมาย (Uncle) — bird seller, superstitious
- คุณนายวิไล (Nai) — market vendor, gossip center
- ผีเอื้อ (Phi Eua) — friendly house spirits

**3 Areas:**
1. ร้านผ้าโบราณ (The Old Fabric Shop)
2. สวนริมคลอง (The Canal Garden)
3. บ้านของผีเล็ก (The Friendly Spirits' Home)

---

## Implementation Checklist (M1)

### Week 1-2: Project Setup
- [ ] Create Unity project with Clean Architecture folder structure
- [ ] Install packages (VContainer, UniRx, Firebase)
- [ ] Configure Firebase (google-services.json, GoogleService-Info.plist)
- [ ] Create Remote Config keys in Firebase console
- [ ] Set up Addressables pipeline

### Week 3-4: Core Domain
- [ ] MergeItem entity (chain, tier, position)
- [ ] Chain entity (20 chains data)
- [ ] BoardState model (7×9 grid)
- [ ] PlayerData model
- [ ] MergeSystem (2-to-1 rule)
- [ ] EnergySystem (cap 100, regen 1/2min)
- [ ] GeneratorSystem

### Week 5-7: Board Prototype
- [ ] 7×9 grid UI with cell states
- [ ] Drag-drop interaction with snap
- [ ] Merge animation (VFX + SFX)
- [ ] Basic persistence (PlayerPrefs)
- [ ] Game feel polish (haptics, juice)

### Week 8-10: Integration
- [ ] NPC Orders system integration
- [ ] Story system integration
- [ ] Alpha test build

---

## Milestone Timeline (5-Member Team)

| Month | Target |
|---|---|
| **M1 (0–2.5)** | Game design doc, tech spec, story bible locked. Core merge loop playable on 7×9 board. |
| **M2 (2.5–4.5)** | Orders + NPC system, town building, story (Ch1-5), 3 areas, alpha test. |
| **M3 (4.5–6)** | IAP integration, guild/social, battle pass, weekend events, soft launch. |
| **M4 (6–7.5)** | Polish, optimization, QA, global launch (Android first, iOS simultaneous or 2 weeks later). |

---

## Team Structure (5 Engineers + 5 Support Roles)

| Role | Count | Notes |
|---|---|---|
| Lead Developer | 1 | Engine + architecture, code review |
| Senior Developer | 1 | UI + backend integration |
| Mid Developer | 1 | UI + backend integration |
| Junior Developer | 1 | Features + bug fixes |
| Junior Developer | 1 | Features + bug fixes |
| Game Designer | 1 | Core loop + economy |
| UI Artist | 1 | Menus, HUD, UX |
| Artist | 1 | Merge items, icons |
| Character Artist | 1 | Characters, VFX, effects |
| Tech Artist | 1 | Shaders, pipeline, tool support |
| QA | 1 | |
| **Total** | **10** | 5 engineers + 5 support roles |

---

## Next Steps

Ready for **Implementation Phase**:
1. Unity project setup with Clean Architecture skeleton
2. Core domain entities (Board, Merge, Energy)
3. 7×9 board prototype with drag-drop + VFX
4. Firebase integration (Analytics, Remote Config)

Start when team is ready.