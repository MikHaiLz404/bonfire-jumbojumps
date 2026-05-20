# Merge-2 Game Project — Product Requirements Document

**Project:** Bonfire Gathering — Studio Sourcing Brief
**Type:** Casual F2P Merge-2 Puzzle Game
**Goal:** Global launch, portrait, single production track through soft launch + global
**Languages:** English + Thai at launch; localization framework for 12+ more

---

## 1. Project Overview

One full-cycle game project, built for global launch. Merge-2 puzzle with strong narrative hook, deep decoration metagame, and long content runway.

**Dev Timeline:** 4–6 months
**Platform:** Android first, iOS second (both at launch preferred; Android can ship earlier)
**Engine:** Unity or Godot (studio proposes; justify if Godot)
**Monetization:** F2P with opt-in rewarded ads (no forced ads). Some pay-to-win acceptable — no pay-to-win gating on core progression; non-spenders progress, spenders trade money for speed.

---

## 2. Core Loop

**Cliffhanger narrative + visible decoration**

1. Merge items on board
2. Complete orders + story beats
3. Earn coins
4. Unlock new area
5. Board fills energy gate

**Retention drivers:** Chapter cliffhangers + decoration progress + chain completion

**Benchmarks (feature parity, not revenue):**
- Gossip Harbor (SAYGAMES/FIRECRAFT) — Narrative-heavy, mystery reveals per chapter, D14+ retention
- Travel Town (MAGMATIC GAMES) — Board clarity, onboarding
- Seaside Escape (MATCHINGHAM) — Event design, piggy economy
- Merge Mansion (METACORE) — Core merge tuning

---

## 3. Merge Board & Core Mechanics

| Element | Spec |
|---|---|
| Board Size | 7×9 grid (63 cells) — standard |
| Merge Rule | 2-to-1 — merge 2 items of same tier into 1 of next tier |
| Merge Chains | 30+ chains in asset library, each authored to 20 tiers. Live game caps ~15 tiers. Headroom = reskin/event content |
| Chain Depth | Average 5–7 tier items requested by customer orders. Higher tiers reserved for late-game and event content |
| Generators | Source items produce lower tiers, regen over time. Tap-unlock mechanic |
| Storage | 20 off-board slots, expandable via IAP |
| Currencies | Free coins (earned), free gems (earned, slow), paid gems (purchased; convertible to free gems) |
| Energy Cap | 100, regen 1 per 2 min, full refill ~3.5h |
| Energy Cost | 1 per generator tap |
| Board Persistence | Critical — state saves across sessions |

---

## 4. Meta Systems

- **NPC Orders** — Characters request items; reward = coins + story + decor + XP
- **Order Scaling** — Early: level 2–3, Mid: tier 5–7, Late: tier 12–15
- **Side Orders** — Daily/weekly with special rewards
- **Collections** — Set-collection meta (chain tier-5s, decor styles)
- **Club/Guild** — Co-op orders, gifts
- **Decoration Layer** — Completed orders grant decoration stars
- **Bonus Mechanic** — Garden/farm side-mechanic (secondary board)
- **Areas at Launch** — 6 decoration areas (rooms/locations)
- **Customization** — 3 style options per decor slot (cosmetic)

---

## 5. Story & Narrative

| Element | Spec |
|---|---|
| Setting | Open — studio proposes. Thai-inspired welcomed if globally appealing |
| Cast | 1 protagonist + 5–6 supporting, 6+ emotions each |
| Chapters | ~15 at launch, ~30–60 min each, each unlocks 1 area + 2–3 chains |
| Tone | Warm, light-mystery, cozy. Not dark/violent/horror |
| Integration | Story beats reward merge progress. Never block behind paid unlock |
| Dialogue | ~8,000–12,000 words at launch |
| Cutscene Format | Static art + text box at MVP (animated = phase 2) |
| Branching | Linear main; flavor-only choices |
| Deliverable | Story bible month 1; full scripts pre-alpha; localization-ready strings |

---

## 6. Art Direction

- **Style:** Stylized 2D, semi-realistic, warm (Gossip Harbor & Seaside Escape warmth)
- **Orientation:** Portrait
- **Art Volume (directional, not hard target):**
  - ~600 merge-item icons — 30 chains × 20 tiers
  - 15+ decoration scenes — 6 areas × multiple upgrade states
  - ~40+ character pieces — 6+ portraits × 6+ expressions
  - UI kit — splash, loading, store, shop, event cards
  - ~30 cutscene illustrations for narrative beats

---

## 7. Monetization

### Energy & Boosters
- Energy refill — $0.99 (50) / $2.99 (200) / $4.99 (500)
- Boosters — instant generator recharge, merge speed-up, board space expansion, time-freeze, universal tier-1
- Dynamic pricing — first refill of day at discount
- Ad refill — not at launch (paid-only gates at MVP)
- Unlock bypass — premium gem cost for sealed items

### Layered Offers
- **Starter pack** — $0.99 first-time, 72h window
- **Progression packs** — level-gated (L10/25/50/80)
- **Piggy bank** — accumulates with play, unlock at $4.99/$9.99/$19.99
- **VIP/Club pass** — $4.99/wk or $15.99/mo (gems, booster drip, decor cosmetics)
- **Event pass** — $9.99 per major event (4–6/yr), free + paid tracks
- **Shop** — daily rotation + event shop + decoration shop
- **Gem SKUs** — 8 price points $0.99–$99.99
- **First purchase** — double-offer framework required
- **Not at launch** — rewarded ads, offerwall (phase 2)

---

## 8. Retention-Supporting Features

- **FTUE** — Scripted tutorial, 15 min mandatory, unskippable core teach
- **D1–D7 pace** — Chapter 1 in D1; chapter 2–3 in D2–D3 (narrative hook)
- **Daily loop** — Login calendar, daily order, daily free booster
- **Weekly loop** — Weekly challenge, weekly event
- **Event framework** — 3+ concurrent types (story-collab, seasonal, mini-game)
- **Push triggers** — 10+ (energy full, order ready, chapter, event, lapsed)
- **Analytics catalog** — Board snapshots, energy-out, chain completion, story beats, IAP funnel
- **A/B framework** — Econ, prices, offer copy, tutorial variants
- **Re-engagement** — Returning recap, lapsed pack, win-back event
- **Cloud save** — Cross-device sync (mandatory)

---

## 9. Event Framework

6 reusable types — each its own feature, reskinnable + adjustable content (rates, rewards, duration) without code:
1. Login
2. Ranking
3. Collection
4. Banner
5. Mission
6. Milestone

---

## 10. Technical & Backend Requirements

| Requirement | Detail |
|---|---|
| Remote Config | Server-side econ, prices, A/B ready |
| Security | Receipt validation, server-authoritative inventory |
| Analytics | GameAnalytics or Firebase + full custom event catalog |
| Live-ops | Mandatory backend + admin tools |

---

## 11. Theme Guidelines

**Hard rule:** Target global audience first. Theme must read clearly to players who have never been to Thailand.

- Portrait, F2P, mobile-first
- Cozy at heart, dramatic on the surface
- Cliffhangers, mystery, emotional stakes welcome — no horror or graphic violence

**Bonus (nice to have):** Thai-flavored elements as soft-power flavor — lantern light, coastal warmth, folk-tale spirits — used as accent, not as the whole world. Must still feel inviting to a global player on first visit.

Studio may also propose a fully non-Thai theme — judged on its own merits.

---

## 12. Launch Scope Summary

**Core scope — ships day one:** 90-day content envelope

- Board + merge chains + generators + energy
- NPC orders + decoration + ~6 areas
- Story — front-loaded: dense in M1, settles into live cadence by M2–M3 (target ~5–7 chapters total + cliffhanger pacing)
- Art volume sized to 90-day envelope
- Energy/boosters + packs + subs + store
- Retention-supporting features (per slide 14)

**Pacing reference:**
- M1: Dense (multiple chapter beats/week)
- M2–M3: Live cadence (chapter every 3–4 wks)
- Event every 4–6 wks
- New chain every ~2 weeks

**Open for studio to propose:**
- Final chapter count + pacing curve
- Bonus features from prior shipped titles
- Live-ops cadence beyond launch quarter
- Engagement/commercial model preference
- Team structure + timeline

---

## 13. Process Overview

| Step | Action |
|---|---|
| **Step 01 — Today** | Brief review; submit clarifying questions; confirm intent to bid |
| **Step 02 — Proposal** | Team + key CVs; itemized cost + milestones; 2–3 art/theme directions |
| **Step 03 — Selection** | Shortlist + follow-up calls; contract + payment terms; kickoff workshop |

---

*Document compiled from: game-brief.md + 18-page BFG_Merge2Idea brief images*