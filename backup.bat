@echo off
setlocal enableextensions

REM Run from this script's directory
cd /d "%~dp0"

REM Timestamp (yyyyMMdd-HHmmss)
for /f "tokens=*" %%i in ('powershell -NoProfile -Command "Get-Date -Format \"yyyyMMdd-HHmmss\""') do set TS=%%i

REM Ensure backups directory exists
if not exist "backups" mkdir "backups"

set "ZIP=backups\site-%TS%.zip"
if exist "%ZIP%" del /f /q "%ZIP%"

REM Compress sources (exclude node_modules to keep archive small)
powershell -NoProfile -Command ^
  "$ErrorActionPreference='Stop';" ^
  "Compress-Archive -Path @(" ^
  "  'index.html'," ^
  "  'public'," ^
  "  'src'," ^
  "  'convex'," ^
  "  'package.json'," ^
  "  'package-lock.json'," ^
  "  'pnpm-lock.yaml'," ^
  "  'pnpm-workspace.yaml'," ^
  "  'vite.config.ts'," ^
  "  'tsconfig.json'," ^
  "  'tsconfig.app.json'," ^
  "  'tsconfig.node.json'," ^
  "  '.gitignore'," ^
  "  '.ignore'," ^
  "  'eslint.config.js'," ^
  "  'prettier.config.js'," ^
  "  'components.json'," ^
  "  'hercules.toml'" ^
  ") -DestinationPath '%ZIP%' -Force"

echo Backup saved to %ZIP%
endlocal