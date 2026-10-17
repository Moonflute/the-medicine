[CmdletBinding()]
param(
  [string]$Branch = "master",
  [switch]$DryRun,
  [switch]$NoBackup,
  [switch]$SkipPull
)

$ErrorActionPreference = "Stop"
$WorkspaceRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")).Path

function Invoke-ReadGit {
  param([string[]]$GitArgs)
  $result = & git --no-optional-locks -c core.quotepath=false -c core.longpaths=true -c "safe.directory=$WorkspaceRoot" -C $WorkspaceRoot @GitArgs 2>&1
  if ($LASTEXITCODE -ne 0) {
    throw ($result -join [Environment]::NewLine)
  }
  return $result
}

if (-not (Test-Path -LiteralPath (Join-Path $WorkspaceRoot ".git"))) {
  throw "프로젝트 기본 폴더에서 실행해야 합니다: $WorkspaceRoot"
}

Write-Host "노트 변경사항 확인 (파일을 복사하거나 덮어쓰지 않습니다)"
Write-Host "기준 폴더: $WorkspaceRoot"
$localHead = (Invoke-ReadGit -GitArgs @("rev-parse", "HEAD")).Trim()
Write-Host "로컬 커밋: $localHead"

Write-Host ""
Write-Host "[로컬에서 수정한 의학자료]"
$localChanges = @(Invoke-ReadGit -GitArgs @("status", "--short", "--untracked-files=all", "--", "source_notes"))
if ($localChanges.Count) { $localChanges | ForEach-Object { Write-Host $_ } }
else { Write-Host "없음" }

if ($DryRun -or $SkipPull) {
  Write-Host "온라인 조회를 생략했습니다. GitHub 최신 상태는 이번 실행에서 확인하지 않았습니다."
  exit 0
}

$remoteLines = @(Invoke-ReadGit -GitArgs @("ls-remote", "--exit-code", "origin", "refs/heads/$Branch"))
if ($remoteLines.Count -ne 1) { throw "GitHub 브랜치를 하나로 확인할 수 없습니다." }
$remoteHead = ($remoteLines[0] -split "\s+")[0]
if ($remoteHead -notmatch "^[0-9a-f]{40}$") { throw "GitHub 커밋 번호가 올바르지 않습니다." }
Write-Host "GitHub 커밋: $remoteHead"

if ($remoteHead -eq $localHead) {
  Write-Host "로컬 기준 커밋과 GitHub가 같습니다. 위 로컬 수정 목록은 별도로 확인하세요."
  exit 0
}

$remoteObject = & git --no-optional-locks -c "safe.directory=$WorkspaceRoot" -C $WorkspaceRoot rev-parse --verify --quiet "$remoteHead^{commit}"
if ($LASTEXITCODE -ne 0) {
  Write-Host "GitHub에 새 커밋이 있습니다. 상세 비교에 필요한 커밋이 아직 로컬에 없습니다."
  Write-Host "파일을 덮어쓰지 않는 git fetch origin $Branch 실행 후 다시 확인하세요."
  Write-Host "이 도구는 fetch, pull, 병합 또는 파일 교체를 자동 실행하지 않습니다."
  exit 0
}

Write-Host ""
Write-Host "[GitHub 최신본에서 현재 로컬 자료로의 차이]"
$remoteChanges = @(Invoke-ReadGit -GitArgs @("diff", "--name-status", $remoteHead, "--", "source_notes"))
if ($remoteChanges.Count) { $remoteChanges | ForEach-Object { Write-Host $_ } }
else { Write-Host "추적 중인 의학자료 내용은 같습니다." }

Write-Host ""
Write-Host "[로컬/원격 커밋 차이: 로컬에만 있는 수, 원격에만 있는 수]"
Invoke-ReadGit -GitArgs @("rev-list", "--left-right", "--count", "HEAD...$remoteHead") | ForEach-Object { Write-Host $_ }
Write-Host "내용을 합칠 때는 로컬 수정과 웹에서 저장한 수정을 비교한 뒤 진행하세요."
