@echo off
echo ========================================
echo  BIO LINK BUILDER - Production Build
echo ========================================
echo.
echo Building for production...
echo This may take 30-60 seconds...
echo.

call npm run build

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Build failed!
    echo Please check the error messages above.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Build completed successfully!
echo ========================================
echo.
echo To start production server, run:
echo npm start
echo.
echo Or double-click: RUN_PRODUCTION.bat
echo.

pause
