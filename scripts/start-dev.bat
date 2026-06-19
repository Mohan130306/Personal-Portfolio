@echo off
REM Batch wrapper to run the dev server without PowerShell execution policy issues
REM Place this in the repository and run from cmd.exe: scripts\start-dev.bat

pushd "%~dp0\.."
echo Starting dev server using npm.cmd...
npm.cmd run dev
popd
