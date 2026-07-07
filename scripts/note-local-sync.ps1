[CmdletBinding()]
param(
  [string]$Branch = "master",
  [switch]$DryRun,
  [switch]$NoBackup,
  [switch]$SkipPull
)

$ErrorActionPreference = "Stop"

function Resolve-Workspace {
  $scriptDir = $PSScriptRoot
  $parent = Resolve-Path (Join-Path $scriptDir "..")

  if (Test-Path (Join-Path $parent "__deploy_repo")) {
    return [pscustomobject]@{
      WorkspaceRoot = $parent.Path
      DeployRepo = Join-Path $parent "__deploy_repo"
    }
  }

  if ((Split-Path $parent -Leaf) -eq "__deploy_repo") {
    return [pscustomobject]@{
      WorkspaceRoot = Split-Path $parent -Parent
      DeployRepo = $parent.Path
    }
  }

  throw "Cannot locate workspace root and __deploy_repo from $scriptDir"
}

function Invoke-Git {
  param([string[]]$Arguments)
  & git -C $DeployRepo @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "git $($Arguments -join ' ') failed with exit code $LASTEXITCODE"
  }
}

function Invoke-RobocopyChecked {
  param(
    [string]$Source,
    [string]$Destination,
    [string[]]$Arguments
  )

  & robocopy $Source $Destination @Arguments
  $code = $LASTEXITCODE
  if ($code -gt 7) {
    throw "robocopy failed with exit code $code"
  }
}

$paths = Resolve-Workspace
$WorkspaceRoot = $paths.WorkspaceRoot
$DeployRepo = $paths.DeployRepo
$RemoteNotes = Join-Path $DeployRepo "source_notes"
$LocalNotes = Join-Path $WorkspaceRoot "source_notes"
$BackupRoot = Join-Path $WorkspaceRoot "workspace_ops\local_sync_backups"

Write-Host "Note local sync"
Write-Host "Workspace : $WorkspaceRoot"
Write-Host "Deploy repo: $DeployRepo"
Write-Host "Branch     : $Branch"

if (-not (Test-Path (Join-Path $DeployRepo ".git"))) {
  throw "Deploy repo is not a git repository: $DeployRepo"
}

$dirty = & git -C $DeployRepo status --porcelain
if ($dirty) {
  throw "__deploy_repo has uncommitted changes. Commit/stash them before syncing notes.`n$dirty"
}

if (-not $SkipPull) {
  if ($DryRun) {
    Write-Host "[dry-run] Would run: git fetch origin $Branch"
    Write-Host "[dry-run] Would run: git pull --ff-only origin $Branch"
  } else {
    Invoke-Git @("fetch", "origin", $Branch)
    Invoke-Git @("pull", "--ff-only", "origin", $Branch)
  }
}

if (-not (Test-Path $RemoteNotes)) {
  throw "Remote notes folder is missing: $RemoteNotes"
}

if ($DryRun) {
  Write-Host "[dry-run] Would mirror $RemoteNotes -> $LocalNotes"
  Invoke-RobocopyChecked $RemoteNotes $LocalNotes @("/MIR", "/L", "/XD", ".git", ".obsidian", "/R:1", "/W:1")
  exit 0
}

if ((Test-Path $LocalNotes) -and -not $NoBackup) {
  $stamp = Get-Date -Format "yyyyMMdd_HHmmss"
  $backupPath = Join-Path $BackupRoot "source_notes_$stamp"
  New-Item -ItemType Directory -Force -Path $backupPath | Out-Null
  Write-Host "Backup     : $backupPath"
  Invoke-RobocopyChecked $LocalNotes $backupPath @("/MIR", "/XD", ".git", ".obsidian", "/R:1", "/W:1", "/NFL", "/NDL", "/NJH", "/NJS", "/NP")
}

Write-Host "Syncing notes..."
Invoke-RobocopyChecked $RemoteNotes $LocalNotes @("/MIR", "/XD", ".git", ".obsidian", "/R:2", "/W:1", "/NFL", "/NDL", "/NJH", "/NJS", "/NP")

$noteCount = (Get-ChildItem -Path $LocalNotes -Recurse -File -Filter "*.md" | Measure-Object).Count
Write-Host "Done. Local source_notes now has $noteCount markdown files."
