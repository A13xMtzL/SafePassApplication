@echo off
echo Levantando servidor para backend...
start "" /B cmd start /k python3 .\safe_pass_back\src\app.py

echo Levantando el servidor para el frontend...
start "" /B start cmd /k cmd /c "cd safe_pass_front && npm run dev"
