/**
 * 绘制网格
 * @param {HTMLCanvasElement} canvas 画布元素
 * @param {Number} width 画布宽度
 * @param {Number} height 画布高度
 * @param {Number} cellSize 网格单元格尺寸
 * @param {Number} opacity 网格线透明度
 * @param {Number} fontSize 网格坐标刻度的文字大小
 */
function drawGrid(canvas, width = 500, height = 500, cellSize = 50, opacity = 0.2, fontSize = 14) {
  const ctx = canvas.getContext('2d')

  canvas.width = width // 设置画布大小（注意：这会重置画布状态）
  canvas.height = height

  ctx.save() // 保存当前的绘图状态（注意：ctx.save 的调用，要放在设置 width、height 之后。）

  ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`
  ctx.font = `${fontSize}px Arial`

  // 开始绘制网格线
  ctx.beginPath()
  for (let x = 0; x <= width; x += cellSize) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.fillText(x.toString(), x + 2, 15) // 绘制文字
  }
  for (let y = 0; y <= height; y += cellSize) {
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.fillText(y.toString(), 2, y + 14) // 绘制文字
  }
  ctx.stroke() // 应用之前的设置绘制线条

  ctx.restore() // 恢复保存的绘图状态
}
