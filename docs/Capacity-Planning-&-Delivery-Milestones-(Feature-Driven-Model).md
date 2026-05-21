---
name: Capacity Planning & Delivery Milestones (Feature-Driven Model)
description: Planning, delivery milestones for feature driven model
---

# Capacity Planning & Delivery Milestones (Feature-Driven Model)

> **Project:** Merge-2 Game
> **Team Structure:** Feature-Driven Full-Stack (1 Infra + N Feature Devs)
> **Basis:** 687 Man-Days (MD)

### Work Distribution

| ส่วนงาน | Man-Days | รายละเอียด |
|---------|----------|-----------|
| **Infrastructure & LiveOps (1 คนคงที่)** | 140 MD | Phase 0 BE, Phase 5 Web Admin, ระบบ Server |
| **Full-Stack Feature Devs (คนที่เหลือ)** | 547 MD | รับผิดชอบทั้ง Unity + API สำหรับ Phase 1–4 |
| **Assumption:** 1 เดือน = 20 วันทำงาน/คน | | |

---

## 📌 Milestone Definitions

| Milestone | คำอธิบาย | Phases |
|----------|---------|--------|
| **M1: Playable Prototype** | ระบบกระดานหลักเล่นได้จริง ลากผสมไอเทมและกฎพื้นฐานทำงานสมบูรณ์ | Phase 0 + 1 |
| **M2: Vertical Slice** | ลูปเกมสมบูรณ์ — เล่นกระดาน → ส่งออเดอร์ → ซ่อมเมือง → เนื้อเรื่อง | Phase 2 + 3 |
| **M3: Alpha Build** | ฟีเจอร์ครบถ้วน ระบบทำเงิน (IAP/Ads), กิลด์ และแชททำงาน | Phase 4 |
| **M4: Beta & Commercial Ready** | ระบบหลังบ้านสมบูรณ์ แก้บั๊ก ปรับจูนประสิทธิภาพ พร้อมปล่อยสโตร์ | Phase 5 + 6 |

---

## ⭐ ทีม 5 คน (1 Infra + 4 Full-Stack Feature Devs)

| รายการ | ค่า |
|--------|-----|
| **ระยะเวลาทำงานจริง** | 141 MD (~7–7.5 เดือน) |
| **ความเร็วเฉลี่ย** | Feature Devs = 80 MD/เดือน \| Infra = 20 MD/เดือน |
| **1 Infra/LiveOps** | วางโครงสร้างฐานข้อมูล, ระบบความปลอดภัย, พัฒนา LiveOps Web Admin |
| **4 Feature Devs** | แบ่งงานตาม Phase/กลุ่มฟีเจอร์ใหญ่ (คนละ ~137 MD) รับผิดชอบทั้ง Unity และ API สำหรับฟีเจอร์นั้นๆ |

### 📅 Milestone Timeline

| Milestone | ช่วงเวลา | สถานะ |
|-----------|---------|--------|
| **M1** | เดือนที่ 1 – 2.5 | ทุกคนจบโครงสร้างพื้นฐานและระบบกระดานพร้อมกัน ลื่นไหลเพราะไม่ต้องรอ API ข้ามแผนก |
| **M2** | เดือนที่ 2.5 – 4.5 | ระบบเมืองและเนื้อเรื่องเสร็จสมบูรณ์ ทดสอบ Flow การเล่นได้ทันที |
| **M3** | เดือนที่ 4.5 – 6 | ระบบ Monetization และ Social ทำงานเสร็จสิ้น |
| **M4** | เดือนที่ 6 – 7.5 | แก้บั๊กและขัดเกลาขั้นสุดท้าย (ทุกคนจบงานพร้อมกันพอดี) |

### ✅ ข้อดี

| ข้อดี | รายละเอียด |
|-------|-----------|
| **Perfect Balance** | สัดส่วนปริมาณงานต่อจำนวนคนสมดุลที่สุด ทุกคนจบงานในเวลาไล่เลี่ยกัน |
| **Zero Integration Delay** | ลดเวลาที่สูญเสียกับการรอ API หรือสื่อสารผิดพลาดระหว่างแผนกหน้าบ้าน/หลังบ้าน |

### ❌ ข้อเสีย

| ข้อเสีย | รายละเอียด |
|---------|-----------|
| **High Merge Conflicts** | ความเสี่ยงสูงที่ 4 โปรแกรมเมอร์แก้โปรเจกต์ Unity พร้อมกัน → ต้องมีวินัยในการแยก Prefab/Scene อย่างเคร่งครัด |
| **Code Style Variance** | ไม่มี Lead คุมมาตรฐาน → โค้ด API ของแต่ละฟีเจอร์อาจมีรูปแบบแตกต่างกันเกินไป |

---

## 🏃 ทีม 4 คน (1 Infra + 3 Full-Stack Feature Devs)

| รายการ | ค่า |
|--------|-----|
| **ระยะเวลาทำงานจริง** | 182 MD (~9–9.5 เดือน) |
| **ความเร็วเฉลี่ย** | Feature Devs = 60 MD/เดือน \| Infra = 20 MD/เดือน |
| **1 Infra/LiveOps** | รับผิดชอบงานโครงสร้างหลักและเครื่องมือหลังบ้าน |
| **3 Feature Devs** | แบ่งกลุ่มฟีเจอร์ (เช่น Gameplay / Meta/Story / Social/Economy) |

### 📅 Milestone Timeline

| Milestone | ช่วงเวลา | สถานะ |
|-----------|---------|--------|
| **M1** | เดือนที่ 1 – 3 | ระบบกระดานเล่นได้จริง |
| **M2** | เดือนที่ 3 – 6 | ลูปสร้างเมืองและเนื้อเรื่องเสร็จสิ้น |
| **M3** | เดือนที่ 6 – 8 | ระบบทำเงินและสังคมเสร็จสมบูรณ์ Infra เสร็จก่อนและสลับมาช่วยเก็บงานส่วนอื่น |
| **M4** | เดือนที่ 8 – 9.5 | ขัดเกลาและเก็บรายละเอียดเพื่อความพร้อม Launch |

### ✅ ข้อดี

| ข้อดี | รายละเอียด |
|-------|-----------|
| **Resilient Infrastructure** | Infra มีเวลาเหลือทำ Code Review และตรวจสอบความปลอดภัยของ API ที่ Feature Devs เขียน |
| **Faster than Traditional Model** | เร็วกว่าแยกทีม FE/BE แบบเดิมถึง 2 เดือน เพราะลดคอขวดฝั่ง Unity |

### ❌ ข้อเสีย

| ข้อเสีย | รายละเอียด |
|---------|-----------|
| **Infra Underutilization** | ช่วงกลางโปรเจกต์ Infra อาจเสร็จเร็วกว่าคนอื่น ต้องมีแผนงานสำรองให้ช่วยซัพพอร์ต |
| **Complex Context Switching** | Feature Devs รับผิดชอบเนื้องานกว้างขึ้น → โฟกัสได้ยากเมื่อต้องแก้บั๊กทั้ง FE และ BE พร้อมกัน |

---

## 🚶 ทีม 3 คน (1 Infra + 2 Full-Stack Feature Devs)

| รายการ | ค่า |
|--------|-----|
| **ระยะเวลาทำงานจริง** | 273 MD (~13.5–14 เดือน) |
| **ความเร็วเฉลี่ย** | Feature Devs = 40 MD/เดือน \| Infra = 20 MD/เดือน |
| **1 Infra/LiveOps** | รับผิดชอบงาน Infrastructure ทั้งหมด |
| **2 Feature Devs** | รับภาระหนักในการทำทุกฟีเจอร์ตั้งแต่ต้นจนจบ (เฉลี่ยคนละ 273 MD) |

### 📅 Milestone Timeline

| Milestone | ช่วงเวลา | สถานะ |
|-----------|---------|--------|
| **M1** | เดือนที่ 1 – 4 | Prototype ใช้เวลานานกว่าแบบอื่น เพราะมีคนทำหน้าจอน้อย |
| **M2** | เดือนที่ 4 – 8.5 | ระบบ Meta-game เสร็จสิ้น (Infra จะเริ่มว่างช่วงท้าย Milestone นี้) |
| **M3** | เดือนที่ 8.5 – 11.5 | ระบบ Alpha เสร็จสิ้นภายใต้การช่วยซัพพอร์ตอย่างหนักจาก Infra |
| **M4** | เดือนที่ 11.5 – 13.5 | เก็บงานและ Optimize ขั้นสุดท้าย |

### ✅ ข้อดี

| ข้อดี | รายละเอียด |
|-------|-----------|
| **Consistent Architecture** | จำนวนคนน้อย → Coding Style มีความเป็นเอกภาพสูง |
| **Simple Management** | การประสานงานทำได้ง่าย โอกาสเกิด Merge Conflict ใน Unity ต่ำที่สุด |

### ❌ ข้อเสีย

| ข้อเสีย | รายละเอียด |
|---------|-----------|
| **High Burnout Risk** | Feature Devs แบกเนื้องานมหาศาลเป็นระยะเวลานานกว่า 1 ปี |
| **Bus Factor** | Full-Stack Dev คนใดลาออก → ความรู้ในฟีเจอร์นั้นๆ หายไปทันทีครึ่งหนึ่งของโปรเจกต์ |

---

## 🔄 Review & Iteration Buffer (15–20% ต่อรอบ)

| Milestone | Buffer | จุดประสงค์ | Overhead ที่อาจเกิด |
|-----------|--------|-----------|-------------------|
| **M1 Review Buffer** | ~15–20% ของ M1 | ทดสอบการลากผสมไอเทม ปรับ Game Feel, Snapping, แสงเสียง จนรู้สึก "ลากเพลินจนหยุดไม่ได้" | แก้ลอจิกกระดาน ปรับสคริปต์ ตัวเลข Drop Rate จากตู้ใหม่ทั้งหมด |
| **M2 Review Buffer** | ~15–20% ของ M2 | Internal Testing ทดสอบ Flow เล่นสลับระหว่างกระดานกับหน้าแต่งเมือง | ออเดอร์ยากเกินไป/ใช้พลังงานเยอะ → รื้อ Flow UI + แก้ Economy Tuning ใหม่หมด |
| **M3 Review Buffer** | ~15–20% ของ M3 | External Playtest ดูว่าคนเล่น "งง" หรือไม่ | ผู้เล่นหาปุ่มเติมเงินไม่เจอ/ไม่เข้าใจ Tutorial หรือระบบกิลด์ → รื้อ UI Layout เพิ่ม Spotlight |
| **M4 Review Buffer** | ใช้ QA Buffer 20% ที่ประเมินไว้ | Soft Launch เปิดลองตลาดจริงในบางประเทศ | แก้เซิร์ฟเวอร์หน่วง/แชทพร้อมกัน ปรับ Security ป้องกัน Time-lapse cheat สเกลเซิร์ฟเวอร์รับโหลด |

---

## 💡 สรุปผลกระทบภาพรวม

| รายการ | ค่า |
|--------|-----|
| **ยอดเดิม (Development Time)** | 687 MD |
| **Overhead Iteration (15–20% ต่อรอบ)** | ~150–200 MD |
| **รวมภาพรวม** | **~840–890 MD** |

---

## 📊 Feature-Driven vs Traditional Model Comparison

| ทีม | โมเดล | ระยะเวลา | ข้อดีหลัก | ข้อเสียหลัก |
|-----|------|---------|----------|-----------|
| **3 คน** | Feature-Driven | ~13.5–14 เดือน | Consistent Architecture, Simple Management | High Burnout, Bus Factor |
| **4 คน** | Feature-Driven | ~9–9.5 เดือน | Resilient Infrastructure, Faster than Traditional | Infra Underutilization, Context Switching |
| **5 คน** | Feature-Driven | **~7–7.5 เดือน** | Perfect Balance, Zero Integration Delay | High Merge Conflicts, Code Style Variance |
| **3 คน** | Traditional (จาก docs ก่อนหน้า) | ~13–14 เดือน | Architecture Integrity, Low Merge Conflicts | Bus Factor, Resource Imbalance |
| **4 คน** | Traditional | ~10.5–11 เดือน | Backend Redundancy, Zero API Wait | Frontend Bottleneck, Out-of-Sync |
| **5 คน** | Traditional | ~7–7.5 เดือน | Optimal Balancing, Parallel Dev | Communication Overhead, Merge Conflicts |