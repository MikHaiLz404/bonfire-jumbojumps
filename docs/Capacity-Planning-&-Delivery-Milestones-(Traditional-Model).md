---
name: Capacity Planning & Delivery Milestones (Traditional Model)
description: Planning, delivery milestones for traditional driven model
---

# Capacity Planning & Delivery Milestones (Traditional Model)

> **Project:** Merge-2 Game
> **Basis:** 687 Man-Days (MD)
> **Frontend (Unity + Web FE):** 423 MD (~60%)
> **Backend & Infrastructure:** 264 MD (~40%)
> **Assumption:** 1 เดือน = 20 วันทำงาน/คน

---

## 📌 Milestone Definitions

| Milestone | คำอธิบาย | Phases |
|----------|---------|--------|
| **M1: Playable Prototype** | ระบบกระดานหลักเล่นได้จริง | Phase 0 + 1 |
| **M2: Vertical Slice** | ลูปเกมสมบูรณ์ — เล่นกระดาน → ส่งออเดอร์ → ซ่อมเมือง → เนื้อเรื่องเดิน | Phase 2 + 3 |
| **M3: Alpha Build** | ฟีเจอร์ครบถ้วน ระบบทำเงิน (IAP/Ads), กิลด์ และแชททำงาน | Phase 4 |
| **M4: Beta & Commercial Ready** | ระบบหลังบ้านสมบูรณ์ แก้บั๊ก ปรับจูนประสิทธิภาพ พร้อมปล่อยสโตร์ | Phase 5 + 6 |

---

## 👨‍💻 ทีม 3 คน (2 Unity Devs / 1 Backend Dev)

| รายการ | ค่า |
|--------|-----|
| **ระยะเวลาทำงานจริง** | 264 MD (~13–14 เดือน) |
| **ความเร็วเฉลี่ย** | FE = 40 MD/เดือน \| BE = 20 MD/เดือน |
| **Unity Devs (2 คน)** | แบ่งงาน FE ทั้งหมด (เฉลี่ยคนละ 211.5 MD) |
| **Backend Dev (1 คน)** | รับผิดชอบ Server, Database, Cloud, Web Admin ทั้งหมด (264 MD) |

### 📅 Milestone Timeline

| Milestone | ช่วงเวลา | สถานะ |
|-----------|---------|--------|
| **M1** | เดือนที่ 1 – 3.5 | งานสมดุลดีในช่วงแรก ระบบกระดานและตรรกะพื้นฐานเสร็จพร้อมกัน |
| **M2** | เดือนที่ 3.5 – 6.5 | ได้ตัวเกมที่ซ่อมเมืองและดำเนินเนื้อเรื่องได้ |
| **M3** | เดือนที่ 6.5 – 11.5 | ⚠️ ช่วงคอขวด: Backend 1 คนแบกงานระบบสังคมและทำเงินมหาศาล Unity Devs อาจมี Idle Time รอ API |
| **M4** | เดือนที่ 11.5 – 14 | เก็บงาน Web Admin และ Security จบโปรเจกต์ที่ 14 เดือน |

### ✅ ข้อดี

| ข้อดี | รายละเอียด |
|-------|-----------|
| **Architecture Integrity** | เซิร์ฟเวอร์มีคนคุมคนเดียว → ข้อมูลเป็นเอกภาพสูง |
| **Low Merge Conflicts** | แบ่งงาน FE ชัดเจน โค้ดชนกันใน Unity ต่ำ |

### ❌ ข้อเสีย

| ข้อเสีย | รายละเอียด |
|---------|-----------|
| **Bus Factor** | Backend คนเดียวลาออก → โปรเจกต์หยุดชะงักทันที |
| **Resource Imbalance** | งาน BE หนักกว่า FE มากในระยะยาว |

---

## 🏃 ทีม 4 คน (2 Unity Devs / 2 Backend Devs)

| รายการ | ค่า |
|--------|-----|
| **ระยะเวลาทำงานจริง** | 212 MD (~10.5–11 เดือน) |
| **ความเร็วเฉลี่ย** | FE = 40 MD/เดือน \| BE = 40 MD/เดือน |
| **Unity Devs (2 คน)** | รับผิดชอบงาน FE ทั้งหมด (เฉลี่ยคนละ 211.5 MD) |
| **Backend Devs (2 คน)** | แบ่งงาน Server Core + LiveOps Web Admin (เฉลี่ยคนละ 132 MD) |

### 📅 Milestone Timeline

| Milestone | ช่วงเวลา | สถานะ |
|-----------|---------|--------|
| **M1** | เดือนที่ 1 – 3.5 | Backend เสร็จก่อน ต้องรอ Unity ประกอบ UI + เอฟเฟกต์ |
| **M2** | เดือนที่ 3.5 – 6.5 | Backend เริ่ม API ระบบกิลด์รอไว้ Unity กำลังปั่นงานเมือง |
| **M3** | เดือนที่ 6.5 – 9 | Unity ประกอบระบบโซเชียลเข้ากับ API ที่ Backend เตรียมไว้ล่วงหน้า |
| **M4** | เดือนที่ 9 – 11 | Optimize + แก้บั๊ก จบที่ 11 เดือน |

### ✅ ข้อดี

| ข้อดี | รายละเอียด |
|-------|-----------|
| **Backend Redundancy & Scalability** | แยก Microservices (เช่น IAP Validation) ออกจากระบบหลักได้ Web Admin ทำควบคู่กันได้ |
| **Zero Waiting Time for API** | ฝั่ง Frontend มี API เชื่อมต่อพร้อมเสมอ ไม่ต้องรอคิว |

### ❌ ข้อเสีย

| ข้อเสีย | รายละเอียด |
|---------|-----------|
| **Frontend Bottleneck** | งาน Frontend (423 MD) กลายเป็นคอขวดหลัก — Backend จะเสร็จก่อนนานมาก |
| **Out-of-Sync Integration** | API ถูกพัฒนาทิ้งไว้นาน พอ Unity มาประกอบอาจพบ Bug หรือข้อมูลไม่ตรงกัน → Context-switch กลับมารื้อโค้ดเก่า |

---

## ⭐ ทีม 5 คน (3 Unity Devs / 2 Backend Devs)

| รายการ | ค่า |
|--------|-----|
| **ระยะเวลาทำงานจริง** | 141 MD (~7–7.5 เดือน) |
| **ความเร็วเฉลี่ย** | FE = 60 MD/เดือน \| BE = 40 MD/เดือน |
| **Unity Devs (3 คน)** | กระจายงานตาม Gameplay, Meta-game, System (คนละ 141 MD) |
| **Backend Devs (2 คน)** | กระจายงาน Backend + Web Admin (คนละ 132 MD) |

### 📅 Milestone Timeline

| Milestone | ช่วงเวลา | สถานะ |
|-----------|---------|--------|
| **M1** | เดือนที่ 1 – 2.5 | งานวิ่งขนานกันได้ดีที่สุด ระบบกระดานและ Database เสร็จไล่เลี่ยกัน |
| **M2** | เดือนที่ 2.5 – 4.5 | ลูปเกมสมบูรณ์แบบข้ามฉากเสร็จสิ้นตามกำหนด |
| **M3** | เดือนที่ 4.5 – 6 | ระบบทำเงินและโซเชียลประกอบเสร็จพร้อมกัน |
| **M4** | เดือนที่ 6 – 7.5 | ทุกฝ่ายช่วยกันขัดเกลาและ Optimize จบที่ 7.5 เดือน |

### ✅ ข้อดี

| ข้อดี | รายละเอียด |
|-------|-----------|
| **Optimal Balancing** | สัดส่วนคนต่อเนื้องานสมบูรณ์ที่สุด (60:40) ไร้คอขวดระหว่างแผนก |
| **Parallel Development** | พัฒนาและทำ Integration Test ระบบสเกลใหญ่ (Addressables Pipeline, ระบบ Guild) ไปพร้อมกันแบบเรียลไทม์ |

### ❌ ข้อเสีย

| ข้อเสีย | รายละเอียด |
|---------|-----------|
| **High Communication Overhead** | ต้องประชุมตกลง JSON Contract อย่างเข้มงวดระหว่าง FE/BE |
| **Code Conflicts** | Unity 3 คนรุมโปรเจกต์เดียว → ความเสี่ยง Merge Conflict สูง |

---

## 🔄 Review & Iteration Buffer (15–20% ต่อรอบ)

> เวลาที่ประเมินไว้คือเวลาทำให้ระบบ "ทำงานได้จริง (Functional)" แต่เกม Commercial ต้องรื้อแก้หลังทดสอบเพื่อให้ "สนุกและทำเงินได้จริง (Fun & Profitable)"

| Milestone | Buffer | จุดประสงค์ | Overhead ที่อาจเกิด |
|-----------|--------|-----------|-------------------|
| **M1 Review Buffer** | ~15–20% ของ M1 | ทดสอบการลากผสมไอเทม ปรับ Game Feel, Snapping, แสงเสียง จนรู้สึก "ลากเพลินจนหยุดไม่ได้" | แก้ลอจิกกระดาน ปรับสคริปต์ ตัวเลข Drop Rate จากตู้ใหม่ทั้งหมด |
| **M2 Review Buffer** | ~15–20% ของ M2 | Internal Testing ทดสอบ Flow เล่นสลับระหว่างกระดานกับหน้าแต่งเมือง | พบว่าออเดอร์ยากเกินไป/ใช้พลังงานเยอะ → รื้อ Flow UI การกดเข้าออกเมนู + แก้ Economy Tuning ใหม่หมด |
| **M3 Review Buffer** | ~15–20% ของ M3 | External Playtest ดูว่าคนเล่น "งง" หรือไม่ | ผู้เล่นหาปุ่มเติมเงินไม่เจอ/ไม่เข้าใจ Tutorial หรือระบบกิลด์ → รื้อ UI Layout เพิ่ม Spotlight |
| **M4 Review Buffer** | ใช้ QA Buffer 20% ที่ประเมินไว้ | Soft Launch เปิดลองตลาดจริงในบางประเทศ | แก้เซิร์ฟเวอร์หน่วง/แชทพร้อมกัน ปรับ Security ป้องกัน Time-lapse cheat สเกลเซิร์ฟเวอร์รับโหลด |

---

## 💡 สรุปผลกระทบภาพรวม

| รายการ | ค่า |
|--------|-----|
| **ยอดเดิม (Development Time)** | 687 MD |
| **Overhead Iteration (15–20% ต่อรอบ)** | ~150–200 MD |
| **รวมภาพรวม** | **~840–890 MD** |

> **หมายเหตุ:** กระบวนการ "ล้มแล้วรีบแก้ (Fail Fast, Fix Fast)" เป็นสิ่งที่สตูดิโอเกมระดับโลกใช้เพื่อการันตีความสำเร็จของเกมก่อนปล่อย Global Launch

---

## 📊 Team Size Comparison Summary

| ทีม | ความเร็ว (FE/BE) | ระยะเวลา | ข้อดีหลัก | ข้อเสียหลัก |
|-----|----------------|---------|----------|-----------|
| **3 คน** (2 Unity / 1 BE) | 40/20 MD/เดือน | ~13–14 เดือน | Architecture Integrity | Bus Factor, Resource Imbalance |
| **4 คน** (2 Unity / 2 BE) | 40/40 MD/เดือน | ~10.5–11 เดือน | Backend Redundancy, Zero API Wait | Frontend Bottleneck, Out-of-Sync |
| **5 คน** (3 Unity / 2 BE) | 60/40 MD/เดือน | **~7–7.5 เดือน** | Optimal Balancing, Parallel Dev | Communication Overhead, Merge Conflicts |