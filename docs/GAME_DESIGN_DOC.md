# Game Design Document — Bonfire Gathering

**Project:** Merge-2 Casual F2P Puzzle Game
**Version:** MVP (6-Month)
**Last Updated:** 2026-05-20

---

## 1. Overview

### 1.1 Game Concept

**Bonfire Gathering** is a narrative-driven Merge-2 puzzle game set in a Thai-inspired coastal village with light magical elements. Players merge items to complete NPC orders, unlock story chapters, and decorate areas. The game balances cozy aesthetics with light mystery cliffhangers to drive retention.

**Core Loop:**
```
Merge Items → Complete Orders → Earn Coins → Unlock Areas → Board Energy Gate → Repeat
```

**Retention Drivers:** Chapter cliffhangers + decoration progress + chain completion

**Benchmark Games:**
- Gossip Harbor (SAYGAMES/FIRECRAFT) — Narrative-heavy, mystery reveals
- Travel Town (MAGMATIC GAMES) — Board clarity, onboarding
- Seaside Escape (MATCHINGHAM) — Event design, piggy economy
- Merge Mansion (METACORE) — Core merge tuning

### 1.2 Platforms & Timeline

| Item | Spec |
|---|---|
| Platforms | Android first, iOS second |
| Engine | Unity 2021 LTS+ |
| Languages | English + Thai at launch |
| Dev Timeline | 6 months to soft launch, 12 months to full launch |
| Target | Global audience (not Thailand-exclusive) |

---

## 2. Core Mechanics

### 2.1 Board System

| Item | Spec |
|---|---|
| Grid Size (MVP) | 6×8 (48 cells) |
| Grid Size (Post-Launch) | 7×9 (63 cells) via Remote Config |
| Cell States | Empty, Occupied, Locked, Generator |
| Interaction | Drag-drop merge, tap generator |
| Persistence | Save on every action, load on launch |

### 2.2 Merge System

| Item | Spec |
|---|---|
| Rule | 2-to-1 — merge 2 items of same tier into 1 of next tier |
| Direction | Lower tier → Higher tier only |
| Chains | 20 chains (MVP), 30 chains (full launch) |
| Tiers per chain | 10 live (MVP), 15 live (Beta), 20 authored |
| Merge animation | Pop + glow effect, 300ms |

**Merge Validation:**
- Both items must be same chain AND same tier
- Result item placed at tap/drop position
- If target position occupied, find nearest empty cell

### 2.3 Energy System

| Item | Spec |
|---|---|
| Cap | 100 |
| Regen | 1 per 2 min (~3.5h full recharge) |
| Generator tap cost | 1 energy |
| Overflow | Cap at 100, no overflow |
| Persistence | Save timestamp + energy on exit, calc on return |

**Energy Flow:**
1. Player taps generator → check energy ≥ 1
2. Deduct 1 energy → trigger generator production
3. Spawn item → start regen timer
4. On timer complete → generator ready for next tap

### 2.4 Generator System

| Item | Spec |
|---|---|
| Output | Tier 1-2 items |
| Types | 3 types per area (9 total MVP) |
| Regen times | 30s, 60s, 120s (varies by generator) |
| Tap-unlock | Tap → produce → cooldown |

**Generator Behavior:**
- Visual indicator when ready (glow/particle)
- Cooldown overlay shows time remaining
- Tap to collect → item spawns adjacent or at selected position

---

## 3. Meta Systems

### 3.1 NPC Orders

| Item | Spec |
|---|---|
| Queue | Max 3 pending orders |
| Order types | Main story orders + side orders (daily/weekly) |
| Reward | Coins + Story progress + Decoration stars + XP |
| Scaling | Early: tier 2-3, Mid: tier 5-7, Late: tier 12-15 |

**Order Queue Behavior:**
- New order appears when slot available
- Player can refresh (costs gems) or wait (auto-refill timer)
- Side orders reset daily/weekly with bonus rewards

**Reward Structure:**
| Order Tier | Coins | XP | Decoration Stars |
|---|---|---|---|
| 1-3 (Early) | 50-100 | 10-20 | 1-2 |
| 4-6 (Mid) | 150-300 | 30-50 | 3-5 |
| 7-10 (Late) | 500-1000 | 100-200 | 10-20 |

### 3.2 Decoration Layer

| Item | Spec |
|---|---|
| Areas at MVP | 3 areas |
| Areas at full | 6 areas |
| Stars | Earned per order completed |
| Style options | 3 per decor slot (cosmetic) |
| Upgrade states | Multiple per area |

**3 MVP Areas:**
1. **ร้านผ้าโบราณ (The Old Fabric Shop)** — Inherited craft shop
2. **สวนริมคลอง (The Canal Garden)** — Garden by the water
3. **บ้านของผีเล็ก (The Friendly Spirits' Home)** — Helpful house guardians

### 3.3 Storage

| Item | Spec |
|---|---|
| Off-board slots | 20 (MVP) |
| Expandable | Via IAP (additional 10 slots) |
| Behavior | Store excess items, drag back to board |

---

## 4. Currency & Economy

### 4.1 Currency System

| Currency | Source | Use |
|---|---|---|
| **Coins** | Orders, achievements, daily login | Board upgrades, decorations, IAP |
| **Gems (free)** | Daily login, milestones, slow earn | Refresh orders, expand storage, IAP |
| **Gems (paid)** | Purchased via IAP | Same as free gems |

**Gem to Coin Rate:** 1 gem ≈ 50 coins (configurable via Remote Config)

### 4.2 Balance Parameters

| Item | Value |
|---|---|
| Energy refill (small) | $0.99 → 50 energy |
| Energy refill (medium) | $2.99 → 200 energy |
| Energy refill (large) | $4.99 → 500 energy |
| Storage expansion | 100 gems → 10 slots |
| Order refresh | 10 gems |
| Generator speed-up | 5 gems |
| Piggy unlock (small) | $4.99 |
| Piggy unlock (medium) | $9.99 |
| Piggy unlock (large) | $19.99 |

---

## 5. Progression

### 5.1 Chapter Unlock

| Chapter | Unlock Requirement | New Content |
|---|---|---|
| 1 | Start | Area 1, 3 chains |
| 2 | Complete Ch1 orders | Area 1 expanded |
| 3 | Complete Ch2 orders | Area 2, 5 chains |
| 4 | Complete Ch3 orders | Area 3, 7 chains |
| 5 | Complete Ch4 orders | All areas, 10 chains |
| 6-7 | Post-MVP | Additional chapters |

### 5.2 Chain Unlocks

- Start: 3 chains unlocked
- New chain per chapter completed
- Bonus chains from side quests

---

## 6. Retention Systems

### 6.1 FTUE (First-Time User Experience)

| Item | Spec |
|---|---|
| Duration | 15 min mandatory |
| Structure | Guided merge → order complete → area unlock |
| Skippable | No (core mechanics must be taught) |
| Elements | Board basics, merge, generator, order, first decoration |

### 6.2 D1-D7 Pacing

| Day | Content |
|---|---|
| D1 | Chapter 1 complete, 1 area unlocked |
| D2 | Chapter 2 starts, 2-3 orders/day |
| D3-4 | Chapter 2-3, daily orders visible |
| D5-7 | Chapter 3-4, weekend event possible |

### 6.3 Daily Loop

| Item | Spec |
|---|---|
| Login calendar | Day 1-7 rewards, repeat on 7-day cycle |
| Daily order | 1 main order refresh/day |
| Daily free booster | 1 free generator speed-up/day |
| Daily challenge | Optional extra rewards |

### 6.4 Weekly Loop

| Item | Spec |
|---|---|
| Weekly challenge | Harder orders, bonus coins |
| Weekend event | Ranking/Collection/Banner type |
| Side order refresh | Weekly bonus rewards |

### 6.5 Push Triggers

| Trigger | Timing | Message Theme |
|---|---|---|
| Energy full | On full | "Ready to play!" |
| Order ready | On ready | "Someone needs your help" |
| Chapter available | On unlock | "New chapter awaits" |
| Daily event | 9:00 AM local | "Daily challenge available" |
| Lapsed (1 day) | Day 2 no login | "Your friends miss you" |
| Lapsed (3 days) | Day 4 no login | "Special offer just for you" |
| Lapsed (7 days) | Day 8 no login | "Welcome back!" + win-back offer |
| Booster expire | 24h before | "Your booster is about to expire" |
| Event ending | 2h before | "Event ending soon!" |
| New content | On release | "New area unlocked!" |

---

## 7. Event Framework

### 6 Event Types (Post-MVP)

| Type | Description |
|---|---|
| **Login** | Daily login rewards, streak bonuses |
| **Ranking** | Leaderboard competition, top % rewards |
| **Collection** | Collect X items from category, bonus rewards |
| **Banner** | Progress bar, track toward goal, tiered rewards |
| **Mission** | Complete specific tasks, sequential rewards |
| **Milestone** | Reach X total, celebrate with bonus |

**MVP (M4):** Daily rewards + weekend events (Ranking, Banner, Mission types)

**Full (M12):** All 6 event types

---

## 8. IAP Integration

### 8.1 MVP IAP

| SKU | Price | Contents |
|---|---|---|
| `energy_small` | $0.99 | 50 energy |
| `energy_medium` | $2.99 | 200 energy |
| `energy_large` | $4.99 | 500 energy |
| `starter_pack` | $0.99 | First-time only, 72h window, gems + coins + booster |
| `piggy_small` | $4.99 | Accumulated coins (2x multiplier) |
| `piggy_medium` | $9.99 | Accumulated coins (3x multiplier) |
| `piggy_large` | $19.99 | Accumulated coins (4x multiplier) |
| `gem_pack_1` | $0.99 | 50 gems |
| `gem_pack_2` | $2.99 | 180 gems |
| `gem_pack_3` | $4.99 | 350 gems |
| `gem_pack_4` | $9.99 | 800 gems |
| `gem_pack_5` | $19.99 | 2000 gems |
| `gem_pack_6` | $49.99 | 6000 gems |
| `gem_pack_7` | $99.99 | 14000 gems |

### 8.2 Beta IAP

| SKU | Price | Contents |
|---|---|---|
| `vip_weekly` | $4.99 | 7-day VIP pass, daily gems + booster |
| `vip_monthly` | $15.99 | 30-day VIP pass |
| `event_pass` | $9.99 | Per major event, free + paid tracks |
| `progression_pack_10` | $2.99 | Level 10 milestone pack |
| `progression_pack_25` | $4.99 | Level 25 milestone pack |
| `progression_pack_50` | $9.99 | Level 50 milestone pack |
| `progression_pack_80` | $14.99 | Level 80 milestone pack |

### 8.3 First Purchase

- Double gems on first purchase (any gem pack)
- Framework must support this

---

## 9. Story Integration

### 9.1 Beat → Reward Mapping

| Story Beat | Merge Reward |
|---|---|
| New area unlocked | Extra coins + new chains |
| NPC introduction | Daily order bonus |
| Chapter cliffhanger | XP boost + decoration star |
| Chapter complete | Area expansion + premium currency |

**Rule:** Never block story behind paid unlock. All story content free.

### 9.2 Dialogue Spec

| Item | Spec |
|---|---|
| Total at MVP | ~3,000-5,000 words |
| Per chapter | ~500-800 words |
| Languages | English + Thai at launch |
| Format | JSON strings, localization-ready |

---

## 10. Analytics Requirements

### 10.1 Core Events

**Board:**
- `merge_success` — chain, tier, items merged, time since last merge
- `merge_fail` — attempted invalid merge
- `energy_out` — D1-D7 funnel, time to out
- `generator_tap` — type, energy remaining

**Progression:**
- `order_completed` — tier, reward, time to complete
- `order_accepted` — queue time
- `chapter_started` / `chapter_completed` — time in chapter
- `area_unlocked` — first time

**Economy:**
- `currency_earned` — amount, source, balance after
- `currency_spent` — amount, use, balance after
- `iap_purchased` — sku, amount, first purchase Y/N

**Retention:**
- `daily_login` — day streak
- `lapsed_return` — days absent, previous session length
- `push_received` / `push_clicked` — campaign ID

### 10.2 Funnels

- FTUE completion rate (D1, D3, D7)
- Energy out → IAP conversion
- Order completion → repeat orders
- Chapter completion rate
- Lapsed recovery rate by trigger

---

## 11. Technical Requirements

| Requirement | Implementation |
|---|---|
| **Board Persistence** | Save every action to PlayerPrefs (MVP), Firebase (launch) |
| **Remote Config** | Firebase Remote Config, all balance/econ values |
| **Server-side econ** | Remote Config keys, no hardcoded values |
| **Receipt validation** | Client-side Unity IAP (MVP), server-side (production) |
| **Cloud save** | Firebase Auth + Firestore, cross-device sync |
| **Analytics** | Firebase Analytics, full event catalog |
| **A/B framework** | Remote Config user property segmentation |
| **Push notifications** | Firebase Cloud Messaging (M4+) |