ANAN K-LINE V2.41 - iPhone BLE Discovery Fix

- Dashboard เปิดได้แม้ยังไม่เชื่อม
- ไม่มี Demo
- MQTT เหมือนเดิม
- BLE ชื่อ ANAN-KLINE
- แยก Advertising กับ Scan Response เพื่อให้ชื่อเห็นง่ายบน iPhone
- ตรวจผล adv->start() จริง
- ถ้า advertising หยุด ระบบ restart ทุก 2 วินาที

หลังแฟลช เปิด Serial Monitor 115200 ควรเห็น:
BLE INIT: advData=OK scanData=OK start=OK advertising=YES name=ANAN-KLINE

หมายเหตุ:
Settings > Bluetooth ของ iPhone ไม่ใช่ BLE scanner ทั่วไป
ถ้าจะตรวจว่ากล่องปล่อย BLE จริง ให้ใช้ BLE scanner / Bluefy

K-Line ต้องผ่าน L9637D / MC33290 หรือ K-Line transceiver ที่เหมาะสม
ห้ามต่อ K-Line รถเข้า GPIO ESP32 โดยตรง
