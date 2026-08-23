ANAN K-LINE ESP32

Arduino libraries:
- PubSubClient by Nick O'Leary
- WiFi comes with ESP32 Arduino core

Quick test:
1. Open ANAN_KLINE_WIFI_MQTT_DEMO.ino
2. Set WIFI_SSID and WIFI_PASS
3. Keep ESP32_DEMO_MODE = 1 for simulated data
4. Upload to ESP32
5. Open the web dashboard; MQTT topic/device/key already match the sketch

Real K-Line:
- Set ESP32_DEMO_MODE = 0
- Use L9637D / MC33290 (or equivalent protected automotive K-Line transceiver) between ECU K-Line and ESP32 UART2.
- Do NOT wire K-Line directly to an ESP32 GPIO.
- The exact Honda request/response decoder depends on motorcycle model/year/ECU. Implement it inside readHondaKLine().
