@echo off
echo ========================================
echo  BIO LINK BUILDER - Production Server
echo ========================================
echo.

if not exist ".next" (
    echo ERROR: Production build not found!
    echo Please run BUILD_PRODUCTION.bat first
    echo.
    pause
    exit /b 1
)

echo Starting production server...
echo.
echo Open your browser and go to:
echo http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm start

pause
