ANAN CAM & ENGINE PRO
=====================
ไฟล์หลัก: index.html
ใช้งานแบบเว็บ: อัปโหลดทั้งโฟลเดอร์ขึ้น Web Hosting / GitHub Pages / Netlify / Cloudflare Pages
ใช้งานบนคอมทันที: เปิด index.html ได้ (PWA/offline service worker ต้องเปิดผ่าน http/https)
ทดสอบ local server:
  python -m http.server 8080
แล้วเปิด http://localhost:8080/ANAN_CAM_ENGINE_PRO/

โมดูล:
- Engine displacement
- Head chamber CC สำหรับ Target Static CR
- Actual Static Compression Ratio
- Dynamic Compression จาก IVC + rod/stroke geometry
- Static CR ที่ต้องใช้เพื่อให้ได้ Target DCR
- Intake/Exhaust duration, centerline, LSA, overlap, cam advance
- Cam character / RPM band heuristic
- Save/Load LocalStorage + Export JSON
