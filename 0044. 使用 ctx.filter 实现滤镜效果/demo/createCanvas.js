function createCanvas(filterStr) {
  const canvas = document.createElement('canvas')
  drawGrid(canvas, 250, 500, 50)
  document.body.append(canvas)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()

  if (filterStr) {
    ctx.filter = filterStr
  }

  const img = new Image()
  img.src = './安妮娅.png'
  img.onload = function () {
    ctx.drawImage(img, 50, 50)
  }
}
