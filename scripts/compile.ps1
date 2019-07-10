$outputfolder = "dist"

if (Test-Path $outputfolder) {
  Write-Output "Removing old output folder..."
  Remove-Item $outputfolder -Recurse
  Write-Output "Done."
}

yarn.cmd run build
