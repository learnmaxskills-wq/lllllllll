$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$tempProfile = Join-Path $PSScriptRoot ".edge-pdf-profile"
$html = (Resolve-Path (Join-Path $PSScriptRoot "index.html")).Path -replace "\\", "/"
$url = "file:///$html"
$pdf = Join-Path $PSScriptRoot "learnmax-program.pdf"

New-Item -ItemType Directory -Force -Path $tempProfile | Out-Null

& $edge `
  --headless=new `
  --no-sandbox `
  --disable-gpu `
  --disable-crash-reporter `
  --disable-breakpad `
  --user-data-dir="$tempProfile" `
  --allow-file-access-from-files `
  --print-to-pdf="$pdf" `
  --no-pdf-header-footer `
  "$url"

Write-Host "Generated PDF: $pdf"
