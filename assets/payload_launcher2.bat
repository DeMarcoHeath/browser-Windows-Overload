@echo off
REM Multi-App Launcher - Ethical Research Only

echo [INFO] Opening Calculator, MS Paint, Command Prompt, and Notepad 10 times each...

for /L %%i in (1,1,10) do (
    echo [INFO] Launching Calculator (%%i/10)...
    start calc.exe
    timeout /nobreak /t 1 >nul

    echo [INFO] Launching MS Paint (%%i/10)...
    start mspaint.exe
    timeout /nobreak /t 1 >nul

    echo [INFO] Launching Command Prompt (%%i/10)...
    start cmd.exe
    timeout /nobreak /t 1 >nul

    echo [INFO] Launching Notepad (%%i/10)...
    start notepad.exe
    timeout /nobreak /t 1 >nul
)

echo [SUCCESS] All applications launched 10 times.
exit /b
