# Unity Tech Spec — Bonfire Gathering

**Project:** Merge-2 Casual F2P Puzzle Game
**Engine:** Unity 2021 LTS+
**Last Updated:** 2026-05-21

---

## 1. Architecture

**Pattern:** Clean Architecture + MVVM + UniRx + VContainer

```
src/
├── Core/                    # Domain layer - pure game logic, no Unity deps
│   ├── Entities/           # MergeItem, Chain, Generator, Order
│   ├── Systems/            # MergeSystem, EnergySystem, OrderSystem
│   └── ValueObjects/       # Tier, Position, Currency
│
├── Data/                    # Data layer - persistence, remote config
│   ├── Persistence/         # BoardState, PlayerData save/load
│   ├── RemoteConfig/       # Server config models
│   └── Repositories/       # Interfaces + implementations
│
├── Application/            # Use cases - orchestrates domain + data
│   ├── UseCases/           # MergeItems, CompleteOrder, SpendEnergy
│   └── Services/           # GameService, EconomyService
│
├── Presentation/           # UI layer - Unity MVVM
│   ├── Views/              # Scenes (Board, Orders, Decoration)
│   ├── ViewModels/         # BoardVM, OrderVM, etc.
│   ├── Bindings/           # Unity UI bindings
│   └── Components/         # Reusable UI components
│
├── Infrastructure/         # External integrations
│   ├── Analytics/          # Firebase Analytics
│   ├── IAP/                # Unity IAP
│   ├── CloudSave/          # Firebase Auth + Firestore
│   └── RemoteConfig/      # Firebase Remote Config
│
└── Common/                 # Shared utilities
    ├── Extensions/
    ├── Utilities/
    └── Constants/
```

---

## 2. Core Systems

| System | Priority | Key Considerations |
|---|---|---|
| **Board/Grid** | P0 | 7×9 (63 cells), cell states, drag-drop |
| **Merge Logic** | P0 | 2-to-1 rule, chain validation, tier calculation |
| **Energy System** | P0 | Cap 100, regen 1/2min, cost 1/tap, save timestamp |
| **Generators** | P0 | Production, regen timer, tap-unlock |
| **Item Management** | P0 | Storage (20 slots), inventory |
| **NPC Orders** | P1 | Queue, rewards, scaling (tier 2-3 → 12-15) |
| **Decoration** | P1 | Stars, 3 areas (MVP) |
| **Story/Chapters** | P1 | 15 chapters, dialogue system, cutscenes |
| **Economy** | P1 | Coins, gems, IAP, dynamic pricing |
| **Events** | P2 | Daily rewards, weekend events |
| **Club/Guild** | P2 | Full guild system with chat |

---

## 3. Technical Decisions

| Decision | Choice | Rationale |
|---|---|---|
| **UI Framework** | UI Toolkit (2021 LTS+) | Modern, better performance than uGUI |
| **Serialization** | Newtonsoft.Json | Board state save, human-readable |
| **DI Container** | VContainer | Lightweight, Unity-native, testable |
| **Architecture** | MVVM with UniRx | Reactive bindings, clean separation |
| **Localization** | JSON per language | English + Thai at launch, 12+ future |
| **Scene Management** | Addressables | Async load, DLC-ready |
| **Board Persistence** | PlayerPrefs (MVP) → Firebase (launch) | Critical per PRD |
| **Analytics** | Firebase Analytics | Unified with Firebase stack |
| **Remote Config** | Firebase Remote Config | Server-side econ, A/B ready |
| **IAP** | Unity IAP | Unified store handling |
| **Cloud Save** | Firebase Auth + Firestore | Cross-device sync (mandatory) |

---

## 4. Data Models

```csharp
// Board State
BoardState
├── grid[6,8] → CellState (itemTier, chainId, position)
├── energy: int
├── lastEnergyRegen: DateTime
├── unlockedChains: List<chainId>
└── timestamp: DateTime

// Player Data
PlayerData
├── ods: long
├── gems: long (free + paid split)
├── currentChapter: int
├── completedOrders: int
├── decorationStars: Dict<areaId, int>
├── cloudId: string
└── lastSaveTime: DateTime

// Merge Item
MergeItem
├── chainId: string
├── tier: int (1-10 MVP, 1-15 Beta)
├── position: Vector2Int
└── generatedAt: DateTime

// Order
Order
├── id: string
├── requestedChain: chainId
├── requestedTier: int
├── quantity: int
├── rewardCoins: int
├── rewardExp: int
└── state: pending | ready | completed
```

---

## 5. Firebase Stack

| Service | Usage | MVP Scope |
|---|---|---|
| **Firebase Analytics** | Event catalog (BoardSnapshots, EnergyOut, ChainCompletion) | Full |
| **Firebase Remote Config** | Server-side econ, prices, A/B flags | Full |
| **Firebase Auth** | Cloud save (cross-device sync) | Full |
| **Firebase Cloud Messaging** | Push notifications (10+ triggers) | MVP defer → M4 |
| **Cloud Firestore** | Player data persistence | MVP → PlayerPrefs, Cloud Save → Firestore |
| **Firebase Crashlytics** | Error tracking | Bonus |

---

## 6. File Structure

```
Assets/
├── _Project/
│   ├── Scripts/
│   │   ├── Core/
│   │   │   ├── Entities/
│   │   │   ├── Systems/
│   │   │   └── ValueObjects/
│   │   ├── Data/
│   │   │   ├── Persistence/
│   │   │   ├── RemoteConfig/
│   │   │   └── Repositories/
│   │   ├── Application/
│   │   │   ├── UseCases/
│   │   │   └── Services/
│   │   ├── Presentation/
│   │   │   ├── Views/
│   │   │   ├── ViewModels/
│   │   │   ├── Bindings/
│   │   │   └── Components/
│   │   ├── Infrastructure/
│   │   │   ├── Analytics/
│   │   │   ├── IAP/
│   │   │   ├── CloudSave/
│   │   │   └── RemoteConfig/
│   │   └── Common/
│   ├── Prefabs/
│   │   ├── Board/
│   │   ├── Items/
│   │   ├── UI/
│   │   └── Effects/
│   ├── ScriptableObjects/
│   │   ├── Chains/
│   │   ├── Areas/
│   │   ├── Chapters/
│   │   └── Events/
│   └── Art/
├── Plugins/
└── ThirdParty/
```

---

## 7. Milestone Mapping

| Month | Tech Deliverables |
|---|---|
| **M1** | Project setup, Clean Architecture skeleton, Core domain entities, Board grid system, Merge logic prototype |
| **M2** | Energy system, Generators, Drag-drop, Basic UI, Persistence (PlayerPrefs) |
| **M3** | NPC Orders, Decoration area, Chapter 1, Alpha test build |
| **M4** | IAP integration, Analytics, Cloud save (Firebase), Daily rewards, Soft launch |
| **M5** | Battle pass, Events framework, Polish |
| **M6** | Global launch |

---

## 8. Board Spec (Launch → Full)

| Item | Launch | Post-Launch |
|---|---|---|
| Grid Size | 7×9 (63 cells) | Expandable via Remote Config |
| Chains | 20 chains | 30 chains |
| Tiers per chain | 10 live | 15 live |
| Merge icons | ~200 | ~300 |
| Areas | 3 | 6 |

---

## 9. Energy Spec

| Item | Value |
|---|---|
| Cap | 100 |
| Regen | 1 per 2 min (~3.5h full recharge) |
| Generator tap cost | 1 |
| Overflow | Cap at 100, no overflow |
| Persistence | Save timestamp on exit, calc on return |
| IAP refill | $0.99 (50), $2.99 (200), $4.99 (500) |

---

## 10. IAP Pricing (MVP)

| Item | Price | Notes |
|---|---|---|
| Energy refill (small) | $0.99 | 50 energy |
| Energy refill (medium) | $2.99 | 200 energy |
| Energy refill (large) | $4.99 | 500 energy |
| Starter pack | $0.99 | First-time, 72h window |
| Piggy bank (small) | $4.99 | Accumulates with play |
| Piggy bank (medium) | $9.99 | - |
| Piggy bank (large) | $19.99 | - |
| Gem SKUs | $0.99 - $99.99 | 8 price points |
| VIP/Club pass | $4.99/wk or $15.99/mo | Beta MVP |
| Event pass | $9.99 | Per major event |

---

## 11. Analytics Events Catalog

### Board Events
- `board_snapshot` — periodic board state (for funnel analysis)
- `merge_success` — successful merge (chain, tier, items merged)
- `merge_fail` — failed merge attempt
- `energy_out` — player ran out of energy
- `generator_tap` — generator tapped (generator type)

### Progression Events
- `order_completed` — order completed (order tier, reward)
- `order_accepted` — new order accepted
- `chapter_started` — chapter started
- `chapter_completed` — chapter completed
- `area_unlocked` — new area unlocked

### Economy Events
- `currency_earned` — coins/gems earned (source)
- `currency_spent` — coins/gems spent (use)
- `iap_purchased` — in-app purchase (sku, amount)

### Retention Events
- `daily_login` — day streak
- `lapsed_return` — player returned after lapsed period
- `push_received` — push notification received
- `push_clicked` — push notification clicked

---

## 12. Remote Config Keys

| Key | Type | Default | Description |
|---|---|---|---|
| `energy_cap` | int | 100 | Energy cap |
| `energy_regen_rate` | int | 120 | Seconds per 1 energy |
| `board_size` | string | "6x8" | "6x8" or "7x9" |
| `chains_live` | int | 20 | Number of chains active |
| `tiers_live` | int | 10 | Tiers per chain |
| `coin_earn_base` | int | 10 | Base coin reward |
| `gem_earn_rate` | int | 1 | Gems per day (free) |
| `order_queue_size` | int | 3 | Max pending orders |
| `storage_size` | int | 20 | Off-board storage slots |
| `starter_pack_enabled` | bool | true | Starter pack availability |
| `piggy_enabled` | bool | true | Piggy bank availability |
| `dynamic_pricing_enabled` | bool | false | First-of-day discount |

---

## 13. Dependencies

| Package | Version | Purpose |
|---|---|---|
| VContainer | latest | DI container |
| UniRx | latest | Reactive extensions |
| Firebase Analytics | latest | Analytics |
| Firebase Remote Config | latest | Remote config |
| Firebase Auth | latest | Cloud save auth |
| Firebase Firestore | latest | Cloud save data |
| Newtonsoft.Json | latest | JSON serialization |
| Unity UI Toolkit | 2021 LTS+ | UI framework |
| Addressables | latest | Scene management |