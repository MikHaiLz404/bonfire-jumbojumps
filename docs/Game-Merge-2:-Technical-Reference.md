---
name: Game-Merge-2 Technical Reference
description: Technical reference
---

# Game Merge-2: Technical Reference

> **Document Purpose:** สรุปข้อมูลอ้างอิงจากอุตสาหกรรมเกม (Industry References), การตัดสินใจทางเทคนิค (Technical Decisions), และแนวทางการออกแบบสถาปัตยกรรม (Architecture Guidelines)
> **Target Audience:** Project Managers, Technical Producers, Lead Engineers

---

## 📚 1. Industry Game References

### 1.1 ความสำคัญของ "Game Feel" และการขัดเกลา (Polish)

> ในการทำเกมให้ถึงระดับ Tier S (เช่น Merge Mansion, Gossip Harbor) เวลาในการพัฒนาฝั่ง Frontend จะถูกให้ความสำคัญกับการทำ Polish สูงมาก

**Reference Search Keywords:**

| แหล่งอ้างอิง | รายละเอียด |
|------------|-----------|
| "Juice it or lose it" GDC YouTube | Talk โดย Martin Jonasson & Petri Purho |
| "The Art of Screenshake" Vlambeer YouTube | Talk โดย Jan Willem Nijman |
| หนังสือ "Game Feel: A Game Designer's Guide to Virtual Sensation" | โดย Steve Swink |

**Software Engineering Rule:** กฏ "Ninety-ninety rule" (โดย Tom Cargill)
> 10% สุดท้ายของการขัดเกลาเกม จะใช้เวลาและแรงงานเทียบเท่ากับการพัฒนา 90% แรกทั้งหมด

---

### 1.2 Timeline และสเกลทีมของค่ายเกมระดับ Top

#### Reference: Metacore's Journey with Merge Mansion

| ข้อมูล | รายละเอียด |
|--------|-----------|
| **แหล่งข้อมูล** | บทสัมภาษณ์ของ Mika Tammenkoski (CEO) ใน Deconstructor of Fun และ MobileGamer.biz |
| **Timeline ที่น่าสนใจ** | Prototype → Soft Launch: 6-8 เดือน → Polish + Meta-game: ~1 ปี → Global Launch |

#### Reference: Gossip Harbor & Travel Town

| ข้อมูล | รายละเอียด |
|--------|-----------|
| **แหล่งข้อมูล** | Sensor Tower และ Naavik (Game Consulting Firm) |
| **เวลาพัฒนาเฉลี่ย** | 9-12 เดือน (เกมแนว Narrative เข้มข้น) จนพร้อม Global Launch |
| **โครงสร้างทีม** | 5-8 คน (Cross-functional Cell Team สไตล์ Supercell/สแกนดิเนเวีย) |

**Cell Team Structure (5-8 คน):**

| ตำแหน่ง | จำนวน |
|--------|-------|
| Game Designer | 1 |
| Artist/UI | 1–2 |
| Client Engineer | 2 |
| Backend Engineer | 1–2 |
| QA | 1 |

---

### 1.3 สถิติและโครงสร้างเกมแนว Merge-2

#### Core vs Meta Separation

| ข้อสรุป | รายละเอียด |
|--------|-----------|
| **Merge-2 vs Merge-3** | Merge-2 แยกกระดานเล่นหลัก (Core) ออกจากเนื้อเรื่อง/การแต่งเมือง (Meta) อย่างชัดเจน |
| **ข้อดี** | การแก้ไขหรืออัปเดตระบบ Meta ทำได้ง่ายและยืดหยุ่นกว่า |

#### Retention Benchmarks

| Metric | ค่า | หมายเหตุ |
|--------|-----|---------|
| **Day-1 Retention** | ~69% | Merge Mansion |
| **Day-60 Retention** | ~22% | ตัวเลขระดับปรากฏการณ์ในวงการ Casual |

#### Revenue & Team Size

| ข้อมูล | รายละเอียด |
|--------|-----------|
| **รายได้ต่อเดือน** | > $1M (Travel Town, Love & Pies) |
| **ขนาดทีมพัฒนา** | < 50 คน (บ่งบอก ROI ที่สูงมาก หากระบบเสถียร) |

---

## ⚙️ 2. Technical Architecture Decisions

### 2.1 Frontend Architecture (Unity - Tier S)

> **เป้าหมาย:** ระบบที่สมบูรณ์แบบ แอนิเมชันลื่นไหล (Seamless) และโครงสร้างโค้ดต้อง Reusable

#### ✅ DO

| สิ่งที่ควรทำ | รายละเอียด |
|------------|-----------|
| **Generic UI Manager & Base Grid Controllers** | ให้เวลากับการเขียนให้โค้ดยืดหยุ่นต่อการเพิ่มฟีเจอร์ใหม่ |
| **Game Feel** | โฟกัสเรื่อง Tweening curves, Custom Shaders สำหรับแสงเงาและเอฟเฟกต์, Haptic Feedback |

#### ❌ DON'T

| สิ่งที่ไม่ควรทำ | รายละเอียด |
|-------------|-----------|
| **Hard-code กับไอเทมเฉพาะ** | ทำให้การ Scale กระดานที่สอง (Secondary Board) ทำได้ยาก |

---

### 2.2 Backend Architecture (.NET C#)

> **เป้าหมาย:** รองรับ Client-Authoritative สำหรับเกมเพลย์ และ Server-Authoritative สำหรับระบบเศรษฐกิจ

#### ✅ DO

| สิ่งที่ควรทำ | รายละเอียด |
|------------|-----------|
| **Modular Monolith** | ลดความซับซ้อน แต่จัดโครงสร้างโฟลเดอร์ให้พร้อมแยกส่วนในอนาคต |
| **Microservices เฉพาะ Peripheral Services** | แยก IAP, Item Code, Ads ออกจาก Core Game ป้องกันล่มเมื่อ Service นอกมีปัญหา |
| **Client-prediction + End-of-Session Validation** | Unity จัดการ Logic Merge ให้เล่นลื่นไหล → ส่ง Payload สรุปผล (Energy ที่ใช้, ไอเทมที่ได้) ไปให้ Backend ตรวจสอบด้วย Checksum/Hash ป้องกันการแฮ็ก |
| **Server-Authoritative Timestamps** | ระบบคำนวณพลังงาน/Idle Income ต้องใช้ Timestamp จาก Server เป็นตัวตั้งต้น ป้องกัน Time-lapse cheat |

#### ❌ DON'T

| สิ่งที่ไม่ควรทำ | รายละเอียด |
|-------------|-----------|
| **Microservices เต็มรูปแบบตั้งแต่ Day 1 สำหรับ Core Gameplay** | เพิ่ม Overhead Distributed Tracing และ Database Consistency |
| **Server-Authoritative 100% สำหรับทุก Merge** | ยิง API ทุกครั้งที่ลากผสม 1 ชิ้น → เกมกระตุก และ Server รับโหลดไม่ไหว |

---

### 2.3 Real-time Communication & Asynchronous Processing

> **เป้าหมาย:** สื่อสารกับผู้เล่นแบบ Real-time และลดภาระคอขวดบน Main Server

#### ✅ DO

| สิ่งที่ควรทำ | รายละเอียด |
|------------|-----------|
| **SignalR (Server-to-Client Push)** | แจ้งเตือนผู้เล่นโดยตรง (อัปเดต Quest, Inbox) รองรับ WebSockets/SSE/Long Polling ตามสภาพเครือข่ายมือถืออัตโนมัติ |
| **RabbitMQ (Server-to-Server)** | Message Queue สำหรับ Background Workers รับงานหนักๆ (แจกรางวัล Event ทีละแสนคน, คำนวณ Leaderboard) โดยไม่บล็อกเซิร์ฟเวอร์หลัก |

#### ❌ DON'T

| สิ่งที่ไม่ควรทำ | รายละเอียด |
|-------------|-----------|
| **เปิด Port RabbitMQ ให้ Unity Client ยิงเข้ามาโดยตรง** | ช่องโหว่ด้านความปลอดภัยร้ายแรง และไม่เหมาะกับ Connection Drop ของอินเทอร์เน็ตมือถือ (เปลืองทรัพยากร/แบตเตอรี่) |

---

## 🛠 3. LiveOps & Infrastructure

### 3.1 Custom Web Admin & LiveOps

> **เป้าหมาย:** ระบบสำหรับจัดการผู้เล่น ปรับแต่งเศรษฐกิจ (Tuning) และจัดการอีเวนต์

#### ✅ DO

| สิ่งที่ควรทำ | รายละเอียด |
|------------|-----------|
| **Internal Tool** | สร้างเป็น Internal Tool สำหรับทีมงานพัฒนาและ Publisher |
| **Role-Based Access Control** | เน้น RBAC และ Functionality ที่ครบถ้วน |
| **UI Framework สำเร็จรูป** | ใช้ Ant Design, Bootstrap หรือ Vuexy ประกอบหน้าต่าง Admin เพื่อความรวดเร็ว |
| **Data-Driven Architecture** | Drop Tables และ Item Configs ออกแบบให้อ่านจาก JSON ผ่าน Remote Config อัปเดตค่าเศรษฐกิจได้ทันทีโดยไม่ต้องออกแพทช์เกมใหม่ |

#### ❌ DON'T

| สิ่งที่ไม่ควรทำ | รายละเอียด |
|-------------|-----------|
| **Custom CSS ระดับ Commercial-grade สำหรับ Admin** | เสียเวลากับ UI/UX หรูหราของเครื่องมือแอดมิน |

---

### 3.2 Infrastructure, CDN & Asset Management

> **เป้าหมาย:** วางระบบเซิร์ฟเวอร์ที่เสถียรและท่อส่งข้อมูลอัปเดตแบบ OTA

#### ✅ DO

| สิ่งที่ควรทำ | รายละเอียด |
|------------|-----------|
| **Managed Services จาก Tencent Cloud** | ใช้ Managed MongoDB, App Service ลดความเสี่ยงในการจัดการเซิร์ฟเวอร์แบบดิบๆ |
| **Tencent COS + CDN** | ตั้งค่า Cloud Object Storage + CDN ของ Tencent เองสำหรับจ่ายแพทช์เกม |
| **Custom Addressables Pipeline** | เขียน Custom Pipeline ฝั่ง Unity ดาวน์โหลด Addressables, เช็ค Hash, จัดการ Error ด้วยตัวเอง (ความยืดหยุ่นและประหยัดงบ) |

#### ❌ DON'T

| สิ่งที่ไม่ควรทำ | รายละเอียด |
|-------------|-----------|
| **Setup Infrastructure เปล่าๆ ตั้งแต่ศูนย์** | Kubernetes Cluster, Custom Load Balancers, VPC Routing ด้วยทีมที่ไม่ใช่ DevOps Specialist → ความเสี่ยงสูง ลากระยะเวลาโปรเจกต์ให้ยืดเยื้อ |

---

## 📊 Quick Reference Summary

| หมวด | Key Decision |
|------|-------------|
| **Frontend** | Client-prediction + End-of-Session Validation สำหรับ Merge |
| **Backend** | Modular Monolith → Microservices เฉพาะ Peripheral Services |
| **Real-time** | SignalR (Client Push), RabbitMQ (Server-to-Server Background Workers) |
| **Economy** | Server-Authoritative Timestamps สำหรับ Energy/Idle Income |
| **Anti-Cheat** | Checksum/Hash Validation จาก Client ไป Server |
| **Infrastructure** | Tencent Managed Services + Custom Addressables Pipeline |
| **Web Admin** | UI Framework สำเร็จรูป + Data-Driven Drop Tables |