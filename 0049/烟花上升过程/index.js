const canvas = document.createElement('canvas')
document.body.append(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

ctx.translate(0, canvas.height)

ctx.scale(1, -1)
// y 轴反转
// y 值变大的过程，就是上升的过程。

class Firework {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.r = 6
    this.opacity = 1 // 初始不透明度
    this.speed = 2 + Math.random() * 4 // 随机上升速度
    Firework.activeFireworks.push(this)
  }

  static activeFireworks = [] // 存储所有正在活动的烟花
  static maxActiveCount = 5 // 最大同时活动的烟花数量

  draw() {
    // 绘制多个小球，形成烟花主体形状。
    // 类似于水滴的效果 💧
    // 大的圆在上面，小的尖尖在下面，看起来像是一个小尾巴的效果。
    this.y += this.speed
    this.opacity = Math.max(this.opacity - 0.01, 0.2)
    for (let i = 0; i < 100; i++) {
      const ball = new Ball(
        this.x,
        this.y - i,
        this.r - i / 20,
        `rgba(200,200,50,${this.opacity - i / 100})`
      )
      ball.draw()
    }
  }

  static update() {
    if (this.activeFireworks.length == this.maxActiveCount)
      this.activeFireworks.shift()

    this.activeFireworks.forEach(fire => fire.draw())
  }
}

// Ball 用于绘制烟花升空过程中的球形效果。
// 每个球有位置、半径和颜色。
class Ball {
  constructor(x, y, r, color) {
    this.x = x
    this.y = y
    this.r = r
    this.color = color
  }
  draw() {
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

let frameCount = 0
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 每 50 帧，释放一个新的烟花。
  if (frameCount % 50 == 0) {
    const x = (Math.random() * canvas.width * 3) / 4 + canvas.width / 8
    // 烟花释放的横坐标，限制在画布的 1/8 ~ 7/8 之间。

    const y = Math.random() * 100
    // 烟花释放的纵坐标，限制在 0～100 之间。

    new Firework(x, y)
  }

  Firework.update()

  frameCount++
  requestAnimationFrame(animate)
}
animate()