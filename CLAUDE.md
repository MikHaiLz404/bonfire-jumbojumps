# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Merge-2 casual F2P puzzle game** ("Bonfire Gathering") targeting global mobile launch (Android first, iOS second). The project is in **Implementation Phase** — planning docs complete, ready for development.

**Reference Documents:**
- `docs/TECH_SPEC.md` — Unity architecture, Firebase stack, data models
- `docs/GAME_DESIGN_DOC.md` — Core mechanics, economy, retention systems
- `docs/STORY_BIBLE.md` — "Lantern & Legend" narrative, 5 chapters, 6 NPCs
- `docs/MVP_Scope_Recommendation.md` — 6-month phased roadmap
- `brief/BFG_Merge2Idea_page_*.png` — 18-page visual brief (design reference)

## Game Design Summary

| Element | Value |
|---|---|
| Board | 6×8 grid (48 cells) MVP → 7×9 (63 cells) post-launch |
| Merge Rule | 2-to-1 (2 items same tier → 1 item next tier) |
| Chains | 20 chains (MVP), 10 tiers live per chain |
| Energy Cap | 100; regen 1 per 2 min (~3.5h full recharge) |
| Energy Cost | 1 per generator tap |
| Storage | 20 off-board slots |
| Areas | 3 (MVP) → 6 (Beta) |
| Chapters | 5 (MVP), live cadence post-launch |
| Languages at Launch | English + Thai |

## Architecture

- **Engine:** Unity 2021 LTS+
- **Architecture:** Clean Architecture + MVVM + UniRx + VContainer
- **Firebase Stack:** Analytics, Remote Config, Auth, Firestore, Cloud Messaging (M4+)
- **Board Persistence:** PlayerPrefs (MVP) → Firebase (launch)
- **IAP:** Unity IAP (client-side MVP, server-side production)

## Story: "Lantern & Legend"

**Protagonist:** มะลิ (Mali) — young designer, returns home to help aunt's fabric shop

**5 Chapters:**
1. กลับมาบ้าน (Coming Home) → Area 1 + 3 chains
2. ความลับของผ้าเก่า (Secret of Old Fabric)
3. สิ่งที่คลองเล่า (What the Canal Says) → Area 2 + 5 chains
4. ผีช่วยงาน (Spirits Help Out) → Area 3 + 7 chains
5. งานรื่นเริง (The Festival) → All areas + 10 chains

**3 Areas:**
1. ร้านผ้าโบราณ (The Old Fabric Shop)
2. สวนริมคลอง (The Canal Garden)
3. บ้านของผีเล็ก (The Friendly Spirits' Home)

**6 NPCs:** Aunt Mali, Daeng, Pin, Uncle Somchai, Nai Vilai, Phi Eua (spirits)

## Key Meta Systems

- **NPC Orders** — Characters request items; reward = coins + story + decor + XP
- **Order Scaling** — Early: tier 2–3, Mid: tier 5–7, Late: tier 12–15
- **Decoration Layer** — Completed orders grant decoration stars; 3 areas MVP
- **Event Framework** — Daily rewards + weekend events (MVP), 6 types (full)
- **Generators** — Source items produce lower tiers, regen over time, tap-unlock

## Monetization Model

- F2P with opt-in rewarded ads (no forced ads)
- Energy refills: $0.99 (50) / $2.99 (200) / $4.99 (500)
- Boosters: instant generator recharge, merge speed-up, board space expansion
- Layered offers: starter pack, progression packs, piggy bank, VIP/Club pass, event pass
- Ad refill not at launch (paid-only gates at MVP)

## Implementation Priority

| Phase | Focus |
|---|---|
| **M1** | Unity project, Clean Architecture, core entities, board prototype |
| **M2** | Energy, generators, drag-drop, persistence, basic UI |
| **M3** | NPC orders, decoration, chapter 1, alpha build |
| **M4** | IAP, analytics, cloud save, daily rewards, soft launch |
| **M5** | Battle pass, events, polish |
| **M6** | Global launch |

## Team

- 8-person core team (confirmed per planning)
- Game designer, lead dev, 2 devs, 2 artists, UI artist, QA, PM