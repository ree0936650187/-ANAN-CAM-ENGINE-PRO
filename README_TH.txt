ANAN K-LINE V2.40 OPEN APP FIRST

หน้าเว็บ:
- เปิด Dashboard ได้ทันที แม้ BLE/MQTT ยังไม่เชื่อม
- เริ่มสถานะ DISCONNECTED
- ผู้ใช้กดปุ่ม BLE ภายหลังเพื่อเลือก ANAN-KLINE
- MQTT เชื่อมและรับข้อมูลได้ตามปกติ
- ไม่มี DEMO

ESP32:
- แก้ Compilation error ของ V2.39:
  activeTable
  klineConnected
  lastKlineOK
  lastKlineTry
- ตัดคำสั่ง NimBLEService::start() ที่ deprecated ใน NimBLE-Arduino 2.x
- BLE ชื่อ ANAN-KLINE
- MQTT + Honda K-Line ยังอยู่ครบ

หมายเหตุ:
K-Line ต้องผ่าน L9637D / MC33290 หรือ K-Line transceiver ที่เหมาะสม
ห้ามต่อสาย K-Line จากรถเข้า ESP32 GPIO โดยตรง
