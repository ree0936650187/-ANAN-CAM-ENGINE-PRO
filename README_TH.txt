ANAN K-LINE DASH LIVE V2.21
- แก้ปัญหา RPM Scale 0–13 หาย
- สาเหตุ: tag <script src="..."> รวมกับ inline JS ทำให้บางเบราว์เซอร์ไม่รันโค้ดด้านใน
- แยก script ภายนอกกับ script ภายในออกจากกัน
- ใส่ RPM blocks และตัวเลข 0–13 เป็น HTML ตรง ๆ เพื่อให้แสดงแน่นอนแม้ JS โหลดช้า
