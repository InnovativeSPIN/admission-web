@echo off
cd /d "D:\PROJECTS\admission-web\web"
start python app.py
timeout /t 5 /nobreak
start http://127.0.0.1:5000
pause
