---
name: High-Level Feature Breakdown
description: Breakdown game features
---

# Merge-2 Game: High-Level Feature Breakdown & Technical Scope

> **Reference Titles:** Merge Mansion, Travel Town, Gossip Harbor, Seaside Escape
> **Document Purpose:** R&D Reference for Game Design, Engineering Architecture & Prototyping
> **Target Audience:** Management, Game Designers, Engineers

---

## 0. 🛠 Infrastructure & Base Architecture

> หมวดหมู่นี้เน้นการวางรากฐานเพื่อรองรับการขยายตัว (Scalability) และการทำ LiveOps ในอนาคต

### 0.1 Core Systems & Frameworks

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Advanced UI Framework & VFX Pooling** | โครงสร้าง UI รองรับทุกสัดส่วน (Safe Area/Notch), ระบบ Pop-up (Overlay Stack), Object Pooling สำหรับ VFX หมุนเวียน ป้องกัน Frame drop และ Memory Leak |
| **Dynamic Theming & Asset Grouping** | ระบบเปลี่ยนตีมตามเทศกาล (UI, กระดาน, เมือง) โดยไม่ต้องออกแอปใหม่ วางสถาปัตยกรรม Addressables (Chunking) แบ่งกลุ่มโหลด/Unload Asset เพื่อคืน RAM |
| **Localization Core System** | รองรับหลายภาษา สลับ Text และ Font แบบเรียลไทม์ ขับเคลื่อนด้วย Dynamic Font Switcher และ JSON String Key Mapping |
| **Audio Management & Pooling** | ระบบจัดการ BGM และ SFX ควบคุมโดย Audio Mixer, SFX Pooling และ Audio Ducking (ลดเสียง BGM ชั่วคราวเมื่อมีเสียงสำคัญ) |

### 0.2 Backend & Cloud Infrastructure

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Backend Base Setup** | สถาปัตยกรรม Modular Monolith (.NET C#), MongoDB (ข้อมูลถาวร), Redis (ข้อมูลชั่วคราว), JWT Authentication |
| **Infra & Addressables Pipeline** | ช่องทางดาวน์โหลดเนื้อหาเพิ่มเติม (OTA), Custom UI หลอดดาวน์โหลด, จัดการผ่าน Tencent VPC, CDN, Object Storage Routing และ CI/CD Pipeline |

---

## 1. 🎮 Gameplay & Core Board Mechanics

> หมวดหมู่นี้ครอบคลุมระบบการโต้ตอบหลัก (Core Interactions) และกลไกของไอเทมบนกระดานเล่น

### 1.1 Board Interactions & Grid System

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Grid System** | กระดาน 2D (ขนาดเริ่มต้น 7x9) รองรับ Drag & Drop, Snapping, Board Full Handling ทำงานบน Coordinate (X,Y) และ Cell State Validation |
| **Dynamic Grid Expansion** | ปลดล็อกช่องตารางเพิ่มเติมเมื่อถึงเลเวลที่กำหนด หรือใช้ทรัพยากรขยายพื้นที่การเล่น |
| **Merge Chains & Item Tiers** | โครงสร้างข้อมูลวิวัฒนาการไอเทมจากระดับ 1 สู่ระดับสูงสุด ซิงก์ Item Blueprint กับเซิร์ฟเวอร์ |
| **Locked Items / Obstacles** | ไอเทมที่ขยับไม่ได้ (มีหยากไย่เกาะ) ต้องวางไอเทมระดับเดียวกันทับเพื่อปลดล็อก |
| **Time-limited Bubbles** | ไอเทมมี Timer นับถอยหลัง หมดเวลากลายเป็นรางวัลพื้นฐาน หรือซื้อด้วย Hard Currency |
| **Wildcards / Jokers** | ไอเทมพิเศษใช้แทนไอเทมใดก็ได้ในสายการผสม เพื่อรวมร่างและเลื่อนระดับ |

### 1.2 Generator & Spawning Logic

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Generators / Producers** | แหล่งกำเนิดไอเทม แบ่งเป็น Energy-consuming และ Auto-producing (ผลิตเองเมื่อเวลาผ่านไป) |
| **Producer Upgrades & Merging** | ตัวผลิตผสมกันเพื่อเลื่อนระดับ เพิ่ม Drop Rates ของไอเทมระดับสูง |
| **Producer Retirement** | ตัวผลิตรุ่นเก่าหยุดทำงานเมื่อถึงจุดที่กำหนด ถูกย้ายเข้าโกดังเพื่อหลีกทางให้สายใหม่ |
| **Spawning Logic (RNG)** | ระบบ Weighted Randomness กำหนดประเภทและเลเวลไอเทมที่ดร็อป ควบคุมเปอร์เซ็นต์จาก Backend |

### 1.3 Player Assistance & Board Management

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Inventory / Storage** | พื้นที่พักไอเทมแยกจากกระดาน อัปเกรดด้วยสกุลเงินเพื่อเพิ่มช่องเก็บของ |
| **Reward Queue / Inbox System** | พื้นที่จัดเก็บชั่วคราว (Pouch) แบบ FIFO/LIFO เมื่อกระดานเต็ม ผู้เล่นกดดึงไอเทมลงกระดานได้เมื่อมีช่องว่าง |
| **Undo System** | ระบบ Stack/History ย้อนกลับการกระทำล่าสุด (เช่น กู้คืนไอเทมที่เผลอขาย) |
| **Board Boosters** | เครื่องมือพิเศษปรับแต่งกระดาน เช่น กรรไกรแยกไอเทม (Splitter) หรือเครื่องมือลบไอเทมทิ้ง |
| **Time Skips & Cooldown Manipulation** | ไอเทมพิเศษ (เช่น นาฬิกาทราย) เร่ง Cooldown ของ Generator แบบเจาะจงตัวหรือทั้งกระดาน |
| **Backend Result Validation** | ระบบ Anti-Cheat ตรวจสอบข้อมูลกระดานผ่าน Checksum/Hash Validation จาก Client ส่งให้ Server |

---

## 2. 📖 Meta-Game & Narrative

> หมวดหมู่นี้คือ "เหตุผล" ที่ผู้เล่นเล่นเกม (Core Hook) — ตัวขับเคลื่อนเป้าหมายระยะยาว และการกลับมาเล่นซ้ำ (Retention)

### 2.1 Narrative & Storytelling

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Storytelling & Dialogue System** | ระบบ Visual Novel ใน Unity รองรับกล่องข้อความ, Portrait, Typewriter Effect, เปลี่ยนอารมณ์สีหน้า (Expressions), เก็บประวัติการอ่าน |
| **Chapter / Episode Progression** | แบ่งเนื้อเรื่องเป็นบท (Chapters) พร้อมหน้าต่างสรุปเป้าหมายภาพรวม |
| **Cutscene Sequencer** | ควบคุมการแสดงเหตุการณ์สำคัญ — แพนกล้อง, VFX, เปลี่ยนฉากพื้นหลังตามเนื้อเรื่อง |
| **Character / NPC Profiles & Passive Bonuses** | สะสมระดับความสัมพันธ์ปลดล็อกเนื้อเรื่องเสริมและบัฟติดตัว (Passive Bonuses) — Buff Calculation Engine คำนวณจาก Backend |

### 2.2 Progression & Town Building

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Renovation & Customization** | ซ่อมแซมพื้นที่ด้วยตั๋ว/ดาว เลือกดีไซน์ตกแต่ง 3 รูปแบบต่อจุด ผ่าน Fixed-point Swapping Logic และ Unlock Node Dependency |
| **Dynamic Task Board / Quest Log** | ศูนย์กลางแสดงเป้าหมาย กด Navigate/Camera Pan ไปยังจุดซ่อมบนฉากหลัง ทำงานร่วมกับ Quest Condition Checking & Reward Issuer ทาง Server |
| **Collection Book / Sticker Albums** | เปิดซองสุ่มการ์ดตามซีซัน สะสมครบเซ็ตแลกรางวัลใหญ่ รองรับ Trade การ์ดซ้ำ ขับเคลื่อนด้วย Gacha Logic และ Wildcard Trade |
| **Player Level & XP** | ระบบคำนวณประสบการณ์จากการทำภารกิจ เพื่อปลดล็อกฟีเจอร์, กระดานส่วนขยาย, หรือเนื้อเรื่องบทใหม่ |

---

## 3. ⚙️ Economy, Flow & Live-Ops

> หมวดหมู่นี้ครอบคลุมระบบตัวเลข, การสร้างรายได้, และกิจกรรมที่ทำให้เกมดำเนินไปได้อย่างต่อเนื่อง

### 3.1 Economy & Resource Management

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Energy System** | ทรัพยากรหลักจำกัด Pacing การเล่น ระบบนับเวลาฟื้นฟู (Timer) และคำนวณ Offline Progression ควบคุมผ่าน Server-authoritative Wallet Manager |
| **Order / Task Fulfillment** | รับออเดอร์จากลูกค้า ตรวจสอบเงื่อนไขไอเทมบนกระดาน (Validation) มอบรางวัลเป็น Soft/Hard Currency หรือตั๋วเนื้อเรื่อง |
| **Currencies Management** | ระบบดูแลกระเป๋าเงิน — เหรียญ (Soft), เพชร (Hard), ดาว/ตั๋ว (Meta) |
| **Idle / Passive Income** | สิ่งก่อสร้างผลิตทรัพยากรให้กดรับตามเวลาที่กำหนด ผ่าน Production Timestamp Checking อย่างรัดกุม |

### 3.2 User Flow & Onboarding

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Tutorial & Onboarding** | ระบบควบคุมลำดับการสอน (Force Clicks) และ Feature Gating ช่วงต้นเกม ดำเนินการผ่าน Onboarding State Machine รองรับ Edge Cases |
| **Daily Tasks** | ระบบเควสต์ระยะสั้นรีเซ็ตทุกวันตาม Server Time กระตุ้นให้ล็อกอินต่อเนื่อง (DAU) |

### 3.3 Monetization & Social Systems

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Shop & IAP** | ร้านค้าเชื่อมต่อ SDK ขายแพ็กเกจเพชร, พลังงาน, ไอเทมโปรโมชัน พร้อมระบบ Receipt Validation Microservice ป้องกันใบเสร็จปลอม |
| **Ad Placements** | จุดให้ดูโฆษณาแลกของรางวัล (เร่งคูลดาวน์, พลังงานฟรี) ผ่าน Ad Mediation SDK และ Backend S2S Webhook ยืนยันการดูจบ |
| **Piggy Bank / Safe Box** | ระบบสะสมเพชร/เหรียญจากการเล่น ต้องจ่ายเงินจริง (IAP) ทุบกระปุกรับรางวัลทั้งหมด ขับเคลื่อนด้วย Progression Tracker & Paywall Logic |
| **Season Pass / Battle Pass** | รางวัลความก้าวหน้ารายเดือน แบ่งสายฟรี (Free Track) และสายพรีเมียม (Premium Track) |
| **Social, Guild & Friend Systems** | ระบบค้นหา/เข้าร่วมกิลด์, ขอ/ส่งพลังงาน, เพิ่มเพื่อนส่งของขวัญรายวัน, Leaderboards — ทำงานด้วย SignalR สำหรับ Real-time Chat และ Social Graph Database |

### 3.4 Daily & Monthly Retention Systems

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Daily Login Calendar** | ระบบล็อกอินสะสม 7 / 28 วัน รับของรางวัลตามลำดับขั้น ของใหญ่ในวันสุดท้าย |
| **Daily Roulette / Lucky Spin** | ให้สุ่มวงล้อฟรีวันละครั้ง รองรับหมุนเพิ่มผ่านการดูโฆษณา |
| **Monthly Login Pass** | แจกของรางวัลระยะยาวตลอดเดือน (มักเป็น Cosmetic) กระตุ้น D30 Retention |
| **Time-Gated Flash Events** | กิจกรรมพิเศษเปิดตามช่วงเวลา เช่น แฮปปี้อาวเออร์ช่วงสุดสัปดาห์ หรือมินิอีเวนต์เพื่อกระตุ้นยอดผู้เล่นในเวลาเป้าหมาย |

### 3.5 Live Operations & Dynamic Content

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **Economy Tuning & Reward Management** | ปรับอัตราการดร็อปตัวผลิต, เปลี่ยนของรางวัลจากเควสต์/กิจกรรม แบบ Real-time ขับเคลื่อนโดย JSON Drop Table Editor และ Live Database Sync |
| **Dynamic Offers & Segmentation** | ยิงป๊อปอัปโปรโมชัน/แพ็กเกจราคาต่างกัน โดยวิเคราะห์จากพฤติกรรมการใช้จ่ายผ่าน Segmentation Trigger Logic |
| **Remote Config & A/B Testing** | ปรับแก้พารามิเตอร์เกมผ่านเซิร์ฟเวอร์ และสุ่มแบ่งกลุ่มผู้เล่นทดสอบฟีเจอร์ใหม่ด้วย A/B Testing Distribution Routing |
| **Localization Admin Tool** | แก้ไขคำแปลภาษาผ่าน Web Admin ผลักดันเข้าเกมโดยตรงด้วย CMS Language Versioning |
| **OTA Updates & Event Scheduler** | โหลดแพทช์รูปภาพ/อีเวนต์ใหม่เข้าเครื่องโดยไม่ต้องผ่าน Store ตั้งเวลาเปิด-ปิดกิจกรรมแบบสากลผ่าน UTC Cron Job Trigger |
| **Push Notification Campaigns** | ยิงข้อความแจ้งเตือนเข้ามือถือ ทั้งจากการตั้งเวลาในเครื่อง (คูลดาวน์เสร็จ) และจากการสั่งการเจาะจงกลุ่มเป้าหมาย ด้วย Push Message Composer และ FCM Integration |

---

## 4. 🛡️ QA, Optimization & Bug Fixing

> หมวดหมู่นี้เป็นขั้นตอนสำคัญเพื่อให้ตัวเกมได้คุณภาพระดับ Commercial ปราศจากบั๊กและลื่นไหลที่สุด

### 4.1 Frontend & Backend Polish

| ด้าน | รายละเอียด |
|------|-----------|
| **Frontend Optimization** | Profiling อย่างละเอียด, แก้ Memory Leak, ลดเวลาโหลดฉากให้สั้นที่สุด, ปรับ Graphic Edge Cases ให้รองรับมือถือทุกรุ่น |
| **Backend Hardening** | Load Testing & Stress Test รองรับผู้เล่นจำนวนมาก, Security Audit อุดช่องโหว่, ปรับจูน Redis/Database ให้ทำงานได้ไวขึ้น |

---

## 📊 Feature Summary Table

| # | หมวด | หมวดย่อย | Key Components |
|---|------|----------|----------------|
| 0 | **Infrastructure & Base Architecture** | Core Systems & Frameworks | Advanced UI Framework, Dynamic Theming, Localization, Audio Pooling |
| 0 | | Backend & Cloud | Modular Monolith (.NET C#), MongoDB, Redis, JWT, OTA Pipeline |
| 1 | **Gameplay & Core Board Mechanics** | Board Interactions | Grid System, Dynamic Expansion, Merge Chains, Obstacles, Bubbles, Jokers |
| 1 | | Generators & Spawning | Producers, Upgrades, Retirement, Weighted RNG |
| 1 | | Player Assistance | Inventory, Reward Queue, Undo, Board Boosters, Time Skips, Anti-Cheat |
| 2 | **Meta-Game & Narrative** | Narrative | Visual Novel Dialogue, Chapters, Cutscenes, Character Profiles |
| 2 | | Progression & Town | Renovation, Quest Board, Collection Albums, Player Level |
| 3 | **Economy, Flow & Live-Ops** | Economy | Energy System, Order Fulfillment, Currencies, Idle Income |
| 3 | | Onboarding | Tutorial (Force Clicks), Feature Gating, Daily Tasks |
| 3 | | Monetization | Shop & IAP, Rewarded Ads, Piggy Bank, Season Pass, Guilds & Social |
| 3 | | Retention | Daily Login, Roulette, Monthly Pass, Flash Events |
| 3 | | Live Operations | Economy Tuning, Dynamic Offers, Remote Config, OTA, Push Notifications |
| 4 | **QA, Optimization & Bug Fixing** | Frontend | Profiling, Memory Leak Fix, Load Time Optimization, Graphic Edge Cases |
| 4 | | Backend | Load Testing, Security Audit, Redis/DB Tuning |