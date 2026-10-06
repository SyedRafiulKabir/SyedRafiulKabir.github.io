<#
.SYNOPSIS
    Crops a portrait image into a 1:1 square headshot and saves it as PNG.
.PARAMETER InputPath
    Absolute or relative path to the source image file (JPG, PNG, etc.).
.PARAMETER OutputPath
    Target output file path (e.g., public/shanto.png).
.PARAMETER TopMarginRatio
    Fraction of headroom above the top (default 0.08 - 0.12).
#>

param(
    [Parameter(Mandatory = $true)]
    [string]$InputPath,

    [Parameter(Mandatory = $false)]
    [string]$OutputPath = "public\shanto.png",

    [Parameter(Mandatory = $false)]
    [double]$TopMarginRatio = 0.08
)

Add-Type -AssemblyName System.Drawing

if (!(Test-Path $InputPath)) {
    Write-Error "Source image not found at $InputPath"
    exit 1
}

$fullInputPath = (Resolve-Path $InputPath).Path
$src = [System.Drawing.Image]::FromFile($fullInputPath)

$w = $src.Width
$h = $src.Height

# For a portrait image (h > w), square size is width or slightly smaller to frame the face
if ($h -ge $w) {
    # Square crop size based on width
    $size = [Math]::Min($w, [int]($w * 0.95))
    $x = [int](($w - $size) / 2)
    # Headroom offset
    $y = [int]($h * $TopMarginRatio)
    if (($y + $size) -gt $h) {
        $y = [Math]::Max(0, $h - $size)
    }
} else {
    # Landscape: center crop
    $size = $h
    $x = [int](($w - $size) / 2)
    $y = 0
}

Write-Host "Source dimensions: ${w}x${h}"
Write-Host "Crop region: X=$x, Y=$y, Size=${size}x${size}"

$rect = New-Object System.Drawing.Rectangle $x, $y, $size, $size
$bmp = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$destRect = New-Object System.Drawing.Rectangle 0, 0, $size, $size
$g.DrawImage($src, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$src.Dispose()

Write-Host "Successfully saved cropped photo to $OutputPath"
