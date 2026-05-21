---
name: High-Level Feature Development Estimation (Risk-Adjusted)
description: Estimation development document
---

# High-Level Feature: Development Estimation (Risk-Adjusted)

> **Project:** Merge-2 Game
> **Target Milestone:** Full Commercial Launch
> **Target Audience:** Management, Technical Producer, Lead Engineer

---

## 📋 Estimation Parameters

| พารามิเตอร์ | รายละเอียด |
|------------|-------------|
| **ทรัพยากรบุคคล** | 1 Developer (Full-Stack: Frontend, Backend, Web/DevOps) |
| **Frontend** | Unity Engine |
| **Backend** | .NET C#, MongoDB, Redis, SignalR, RabbitMQ |
| **Cloud/Infrastructure** | Tencent Cloud, CDN |
| **Frontend Quality** | High Polish, Game Feel, Custom Shaders, Reusable Architecture |
| **Backend Quality** | Modular Monolith, SignalR/RabbitMQ เฉพาะส่วนที่จำเป็น |
| **หน่วยประเมิน** | Man-Day (MD) = การทำงาน 8 ชั่วโมง/วัน |

> **หมายเหตุ:** การประเมินรวมเวลาทำ Game Feel, Asset Integration, VFX และ SFX เข้าไปในแต่ละฟีเจอร์แล้ว

---

## Phase 0: Infrastructure & Base Architecture

> งานวางโครงสร้าง

| ฟีเจอร์ / ระบบ | Unity (FE) | BE / Infra | รวม (MD) | คำอธิบาย |
|----------------|-----------|------------|----------|---------|
| Advanced UI Framework & VFX Pooling | 25 | 0 | **25** | วางโครงสร้าง UI รองรับทุกขนาดหน้าจอ (Safe Area), ระบบ Object Pooling สำหรับ VFX ให้เกมลื่นไหล |
| Dynamic Theming & Asset Grouping Strategy | 25 | 3 | **28** | ระบบเปลี่ยนตีมเกม + Addressables (Chunking) ป้องกัน Memory Leak และไฟล์บวม |
| Localization Core System | 8 | 4 | **12** | รองรับหลายภาษา, Dynamic Fonts, ดึง Text จากเซิร์ฟเวอร์ |
| Audio Management & Pooling System | 8 | 0 | **8** | ระบบเสียง BGM/SFX, Audio Ducking, ตั้งค่าเปิด-ปิดเสียงแยกส่วน |
| Backend Base Setup | 0 | 12 | **12** | ตั้งค่าเซิร์ฟเวอร์, ฐานข้อมูล, ระบบล็อกอินผู้เล่น |
| Infra & Addressables Pipeline Setup | 8 | 13 | **21** | วางระบบคลาวด์ + ท่อดาวน์โหลด OTA (รองรับ Load/Unload Memory ที่ซับซ้อน) |
| **Sub-Total** | **74** | **32** | **106** | |

---

## Phase 1: Gameplay & Core Board Mechanics

> ระบบกระดานหลัก

| ฟีเจอร์ / ระบบ | Unity (FE) | BE (Logic) | รวม (MD) | คำอธิบาย |
|----------------|-----------|------------|----------|---------|
| Grid System & Interactions | 15 | 2 | **17** | ระบบกระดาน, การลากวาง, Custom Logic รองรับ VFX/SFX เวลากระทบกัน |
| Merge Logic & Items | 18 | 3 | **21** | กฎการผสม, เอฟเฟกต์แสง/เสียงตอนเปลี่ยนร่าง, ไอเทมติดหยากไย่, ฟองสบู่ |
| Generators & RNG Spawning | 10 | 5 | **15** | ตู้ผลิตไอเทม, การสุ่มของที่ดร็อป, การอัปเกรดตู้ผลิต |
| Board Management | 12 | 5 | **17** | โกดังเก็บของ, ถุงคิวของรางวัล, ระบบย้อนกลับ, ไอเทมช่วยเหลือบนกระดาน |
| Backend Result Validation | 3 | 8 | **11** | ระบบส่งผลลัพธ์การเล่นไปให้เซิร์ฟเวอร์ตรวจเช็คป้องกันการโกง |
| **Sub-Total** | **58** | **23** | **81** | |

---

## Phase 2: Meta-Game & Narrative

> ระบบเนื้อเรื่องและเป้าหมาย

| ฟีเจอร์ / ระบบ | Unity (FE) | BE (Logic) | รวม (MD) | คำอธิบาย |
|----------------|-----------|------------|----------|---------|
| Narrative System | 20 | 5 | **25** | ระบบเนื้อเรื่องรองรับทางเลือก (Branching), History Log, Tool ฝั่ง Unity |
| Renovation & Customization | 24 | 8 | **32** | ระบบซ่อมแซมสิ่งก่อสร้างแบบ Fixed-point, เงื่อนไขปลดล็อกซับซ้อน, Dynamic UI |
| Task Board / Quest Log | 12 | 8 | **20** | กระดานส่งออเดอร์ให้ลูกค้าที่มีลำดับความสัมพันธ์ของเควสต์ซ้อนกัน |
| Character Profiles & Passive | 10 | 6 | **16** | หน้าต่างสะสมความสัมพันธ์ตัวละคร, ปลดล็อกเนื้อเรื่อง, คำนวณบัฟหลายรูปแบบ |
| Collection Book / Albums | 15 | 10 | **25** | สมุดสะสมการ์ด/สติกเกอร์, แอนิเมชันเปิดซอง, ระบบคำนวณแต้มแลกการ์ด (Wildcard) |
| **Sub-Total** | **81** | **37** | **118** | |

---

## Phase 3: Economy, Flow & Retention

> ระบบเศรษฐกิจและรักษาผู้เล่น

| ฟีเจอร์ / ระบบ | Unity (FE) | BE (Logic) | รวม (MD) | คำอธิบาย |
|----------------|-----------|------------|----------|---------|
| Energy & Currencies System | 6 | 9 | **15** | ระบบจัดการพลังงาน, เหรียญ, เพชร, คำนวณเวลาออฟไลน์อย่างปลอดภัยบน Database |
| Passive / Idle Income | 5 | 5 | **10** | สิ่งก่อสร้างผลิตของรางวัลให้กดรับตามเวลา, UI เอฟเฟกต์บินเข้ากระเป๋า |
| Daily/Monthly Retention | 12 | 10 | **22** | กระดานเช็คอินแบบ Streak, วงล้อสุ่มเสี่ยงโชคพร้อมแอนิเมชัน |
| Tutorial & Onboarding | 25 | 0 | **25** | ระบบสอนเล่นแบบ State Machine, รองรับ Edge cases, บังคับมือชี้, Feature Gating |
| **Sub-Total** | **48** | **24** | **72** | |

---

## Phase 4: Monetization & Social Systems

> ระบบรายได้และสังคม

| ฟีเจอร์ / ระบบ | Unity (FE) | BE (Logic) | รวม (MD) | คำอธิบาย |
|----------------|-----------|------------|----------|---------|
| Shop & IAP Integration | 14 | 12 | **26** | หน้าร้านค้าพรีเมียม (Shine VFX), ตรวจสอบการจ่ายเงินจริง (Receipt Validation) |
| Ad Placements & Mediation | 9 | 5 | **14** | ต่อระบบ Mediation Platform, แก้ไขปัญหา Plugin/Build Conflict เชิงลึก |
| Piggy Bank & Battle Pass | 12 | 10 | **22** | กระปุกออมสินพร้อมแอนิเมชันทุบหมู, ระบบหลอด Battle Pass สายฟรี/พรีเมียม |
| Guild & Friend System | 18 | 20 | **38** | โครงสร้างกิลด์แบบเต็ม (แชท, Role, ขอบริจาคพลังงาน, Real-time Sync) |
| Leaderboard Ranking | 8 | 10 | **18** | กระดานจัดอันดับ Dynamic, รองรับ Tournament ย่อยๆ |
| **Sub-Total** | **61** | **57** | **118** | |

---

## Phase 5: Custom Live Operations (Internal Tool)

> ระบบจัดการหลังบ้าน

| ฟีเจอร์ / ระบบ | Web Front | Web Back | รวม (MD) | คำอธิบาย |
|----------------|----------|----------|----------|---------|
| Economy Tuning & Reward | 8 | 8 | **16** | หน้าเว็บแอดมินปรับเปอร์เซ็นต์ดร็อปไอเทม + เปลี่ยนของรางวัลแบบ Data-Driven |
| Dynamic Offers & Special Packs | 10 | 10 | **20** | ระบบตรรกะยิงโปรโมชันแพ็กเกจลับ (Hot Pack, Limited time) ตามกลุ่มผู้เล่น |
| Remote Config & A/B Testing | 7 | 8 | **15** | ระบบปรับ Parameter เกมเพื่อทดสอบบาลานซ์ผู้เล่นกลุ่ม A/B |
| Localization Admin Tool | 5 | 5 | **10** | หน้าต่างให้ Translator เพิ่ม/แก้ไขคำแปล Push อัปเดตเข้าเกมได้ทันที |
| OTA & Event Scheduler | 6 | 6 | **12** | หน้าเว็บโหลดแพทช์ + ตั้งเวลาเปิด/ปิดกิจกรรมอัตโนมัติตาม UTC |
| Push Notifications | 2 | 3 | **5** | ระบบส่งข้อความแจ้งเตือนเข้ามือถือผู้เล่น |
| **Sub-Total** | **38** | **40** | **78** | |

---

## Phase 6: QA, Optimization, Polish & Bug Fixing

> รวม 20% Buffer ของ Development Time (573 MD) เพื่อครอบคลุม Optimization, การทดสอบ Component เชิงลึก, ตรวจสอบภาษา, แอนิเมชัน และการขัดเกลาขั้นสุดท้าย

| รายการ | Unity (FE) | BE / Web | รวม (MD) | คำอธิบาย |
|--------|-----------|----------|----------|---------|
| QA, Optimization & Bug Fixing Buffer (20%) | 65 | 50 | **115** | เผื่อความเสี่ยง, Performance Tuning, แก้ Memory Leak, ลดเวลาโหลด, Graphic Edge Cases, เก็บรายละเอียดทั้งหมด |
| **Sub-Total** | **65** | **50** | **115** | |

---

## 📈 Grand Total Summary

| สรุป | ค่า |
|-----|-----|
| **Unity Frontend** | 387 Man-Days |
| **Backend, Web Admin & Infra** | 301 Man-Days |
| **รวมเวลาพัฒนาทั้งสิ้น** | **688 Man-Days** |

### ⏱️ Timeline Projection

| จำนวน Developer | ระยะเวลาโดยประมาณ |
|----------------|-----------------|
| 1 Developer (Full-Stack) | ~34 เดือน |
| 4–5 Engineers (แนะนำ) | **6–8 เดือน** |

> **หมายเหตุ:** หากต้องการเร่งความเร็วเป็น 6–8 เดือน จำเป็นต้องใช้ทีม Engineer ประมาณ 4–5 คน

---

## 📊 Phase Summary Table

| Phase | หมวด | FE (MD) | BE/Web (MD) | รวม (MD) |
|------|------|---------|------------|---------| 
| 0 | Infrastructure & Base Architecture | 74 | 32 | **106** |
| 1 | Gameplay & Core Board Mechanics | 58 | 23 | **81** |
| 2 | Meta-Game & Narrative | 81 | 37 | **118** |
| 3 | Economy, Flow & Retention | 48 | 24 | **72** |
| 4 | Monetization & Social Systems | 61 | 57 | **118** |
| 5 | Custom Live Operations (Internal Tool) | 38 | 40 | **78** |
| 6 | QA, Optimization & Bug Fixing (20% Buffer) | 65 | 50 | **115** |
| | **รวม** | **325** | **263** | **688** |