+ 本节介绍了 canvas 的一些基本特性。通过一个简单的小示例，绘制一个矩形，来初步了解一下 canvas 的基本使用。
+ 介绍了 canvas 技术的一些应用场景。简单了解一下 canvas 这玩意儿能用来做些什么东西。

# 🔗 链接
[📝 对比 svg 和 canvas](https://www.yuque.com/huyouda/programming-public/ctfnzgt7rx7ua7d7)

[📝 区分 Image 和 Graphic](https://www.yuque.com/huyouda/programming-public/yqp62zvxg2gskxau)

有助于加深对 canvas 的了解。

# 📝 笔记
## 概述
`<canvas>` 是 **<font style="color:#DF2A3F;">HTML5</font>** 中引入的一个元素，它允许你在网页上绘制图形，这些图形可以是 **<font style="color:#DF2A3F;">2D</font>** 或 **<font style="color:#DF2A3F;">3D</font>** （使用 WebGL）。`**<font style="color:#DF2A3F;"><canvas></font>**`**<font style="color:#DF2A3F;"> 元素本身只是一个容器，实际的绘制需要使用 JavaScript 来完成。</font>**

## canvas 基本使用

![1.html](./1.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>240519. 📝 认识 &lt;canvas&gt;</title>
  </head>
  <body>
    <canvas id="myCanvas" width="200" height="100"></canvas>

    <script>
      // 获取上述创建好的 canvas 标签
      const canvas = document.getElementById('myCanvas')

      // 获取 canvas 这玩意儿的上下文
      // 可以理解为获取画笔，需要先有画笔才能绘图不是。
      const ctx = canvas.getContext('2d')

      ctx.fillStyle = 'red'
      ctx.fillRect(10, 10, 50, 50)
    </script>
  </body>
</html>
```



![](https://cdn.nlark.com/yuque/0/2024/png/2331396/1716743110917-57edfe42-b713-43e7-a4d9-23d8f2828e66.png)



要在网页上使用 `<canvas>`，你首先需要在 HTML 中定义一个 `<canvas>` 标签，并为其指定一个 `id`：



**canvas 标签**

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

然后在 JavaScript 中获取这个 Canvas 元素，并通过它的绘图上下文进行绘制：



**使用 js 获取 canvas 标签**

```javascript
// 获取上述创建好的 canvas 标签
const canvas = document.getElementById('myCanvas')

// 获取 canvas 这玩意儿的上下文
// 可以理解为获取画笔，需要先有画笔才能绘图不是。
const ctx = canvas.getContext('2d')
```



`**<font style="color:#DF2A3F;">getContext('2d')</font>**`**<font style="color:#DF2A3F;"> 方法是用来获取渲染上下文和其绘图功能的。</font>**你可以通过这个上下文来绘制简单的图形，比如矩形、圆形，或者更复杂的路径。



以下是一个简单的示例，演示如何在 Canvas 上绘制一个红色矩形：

```javascript
ctx.fillStyle = 'red'
ctx.fillRect(10, 10, 50, 50)
```



这段代码设置了填充色为红色，并绘制了一个位于画布上 `(10,10)` 位置，宽 50 像素，高 50 像素的矩形。



![](https://cdn.nlark.com/yuque/0/2024/png/2331396/1716743471466-35355d2d-4e01-4b47-9d56-1deb5848d953.png)



从最终渲染的结果来看，你会发现页面上确实绘制出了一个红色的矩形。但是打开开发者调试工具后，你会发现并没有像 `<svg>` 那样，出现一个 `<rect>` 元素。这也是 canvas 和 svg 的一个重大差一点之一：

+ svg 是基于 xml 的，它类似与 html，是有 DOM 结构的。
+ canvas 的绘图这是基于 JavaScript 来控制，我们定义的 canvas 标签，仅仅是提供一个画布，绘制的内容是不存在对应的 DOM 节点的。

## canvas 基本特性
+ **像素基础**：Canvas 是基于 **<font style="color:#DF2A3F;">像素 </font>**的，你可以通过 JavaScript 控制每一个像素。
+ **动态图形**：Canvas 非常适合 **<font style="color:#DF2A3F;">动态 </font>**生成的图形，如 **<font style="color:#DF2A3F;">游戏</font>**、**<font style="color:#DF2A3F;">图形处理 </font>**和其他需要大量 **<font style="color:#DF2A3F;">动态视觉效果 </font>**的应用。
+ **无 DOM 结构**：Canvas **<font style="color:#DF2A3F;">内部 </font>**的图形 **<font style="color:#DF2A3F;">不是 DOM 元素</font>**，因此它们不是 HTML 的一部分，不能直接被 CSS 样式化或用 CSS 控制。
+ **动画问题**：由于 Canvas 本身不提供构建动画的直接支持，动画的创建需要通过 JavaScript 定时调用绘图命令来实现。例如，**<font style="color:#DF2A3F;">使用 </font>**`**<font style="color:#DF2A3F;">requestAnimationFrame</font>**`**<font style="color:#DF2A3F;"> 来持续更新 Canvas 上的图形以创建动画效果</font>**。



`<canvas>` 是一个功能强大的工具，**<font style="color:#DF2A3F;">适合需要绘制大量计算生成图形的应用。</font>**



由于其依赖 JavaScript 进行绘图，这为开发者提供了极大的灵活性，但同时也意味着它可能不如 SVG 那样适合 **<font style="color:#DF2A3F;">搜索引擎优化 </font>**或简单的图形显示。

## canvas 应用场景
`<canvas>` 元素主要用来解决需要动态、复杂渲染以及高度可交互的图形场景的问题。



`<canvas>` 的主要优势在于处理复杂的图形操作和实现高级动画与交互。这使得它在需要高度图形交互和动态内容更新的应用中非常有用，尤其是在游戏开发、图形编辑和数据可视化等领域。

### 游戏开发
Canvas 非常适合用于开发 2D 游戏。它可以处理大量的图形和动画效果，而且由于基于像素，开发者可以精细控制图像和动作，进行复杂的视觉效果渲染和帧控制。



[4399](https://www.4399.com/) 中的小游戏，大多也都是通过 canvas 来制作的。

![](https://cdn.nlark.com/yuque/0/2024/png/2331396/1716649661711-21c4e194-6851-43d6-accd-571cf3cbe089.png)

### 图形处理
Canvas 提供了强大的图像处理能力，例如图像编辑功能（如旋转、缩放、裁剪等）、颜色效果和图像合成。这些功能使其成为在线图形编辑工具的好选择。

### 数据可视化
虽然 SVG 在很多数据可视化场景中也很流行，但对于需要大量动态交互和大数据量渲染的复杂数据可视化，Canvas 是更好的选择。例如，实时的数据更新、动态效果和图表，以及交互式的图形操作。



比如 [echarts demos](https://echarts.apache.org/examples/zh/index.html#chart-type-line)

![](https://cdn.nlark.com/yuque/0/2024/png/2331396/1716649281610-9f2496a0-a6cf-4c76-a251-e8ca3a47eace.png)

> <font style="color:rgb(29, 29, 31);">这里补充一嘴，实际上 echarts 图表，支持两种渲染模式 svg、canvas。默认情况下使用的是 canvas 来渲染。这样说明了一点，很多图形 svg、canvas 都可以绘制，并不是说某种图形就一定得使用某种技术来实现。</font>
>

### 实时视频处理
Canvas 可以用来处理和修改视频内容，如视频特效、实时视频渲染等。可以将视频帧捕捉到 Canvas 上，并使用其 API 来实现图像数据的即时处理。

### 自定义绘图
对于需要高度自定义的绘图应用，如绘画程序或设计工具，Canvas 提供了所需的灵活性，用户可以通过简单的鼠标交互来创建复杂的设计和图形。

### 教育和模拟
在教育软件中，尤其是需要动态展示和交互式学习的场景，如物理实验模拟、生物结构展示等，Canvas 提供了一种有效的实现方式。

