Param(
    [string[]]$Args
)

# Move to repo root (script lives in ./scripts)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location (Join-Path $scriptDir "..")

Write-Host "Starting dev server using npm.cmd (PowerShell wrapper)..." -ForegroundColor Cyan

try {
    # Call the npm.cmd launcher directly to avoid npm.ps1 execution
    & npm.cmd run dev @Args
} catch {
    Write-Host "Failed to start dev server." -ForegroundColor Red
    Write-Host "You can run the command directly from Command Prompt or use the batch helper: scripts\\start-dev.bat" -ForegroundColor Yellow
    exit 1
}
