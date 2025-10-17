@echo off
setlocal enableextensions

REM Ensure we run from the project directory
cd /d "%~dp0"

REM Bypass PowerShell execution policy for this process so npm can run
powershell -NoProfile -ExecutionPolicy Bypass -Command "$true | Out-Null"

REM Remove read-only attributes under the project (if any)
attrib -R /S /D .

REM Prefer pnpm if available; otherwise fallback to npm
where pnpm >nul 2>&1
if %errorlevel%==0 (
  echo Detected pnpm. Installing dependencies...
  pnpm install
  echo Starting Vite dev server...
  pnpm dev
) else (
  echo pnpm not found. Using npm...
  call npm.cmd install
  echo Starting Vite dev server...
  call npm.cmd run dev
)

endlocal