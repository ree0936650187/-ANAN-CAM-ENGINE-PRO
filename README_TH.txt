ANAN K-LINE GITHUB WIFI V2
============================

โครงระบบ:
Honda ECU -> K-Line Transceiver -> ESP32 -> Hotspot โทรศัพท์ -> MQTT TLS
-> GitHub Pages Dashboard
และ Speed/Trip สามารถใช้ GPS ของ iPhone/Android ได้

ค่าเริ่มต้นที่ต้องตรงกัน:
DEVICE ID : ANAN001
TOPIC KEY : ANAN26KLINE9X7P
Web Broker: wss://broker.emqx.io:8084/mqtt
ESP32 MQTT: broker.emqx.io:8883

ขั้นตอนเร็ว:
1) อัปโหลดไฟล์ index.html, manifest.json, sw.js, icon-192.png, icon-512.png ขึ้น GitHub Pages
2) Arduino IDE ติดตั้ง Library "PubSubClient"
3) เปิด ESP32/ANAN_KLINE_WIFI_MQTT.ino
4) ใส่ชื่อ Hotspot โทรศัพท์และรหัสผ่านใน WIFI_SSID / WIFI_PASS
5) เริ่มด้วย USE_DEMO_DATA 1 แล้ว Upload ลง ESP32
6) เปิด Hotspot โทรศัพท์ แล้วเปิดหน้า GitHub Dashboard
7) รอ MQTT CONNECTED; เมื่อ ESP32 ออนไลน์ หน้าปัดจะเปลี่ยนเป็น LIVE
8) กด GPS แล้วอนุญาต Location เพื่อใช้ Speed/Trip จากโทรศัพท์
9) เมื่อทดสอบระบบครบแล้ว จึงเปลี่ยน USE_DEMO_DATA เป็น 0 และใส่โค้ด Honda K-Line จริง

สำคัญ:
- ห้ามต่อสาย K-Line รถเข้าขา ESP32 โดยตรง ต้องผ่าน K-Line Transceiver/วงจรป้องกัน
- โค้ดนี้ยังไม่เดาโปรโตคอล Honda รุ่นใดรุ่นหนึ่งให้ เพราะคำสั่ง/เฟรมแตกต่างตามรุ่น/ปี/ECU
- Public broker ใช้ทดสอบเท่านั้น ข้อมูลบน Public broker ไม่ควรถือว่าเป็นข้อมูลส่วนตัว
- หน้า GitHub ใช้ WSS/TLS จึงทำงานบน HTTPS ได้
- ESP32 ฝั่งตัวอย่างใช้ TLS แต่ setInsecure() เพื่อให้เริ่มทดสอบง่าย; รุ่นใช้งานจริงควรใส่ CA certificate

การใช้งานหน้าเว็บ:
- SETUP: เปลี่ยน Device ID / Topic Key / Broker
- GPS: เปิด/ปิด GPS โทรศัพท์
- DEMO: จำลองค่าหน้าปัดในเว็บ
- ZERO: รีเซ็ตค่าหน้าปัดและ Trip GPS

การอ่าน K-Line จริง:
ส่งรุ่นรถ Honda + ปี + รหัส ECU/ข้อมูลโปรโตคอลมา แล้วค่อยใส่ parser ที่
readHondaKLine(Telemetry &t)
