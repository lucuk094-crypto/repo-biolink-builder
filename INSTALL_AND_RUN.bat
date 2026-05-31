@echo off
echo ========================================
echo  BIO LINK BUILDER - Installation
echo ========================================
echo.

echo Checking Node.js installation...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js version:
node -v
echo.

echo npm version:
npm -v
echo.

echo ========================================
echo  Installing dependencies...
echo  This may take 1-3 minutes...
echo ========================================
echo.

call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Installation failed!
    echo Please check your internet connection and try again.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Installation completed successfully!
echo ========================================
echo.
echo Starting development server...
echo.
echo The app will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev

pause
