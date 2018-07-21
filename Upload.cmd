@echo off
pause>nul|set/p =Press and hold the "Boot" button on the ESP32 board and then press any key on the pc keyboard...

REM <<--- change COM port number here --->>

SET COMPort=COM5

REM <<--- ------------------------------->>

REM Writing binary
echo on
esptool.exe --chip esp32 --port %COMPort% --baud 115200 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_freq 80m --flash_size detect 0xe000 bin/boot_app0.bin 0x1000 bin/bootloader_qio_80m.bin 0x10000 bin/ESPServer1.0.ino.bin 0x8000 bin/ESPServer1.0.ino.partitions.bin 
REM Writing SPIFFS
esptool.exe --chip esp32 --baud 115200 --port %COMPort% --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_size detect 2691072 bin/ESPServer1.0.spiffs.bin
@echo off
pause>nul|set/p =Press any key on the pc keyboard to exit...
