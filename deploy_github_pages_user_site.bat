@echo off
setlocal enabledelayedexpansion

REM Deploy dist to GitHub Pages user site: https://mahadzroid.github.io/
REM Prerequisites:
REM 1) Create the GitHub repo: https://github.com/mahadzroid/mahadzroid.github.io
REM 2) Ensure Git is installed and you are authenticated (cached credentials or PAT).

REM Build the project
call npm.cmd run build
if errorlevel 1 (
  echo Build failed. Aborting deploy.
  exit /b 1
)

REM Prevent Jekyll processing
if not exist dist (
  echo dist folder not found after build. Aborting.
  exit /b 1
)
if not exist dist\.nojekyll (
  type NUL > dist\.nojekyll
)

pushd dist

REM Initialize git and commit built assets
if not exist .git (
  git init
)

REM Set local identity if missing
for /f "tokens=*" %%i in ('git config user.name') do set GITUSER=%%i
if "!GITUSER!"=="" (
  git config user.name "Local Deploy"
  git config user.email "deploy@example.local"
)

git add -A
git commit -m "Deploy site" 2>nul

REM Ensure main branch
git branch -M main

REM Set remote
git remote remove origin 2>nul
git remote add origin https://github.com/mahadzroid/mahadzroid.github.io.git

REM Push to GitHub Pages (user site)
echo Pushing to https://github.com/mahadzroid/mahadzroid.github.io.git (branch: main)
 git push -u --force origin main
if errorlevel 1 (
  echo Push failed. Ensure the repo exists and you are logged in.
  echo 1) Create repo: https://github.com/mahadzroid/mahadzroid.github.io
  echo 2) Open Git Bash / PowerShell and run: git login or configure a PAT
  echo 3) Re-run this script.
  popd
  exit /b 1
)

popd

echo Deploy complete. Your site should be live at: https://mahadzroid.github.io/
exit /b 0