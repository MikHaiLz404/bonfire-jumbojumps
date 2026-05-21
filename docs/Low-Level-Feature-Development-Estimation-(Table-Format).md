---
name: Low-Level Feature Development Estimation (Table Format)
description: Low level development document
---

# Low-Level Feature: Development Estimation (Table Format)

> **Project:** Merge-2 Game
> **Basis:** Detailed Breakdown from High-Level Features
> **Target Milestone:** Full Commercial Launch
> **Unit:** Man-Day (MD) = 8 ชั่วโมงทำงาน
> **Format:** การประเมินระยะเวลาแยกตาม Task ย่อยแบบ Bottom-Up

---

## 🛠 Phase 0: Infrastructure & Base Architecture

### 1. Advanced UI Framework

| งานย่อย (Sub-Task) | Unity (FE) | BE / Infra | รวม (MD) |
|-------------------|-----------|------------|----------|
| Canvas Scaler, Safe Area & Notch Manager | 8 | 0 | **8** |
| Generic Pop-up/Modal Manager & Overlay Stack | 7 | 0 | **7** |
| VFX Object Pooling (ระบบจัดการหน่วยความจำเอฟเฟกต์) | 8 | 0 | **8** |

### 2. Dynamic Theming

| งานย่อย (Sub-Task) | Unity (FE) | BE / Infra | รวม (MD) |
|-------------------|-----------|------------|----------|
| Theme Manager Core (ระบบ Observer รับคำสั่ง) | 8 | 0 | **8** |
| Asset Chunking Architecture (จัดการ Bundle ป้องกันไฟล์บวม) | 12 | 0 | **12** |
| Memory Unload Logic (ระบบล้างไฟล์ภาพเก่าจาก RAM) | 6 | 0 | **6** |
| Backend Active Theme Config & API Trigger | 0 | 3 | **3** |

### 3. Localization Core

| งานย่อย (Sub-Task) | Unity (FE) | BE / Infra | รวม (MD) |
|-------------------|-----------|------------|----------|
| Dynamic Font Switcher (รองรับหลายภาษา) | 4 | 0 | **4** |
| String Key Mapper (ระบบเชื่อม Text กับ Key) | 4 | 0 | **4** |
| Backend Translation JSON Storage & Sync API | 0 | 4 | **4** |

### 4. Audio Management

| งานย่อย (Sub-Task) | Unity (FE) | BE / Infra | รวม (MD) |
|-------------------|-----------|------------|----------|
| Audio Mixer & Master Settings | 4 | 0 | **4** |
| SFX Pooling & Audio Ducking (ลดเสียง BGM) | 5 | 0 | **5** |

### 5. Backend Base Setup

| งานย่อย (Sub-Task) | Unity (FE) | BE / Infra | รวม (MD) |
|-------------------|-----------|------------|----------|
| Docker & Environment Configuration | 0 | 4 | **4** |
| MongoDB & Redis Connection / Repository Pattern | 0 | 5 | **5** |
| Auth, Session & JWT Token Management | 0 | 4 | **4** |

### 6. Infra & Addressables

| งานย่อย (Sub-Task) | Unity (FE) | BE / Infra | รวม (MD) |
|-------------------|-----------|------------|----------|
| Addressables Loading & Caching Logic | 4 | 0 | **4** |
| Custom OTA UI (Progress Bar, Retry Button) | 7 | 0 | **7** |
| Tencent VPC, CDN & Object Storage Routing | 0 | 8 | **8** |
| CI/CD Pipeline (GitHub Actions / Jenkins) | 0 | 6 | **6** |

> **Sub-Total Phase 0:** FE = 77 MD | BE/Infra = 34 MD | **รวม = 111 MD**

---

## 🎮 Phase 1: Gameplay & Core Board Mechanics

### 1. Grid & Interactions

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Grid Generation & Coordinates Mapping | 4 | 0 | **4** |
| Touch Input, Drag/Drop & Snapping (เน้น Game Feel) | 6 | 0 | **6** |
| Cell State Validation (ตรวจสอบช่องว่าง/การล็อก) | 3 | 0 | **3** |
| Backend Initial Board State Generation | 0 | 2 | **2** |

### 2. Merge Logic & Items

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Evolution & Merge Algorithm | 5 | 0 | **5** |
| Merge VFX & SFX Integration (แสง/เสียงเปลี่ยนร่าง) | 6 | 0 | **6** |
| Locked Item & Cobweb Visual Logic | 4 | 0 | **4** |
| Timed Bubbles & Joker Wildcard Logic | 5 | 0 | **5** |
| Backend Item Blueprint Config Sync | 0 | 3 | **3** |

### 3. Generators & Spawning

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Manual Spawner (หักพลังงานและดร็อปไอเทม) | 4 | 0 | **4** |
| Auto-Spawner Timer Logic | 3 | 0 | **3** |
| Generator Upgrade & Retirement System | 4 | 0 | **4** |
| Nearest Empty Cell Algorithm (หาช่องว่างใกล้สุด) | 3 | 0 | **3** |
| Backend RNG Algorithm & Weighted Drop Config | 0 | 5 | **5** |

### 4. Board Management

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Storage/Inventory UI & Transfer Logic | 5 | 0 | **5** |
| Inbox / FIFO Reward Queue System | 4 | 0 | **4** |
| Undo Stack & Boosters (กรรไกร, ลบไอเทมทิ้ง) | 6 | 0 | **6** |
| Backend Board State Sync & Save | 0 | 5 | **5** |

### 5. Result Validation

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| FE Checksum / Hash Generator | 3 | 0 | **3** |
| Server-side Anti-Cheat Validation | 0 | 8 | **8** |

> **Sub-Total Phase 1:** FE = 65 MD | BE = 23 MD | **รวม = 88 MD**

---

## 📖 Phase 2: Meta-Game & Narrative

### 1. Narrative System

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Visual Novel Engine (Typewriter, Portraits) | 8 | 0 | **8** |
| Scene Panning & VFX Sequencing | 4 | 0 | **4** |
| Branching Choice & History Log System | 6 | 0 | **6** |
| Backend Story Progression Tracker | 0 | 5 | **5** |

### 2. Renovation System

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Fixed-point Swapping & Asset Loading | 6 | 0 | **6** |
| 3-Choice UI & Build Animation | 6 | 0 | **6** |
| Unlock Node & Dependency Logic | 7 | 0 | **7** |
| Backend Asset Config & Validation | 0 | 8 | **8** |

### 3. Task Board & Quest

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Quest UI & Board Tracker | 5 | 0 | **5** |
| Scene Navigation / Go-To Logic | 4 | 0 | **4** |
| Backend Quest Condition & Reward Issuer | 0 | 8 | **8** |

### 4. Character & Passive

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Affinity UI & Gift Delivery Animation | 6 | 0 | **6** |
| Lore Unlock & Passive Active Indicator | 4 | 0 | **4** |
| Backend Buff Calculation Engine | 0 | 7 | **7** |

### 5. Collection Book

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Pack Opening Sequencer (VFX ขั้นสูง) | 8 | 0 | **8** |
| Album UI & Sticker Placement | 7 | 0 | **7** |
| Backend Gacha Logic & Wildcard Trade | 0 | 10 | **10** |

> **Sub-Total Phase 2:** FE = 71 MD | BE = 38 MD | **รวม = 109 MD**

---

## 💰 Phase 3: Economy, Flow & Retention

### 1. Energy & Currencies

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Top Bar Global UI & Counting VFX | 4 | 0 | **4** |
| Local Timer UI (นาฬิกานับคูลดาวน์) | 3 | 0 | **3** |
| Backend Wallet Manager & Offline Math | 0 | 9 | **9** |

### 2. Passive / Idle Income

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Claim Bubble UI & Interactions | 3 | 0 | **3** |
| Flying Currency VFX (เหรียญบินเข้ากระเป๋า) | 3 | 0 | **3** |
| Backend Production Timestamp Check | 0 | 5 | **5** |

### 3. Daily/Monthly Retention

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Login Calendar & Streak UI | 6 | 0 | **6** |
| Roulette Wheel Spin VFX & Physics | 7 | 0 | **7** |
| Backend Reset Logic & Retention Tracker | 0 | 10 | **10** |

### 4. Tutorial & Onboarding

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Onboarding State Machine | 8 | 0 | **8** |
| Input Masking & Spotlight Hands (สอนเล่น) | 7 | 0 | **7** |
| Feature Gating Logic (ซ่อน/ปลดล็อกปุ่มตามเลเวล) | 5 | 0 | **5** |

> **Sub-Total Phase 3:** FE = 46 MD | BE = 24 MD | **รวม = 70 MD**

---

## 🤝 Phase 4: Monetization & Social Systems

### 1. Shop & IAP

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Premium Storefront UI & Shine VFX | 8 | 0 | **8** |
| Store SDK Integration | 6 | 0 | **6** |
| Backend Receipt Validation Microservice | 0 | 12 | **12** |

### 2. Ad Placements

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Mediation SDK Integration & Conflict Fixes | 7 | 0 | **7** |
| Out-of-Energy Trigger Pop-ups | 3 | 0 | **3** |
| Backend S2S Ad Reward Webhook | 0 | 5 | **5** |

### 3. Piggy Bank & Pass

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Piggy Bank Fill & Smash Anim | 6 | 0 | **6** |
| Battle Pass Free/Premium Lane UI | 7 | 0 | **7** |
| Backend Pass Progression & Paywall | 0 | 10 | **10** |

### 4. Guild & Friend System

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Guild Search & Profile UI | 7 | 0 | **7** |
| Friend List & Energy Gift UI | 8 | 0 | **8** |
| Backend SignalR Chat & Social Graph DB | 0 | 22 | **22** |

### 5. Leaderboard Ranking

| งานย่อย (Sub-Task) | Unity (FE) | BE (Logic) | รวม (MD) |
|-------------------|-----------|------------|----------|
| Ranking UI & Tournament Group | 6 | 0 | **6** |
| Backend Redis Sorted Sets Architecture | 0 | 10 | **10** |

> **Sub-Total Phase 4:** FE = 58 MD | BE = 59 MD | **รวม = 117 MD**

---

## 🖥️ Phase 5: Custom Live Operations (Web Tools)

### 1. Economy Tuning

| งานย่อย (Sub-Task) | Web (FE) | Web (BE) | รวม (MD) |
|-------------------|----------|----------|----------|
| JSON Drop Table Editor | 7 | 0 | **7** |
| Live Database Sync API | 0 | 8 | **8** |

### 2. Dynamic Offers

| งานย่อย (Sub-Task) | Web (FE) | Web (BE) | รวม (MD) |
|-------------------|----------|----------|----------|
| Deal Configurator UI | 8 | 0 | **8** |
| Segmentation Trigger Logic | 0 | 10 | **10** |

### 3. Remote Config & A/B

| งานย่อย (Sub-Task) | Web (FE) | Web (BE) | รวม (MD) |
|-------------------|----------|----------|----------|
| Game Parameter Dashboard | 6 | 0 | **6** |
| A/B Testing Distribution Routing | 0 | 8 | **8** |

### 4. Localization Admin

| งานย่อย (Sub-Task) | Web (FE) | Web (BE) | รวม (MD) |
|-------------------|----------|----------|----------|
| Dictionary Grid Editor | 5 | 0 | **5** |
| CMS Language Versioning | 0 | 6 | **6** |

### 5. OTA & Scheduler

| งานย่อย (Sub-Task) | Web (FE) | Web (BE) | รวม (MD) |
|-------------------|----------|----------|----------|
| Event Timeline Planner UI | 6 | 0 | **6** |
| UTC Chron Job Trigger | 0 | 6 | **6** |

### 6. Push Notifications

| งานย่อย (Sub-Task) | Web (FE) | Web (BE) | รวม (MD) |
|-------------------|----------|----------|----------|
| Push Message Composer | 3 | 0 | **3** |
| FCM Integration Logic | 0 | 4 | **4** |

> **Sub-Total Phase 5:** Web FE = 35 MD | Web BE = 42 MD | **รวม = 77 MD**

---

## 🛡️ Phase 6: QA, Optimization & Bug Fixing (Buffer 20%)

| งานย่อย (Sub-Task) | FE (Unity/Web) | BE / Infra | รวม (MD) |
|-------------------|--------------|------------|----------|
| Memory Leak Profiling, UI Edge Cases, Frame-rate tuning | 71 | 0 | **71** |
| Load Testing, Security Audit, Redis Tuning | 0 | 44 | **44** |

> **Sub-Total Phase 6:** FE = 71 MD | BE/Infra = 44 MD | **รวม = 115 MD**

---

## 📈 Executive Summary

| สรุป | Man-Days |
|-----|----------|
| Unity Frontend & Web Frontend (Dev) | 352 MD |
| QA Buffer (FE) | 71 MD |
| **Frontend รวม** | **423 MD** |
| Backend & Infrastructure (Dev) | 220 MD |
| QA Buffer (BE) | 44 MD |
| **Backend รวม** | **264 MD** |
| **รวมเวลาพัฒนาทั้งสิ้น** | **687 MD** |

### สัดส่วนการใช้เวลา

| ส่วน | สัดส่วน |
|-----|--------|
| Frontend (Unity + Web) | **~60%** |
| Backend & Infrastructure | **~40%** |

> **หมายเหตุ:** สัดส่วนนี้สะท้อนการทำเกม LiveOps สเกลสากล ที่ต้องให้ความสำคัญกับงานภาพคุณภาพระดับสูง และความเสถียรของระบบอย่างแท้จริง

---

## 📊 Phase Summary Table

| Phase | หมวด | FE (MD) | BE (MD) | รวม (MD) |
|------|------|--------|---------|----------|
| 0 | Infrastructure & Base Architecture | 77 | 34 | **111** |
| 1 | Gameplay & Core Board Mechanics | 65 | 23 | **88** |
| 2 | Meta-Game & Narrative | 71 | 38 | **109** |
| 3 | Economy, Flow & Retention | 46 | 24 | **70** |
| 4 | Monetization & Social Systems | 58 | 59 | **117** |
| 5 | Custom Live Operations (Web Tools) | 35 | 42 | **77** |
| 6 | QA, Optimization & Bug Fixing (20% Buffer) | 71 | 44 | **115** |
| | **รวม** | **423** | **264** | **687** |