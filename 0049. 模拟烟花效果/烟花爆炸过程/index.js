const canvas = document.createElement('canvas')
document.body.append(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

ctx.translate(0, canvas.height)

ctx.scale(1, -1)

class Firework {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.r = 6
    this.opacity = 1
    this.speed = 2 + Math.random() * 4
    this.particleCount = 100
    this.particles = [] // 存储爆炸后的粒子
    Firework.activeFireworks.push(this)
  }

  static activeFireworks = []
  static explodeFireworks = []
  static maxActiveCount = 5
  // static maxExplodeCount = 5

  static update() {
    if (this.activeFireworks.length == this.maxActiveCount) {
      const explodeFireword = this.activeFireworks.shift()
      this.explodeFireworks.push(explodeFireword)
    }

    // if (this.explodeFireworks.length == this.maxExplodeCount) {
    //   this.explodeFireworks.shift()
    // }

    this.activeFireworks.forEach((fire) => fire.draw())
    this.explodeFireworks.forEach((fire) => fire.explode())
  }

  draw() {
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

  explode() {
    // 绘制爆炸的粒子
    if (this.particles.length == 0) {
      // 首次爆炸
      const angleDelta = (Math.PI * 2) / this.particleCount
      const color = `hsl(${Math.random() * 360},50%,50%)`
      for (let i = 0; i < this.particleCount; i++) {
        const directionX = Math.cos(angleDelta * i) * Math.random() * 4
        const directionY = Math.sin(angleDelta * i) * Math.random() * 4
        const particle = new Particle(
          this.x,
          this.y,
          directionX,
          directionY,
          color
        )
        this.particles.push(particle)
        particle.draw()
      }
    } else {
      // 已经爆炸，产生了粒子，重绘粒子即可
      this.particles.forEach((particle) => particle.update())
      this.particles = this.particles.filter((particle) => particle.isActive())
    }
  }
}

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

// Particle 用于绘制爆炸后的粒子效果。
// 每个粒子有位置、方向、颜色和类型（用于控制绘制与否）。
class Particle {
  constructor(x, y, dirX, dirY, color) {
    this.x = x
    this.y = y
    this.radius = 3
    this.dirX = dirX
    this.dirY = dirY
    this.color = color
  }

  draw() {
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  update() {
    this.x += this.dirX
    this.y += this.dirY
    this.dirX *= 0.98
    this.dirY *= 0.99
    this.draw()
  }

  isActive() {
    return Math.abs(this.dirX) > 0.2 || Math.abs(this.dirY) > 0.2
  }
}

let frameCount = 0
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (frameCount % 50 == 0) {
    const x = (Math.random() * canvas.width * 3) / 4 + canvas.width / 8

    const y = Math.random() * 100

    new Firework(x, y)
  }

  Firework.update()

  frameCount++
  requestAnimationFrame(animate)
}
animate()
