call npm install
@echo on
echo client installed
call pip install tornado
echo server installed
start cmd /k call python server.py
start cmd /k call npm start
