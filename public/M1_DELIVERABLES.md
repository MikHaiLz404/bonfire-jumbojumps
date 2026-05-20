# M1 Deliverables — 2026-05-20

## Status: ✅ Planning Complete, Ready for Implementation

---

## Documents Delivered

| # | Document | Path | Status |
|---|---|---|---|
| 1 | Tech Spec | `docs/TECH_SPEC.md` | ✅ Complete |
| 2 | Game Design Doc | `docs/GAME_DESIGN_DOC.md` | ✅ Complete |
| 3 | Story Bible | `docs/STORY_BIBLE.md` | ✅ Complete |

---

## Architecture Summary

**Engine:** Unity 2021 LTS+
**Architecture:** Clean Architecture + MVVM + UniRx + VContainer
**Firebase Stack:** Analytics, Remote Config, Auth, Firestore, Cloud Messaging

**Key Specs:**
- Board: 6×8 (48 cells) MVP → 7×9 post-launch
- Chains: 20 chains, 10 tiers live (MVP)
- Energy: 100 cap, regen 1/2min
- Storage: 20 off-board slots
- Areas: 3 (MVP) → 6 (Beta)

---

## Story Summary — "Lantern & Legend"

**Protagonist:** มะลิ (Mali) — young designer, returns home to help aunt's fabric shop

**5 Chapters MVP:**
1. กลับมาบ้าน (Coming Home) → Area 1 + 3 chains
2. ความลับของผ้าเก่า (Secret of Old Fabric) → Area 1 expanded
3. สิ่งที่คลองเล่า (What the Canal Says) → Area 2 + 5 chains
4. ผีช่วยงาน (Spirits Help Out) → Area 3 + 7 chains
5. งานรื่นเริง (The Festival) → All areas + 10 chains

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
- [ ] Create Unity project
- [ ] Install packages (VContainer, UniRx, Firebase)
- [ ] Set up Clean Architecture folder structure
- [ ] Configure Firebase (google-services.json, GoogleService-Info.plist)
- [ ] Create Remote Config keys in Firebase console

### Week 3: Core Domain
- [ ] MergeItem entity
- [ ] Chain entity (20 chains data)
- [ ] BoardState model
- [ ] PlayerData model
- [ ] MergeSystem (2-to-1 rule)
- [ ] EnergySystem (cap 100, regen 1/2min)
- [ ] GeneratorSystem

### Week 4: Board Prototype
- [ ] 6×8 grid UI
- [ ] Cell states (empty, occupied, locked)
- [ ] Drag-drop interaction
- [ ] Merge animation
- [ ] Basic persistence (PlayerPrefs)

---

## Milestone Timeline

| Month | Target |
|---|---|
| **M1** | Docs + Unity project + core entities + board prototype |
| **M2** | Energy, generators, drag-drop, persistence, basic UI |
| **M3** | NPC orders, decoration area, chapter 1, alpha build |
| **M4** | IAP, analytics, cloud save, daily rewards, soft launch |
| **M5** | Battle pass, events, polish |
| **M6** | Global launch (Android first, iOS simultaneous or 2 weeks later) |

---

## Next Steps

Ready for **Implementation Phase**:
1. Unity project setup
2. Clean Architecture skeleton
3. Core domain entities
4. Board prototype

Start when team is ready.