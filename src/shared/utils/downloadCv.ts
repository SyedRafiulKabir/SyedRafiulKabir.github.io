import type { PortfolioData } from '../../types/portfolio'

function dataUrlToBlob(dataUrl: string) {
  const [meta, base64] = dataUrl.split(',')
  const mime = /data:(.*);base64/.exec(meta)?.[1] ?? 'application/pdf'
  const bytes = atob(base64)
  const array = new Uint8Array(bytes.length)
  for (let i = 0; i < bytes.length; i += 1) array[i] = bytes.charCodeAt(i)
  return new Blob([array], { type: mime })
}

function triggerDownload(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

export async function downloadCv(data: PortfolioData) {
  if (data.cv.uploadedDataUrl) {
    triggerDownload(dataUrlToBlob(data.cv.uploadedDataUrl), data.cv.fileName || 'cv.pdf')
    return
  }

  const response = await fetch(data.cv.src)
  if (!response.ok) {
    throw new Error('CV file not found. Add src/assets/cv.pdf or upload one from admin.')
  }
  const blob = await response.blob()
  triggerDownload(blob, data.cv.fileName || 'cv.pdf')
}

