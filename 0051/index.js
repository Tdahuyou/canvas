// 键盘方向键值
const ARROW_LEFT = 'ArrowLeft'
const ARROW_UP = 'ArrowUp'
const ARROW_RIGHT = 'ArrowRight'
const ARROW_DOWN = 'ArrowDown'

// 网格中的元素类型
const CELL_TYPE_SPACE = 0 // 0 表示空
const CELL_TYPE_SNAKE = 1 // 1 表示蛇
const CELL_TYPE_FOOD = 2 // 2 表示食物

// 单元格颜色
const CELL_COLOR_SNAKE_HEAD = 'red'
const CELL_COLOR_SNAKE_BODY = 'pink'
const CELL_COLOR_FOOD = 'orange'

// #region 画布初始化
const canvasBoard = document.createElement('canvas')
canvasBoard.width = 400
canvasBoard.height = 400
document.body.append(canvasBoard)
const ctxBoard = canvasBoard.getContext('2d')

const canvasGame = document.createElement('canvas')
canvasGame.width = 400
canvasGame.height = 400
document.body.append(canvasGame)
const ctxGame = canvasGame.getContext('2d')
// #endregion 画布初始化

// #region 网格数据初始化
const gridSize = 20
const gridState = {}
function initializeGrid() {
  for (let row = 0; row < canvasBoard.width / gridSize; row++) {
    for (let col = 0; col < canvasBoard.height / gridSize; col++) {
      gridState[`${row * gridSize}-${col * gridSize}`] = CELL_TYPE_SPACE
    }
  }
}
initializeGrid()
// #endregion 网格数据初始化

// #region 绘制网格棋盘
// 这一部分，可以理解为准备游戏地图。
function drawGrid() {
  ctxBoard.save()
  ctxBoard.strokeStyle = '#ccc'
  for (let line = 0; line < canvasBoard.width / gridSize; line++) {
    ctxBoard.beginPath()
    ctxBoard.moveTo(gridSize * line, 0)
    ctxBoard.lineTo(gridSize * line, canvasBoard.height)
    ctxBoard.stroke()

    ctxBoard.beginPath()
    ctxBoard.moveTo(0, gridSize * line)
    ctxBoard.lineTo(canvasBoard.width, gridSize * line)
    ctxBoard.stroke()
  }
  ctxBoard.restore()
}
drawGrid()
// #endregion 绘制网格棋盘

// #region 蛇和食物的基类
class Square {
  constructor(x, y, cell_type, cell_color) {
    this.x = x
    this.y = y
    this.previousX = x
    this.previousY = y
    this.cell_color = cell_color
    this.cell_type = cell_type
  }

  static width = gridSize
  static height = gridSize

  draw() {
    gridState[`${this.previousX}-${this.previousY}`] = CELL_TYPE_SPACE
    gridState[`${this.x}-${this.y}`] = this.cell_type

    ctxGame.clearRect(
      this.previousX,
      this.previousY,
      Square.width,
      Square.height
    )
    this.previousX = this.x
    this.previousY = this.y
    ctxGame.save()
    ctxGame.beginPath()
    ctxGame.fillStyle = this.cell_color
    ctxGame.fillRect(this.x, this.y, Square.width, Square.height)
    ctxGame.restore()
  }
}
// #endregion 蛇和食物的基类

// #region 贪吃蛇
class Snake {
  // 构造函数初始化蛇的位置、方向、头部和身体
  constructor(x, y, direction = 'ArrowRight') {
    this.x = x * gridSize // 横坐标初始化，根据网格大小调整
    this.y = y * gridSize // 纵坐标初始化，根据网格大小调整
    this.direction = direction // 初始方向
    this.head = new Square(this.x, this.y, CELL_TYPE_SNAKE, CELL_COLOR_SNAKE_HEAD) // 创建蛇头部的实例
    this.body = [] // 蛇的身体部分数组
    this.score = 0 // 初始化得分
  }

  // 绘制蛇的头部和身体
  draw() {
    this.head.draw() // 绘制蛇头
    this.body.forEach((segment) => segment.draw()) // 绘制蛇身体的每一个部分
  }

  // 控制蛇的移动逻辑
  move() {
    // 根据蛇的当前方向更新蛇头的位置
    switch (this.direction) {
      case ARROW_RIGHT:
        this.head.x += gridSize
        break
      case ARROW_DOWN:
        this.head.y += gridSize
        break
      case ARROW_LEFT:
        this.head.x -= gridSize
        break
      case ARROW_UP:
        this.head.y -= gridSize
        break
    }

    // 检查游戏是否结束（出界或撞到自己）
    if (this.isOutOfBounds() || this.isCollidingWithSelf()) {
      console.log('游戏结束！最终得分：' + this.score) // 弹出游戏结束信息
      return
    }

    // 检查蛇是否吃到食物
    if (this.isEatingFood()) {
      this.score += 10 // 增加分数
      const newSegment = new Square(
        this.head.previousX,
        this.head.previousY,
        CELL_TYPE_SNAKE,
        CELL_COLOR_SNAKE_BODY
      ) // 创建新的身体部分
      this.body.unshift(newSegment) // 将新部分添加到蛇身体的前端
      generateFood() // 重新生成食物
    } else {
      this.moveBody() // 移动身体
    }

    this.draw() // 重绘蛇的新状态

    setTimeout(() => {
      this.move() // 延迟调用move方法，以创建动画效果
    }, 200 - this.score / 2) // 移动速度随分数增加而增快
  }

  // 检查蛇是否出界
  isOutOfBounds() {
    return (
      this.head.x < 0 ||
      this.head.y < 0 ||
      this.head.x >= canvasGame.width ||
      this.head.y >= canvasGame.height
    )
  }

  // 检查蛇是否撞到了自己
  isCollidingWithSelf() {
    return gridState[`${this.head.x}-${this.head.y}`] === CELL_TYPE_SNAKE
  }

  // 检查蛇是否吃到了食物
  isEatingFood() {
    return this.head.x === currentFood.x && this.head.y === currentFood.y
  }

  // 移动蛇身体的逻辑
  // 把尾巴切掉一个格子
  // 然后在头部插入一个格子
  moveBody() {
    if (this.body.length > 0) {
      const tailSegment = this.body.pop() // 移除尾部
      tailSegment.x = this.head.previousX // 更新尾部位置到之前头部的位置
      tailSegment.y = this.head.previousY
      this.body.unshift(tailSegment) // 将尾部添加到头部位置，实现身体的“移动”
    }
  }
}
// #endregion 贪吃蛇

// #region 生成食物
let currentFood
// 在画布随机一个空白位置上生成食物
function generateFood() {
  while (true) {
    const x =
      Math.floor((Math.random() * canvasBoard.width) / gridSize) * gridSize
    const y =
      Math.floor((Math.random() * canvasBoard.height) / gridSize) * gridSize
    if (gridState[`${x}-${y}`] === 0) {
      currentFood = new Square(x, y, CELL_TYPE_FOOD, 'orange')
      currentFood.draw()
      break
    }
  }
}
generateFood()
// #endregion 生成食物

// #region 开始游戏
canvasGame.onclick = function () {
  // 地图初始化
  ctxGame.clearRect(0, 0, canvasGame.width, canvasGame.height)
  generateFood()
  initializeGrid()

  // 创建蛇
  const playerSnake = new Snake(10, 10)
  playerSnake.draw()
  playerSnake.move()

  // 监听键盘按下事件
  document.onkeydown = function (event) {
    if (
      // 按下的不是方向键
      ![ARROW_LEFT, ARROW_UP, ARROW_RIGHT, ARROW_DOWN].includes(event.code) ||
      // 按下的是当前运动方向的反方向
      (playerSnake.direction === ARROW_RIGHT && event.code === ARROW_LEFT) ||
      (playerSnake.direction === ARROW_LEFT && event.code === ARROW_RIGHT) ||
      (playerSnake.direction === ARROW_DOWN && event.code === ARROW_UP) ||
      (playerSnake.direction === ARROW_UP && event.code === ARROW_DOWN)
    ) {
      return
    }

    playerSnake.direction = event.code
  }
}
// #endregion 开始游戏
