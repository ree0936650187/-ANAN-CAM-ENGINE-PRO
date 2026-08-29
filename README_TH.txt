ANAN K-LINE V2.37 REAL HONDA AP + BLE + MQTT

แก้ปัญหา iPhone หาไม่เจอ:
1. Wi-Fi: ESP32 ปล่อย AP ตลอด ชื่อ ANAN-KLINE-WIFI / รหัส anan1234
   เชื่อมแล้วเปิด http://192.168.4.1/
2. BLE: ชื่อ ANAN-KLINE-BLE
   iPhone Safari ปกติไม่มี Web Bluetooth; ใช้ LOCAL WIFI ได้ทันที หรือใช้ browser/app ที่รองรับ BLE
3. Remote: เข้า 192.168.4.1/config เพื่อใส่ Hotspot/Router SSID+Password จากนั้น ESP32 จะส่ง MQTT ให้ PC ระยะไกล

Honda K-Line ที่ใส่ในโค้ดจริง:
- 10400 baud 8N1
- LOW 70ms / HIGH 120ms
- Wake FE 04 72 8C และ alternate FE 04 FF FF
- Init 72 05 00 F0 99, response 02 04 00 FA
- Honda checksum 8-bit
- Auto table 0x11 -> 0x17 -> 0x10
- Table 0x17: RPM/TPS/ECT/Battery/Injection/Ignition/Speed
- Table 0x10/0x11: RPM/TPS/ECT/Battery/Speed (Injection/Ignition = 0 จนกว่าจะมี profile ของ ECU รุ่นนั้น)

WIRING (ชื่อขา ไม่ยึดเลขขา IC เพราะ module/แพ็กเกจต่างกัน):
Honda DLC K-Line -> K pin ของ L9637D/MC33290
Transceiver RXD -> ESP32 GPIO16
ESP32 GPIO17 -> Transceiver TXD
GND รถ -> GND transceiver -> GND ESP32
+12V รถ -> ภาคจ่ายไฟ/ป้องกันตาม datasheet ของ transceiver และ buck converter
ห้ามต่อสาย K-Line 12V เข้า GPIO16/17 โดยตรง

หมายเหตุ:
Honda รุ่นใหม่บางรุ่นเปลี่ยนเป็น CAN และ Honda K-Line มีหลาย table/layout ตาม ECU/ปีรถ
ถ้าไฟ KLINE FAILED อยู่ ให้ส่งรุ่น/ปีรถ + Serial Monitor RXRAW มา แล้วปรับ profile ให้ตรง ECU ได้
