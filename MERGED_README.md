# [README.md](./0001.%20认识%20canvas%20标签/README.md)<!-- !======> SEPERATOR <====== -->
# [0001. 认识 canvas 标签](https://github.com/Tdahuyou/canvas/tree/main/0001.%20%E8%AE%A4%E8%AF%86%20canvas%20%E6%A0%87%E7%AD%BE)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 canvas 概述](#2--canvas-概述)
- [3. 📒 canvas 基本使用](#3--canvas-基本使用)
- [4. 📒 canvas 基本特性](#4--canvas-基本特性)
- [5. 📒 canvas 应用场景](#5--canvas-应用场景)
  - [5.1. 游戏开发](#51-游戏开发)
  - [5.2. 图形处理](#52-图形处理)
  - [5.3. 数据可视化](#53-数据可视化)
  - [5.4. 实时视频处理](#54-实时视频处理)
  - [5.5. 自定义绘图](#55-自定义绘图)
  - [5.6. 教育和模拟](#56-教育和模拟)
- [6. 📒 对比 svg 和 canvas](#6--对比-svg-和-canvas)
  - [6.1. 对比表格](#61-对比表格)
  - [6.2. 对比 svg 和 canvas](#62-对比-svg-和-canvas)
- [7. 🤖 对比 svg 和 canvas](#7--对比-svg-和-canvas)
  - [7.1. 图形类型](#71-图形类型)
  - [7.2. DOM 交互](#72-dom-交互)
  - [7.3. 性能](#73-性能)
  - [7.4. 可访问性和SEO](#74-可访问性和seo)
  - [7.5. 应用场景](#75-应用场景)
  - [7.6. 总结](#76-总结)
- [8. 📒 区分 Image 和 Graphic](#8--区分-image-和-graphic)
  - [8.1. 图像（Image）](#81-图像image)
  - [8.2. 图形（Graphic）](#82-图形graphic)
  - [8.3. SVG 中的应用](#83-svg-中的应用)
  - [8.4. 结论](#84-结论)
<!-- endregion:toc -->

## 1. 📝 Summary

- 本节介绍了 canvas 的一些基本特性。通过一个简单的小示例，绘制一个矩形，来初步了解一下 canvas 的基本使用。
- 介绍了 canvas 技术的一些应用场景。简单了解一下 canvas 这玩意儿能用来做些什么东西。
- 了解 Image 和 Graphic 之间的区别
- 了解 svg 和 canvas 之间的区别

## 2. 📒 canvas 概述

`<canvas>` 是 **HTML5** 中引入的一个元素，它允许你在网页上绘制图形，这些图形可以是 **2D** 或 **3D** （使用 WebGL）。**`<canvas>` 元素本身只是一个容器，实际的绘制需要使用 JavaScript 来完成。**

## 3. 📒 canvas 基本使用


```html
<!-- ./1.html -->
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
```

[1.html](./1.html) 的渲染结果如下：

![](md-imgs/2024-09-18-06-27-53.png)

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

getContext('2d') 方法是用来获取渲染上下文和其绘图功能的。你可以通过这个上下文来绘制简单的图形，比如矩形、圆形，或者更复杂的路径。

以下是一个简单的示例，演示如何在 Canvas 上绘制一个红色矩形：

```javascript
ctx.fillStyle = 'red'
ctx.fillRect(10, 10, 50, 50)
```

这段代码设置了填充色为红色，并绘制了一个位于画布上 `(10,10)` 位置，宽 50 像素，高 50 像素的矩形。

![](md-imgs/2024-09-18-06-30-27.png)

从最终渲染的结果来看，你会发现页面上确实绘制出了一个红色的矩形。但是打开开发者调试工具后，你会发现并没有像 `<svg>` 那样，出现一个 `<rect>` 元素。这也是 canvas 和 svg 的一个重大差一点之一：

- svg 是基于 xml 的，它类似与 html，是有 DOM 结构的。
- canvas 的绘图这是基于 JavaScript 来控制，我们定义的 canvas 标签，仅仅是提供一个画布，绘制的内容是不存在对应的 DOM 节点的。

## 4. 📒 canvas 基本特性

- **像素基础**：Canvas 是基于 **像素** 的，你可以通过 JavaScript 控制每一个像素。
- **动态图形**：Canvas 非常适合 **动态** 生成的图形，如 **游戏**、**图形处理** 和其他需要大量 **动态视觉效果** 的应用。
- **无 DOM 结构**：Canvas **内部** 的图形 **不是 DOM 元素**，因此它们不是 HTML 的一部分，不能直接被 CSS 样式化或用 CSS 控制。
- **动画问题**：由于 Canvas 本身不提供构建动画的直接支持，动画的创建需要通过 JavaScript 定时调用绘图命令来实现。例如，**使用 `**requestAnimationFrame**` 来持续更新 Canvas 上的图形以创建动画效果**。

`<canvas>` 是一个功能强大的工具，**适合需要绘制大量计算生成图形的应用。**

由于其依赖 JavaScript 进行绘图，这为开发者提供了极大的灵活性，但同时也意味着它可能不如 SVG 那样适合 **搜索引擎优化** 或简单的图形显示。

## 5. 📒 canvas 应用场景

`<canvas>` 元素主要用来解决需要动态、复杂渲染以及高度可交互的图形场景的问题。

`<canvas>` 的主要优势在于处理复杂的图形操作和实现高级动画与交互。这使得它在需要高度图形交互和动态内容更新的应用中非常有用，尤其是在游戏开发、图形编辑和数据可视化等领域。

### 5.1. 游戏开发

Canvas 非常适合用于开发 2D 游戏。它可以处理大量的图形和动画效果，而且由于基于像素，开发者可以精细控制图像和动作，进行复杂的视觉效果渲染和帧控制。

[4399](https://www.4399.com/) 中的小游戏，大多也都是通过 canvas 来制作的。

![](md-imgs/2024-09-18-06-32-20.png)

### 5.2. 图形处理

Canvas 提供了强大的图像处理能力，例如图像编辑功能（如旋转、缩放、裁剪等）、颜色效果和图像合成。这些功能使其成为在线图形编辑工具的好选择。

### 5.3. 数据可视化

虽然 SVG 在很多数据可视化场景中也很流行，但对于需要大量动态交互和大数据量渲染的复杂数据可视化，Canvas 是更好的选择。例如，实时的数据更新、动态效果和图表，以及交互式的图形操作。

比如 [echarts demos](https://echarts.apache.org/examples/zh/index.html#chart-type-line)

![](md-imgs/2024-09-18-06-32-40.png)

> 这里补充一嘴，实际上 echarts 图表，支持两种渲染模式 svg、canvas。默认情况下使用的是 canvas 来渲染。这样说明了一点，很多图形 svg、canvas 都可以绘制，并不是说某种图形就一定得使用某种技术来实现。

### 5.4. 实时视频处理

Canvas 可以用来处理和修改视频内容，如视频特效、实时视频渲染等。可以将视频帧捕捉到 Canvas 上，并使用其 API 来实现图像数据的即时处理。

### 5.5. 自定义绘图

对于需要高度自定义的绘图应用，如绘画程序或设计工具，Canvas 提供了所需的灵活性，用户可以通过简单的鼠标交互来创建复杂的设计和图形。

### 5.6. 教育和模拟

在教育软件中，尤其是需要动态展示和交互式学习的场景，如物理实验模拟、生物结构展示等，Canvas 提供了一种有效的实现方式。

## 6. 📒 对比 svg 和 canvas

文中提供了一张表格，记录了这俩玩意儿之间的一些差异。可以等学完了 svg、canvas 的内容之后再来回看这篇文档中提到的内容。

### 6.1. 对比表格

| SVG | Canvas |
| --- | --- |
| 2003 成为 w3c 标准 | html5 新标签 |
| 绘制矢量图 | 绘制位图 |
| 放缩不会导致失真 | 放缩会导致失真 |
| 对（图形）标签进行操作，方便，灵活 | 对像素点进行操作，效果更细腻，不易操作 |
| 交互性强，容易实现动画 | 动画逻辑实现复杂 |
| 存在一定的性能问题 | 性能略高一些 |
| 适合绘制地图、图标…… | 适合绘制图表，制作游戏…… |
| 不易绘制 3d 图形 | 提供了绘制 3d 图形的 api |

### 6.2. 对比 svg 和 canvas

> 在提到前端绘图时，首先会想到的两个技术就是 svg、canvas。但是它们是两个完全不同的技术，存在不少区别。

初学阶段，想要充分理解 svg、canvas 之间的区别并不容易。只能说对它们俩有个初步的认知，比如知道它们都能用来做些什么内容。想要充分理解它们之间的区别，最好把两个技术都过一边，从各个角度去比较两者之间的差异。

在写法上两者差异是比较大的：

- svg 写的是 xml，写起来类似写 html，因此打开浏览器的调试工具，你可以看到一个 `<svg>` 元素，然后这个 `<svg>` 里边包含着一个个其它的 svg 子元素。
- canvas 仅仅是提供一个画布，所有绘图的逻辑，都交给 js 去控制，因此在浏览器的调试工具中，你只能看到一个 `<canvas>` 标签。

想要了解 svg、canvas 都能做什么，一个不错的法子就是上网找案例，看看使用 svg、canvas 技术实现的成品。比如，快速了解一下它们能够实现什么效果。

svg 的 demos 可以看看 [snapsvg demos](http://snapsvg.io/demos/)

![](md-imgs/2024-09-18-06-46-41.png)

canvas 的 demos 可以看看 [4399 小游戏](https://www.4399.com/)。

![](md-imgs/2024-09-18-06-46-53.png)

4399 中的小游戏，大多也都是通过 canvas 来制作的。

再比如 [echarts demos](https://echarts.apache.org/examples/zh/index.html#chart-type-line)

![](md-imgs/2024-09-18-06-47-02.png)

> <font style="color:rgb(29, 29, 31);">这里补充一嘴，实际上 echarts 图表，支持两种渲染模式 svg、canvas。默认情况下使用的是 canvas 来渲染。这样说明了一点，很多图形 svg、canvas 都可以绘制，并不是说某种图形就一定得使用某种技术来实现。</font>
>

## 7. 🤖 对比 svg 和 canvas


SVG（Scalable Vector Graphics）和 Canvas 是两种流行的图形处理技术，它们各有特点，并适用于不同的应用场景。以下是它们的主要对比：

### 7.1. 图形类型


- **SVG**：使用矢量图形，这意味着图形是通过数学方程式来描述的，可以无限缩放而不会失真。
- **Canvas**：使用像素图形（位图），它是一个矩形像素的网格，放大过多时会出现像素化。



### 7.2. DOM 交互


- **SVG**：SVG 图形是作为DOM（文档对象模型）的一部分直接嵌入到HTML中，因此可以像HTML元素一样用CSS和JavaScript进行控制和操作。
- **Canvas**：Canvas通过JavaScript在一个绘图表面上动态渲染图像，它本身不是DOM的一部分，不能直接被CSS控制，所有的元素都需要通过脚本处理。



### 7.3. 性能


- **SVG**：由于SVG文件是DOM的一部分，当SVG元素非常多或非常复杂时，它可能会降低页面的性能，因为每个元素都是DOM节点。
- **Canvas**：通常在处理大量或复杂动画和游戏图形时性能更好，因为它直接在位图上进行渲染，不依赖DOM结构。



### 7.4. 可访问性和SEO


- **SVG**：由于SVG元素是DOM的一部分，它们可以被搜索引擎索引，也支持文本标签和描述，增加了可访问性。
- **Canvas**：Canvas内的元素不可搜索，对搜索引擎优化（SEO）和屏幕阅读器的支持较差。



### 7.5. 应用场景


- **SVG**：非常适合需要高度可缩放性的应用，如图标、图表和其他复杂的交互式界面元素。
- **Canvas**：更适合需要大量计算和重新绘制的应用，如视频游戏、图像编辑和实时视频处理。



### 7.6. 总结


选择SVG还是Canvas取决于具体的应用需求：

- 如果你需要高质量的图形，如图标和矢量图，且希望它们具有良好的缩放性和可访问性，那么SVG可能是更好的选择。
- 如果你的项目涉及到复杂的动画、游戏或需要大量动态图形处理，Canvas将可能提供更好的性能和灵活性。

## 8. 📒 区分 Image 和 Graphic

Image 和 Graphic 理解这俩词的区别，对于理解 svg 和 canvas 的差异有所帮助。

从“中文”表述的角度来看，在 svg、canvas 的相关文章中，对于“图形”、“图像”这俩词，很多时候都是混着用的。

之所以会记录 Image 和 Graphic 之间的区别，主要是因为 SVG 的全称（Scalable Vector Graphics）中出现了 `Graphics` 这个词，同时在 canvas 中，对应的词是 `Image`，所以在此简单记录一下，什么是 `Image`、`Graphic`，它们之间的区别又是什么。

在学习 SVG 以及更广泛地讨论计算机图形学时，理解“图像”和“图形”这两个词的区别确实有其价值。这两个概念虽然在日常语言中经常交替使用，但在技术上有着明确的区别，特别是在处理图形数据和渲染技术时。

### 8.1. 图像（Image）

图像通常指的是 **像素数据的集合**，这些数据以栅格或点阵的形式存储。每个像素都有一个或多个与之关联的颜色值，整体上形成了一幅完整的图像。这种图像的典型例子包括照片和扫描的文档。图像的关键特点是它们的细节和外观是固定的，放大图像会导致分辨率下降，出现像素化。

### 8.2. 图形（Graphic）

图形更多指的是 **通过数学表达式定义的图形**，例如 SVG 中的形状（圆形、矩形、路径等）。这些图形是矢量的，意味着它们不依赖于像素，而是依赖于路径和形状的描述。矢量图形可以无限放大或缩小，而不会失去质量，因为它们在显示或打印前都是由设备根据矢量路径实时渲染的。

### 8.3. SVG 中的应用

SVG（**Scalable Vector Graphics**）是一种使用 XML 格式定义图形的技术。它是一种矢量图形格式，这意味着它描述的是图形而非图像。在 SVG 中，你可以定义形状、路径、文本等元素，并且可以对它们应用变换、样式和动画，这些都是在图形层面进行的操作。

### 8.4. 结论

在学习 SVG 或任何图形处理相关的技术时，明确图像和图形的概念非常重要。这有助于你更好地理解何时使用 SVG 这样的矢量技术，以及何时可能需要使用像 JPEG 或 PNG 这样的栅格图像格式。理解这些概念可以帮助你选择最适合你的项目需求的工具和技术。


# [README.md](./0002.%20判断浏览器是否支持%20canvas/README.md)<!-- !======> SEPERATOR <====== -->
# [0002. 判断浏览器是否支持 canvas](https://github.com/Tdahuyou/canvas/tree/main/0002.%20%E5%88%A4%E6%96%AD%E6%B5%8F%E8%A7%88%E5%99%A8%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81%20canvas)


<!-- region:toc -->
- [1. ⏰ TODO 待整理](#1--todo-待整理)
<!-- endregion:toc -->

## 1. ⏰ TODO 待整理

- 掌握判断浏览器是否支持 canvas 的两种方式。
[1.html](./1.html) 中的内容如下：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!--
      绝大多数的浏览器都支持 canvas
      少数老版本的浏览器不支持（比如版本低于 9 的 IE 浏览器）
      可以通过下面这两种方式来判断浏览器是否支持 canvas：
      1. 浏览器如果不认识 canvas，会显示 canvas 标签中的内容。
      2. 通过检查 canvas 元素的 getContext 方法是否存在来检测浏览器是否支持 canvas。
     -->
    <canvas>
      您的浏览器版本过低，不支持canvas，请升级浏览器或更换浏览器
    </canvas>
    <script>
      // 通过 JS 来检查浏览器是否支持 canvas
      // 通过检查 canvas 元素的 getContext 方法是否存在来检测浏览器是否支持 canvas。
      function checkCanvasSupport() {
        var canvas = document.createElement('canvas') // 创建一个canvas元素
        return !!canvas.getContext // 检查getContext方法是否存在
      }
      if (checkCanvasSupport()) {
        console.log('浏览器支持canvas')
      } else {
        console.log('浏览器不支持canvas')
      }
    </script>
  </body>
</html>
```
![](md-imgs/2024-09-19-09-26-51.png)
因为浏览器支持 canvas，所以打开这个 1.html 之后，将看到一个空白的界面，并在 devtools 中的 console 模块中输出了 `浏览器支持canvas`。


# [README.md](./0003.%20区分%20canvas%20的%20width、height%20属性和%20style%20中设置的%20width、height%20值/README.md)<!-- !======> SEPERATOR <====== -->
# [0003. 区分 canvas 的 width、height 属性和 style 中设置的 width、height 值](https://github.com/Tdahuyou/canvas/tree/main/0003.%20%E5%8C%BA%E5%88%86%20canvas%20%E7%9A%84%20width%E3%80%81height%20%E5%B1%9E%E6%80%A7%E5%92%8C%20style%20%E4%B8%AD%E8%AE%BE%E7%BD%AE%E7%9A%84%20width%E3%80%81height%20%E5%80%BC)

<!-- region:toc -->
- [1. ⏰ TODO 待整理](#1--todo-待整理)
<!-- endregion:toc -->

## 1. ⏰ TODO 待整理

在设置画布尺寸的时候，直接设置 canvas 的 width、height 属性值，不要通过 css 来设置 width、height。
- 【推荐】直接设置 canvas 的 wdith 和 height：`<canvas width="400" height="400"></canvas>`
- 【不推荐】通过 css 来设置 width 和 height：`canvas { width: 400, height: 400 }`
**style 设置的是容器的尺寸、canvas 的 width、height 设置的是画布坐标系的尺寸。如果两者的尺寸不一致，那么坐标系的最小单位将会自动缩小/放大，以适应容器尺寸。**
- 如果容器是 400x400 坐标系是 200x200，那么坐标系中的一个单位意味着 2px。（放大）
- 如果容器是 400x400 坐标系也是 400x400，那么坐标系中的一个单位意味着 1px。（正常）
**在设置画布尺寸的时候，为了方式坐标被拉伸，通常都是直接设置 canvas 的 width、height 而不是通过 style 来设置。**
[1.html](./1.html) 文件内容如下：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        outline: 1px solid #ddd;
      }
      #c1 {
        width: 400px;
        height: 400px;
      }
      .box {
        width: 50px;
        height: 50px;
        background-color: black;
      }
    </style>
  </head>
  <body>
    <h1>50*50 盒子的大小（作为参照）</h1>
    <div class="box"></div>
    <!--
    1. canvas 可以使用 style 样式设置宽高
    2. canvas 也可以使用 width 和 height 属性设置宽高
    区别：
    1. style 的 width、height 设置的是画布容器尺寸
    2. canvas 的 width、height 设置的是画布坐标系
   -->
    <!--
    c1 容器的尺寸是 400 * 400
    c1 画布的坐标系是 200 * 200
    相当于 1 个单位是 2px
    意味着图像的大小被放大到原来的两倍
    -->
    <h1>c1 坐标系中的一个单位按比例放大两倍</h1>
    <canvas id="c1" width="200" height="200"></canvas>
    <!--
    c2 容器的尺寸是 400 * 400
    c2 画布的坐标系是 400 * 400
    相当于 1 个单位是 1px
     -->
    <h1>c2 坐标系比例保持不变</h1>
    <!--
    如果没有设置 style 的 width 和 height
    那么容器的尺寸就是 canvas 的 width、height 属性值
    也就是说 #c2 的容器尺寸就是 400 x 400
     -->
    <canvas id="c2" width="400" height="400"></canvas>
  </body>
  <script>
    {
      /** @type {HTMLCanvasElement} */
      const canvas = document.querySelector('#c1')
      const ctx = canvas.getContext('2d')
      ctx.fillRect(0, 0, 50, 50)
      // 表示在 (0, 0) 位置绘制一个宽高为 50 的矩形
    }
    {
      /** @type {HTMLCanvasElement} */
      const canvas = document.querySelector('#c2')
      const ctx = canvas.getContext('2d')
      ctx.fillRect(0, 0, 50, 50)
    }
  </script>
</html>
```
![](md-imgs/2024-09-19-09-40-34.png)


# [README.md](./0004.%20使用%20ctx.clearRect%20清除画布/README.md)<!-- !======> SEPERATOR <====== -->
# [0004. 使用 ctx.clearRect 清除画布](https://github.com/Tdahuyou/canvas/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20ctx.clearRect%20%E6%B8%85%E9%99%A4%E7%94%BB%E5%B8%83)

<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo1](#2--demo1)
- [3. 💻 demo2](#3--demo2)
- [4. 💻 demo3](#4--demo3)
- [5. 💻 demo4](#5--demo4)
<!-- endregion:toc -->

## 1. 📒 notes

需要理解 ctx.clearRect 清除画布的本质是让指定区域 **透明**，而非真的将路径给擦掉了。

---

**理解擦除的本质**

`ctx.clearRect(x, y, width, height)` 用于在 canvas 上清除指定的矩形区域，使该区域完全透明。

---

**了解应用场景**

这个方法对于动画和游戏开发中的图形更新特别有用，因为它允许开发者清除旧的图像帧，从而在同一位置绘制新的帧。

- **动画**：在每个动画帧开始时清除旧的画面内容。
- **游戏开发**：清除移动对象留下的轨迹，比如角色、弹药或其他元素。
- **用户界面**：在用户界面元素变动时，清除旧元素的区域以更新界面。

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 ctx.clearRect 方法</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'

      // 使用 ctx.clearRect(x, y, width, height) 方法
      // 清除画布中的指定矩形区域

      // 【1】绘制一条横线
      ctx.beginPath()
      ctx.moveTo(0, 100)
      ctx.lineTo(400, 100)
      ctx.stroke()

      // 【2】绘制一条竖线
      ctx.beginPath()
      ctx.moveTo(100, 0)
      ctx.lineTo(100, 400)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-22-50-14.png)

## 3. 💻 demo2

```html
<!-- 2.html -->
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 ctx.clearRect 方法</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'

      // 【1】绘制一条横线
      ctx.beginPath()
      ctx.moveTo(0, 100)
      ctx.lineTo(400, 100)
      ctx.stroke()

      ctx.clearRect(0, 0, 100, 400) // 【1】 的一部分会被擦掉。

      // 【2】绘制一条竖线
      ctx.beginPath()
      ctx.moveTo(100, 0)
      ctx.lineTo(100, 400)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-22-51-05.png)

## 4. 💻 demo3

```html
<!-- 3.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 ctx.clearRect 方法</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'

      // 【1】绘制一条横线
      ctx.beginPath()
      ctx.moveTo(0, 100)
      ctx.lineTo(400, 100)
      ctx.stroke()

      ctx.clearRect(0, 0, cavnas.width, cavnas.height) // 擦除整个画布

      // 【2】绘制一条竖线
      ctx.beginPath()
      ctx.moveTo(100, 0)
      ctx.lineTo(100, 400)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-22-51-24.png)

## 5. 💻 demo4

```html
<!-- 4.html -->
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 ctx.clearRect 方法</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'

      // 清除画布的本质就是将指定的矩形区域的透明度设置为 0
      // 之前的路径依然是存在的

      // 如果在开始绘制新的路径时不希望之前的路径出现
      // 别忘了调用 beginPath() 方法

      // 【1】绘制一条横线
      ctx.beginPath() // 假如将这个 beginPath 和下面的都注释掉的话，那么最后调用 stroke() 时，会将之前的网格路径也一起绘制出来。（不过 lineWidth 和 strokeStyle 不再是 drawGrid 方法中封装的值了。）
      ctx.moveTo(0, 100)
      ctx.lineTo(400, 100)
      ctx.stroke()

      ctx.clearRect(0, 0, cavnas.width, cavnas.height) // 擦除整个画布

      // 【2】绘制一条竖线
      // ctx.beginPath() // 如果没有 beginPath()，绘制【2】竖线的时候，之前的【1】横线也会出现。
      ctx.moveTo(100, 0)
      ctx.lineTo(100, 400)
      ctx.stroke() // 绘制路径，此时会同时绘制出【1】、【2】
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-22-51-38.png)

# [README.md](./0005.%20canvas%20的默认尺寸%20300%20x%20150/README.md)<!-- !======> SEPERATOR <====== -->
# [0005. canvas 的默认尺寸 300 x 150](https://github.com/Tdahuyou/canvas/tree/main/0005.%20canvas%20%E7%9A%84%E9%BB%98%E8%AE%A4%E5%B0%BA%E5%AF%B8%20300%20x%20150)

<!-- region:toc -->
- [1. 📝 summary](#1--summary)
- [2. 📒 notes](#2--notes)
- [3. 💻 demo](#3--demo)
<!-- endregion:toc -->

## 1. 📝 summary

- 知道 `<canvas>` 默认是 300x150 的行盒。

## 2. 📒 notes

如果你仅仅创建了一个 canvas，但是并没有指定它的 width、height，那么这个 canvas 的默认尺寸是 300x150。

## 3. 💻 demo

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    canvas {
      outline: 1px solid #ddd;
    }
  </style>
</head>
<body>
  <!--
    1. canvas 是一个行内元素
    2. canvas 默认大小是 300 * 150

    打开浏览器查看最终渲染效果会发现俩盒子同行显示。
    打开 devtools，查看盒模型，会发现盒子尺寸是 300 * 150。
   -->
  <canvas></canvas>
  <canvas></canvas>
</body>
</html>
```

**最终的渲染结果**

![](md-imgs/2024-10-03-22-58-50.png)

从最终的渲染结果（并行显示）来看，会发现其实 canvas 并非块盒。

**计算属性及盒模型**

![](md-imgs/2024-10-03-22-59-01.png)

# [README.md](./0006.%20使用%20JSDoc%20来标注%20canvas%20变量类型/README.md)<!-- !======> SEPERATOR <====== -->
# [0006. 使用 JSDoc 来标注 canvas 变量类型](https://github.com/Tdahuyou/canvas/tree/main/0006.%20%E4%BD%BF%E7%94%A8%20JSDoc%20%E6%9D%A5%E6%A0%87%E6%B3%A8%20canvas%20%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1 - 查询已有的 canvas](#2--demo1---查询已有的-canvas)
- [3. 💻 demo2 - 创建新的 canvas](#3--demo2---创建新的-canvas)
<!-- endregion:toc -->

## 1. 📝 Summary

本节介绍的内容是 —— 如何在 IDE 中获取更友好地 canvas 相关的 API 智能提示问题。
- 【示例 2】如果想要获取到 IDE 的智能提示，有些教程中的做法是推荐你使用 createElement 的方式来创建 canvas，这么做的目的是为了获取到更有好的智能提示。
- 【示例 1】而如果你页面上如果已经有了 canvas 标签，然后你通过查询的方式找到这个标签，此时默认是没有智能提示的，这个问题可以通过 JSDoc 标注的方式来解决。

## 2. 💻 demo1 - 查询已有的 canvas

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <canvas id="c"></canvas>

    <script>
      // 使用 JSDoc 注释来标注 canvas 变量类型。
      /** @type {HTMLCanvasElement} */
      const c = document.getElementById('c')

      // c.getContext
      // 输入 c.getcon 时，会自动提示 c.getContext

      // 假如没有 /** @type {HTMLCanvasElement} */ 这一部分的类型声明信息的话
      // 那么 vscode 将无法识别变量 c 的类型，也就无法智能提示 c.getContext
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-00-31.png)

## 3. 💻 demo2 - 创建新的 canvas

```html
<!-- 2.thml -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      // 如果是通过 createElement 的方式来创建一个 canvas 的话，那么 IDE 是能够给我们提示的。
      // 因为 IDE 能够识别出 canvas 变量的类型是 HTMLCanvasElement
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-01-15.png)

此时 IDE 能够推断出 canvas 变量的类型，因此它能够非常智能地给予咱们提示。

比如，你输入 `canvas.getcon` 就会提示出对应的 API，此时直接按下 tap 或者回车键，即可快速生成内容。

![](md-imgs/2024-10-03-23-01-33.png)

# [README.md](./0007.%20使用%20ctx.save%20和%20ctx.restore%20保存和恢复画布状态/README.md)<!-- !======> SEPERATOR <====== -->
# [0007. 使用 ctx.save 和 ctx.restore 保存和恢复画布状态](https://github.com/Tdahuyou/canvas/tree/main/0007.%20%E4%BD%BF%E7%94%A8%20ctx.save%20%E5%92%8C%20ctx.restore%20%E4%BF%9D%E5%AD%98%E5%92%8C%E6%81%A2%E5%A4%8D%E7%94%BB%E5%B8%83%E7%8A%B6%E6%80%81)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 notes](#2--notes)
  - [2.1. `ctx.save` 和 `ctx.restore` 使用场景](#21-ctxsave-和-ctxrestore-使用场景)
  - [2.2. `ctx.save()`](#22-ctxsave())
  - [2.3. ctx.restore()](#23-ctxrestore())
  - [2.4. 常见用法：存 - 改 - 复原](#24-常见用法存---改---复原)
- [3. 💻 demo](#3--demo)
<!-- endregion:toc -->

## 1. 📝 Summary

画笔状态的存储和恢复还是比较常见的操作，需要掌握一些常见的写法。

## 2. 📒 notes

[ctx.save()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/save) 和 [ctx.restore()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/restore) 方法用于保存和恢复画布（Canvas）的状态。

### 2.1. `ctx.save` 和 `ctx.restore` 使用场景

在你需要暂时改变绘图样式、变换或者路径，而后又想恢复到之前状态的情况下特别有用。

### 2.2. `ctx.save()`

这个方法用于保存当前画布的所有状态。

这里说的状态，包括：

- 描边样式 `ctx.strokeStyle`
- 填充样式 `ctx.fillStyle`
- 线条样式 `ctx.lineWidth`
- 文本样式 `ctx.font`
- 裁剪 `ctx.clip`
- ……

### 2.3. ctx.restore()

这个方法用于恢复 **最近一次** 通过 `ctx.save()` 保存的画布状态。

你可以调用多次 `ctx.save()` 来保存多个状态，并按照栈的后进先出（LIFO）顺序通过 `ctx.restore()` 来恢复这些状态。

### 2.4. 常见用法：存 - 改 - 复原

```javascript
const canvas = document.createElement('canvas')
onst ctx = canvas.getContext('2d')

// ……

function draw1() {
  // 第一步 存下当前的画笔状态
  ctx.save()

  // 第二步 修改画笔状态，绘制图形
  // ……

  // 第三步 重置回第一步的画笔状态
  ctx.restore()
}

function draw2() {
  // 第一步 存下当前的画笔状态
  ctx.save()

  // 第二步 修改画笔状态，绘制图形
  // ……

  // 第三步 重置回第一步的画笔状态
  ctx.restore()
}
```

在每个绘图的方法中，我们可能会需要调整画笔的状态，比如改变一些描边的粗细、颜色等等，但是这些信息的修改我们希望是局部的，不要对全局造成影响。此时，就可以使用上述这种做法来管理画笔的状态。

1. 在绘图之前，暂存画笔开始状态信息。`ctx.store()`
2. 自定义画笔状态来实现绘图。
3. 本次绘制逻辑结束，恢复画笔到开始状态。`ctx.restore()`

## 3. 💻 demo

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 200, 450, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.globalAlpha = .8

      ctx.fillRect(50, 50, 100, 50)

      ctx.save() // 保存初始状态【黑色填充】

      ctx.fillStyle = 'red'
      ctx.fillRect(50, 100, 100, 50)

      ctx.save() // 保存状态 1【红色填充】

      ctx.fillStyle = 'green'
      ctx.fillRect(50, 150, 100, 50)

      ctx.save() // 保存状态 2【绿色填充】

      ctx.fillStyle = 'blue'
      ctx.fillRect(50, 200, 100, 50)

      ctx.restore()
      // 恢复到最近一次保存的状态，也就是状态 2，此时的填充颜色为绿色
      ctx.fillRect(50, 250, 100, 50)

      ctx.restore()
      // 再次恢复到最近一次保存的状态，也就是状态 1，此时的填充颜色为红色
      ctx.fillRect(50,  300, 100, 50)

      ctx.restore()
      // 再次恢复到最近一次保存的状态，也就是初始状态，此时的填充颜色为黑色
      ctx.fillRect(50,  350, 100, 50)
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-05-01.png)

# [README.md](./0008.%20使用%20ctx.lineCap%20设置线条端点样式/README.md)<!-- !======> SEPERATOR <====== -->
# [0008. 使用 ctx.lineCap 设置线条端点样式](https://github.com/Tdahuyou/canvas/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20ctx.lineCap%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E7%AB%AF%E7%82%B9%E6%A0%B7%E5%BC%8F)

<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo](#2--demo)
<!-- endregion:toc -->

## 1. 📒 notes

`lineCap` 表示线帽，也就是线条的端点。`ctx.lineCap` 这玩意儿是用来设置线条端点样式的。

知道 `ctx.lineCap` 这玩意儿是用来配置啥玩意儿的即可，很简单，看看最终的渲染结果和对应的字符串（butt、round、square）自然就理解了。

## 2. 💻 demo

```html
<!-- 1.thml -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>demo</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      // 把线条设置得粗一些，以便查看效果。
      ctx.lineWidth = 30
      ctx.strokeStyle = 'red'

      // ctx.lineCap 用于设置线条两端的样式。

      ctx.beginPath()
      ctx.lineCap = 'butt'
      // 线条两端以方形结束。
      // 这也是默认值。
      ctx.moveTo(100, 100)
      ctx.lineTo(300, 100)
      ctx.stroke()

      ctx.beginPath()
      ctx.lineCap = 'round'
      // 线条两端以圆形结束。
      ctx.moveTo(100, 200)
      ctx.lineTo(300, 200)
      ctx.stroke()

      ctx.beginPath()
      ctx.lineCap = 'square'
      // 线条两端以方形结束。
      // 增加了一个宽度是线条厚度一半的矩形。
      ctx.moveTo(100, 300)
      ctx.lineTo(300, 300)
      ctx.stroke()

      ctx.beginPath()
      ctx.lineWidth = 100 // 刻意将线条的厚度设置为 100
      ctx.strokeStyle = 'blue'
      ctx.lineCap = 'square' // 两端将各自多出 100/2 也就是 50 的矩形
      ctx.moveTo(100, 400)
      ctx.lineTo(300, 400)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-06-25.png)


# [README.md](./0009.%20使用%20ctx.lineDashOffset%20设置虚线的偏移量/README.md)<!-- !======> SEPERATOR <====== -->
# [0009. 使用 ctx.lineDashOffset 设置虚线的偏移量](https://github.com/Tdahuyou/canvas/tree/main/0009.%20%E4%BD%BF%E7%94%A8%20ctx.lineDashOffset%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF%E7%9A%84%E5%81%8F%E7%A7%BB%E9%87%8F)

<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo](#2--demo)
<!-- endregion:toc -->

## 1. 📒 notes

`lineDashOffset` 这个属性常用于实现线条相关的动画效果。有不少跟 **线条移动相关的动画**，就是使用这个属性来实现的。

## 2. 💻 demo

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'

      // ctx.lineDashOffset 属性，用于设置虚线起始位置的偏移量。

      // 正数，向左偏移 ←
      // 负数，向右偏移 →

      // 偏移后的图形，如果超出了边界，那么会自动被截断隐藏。

      ctx.beginPath()
      ctx.setLineDash([50])
      ctx.moveTo(50, 100)
      ctx.lineTo(450, 100)
      ctx.stroke()

      ctx.beginPath()
      ctx.setLineDash([50])
      ctx.lineDashOffset = -50 // 向右偏移 →
      ctx.moveTo(50, 200)
      ctx.lineTo(450, 200)
      ctx.stroke()

      ctx.beginPath()
      ctx.setLineDash([50])
      ctx.lineDashOffset = 20 // 向左偏移 ←
      ctx.moveTo(50, 300)
      ctx.lineTo(450, 300)
      ctx.stroke()
    </script>
  </body>
</html>
```

一共 3 根线：
- 第 1 根线作为参考
- 第 2 根线向右偏移 50 个单位
- 第 3 根线向左偏移 20 个单位

这 3 根线绘制的横向（x 轴）有效区域是 [50, 450]，越界的部分将会自动截断隐藏。

![](md-imgs/2024-10-03-23-07-43.png)

# [README.md](./0010.%20使用%20ctx.setLineDash%20设置虚线/README.md)<!-- !======> SEPERATOR <====== -->
# [0010. 使用 ctx.setLineDash 设置虚线](https://github.com/Tdahuyou/canvas/tree/main/0010.%20%E4%BD%BF%E7%94%A8%20ctx.setLineDash%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF)

<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo](#2--demo)
<!-- endregion:toc -->

## 1. 📒 notes

学会使用 `ctx.setLineDash` 设置虚线，它会根据我们传入的参数数量不同，选择使用不同的行为来设置虚线之间的间隙。

## 2. 💻 demo

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'

      // ctx.setLineDash(array) 方法，用于设置虚线。
      // 其中参数 array 中的数值含义：线段的长度、线段间留白的长度。

      ctx.beginPath()
      ctx.setLineDash([50])
      // 线段长度：50
      // 留白长度：50
      ctx.moveTo(50, 100)
      ctx.lineTo(450, 100)
      ctx.stroke()

      ctx.beginPath()
      ctx.setLineDash([50, 20])
      // 线段长度：50
      // 留白长度：20
      ctx.moveTo(50, 200)
      ctx.lineTo(450, 200)
      ctx.stroke()

      ctx.beginPath()
      ctx.setLineDash([10, 20, 30])
      // 按照数组的数列，无限的延续下去。
      // 【1】数字 10, 20, 30 无限重复     10       20      30        10       20       30        10       20  ...
      // 【2】线段、留白，无限重复          线段     留白     线段      留白      线段      留白      线段      留白  ...
      // 【1】+【2】匹配后的结果           线段10  留白20   线段30    留白10    线段20    留白30    线段10    留白20 ...
      ctx.moveTo(50, 300)
      ctx.lineTo(450, 300)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-08-48.png)


# [README.md](./0011.%20使用%20ctx.miterLimit%20约束两线相交处的最大倾斜长度/README.md)<!-- !======> SEPERATOR <====== -->
# [0011. 使用 ctx.miterLimit 约束两线相交处的最大倾斜长度](https://github.com/Tdahuyou/canvas/tree/main/0011.%20%E4%BD%BF%E7%94%A8%20ctx.miterLimit%20%E7%BA%A6%E6%9D%9F%E4%B8%A4%E7%BA%BF%E7%9B%B8%E4%BA%A4%E5%A4%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BE%E6%96%9C%E9%95%BF%E5%BA%A6)

<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo1](#2--demo1)
- [3. 💻 demo2](#3--demo2)
<!-- endregion:toc -->

## 1. 📒 notes

本节介绍的内容，和下面这个公式有关。

$$
\text{miterLimit} = \frac{\text{miterLength（斜接长度）}}{\text{lineWidth（线条宽度）}}
$$

通过下面这张图，认识 lineWidth、miterLength 表示的分别是哪部分的尺寸。

![](md-imgs/2024-10-03-23-11-03.png)

## 2. 💻 demo1

```html
<!-- 1.html -->
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>demo</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      cavnas.width = 500
      cavnas.height = 500
      document.body.appendChild(cavnas)

      drawGrid(cavnas, 500, 500, 50)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      /*
      MDN doc:
      https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit

      ctx.miterLimit 是 HTML5 Canvas 2D API 中的一个属性，用于设置或返回当两条线相交时接合处的最大斜接长度（miter length）。
      斜接长度是指在两条线相交形成尖角时，内角顶点到外角顶点的距离。
      这个属性主要用于控制具有 miter 接合类型的线条边角的外观。


      场景：
      当线条比较粗，折线夹角比较小的时候，lineJoin 的 miter 设置形成的尖会比较长。
      如果角度非常尖锐，斜接长度可能会异常长，导致图形显示不理想。
      这时候可以利用该属性来控制尖角的长短。
      miterLimit 属性允许你设置一个限制值，超过这个值的斜接长度会自动转换为 bevel 类型的接合，即切去尖角部分。


      参数：
      miterLimit: 这个值是一个大于等于 1 的数字。它表示允许的最大斜接长度与线条宽度的比率。默认值通常是 10。
      如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 " ] " 类型来显示


      效果：
      当 miterLimit 设置得较小，如接近于 1 时，只要相交角稍微尖锐一点，接合方式就会从 miter 转为 bevel。
      当 miterLimit 设置得较大时，即使是非常尖锐的角，接合处也会尝试保持 miter 类型，可能导致角部分非常尖长。

      小结：
      角可以尖、可以长，但是得有个度。
      这个度就是 miterLimit。
      miterLimit = miterLength / lineWidth

      1️⃣ miterLength / lineWidth 这玩意儿用于表示角的尖锐程度。【角实际的尖锐程度】
      2️⃣ miterLimit 这玩意儿用于设置一个阈值。【允许的最大尖锐程度】

      如果 1️⃣ 大于 2️⃣，那么就会把尖角切掉，变成 bevel 类型。
        表示角太尖了，得切掉，变为平角。
      如果 1️⃣ 小于 2️⃣，那么就会保持 miter 类型。
        表示角还不够尖，不需要切。
      */

      ctx.lineWidth = 20
      ctx.lineJoin = 'miter'
      ctx.strokeStyle = 'blue'

      ctx.moveTo(100, 100)
      ctx.lineTo(150, 400)
      ctx.lineTo(200, 100)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(300, 100)
      ctx.lineTo(350, 400)
      ctx.lineTo(400, 100)

      ctx.miterLimit = 6 // 2️⃣
      // 此时 lineWidth 是 20
      // 视觉评估：此时 miterLength 大概在 120 到 140 之间
      // 即 1️⃣ 的值大概在 6～7 之间
      // 也就是说如果 miterLimit 在 1 到 6 之间，那么这个尖角就会被切为平角。1️⃣ 大于 2️⃣
      // 如果 miterLimit 大于等于 7，那么这个尖角就不会被切为平角。1️⃣ 小于 2️⃣
      // 验证：
      // 改变 miterLimit 从 1 到 6 时，比例还未达到这个示例中的临界点，因此它们都显示为斜接（miter）样式。
      // 设置为 7 时，这个值刚好超过了斜接长度与线宽比例的限制，导致连接样式从斜接（miter）转为斜角（bevel）。
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-11-26.png)

## 3. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>demo</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      cavnas.width = 500
      cavnas.height = 500
      document.body.appendChild(cavnas)

      drawGrid(cavnas, 500, 500, 50)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      ctx.lineWidth = 100
      ctx.lineJoin = 'miter'
      ctx.strokeStyle = 'blue'

      ctx.moveTo(100, 100)
      ctx.lineTo(100, 400)
      ctx.lineTo(400, 400)
      ctx.miterLimit = Math.sqrt(2)
      ctx.stroke()

      /*
      上面描述了一种特殊的情况，此时 miterLength 比较好计算
      lineWidth = 100
      miterLength = Math.sqrt(lineWidth^2 + lineWidth^2)
      miterLimit = miterLength / lineWidth = Math.sqrt(2)

      现在是否要将尖角切为平角，就看我们设置的 miterLimit 的阈值是多少了。
      miterLimit 值越大 -> 尖角越尖
      如果你觉得这个角太尖了，要切为平角，那么 miterLimit 设置的比 Math.sqrt(2) 小就可以了。
      如果你觉得这个角不会太尖，不需要切，那么 miterLimit 设置的比 Math.sqrt(2) 大就可以了。
        默认值是 10，所以默认情况下，不会切角。
      */
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-11-54.png)


# [README.md](./0012.%20使用%20ctx.lineTo%20来绘制线条/README.md)<!-- !======> SEPERATOR <====== -->
# [0012. 使用 ctx.lineTo 来绘制线条](https://github.com/Tdahuyou/canvas/tree/main/0012.%20%E4%BD%BF%E7%94%A8%20ctx.lineTo%20%E6%9D%A5%E7%BB%98%E5%88%B6%E7%BA%BF%E6%9D%A1)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1](#2--demo1)
- [3. 💻 demo2](#3--demo2)
<!-- endregion:toc -->

## 1. 📝 Summary

- 学会使用 `ctx.lineTo` 来绘制线条。

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      ctx.moveTo(100, 100) // 表示从哪个点开始画
      ctx.lineTo(300, 100) // 表示画到哪个点
      ctx.stroke() // 开始画线
      // 默认情况下，线的颜色是黑色，线的粗细是 1 个单位

      ctx.beginPath()
      ctx.strokeStyle = 'red' // 表示线的颜色设置为红色
      ctx.lineWidth = 100 // 表示线的粗细设置为 100 个单位（以绘制的路径为中心，向两端各扩散 lineWidth / 2 也就是 50 个单位）
      ctx.moveTo(100, 200)
      ctx.lineTo(300, 200)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-13-29.png)

## 3. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      // 画一个 Z 字形
      ctx.moveTo(100, 100)

      // 经过下面这些点，画出一个 Z 字形
      ctx.lineTo(200, 100)
      ctx.lineTo(100, 200)
      ctx.lineTo(200, 200)

      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-13-41.png)

# [README.md](./0013.%20使用%20ctx.lineJoin%20设置线条连接处的样式/README.md)<!-- !======> SEPERATOR <====== -->
# [0013. 使用 ctx.lineJoin 设置线条连接处的样式](https://github.com/Tdahuyou/canvas/tree/main/0013.%20%E4%BD%BF%E7%94%A8%20ctx.lineJoin%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E8%BF%9E%E6%8E%A5%E5%A4%84%E7%9A%84%E6%A0%B7%E5%BC%8F)

<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo](#2--demo)
<!-- endregion:toc -->

## 1. 📒 notes

学会使用 `ctx.lineJoin` 设置线条连接处的样式。
- miter `>` 尖角
- round `)` 圆角
- bevel `]` 平角

**单词**
- miter，尖角
- bevel，平角、斜角

## 2. 💻 demo

```html
<!-- 1.html -->
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>demo</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      cavnas.width = 500
      cavnas.height = 500
      document.body.appendChild(cavnas)

      drawGrid(cavnas, 500, 500, 50)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      ctx.lineWidth = 30
      ctx.strokeStyle = 'blue'

      // miter   >
      // round   )
      // bevel   ]

      ctx.lineJoin = 'miter' // 尖的（默认）
      ctx.beginPath()
      ctx.moveTo(100, 100)
      ctx.lineTo(200, 200)
      ctx.lineTo(300, 100)
      ctx.stroke()

      ctx.lineJoin = 'round' // 圆的
      ctx.beginPath()
      ctx.moveTo(100, 200)
      ctx.lineTo(200, 300)
      ctx.lineTo(300, 200)
      ctx.stroke()

      ctx.lineJoin = 'bevel' // 平的（斜角）
      ctx.beginPath()
      ctx.moveTo(100, 300)
      ctx.lineTo(200, 400)
      ctx.lineTo(300, 300)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-15-35.png)


# [README.md](./0014.%20使用%20ctx.fillText、ctx.strokeText%20绘制文本/README.md)<!-- !======> SEPERATOR <====== -->
# [0014. 使用 ctx.fillText、ctx.strokeText 绘制文本](https://github.com/Tdahuyou/canvas/tree/main/0014.%20%E4%BD%BF%E7%94%A8%20ctx.fillText%E3%80%81ctx.strokeText%20%E7%BB%98%E5%88%B6%E6%96%87%E6%9C%AC)

<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo1](#2--demo1)
- [3. 💻 demo2](#3--demo2)
- [4. 💻 demo3](#4--demo3)
<!-- endregion:toc -->

## 1. 📒 notes

`ctx.fillText` 绘制填充文本。

`ctx.strokeText` 绘制描边文本。

最多可以接收 4 个参数，分别表示：
1. 文本内容
2. 文本的横坐标
3. 文本的纵坐标
4. 文本的总宽度

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>绘制填充文本</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.font = 'bold italic 4rem sans-serif'

      // ctx.fillText(text, x, y[, maxWidth])
      // 用于在画布上绘制填充的文本。

      // text 要绘制的字符串。
      // x y 文本起始点的坐标（相对于 Canvas 画布）。
      // maxWidth 这是一个可选参数，表示文本的最大允许宽度。
      // 如果设置了 maxWidth，文本将在必要时被缩放或压缩以适应这个宽度。

      ctx.fillText('Tdahuyou', 200, 200)
      // 'Tdahuyou'   表示要绘制的文本
      // 200          表示文本的 x 坐标
      // 200          表示文本的 y 坐标
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-17-30.png)

## 3. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文本的最大宽度</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.font = 'bold italic 4rem sans-serif'
      ctx.fillText('Tdahuyou', 200, 100)

      ctx.fillText('Tdahuyou', 200, 200, 300)
      // 文本最大宽度为 300（此时文本不会被压缩，因为最大宽度足够。）

      ctx.fillText('Tdahuyou', 200, 300, 200)
      // 文本最大宽度为 200（此时文本会被压缩，往起始点方向压缩。）

      ctx.fillText('Tdahuyou', 200, 400, 100)
      // 文本最大宽度为 400（此时文本会被压缩，往起始点方向压缩。）
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-17-40.png)

## 4. 💻 demo3

```html
<!-- 3.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>描边文本</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)

      const ctx = cavnas.getContext('2d')

      ctx.font = 'bold italic 4rem sans-serif'
      ctx.fillText('Tdahuyou', 200, 200)
      ctx.strokeText('Tdahuyou', 200, 300)

      // ctx.strokeText(text, x, y[, maxWidth])
      // 用于绘制描边文本。

      // 对比 ctx.fillText、ctx.strokeText 两个绘制文本的方法。
      // 相同点：都是用于在画布上绘制文本，并且参数都是一样的。
      // 不同点：fillText 绘制的文本是实心的，strokeText 绘制的文本是空心的。
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-17-53.png)


# [README.md](./0015.%20使用%20ctx.font%20设置字体样式/README.md)<!-- !======> SEPERATOR <====== -->
# [0015. 使用 ctx.font 设置字体样式](https://github.com/Tdahuyou/canvas/tree/main/0015.%20%E4%BD%BF%E7%94%A8%20ctx.font%20%E8%AE%BE%E7%BD%AE%E5%AD%97%E4%BD%93%E6%A0%B7%E5%BC%8F)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo](#2--demo)
<!-- endregion:toc -->

## 1. 📝 Summary

- 知道 `ctx.font` 属性有什么用
- 知道 `ctx.font` 属性值的书写规则是什么

## 2. 💻 demo

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>绘制文本</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      // MDN DOC：
      // ctx.font - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font
      // css font - https://developer.mozilla.org/en-US/docs/Web/CSS/font

      // ctx.font 属性
      // 描述绘制文字时，当前字体样式的属性。
      // 使用和 CSS font 规范相同的字符串值。

      // ctx.font 的值通常按照以下顺序和格式设置：
      // 1. 字体样式  font-style     可选项     如 italic, normal 或 oblique
      // 2. 字体变体  font-variant   可选项     如 small-caps
      // 3. 字体粗细  font-weight    可选项     如 bold, 100, 300 等
      // 4. 字体大小  font-size      必需项     通常以 px, pt, em 等单位表示
      // 5. 行高     line-height    可选项     通常与字体大小一起设置，如 16px/1.5
      // 6. 字体族名  font-family    必需项     可以是具体的字体名称如 Arial，或通用字体族如 serif, sans-serif

      // 其中只有字体的大小和字体的类型是必填项，其他的都是可选项。

      ctx.font = 'bold italic 4rem sans-serif'
      // bold       表示粗体
      // italic     表示斜体
      // 4rem       表示字体大小
      // sans-serif 表示字体

      ctx.fillText('Tdahuyou', 200, 200)
      // 'Tdahuyou'   表示要绘制的文本
      // 200          表示文本的 x 坐标
      // 200          表示文本的 y 坐标
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-18-51.png)

# [README.md](./0016.%20使用%20ctx.textBaseline、ctx.textAlign%20设置文本对齐方式/README.md)<!-- !======> SEPERATOR <====== -->
# [0016. 使用 ctx.textBaseline、ctx.textAlign 设置文本对齐方式](https://github.com/Tdahuyou/canvas/tree/main/0016.%20%E4%BD%BF%E7%94%A8%20ctx.textBaseline%E3%80%81ctx.textAlign%20%E8%AE%BE%E7%BD%AE%E6%96%87%E6%9C%AC%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 💻 demo1](#3--demo1)
- [4. 💻 demo2](#4--demo2)
<!-- endregion:toc -->

## 1. 📝 Summary

- ctx.textBaseline 设置文本的 **垂直** 对齐方式
- ctx.textAlign 设置文本的 **水平** 对齐方式

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline - MDN，textBaseline 设置文本的 垂直 对齐方式。
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign - MDN，textAlign 设置文本的 水平 对齐方式。


## 3. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ctx.textAlign</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      // MDN DOC textAlign
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign

      // ctx.textAlign 属性用于设置文本基于锚点的水平位置。

      // 常用属性值：
      // left   文本在锚点的左侧
      // right  文本在锚点的右侧
      // center 文本在锚点的中心

      ctx.textAlign = 'center' // 水平居中对齐

      ctx.font = '4rem sans-serif'
      ctx.fillText('Tdahuyou', 200, 200)

      // 锚点
      ctx.beginPath()
      ctx.fillStyle = 'red'
      ctx.arc(200, 200, 8, 0, Math.PI * 2)
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-20-10.png)

## 4. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ctx.textBaseline</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      // MDN DOC textBaseline
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline

      // ctx.textBaseline 属性用于设置文本基于锚点的垂直位置。

      // 常用属性值：
      // top    文本的顶部与指定的 y 坐标对齐。
      // middle 文本的中点与指定的 y 坐标对齐。
      // bottom 文本的底部与指定的 y 坐标对齐。

      ctx.textBaseline = 'middle' // 垂直居中对齐
     ctx.textAlign = 'center' // 水平居中对齐

      ctx.font = '4rem sans-serif'
      ctx.fillText('Tdahuyou', 200, 200)

      // 锚点
      ctx.beginPath()
      ctx.fillStyle = 'red'
      ctx.arc(200, 200, 8, 0, Math.PI * 2)
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-20-23.png)


# [README.md](./0017.%20绘制网格/README.md)<!-- !======> SEPERATOR <====== -->
# [0017. 绘制网格](https://github.com/Tdahuyou/canvas/tree/main/0017.%20%E7%BB%98%E5%88%B6%E7%BD%91%E6%A0%BC)


<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo1](#2--demo1)
- [3. 💻 demo2](#3--demo2)
<!-- endregion:toc -->

## 1. 📒 notes

做一个可视化的网格，作为参考坐标系，以便更直观地查看坐标，主要是辅助学习用。
> 其中 `drawGrid.js` 用到的一些知识点，在其它文档中会介绍。

---

**封装 drawGrid**

```js
// drawGrid.js
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
```

`drawGrid.js` 用到的一些知识点，在后续文档中会介绍。

这里提前将其丢到这里来介绍，是为了给后续内容做一个铺垫，将不可见的坐标可视化地绘制出来，参考着可视化的坐标来学习，效果也许会更好。毕竟类似 canvas 和 svg 这类的可视化技术，无时无刻不在跟不可见的坐标系打交道。


## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')

      // 创建好 canvas 之后，直接调用 drawGrid 函数绘制参考网格。
      drawGrid(cavnas, 500, 500, 50)
      // 表示绘制一个 500 * 500 的网格，每个网格的尺寸是 50。

      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath() // 路径分组，以防后续的绘制操作影响到之前绘制的网格。
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-22-09.png)

## 3. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      // 前面的 canvas 画布初始化逻辑基本不会变化，在接下来的学习中直接搬运即可。
      // 后续如果要学习绘制新的图形，直接接着写往后写就行。
      // 前面绘制的网格，主要作为参考坐标系，以便更直观地查看坐标。
      ctx.fillRect(100, 100, 200, 100)
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-03-23-22-19.png)

# [README.md](./0018.%20使用%20ctx.fillRect%20绘制矩形/README.md)<!-- !======> SEPERATOR <====== -->
# [0018. 使用 ctx.fillRect 绘制矩形](https://github.com/Tdahuyou/canvas/tree/main/0018.%20%E4%BD%BF%E7%94%A8%20ctx.fillRect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 notes](#2--notes)
- [3. 💻 demo1 - 绘制一个默认的黑色填充矩形](#3--demo1---绘制一个默认的黑色填充矩形)
- [4. 💻 demo2 - 指定绘制矩形的颜色](#4--demo2---指定绘制矩形的颜色)
<!-- endregion:toc -->

## 1. 📝 Summary

- 学会使用 `ctx.fillRect()` 来绘制一个填充矩形。

## 2. 📒 notes

`ctx.fillRect(x, y, width, height)`
- `(x, y)` 表示从哪个点开始绘制；
- `width, height` 表示绘制的矩形的尺寸；

顾名思义，这玩意儿绘制的是一个填充矩形。当你没有指定填充样式 `ctx.fillStyle` 的时候，默认将会绘制一个黑色的填充矩形。

## 3. 💻 demo1 - 绘制一个默认的黑色填充矩形

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      ctx.fillRect(100, 100, 200, 100)
      // 100 100 表示矩形左上角的 x y 坐标
      // 200 100 表示矩形的宽高
      // 该方法绘制的是一个填充矩形
      // 填充的颜色默认为黑色
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-45-56.png)

## 4. 💻 demo2 - 指定绘制矩形的颜色

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      // 指定绘制的矩形的填充颜色为蓝色
      ctx.fillStyle = 'blue'

      ctx.fillRect(100, 100, 200, 100)
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-46-11.png)


# [README.md](./0019.%20使用%20ctx.strokeRect%20绘制矩形/README.md)<!-- !======> SEPERATOR <====== -->
# [0019. 使用 ctx.strokeRect 绘制矩形](https://github.com/Tdahuyou/canvas/tree/main/0019.%20%E4%BD%BF%E7%94%A8%20ctx.strokeRect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2)

<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo1](#2--demo1)
<!-- endregion:toc -->

## 1. 📒 notes

学会使用 `ctx.strokeRect()` 来绘制一个描边矩形。

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      ctx.strokeRect(100, 100, 200, 100)
      // 100 100 表示矩形左上角的 x y 坐标
      // 200 100 表示矩形的宽高
      // 该方法绘制的是一个矩形边框（也称描边矩形）
      // 描边的颜色默认为黑色
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-46-49.png)

# [README.md](./0020.%20使用%20ctx.roundRect%20绘制圆角矩形/README.md)<!-- !======> SEPERATOR <====== -->
# [0020. 使用 ctx.roundRect 绘制圆角矩形](https://github.com/Tdahuyou/canvas/tree/main/0020.%20%E4%BD%BF%E7%94%A8%20ctx.roundRect%20%E7%BB%98%E5%88%B6%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2)



<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1](#2--demo1)
- [3. 💻 demo2](#3--demo2)
- [4. 💻 demo3](#4--demo3)
<!-- endregion:toc -->

## 1. 📝 Summary

- 学会使用 `ctx.roundRect()` 来绘制一个圆角矩形路径。

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      ctx.roundRect(100, 100, 200, 200, 50)
      // 100 100 表示矩形左上角的坐标
      // 200 200 表示矩形的宽高
      // 50 表示圆角的大小
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-47-41.png)

## 3. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      ctx.roundRect(100, 100, 200, 200, 100)
      // 100 100 表示矩形左上角的坐标
      // 200 200 表示矩形的宽高
      // 100 表示圆角的大小 —— 此时将绘制一个圆形
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-47-52.png)

## 4. 💻 demo3

```html
<!-- 3.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      // ctx.roundRect(x, y, width, height, radii)
      // 最后一个参数 radii 可以是一个数值，也可以是一个数组（有多种写法）。

      ctx.roundRect(100, 100, 100, 100, [10])
      // 如果圆角参数是一个单一数值，或者单一数值的数组
      // 那么所有四个角将使用这个相同的半径
      // 四个角的圆角参数都是 10
      ctx.fill()

      ctx.roundRect(300, 100, 100, 100, [10, 30])
      // 如果是一个包含两个值的数组：
      // 第一个值 10 用于左上角和右下角
      // 第二个值 30 用于右上角和左下角
      ctx.fill()

      ctx.roundRect(100, 300, 100, 100, [10, 30, 20])
      // 如果是一个包含三个值的数组：
      // 第一个值 10 用于左上角
      // 第二个值 30 用于右上角和左下角
      // 第三个值 20 用于右下角
      ctx.fill()

      ctx.roundRect(300, 300, 100, 100, [10, 20, 30, 40])
      // 如果是四个值的数组：
      // 第一个值用于左上角
      // 第二个值用于右上角
      // 第三个值用于右下角
      // 第四个值用于左下角
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-48-02.png)

# [README.md](./0021.%20使用%20ctx.rect%20绘制矩形/README.md)<!-- !======> SEPERATOR <====== -->
# [0021. 使用 ctx.rect 绘制矩形](https://github.com/Tdahuyou/canvas/tree/main/0021.%20%E4%BD%BF%E7%94%A8%20ctx.rect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1](#2--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary

- 学会使用 `ctx.rect()` 来绘制一个填充路径。

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      ctx.rect(100, 100, 200, 100) // 设置一个矩形路径
      ctx.fillStyle = 'red' // 设置填充颜色
      ctx.strokeStyle = 'blue' // 设置画笔颜色
      ctx.lineWidth = 10 // 设置画笔宽度
      ctx.stroke() // 绘制矩形路径
      ctx.fill() // 填充矩形

      // 上述做法实际上是先准备好路径
      // 然后再对路径进行填充和描边

      // 注意：
      // 代码执行到 ctx.fill() 位置意味着 canvas 本次绘制已经完毕了
      // 若再去设置类似 ctx.fillStyle = 'blue' 等样式是不会生效的
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-48-50.png)


# [README.md](./0022.%20使用%20ctx.closePath%20闭合路径/README.md)<!-- !======> SEPERATOR <====== -->
# [0022. 使用 ctx.closePath 闭合路径](https://github.com/Tdahuyou/canvas/tree/main/0022.%20%E4%BD%BF%E7%94%A8%20ctx.closePath%20%E9%97%AD%E5%90%88%E8%B7%AF%E5%BE%84)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1 - 自动闭合 vs. 手动闭合](#2--demo1---自动闭合-vs-手动闭合)
- [3. 💻 demo2 - 注意 `lineWidth`](#3--demo2---注意-linewidth)
<!-- endregion:toc -->

## 1. 📝 Summary

了解手动闭合和自动闭合之间的区别。通过示例，了解路径如果没有设置自动闭合的话，可能会导致什么问题。

## 2. 💻 demo1 - 自动闭合 vs. 手动闭合

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      // 设置线条和填充样式
      ctx.lineWidth = 20
      ctx.strokeStyle = 'red'
      ctx.fillStyle = 'yellow'

      // 多个连续线条构成的区域，是可以使用 fill() 进行填充的。
      // 如果需要首尾节点自动闭合，可以使用 ctx.closePath() 方法。
      ctx.beginPath()
      ctx.moveTo(50, 50)
      ctx.lineTo(50, 150)
      ctx.lineTo(150, 150)
      ctx.lineTo(50, 50) // 手动闭合
      ctx.stroke()
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(200, 200)
      ctx.lineTo(200, 300)
      ctx.lineTo(300, 300)
      ctx.closePath() // 自动闭合
      ctx.stroke()
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-49-40.png)

## 3. 💻 demo2 - 注意 `lineWidth`

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>demo</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      // 设置线条和填充样式
      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'
      ctx.fillStyle = 'yellow'

      // 多个连续线条构成的区域，是可以使用 fill() 进行填充的。
      // 注意：这里所说的区域，并非一定得闭合。

      // 画一个直角，但是路径并没有闭合。
      // 此时这个直角也是可以正常被填充 fill 的。
      // 因为构成直角的两条线段构成了一个三角形区域。
      ctx.beginPath()
      ctx.moveTo(50, 50)
      ctx.lineTo(50, 150)
      ctx.lineTo(150, 150)

      ctx.stroke() // 描边儿

      ctx.fill() // 将构成的区域填充为黄色
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-49-54.png)

# [README.md](./0023.%20使用%20ctx.beginPath%20方法对路径进行分组/README.md)<!-- !======> SEPERATOR <====== -->
# [0023. 使用 ctx.beginPath 方法对路径进行分组](https://github.com/Tdahuyou/canvas/tree/main/0023.%20%E4%BD%BF%E7%94%A8%20ctx.beginPath%20%E6%96%B9%E6%B3%95%E5%AF%B9%E8%B7%AF%E5%BE%84%E8%BF%9B%E8%A1%8C%E5%88%86%E7%BB%84)


<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 notes](#2--notes)
- [3. 💻 demo1 - 错误写法](#3--demo1---错误写法)
- [4. 💻 demo2 - 正确写法 1](#4--demo2---正确写法-1)
- [5. 💻 demo3 - 正确写法 2](#5--demo3---正确写法-2)
<!-- endregion:toc -->

## 1. 📝 Summary


- 学会使用 `ctx.beginPath()` 对路径进行分组，并了解如果不使用分组的话，会存在什么潜在问题。

## 2. 📒 notes

**需求：**
1. 先在 `(50, 50)` 位置绘制一个 `100 x 100` 的矩形轮廓（轮廓颜色为蓝色）
2. 再在 `(250, 50)` 位置绘制一个 `100 x 100` 的红色矩形

下面我们将通过上述这俩简单的小需求，体验一下 `ctx.beginPath()` 的作用。

## 3. 💻 demo1 - 错误写法

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      // 错误做法：
      ctx.rect(50, 50, 100, 100)
      ctx.strokeStyle = 'blue'
      ctx.stroke()

      ctx.rect(250, 50, 100, 100)
      ctx.fillStyle = 'red'
      ctx.fill()

      // stroke() 或 fill() 默认会对之前所有绘制的路径进行一个处理。
      // 我们可以用 beginPath() 对路径进行分组处理。
      // 如果不分组的话，那么 fill() 或 stroke() 会对之前所有的路径进行处理。

      // 如果没有调用 beginPath()，那么之前的路径会被保留，新的路径会被添加到之前的路径上。
      // 当执行 stroke() 或 fill() 时，会对所有路径进行处理。

      // 如果调用了 beginPath()，那么之前的路径会被清空，新的路径会被添加到空路径上。
      // 当执行 stroke() 或 fill() 时，只会对新的路径进行处理。
    </script>
  </body>
</html>
```

stroke() 或 fill() 默认会对 **之前所有绘制的路径** 进行一个处理。

这种写法中，在绘制完第一个描边矩形之后，当你绘制第二个填充矩形时，填充将会对之前的路径也起作用。

- 当 `ctx.stroke()` 执行时
  - `(50, 50)` 位置的矩形：加上了蓝色的描边
- 当 `ctx.fill()` 执行时
  - `(50, 50)` 位置的矩形：被填充为了红色
  - `(250, 50)` 位置的矩形：被填充为了红色

![](md-imgs/2024-10-04-00-52-36.png)

## 4. 💻 demo2 - 正确写法 1

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      // 正确做法1：
      ctx.rect(50, 50, 100, 100)
      ctx.strokeStyle = 'blue'
      ctx.stroke()

      ctx.beginPath() // 注意，这一行不能少。

      ctx.rect(250, 50, 100, 100)
      ctx.fillStyle = 'red'
      ctx.fill()
    </script>
  </body>
</html>
```

因为在执行 `ctx.fill()` 之前，调用了 `ctx.beginPath()`，相当于对路径做了一个分组，这意味着路径重新开始绘制，别再管之前的路径了。

- 当 `ctx.stroke()` 执行时
  - `(50, 50)` 位置的矩形：加上了蓝色的描边
- 当 `ctx.fill()` 执行时
  - ~~`(50, 50)` 位置的矩形：被填充为了红色~~（这是之前的路径）
  - `(250, 50)` 位置的矩形：被填充为了红色

![](md-imgs/2024-10-04-00-53-46.png)

## 5. 💻 demo3 - 正确写法 2

```html
<!-- 3.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      // 正确做法2：
      ctx.strokeStyle = 'blue'
      ctx.strokeRect(50, 50, 100, 100)

      // ctx.beginPath()
      // 这里有 or 没有 beginPath() 都可以。

      ctx.fillStyle = 'red'
      ctx.fillRect(250, 50, 100, 100)

      // ctx.fillRect()
      // ctx.strokeRect()
      // 这两个 API 不会受 beginPath 的影响。
      // 因为 strokeRect()、fillRect() 是一个独立的绘制操作，不会受到之前的路径的影响。
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-00-54-27.png)


# [README.md](./0024.%20使用%20ctx.arc%20绘制圆弧/README.md)<!-- !======> SEPERATOR <====== -->
# [0024. 使用 ctx.arc 绘制圆弧](https://github.com/Tdahuyou/canvas/tree/main/0024.%20%E4%BD%BF%E7%94%A8%20ctx.arc%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BC%A7)


<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 notes](#2--notes)
  - [2.1. ctx.arc](#21-ctxarc)
  - [2.2. 角度、弧度的转换](#22-角度弧度的转换)
    - [2.2.1. 1. 角度（Degree）](#221-1-角度degree)
    - [2.2.2. 2. 弧度（Radian）](#222-2-弧度radian)
    - [2.2.3. 3. 转换关系](#223-3-转换关系)
- [3. 💡 圆参考坐标](#3--圆参考坐标)
- [4. 💻 demo1](#4--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary


- 学会使用 `ctx.arc` 绘制圆弧，可以根据文档中提供的图来理解绘制原理。
- 知道角度和弧度之间的区别，清楚它们俩之间的转换关系。

## 2. 📒 notes

### 2.1. ctx.arc

`ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)`

- `x y radius` 表示圆点坐标、半径。
- `startAngle` 表示从哪个点开始画。单位是弧度。
- `endAngle` 表示画到哪个点结束。单位是弧度。
  - `0` 度点所在位置：`3` 点钟方向。
- `counterclockwise` 表示绘制方向。
  - `false` 顺时针（默认）
  - `true`  逆时针

> **单词**
>
> counterclockwise，表示逆时针方向。

### 2.2. 角度、弧度的转换

角度和弧度都是用来测量平面角的单位，用于描述角的打开程度。

在绘制圆、弧等曲线图形的时候，使用的单位大多都是弧度，而非角度。假如你想要表达 360°，应该传入的参数不是 ~~360~~ 而是 2π 用 JS 来表示就是 `2 * Math.PI`。

以此类推，180° 就是 `Math.PI`，90° 就是 `Math.PI / 2`。

其实，你只需要记住 `1° = Math.PI / 180` 这个等式即可，**如果你想要表达 x°，那么可以写 `x * (Math.PI / 180)`。**

上学那会儿，在数学课上绝对是有介绍过这俩之间的转换的，如果忘记了它们是什么，应该如何转换，可以看看文中提供的相关描述和转换公式。

#### 2.2.1. 1. 角度（Degree）

角度是衡量平面角大小的一种度量单位，符号通常用°表示。一个完整的圆是360°。这种划分方式源于古代天文学家的观察，他们发现每年太阳在黄道上移动的角度大约是360度（实际上接近365天，但360是一个方便的数字，因为它能被多个数字整除）。

- **直角**：一个直角是90°，这意味着一个完整的圆由4个直角组成。
- **平角**：平角是180°，表示两条射线在同一直线上，朝相反方向。
- **周角**：一个完整的圆角是360°。

#### 2.2.2. 2. 弧度（Radian）

弧度是另一种度量角度的方法，它是根据角所截取圆弧的长度与圆的半径的比率来定义的。在数学和工程学中，弧度是更常用的单位，因为它直接与圆的其他性质（如周长和面积）相关联，且在计算中通常更为简便。

- 一个弧度定义为圆上一个与半径长度相等的弧所对应的中心角。
- 一个完整圆的周角为 (2\pi) 弧度，因为一个圆的周长是 (2\pi r)（其中 (r) 是半径），所以当弧长等于半径时，所对应的角就是1弧度。
- 因此，(360^\circ) 相当于 (2\pi) 弧度。

#### 2.2.3. 3. 转换关系

**两种单位之间的转换关系是**：

$$
1\ \text{弧度} = \frac{180^\circ}{\pi} \approx 57.2958^\circ
$$

$$
1^\circ = \frac{\pi}{180} \ \text{弧度}
$$

使用这些关系，你可以在角度和弧度之间进行转换。例如，90°（一个直角）相当于 `π / 2` 弧度。这种转换在解决涉及三角函数和角度测量的数学、物理问题时非常重要。

## 3. 💡 圆参考坐标

可以结合这张图来辅助理解 `ctx.arc` 绘制圆弧的原理。

![](md-imgs/2024-10-04-01-00-48.png)

## 4. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 使用 ctx.arc 绘制圆弧</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'

      // ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)

      // x y radius 表示圆点坐标、半径。

      // startAngle 表示从哪个点开始画。单位是弧度。
      // endAngle   表示画到哪个点结束。单位是弧度。
      // 0 度点所在位置：3 点钟方向。

      // counterclockwise 表示绘制方向。
      // false 顺时针（默认）
      // true  逆时针

      // 圆
      ctx.beginPath()
      ctx.arc(100, 100, 50, 0, Math.PI * 2)
      ctx.stroke()

      // 上半圆
      ctx.beginPath()
      ctx.arc(300, 100, 50, 0, Math.PI, true)
      ctx.stroke()

      // 下半圆
      ctx.beginPath()
      ctx.arc(300, 300, 50, 0, Math.PI, false)
      ctx.stroke()

      // 3/4 圆
      ctx.beginPath()
      ctx.arc(100, 300, 50, Math.PI / 2, Math.PI, true)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-01-01-24.png)


# [README.md](./0025.%20使用%20ctx.quadraticCurveTo、ctx.bezierCurveTo%20绘制贝塞尔曲线/README.md)<!-- !======> SEPERATOR <====== -->
# [0025. 使用 ctx.quadraticCurveTo、ctx.bezierCurveTo 绘制贝塞尔曲线](https://github.com/Tdahuyou/canvas/tree/main/0025.%20%E4%BD%BF%E7%94%A8%20ctx.quadraticCurveTo%E3%80%81ctx.bezierCurveTo%20%E7%BB%98%E5%88%B6%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF)


<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
  - [3.1. 二次贝塞尔曲线绘制原理](#31-二次贝塞尔曲线绘制原理)
    - [3.1.1. 1. 动图](#311-1-动图)
    - [3.1.2. 2. 二次贝塞尔曲线的绘制原理](#312-2-二次贝塞尔曲线的绘制原理)
  - [3.2. 三次贝塞尔曲线绘制原理](#32-三次贝塞尔曲线绘制原理)
    - [3.2.1. 1. 动图](#321-1-动图)
    - [3.2.2. 2. 三次贝塞尔曲线的绘制原理](#322-2-三次贝塞尔曲线的绘制原理)
- [4. 💻 demo1 - 二次贝塞尔曲线](#4--demo1---二次贝塞尔曲线)
- [5. 💻 demo2 - 三次贝塞尔曲线](#5--demo2---三次贝塞尔曲线)
<!-- endregion:toc -->

## 1. 📝 Summary


- 重点在于理解贝塞尔曲线的绘制原理。理解原理后，自然就理解这俩 API 应该如何使用了。

## 2. 🔗 links

- https://blog.csdn.net/m0_37602827/article/details/118165217 - CSDN - 贝塞尔曲线原理 - 这是 CSDN 上的一篇介绍贝塞尔曲线原理的文章。

## 3. 📒 notes

`ctx.quadraticCurveTo`、`ctx.bezierCurveTo` 这俩 API 的使用很简单，无非就是传入 2 个点还是 3 个点。重点在于理解贝塞尔曲线的绘制原理。

### 3.1. 二次贝塞尔曲线绘制原理

贝塞尔曲线的相关内容，是个通用的知识点，在学习 canvas 时也会接触到。

在 css 中，我们也可以通过 chrome devtools 来手动调节动画效果或过渡效果的变化贝塞尔曲线。

#### 3.1.1. 1. 动图

![](md-imgs/二阶贝塞尔曲线.gif)

#### 3.1.2. 2. 二次贝塞尔曲线的绘制原理

![](md-imgs/2024-10-04-10-50-27.png)

假设：
- `x1 = P0，P01 之间的距离`
- `x2 = P0，P1 之间的距离`
- `x3 = P1，P12 之间的距离`
- `x4 = P1，P2 之间的距离`
- `x5 = P01，P02 之间的距离`
- `x6 = P01，P12 之间的距离`

存在一个参数 t，使得上述 x 满足以下条件：
- `t = x1 / x2`
- `t = x3 / x4`
- `t = x5 / x6`

按照上述规则不难想象，如果 t 是 0，那么 P02 位于起点 P0 位置；如果 t 是 1，那么 P02 位于终点 P2 位置。当 t 介于 0-1 之间时，可以通过上述规则找到 P02 点的位置。这意味着，当 t 从 0 变到 1 时，会获得无数个 P02 点，这就形成了一个光滑的曲线 —— 由无数个 P02 点连成的曲线。

上述就是二次贝塞尔曲线的绘制原理。

### 3.2. 三次贝塞尔曲线绘制原理

贝塞尔曲线的相关内容，是个通用的知识点，在学习 canvas 时也会接触到。

在 css 中，我们也可以通过 chrome devtools 来手动调节动画效果或过渡效果的变化贝塞尔曲线。

#### 3.2.1. 1. 动图

![](md-imgs/三阶贝塞尔曲线.gif)

#### 3.2.2. 2. 三次贝塞尔曲线的绘制原理

![](md-imgs/2024-10-04-10-52-06.png)

二次贝塞尔曲线有一个控制点，三次贝塞尔曲线有两个控制点。在理解了二次贝塞尔曲线的绘制原理后，找葫芦画瓢，三次也是一样的。

假设：
- `x1 = P0，P01 之间的距离`
- `x2 = P0，P1 之间的距离`
- `x3 = P1，P12 之间的距离`
- `x4 = P1，P2 之间的距离`
- `x5 = P01，P02 之间的距离`
- `x6 = P01，P12 之间的距离`
- `x7 = P2，P23 之间的距离`
- `x8 = P2，P3 之间的距离`
- `x9 = P12，P13 之间的距离`
- `x10 = P12，P23 之间的距离`

存在一个参数 t，使得上述 x 满足以下条件：
- `t = x1 / x2`
- `t = x3 / x4`
- `t = x5 / x6`
- `t = x7 / x8`
- `t = x9 / x10`

按照上述规则不难想象，如果 t 是 0，那么 P03 位于起点 P0 位置；如果 t 是 1，那么 P03 位于终点 P3 位置。当 t 介于 0-1 之间时，可以通过上述规则找到 P03 点的位置。这意味着，当 t 从 0 变到 1 时，会获得无数个 P03 点，这就形成了一个光滑的曲线 —— 由无数个 P03 点连成的曲线。

上述就是三次贝塞尔曲线的绘制原理。

## 4. 💻 demo1 - 二次贝塞尔曲线

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.fillStyle = 'red'

      ctx.beginPath()
      ctx.arc(50, 200, 4, 0, Math.PI * 2) // 起点
      ctx.fill()
      ctx.beginPath()
      ctx.arc(100, 100, 4, 0, Math.PI * 2) // 控制点
      ctx.fill()
      ctx.beginPath()
      ctx.arc(250, 200, 4, 0, Math.PI * 2) // 终点
      ctx.fill()

      // ctx.quadraticCurveTo(cpx, cpy, x, y)
      // 使用 ctx.quadraticCurveTo 方法绘制二次贝塞尔曲线

      // cpx cpy 表示控制点坐标
      // x y 表示终点坐标

      // 起点坐标是 moveTo 设置，或者是上一次绘图的结尾。

      ctx.beginPath()
      ctx.moveTo(50, 200)
      ctx.quadraticCurveTo(100, 100, 250, 200)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-10-53-14.png)

## 5. 💻 demo2 - 三次贝塞尔曲线

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      document.body.appendChild(cavnas)
      drawGrid(cavnas, 500, 500, 50)
      const ctx = cavnas.getContext('2d')
      ctx.beginPath()

      ctx.fillStyle = 'red'

      ctx.arc(50, 200, 4, 0, Math.PI * 2) // 起点
      ctx.fill()
      ctx.beginPath()
      ctx.arc(100, 100, 4, 0, Math.PI * 2) // 控制点 1
      ctx.fill()
      ctx.beginPath()
      ctx.arc(200, 300, 4, 0, Math.PI * 2) // 控制点 2
      ctx.fill()
      ctx.beginPath()
      ctx.arc(250, 200, 4, 0, Math.PI * 2) // 终点
      ctx.fill()

      // ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
      // 使用 ctx.bezierCurveTo 方法绘制三次贝塞尔曲线

      // 起点坐标是 moveTo 设置，或者是上一次绘图的结尾。
      // cp1x cp1y 表示控制点 1 坐标
      // cp2x cp2y 表示控制点 2 坐标
      // x y 表示终点坐标

      ctx.beginPath()
      ctx.moveTo(50, 200)
      ctx.bezierCurveTo(100, 100, 200, 300, 250, 200)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-10-53-26.png)


# [README.md](./0026.%20使用%20ctx.ellipse%20绘制椭圆/README.md)<!-- !======> SEPERATOR <====== -->
# [0026. 使用 ctx.ellipse 绘制椭圆](https://github.com/Tdahuyou/canvas/tree/main/0026.%20%E4%BD%BF%E7%94%A8%20ctx.ellipse%20%E7%BB%98%E5%88%B6%E6%A4%AD%E5%9C%86)


<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1](#2--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary


- 学会使用 ctx.ellipse 绘制椭圆，它和绘制圆弧是很类似的。
可以对比着圆弧【0024】的绘制原理来理解椭圆的绘制。

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 绘制椭圆</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'

      // 绘制椭圆的方法：
      // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)

      // x y 表示椭圆中心的坐标。

      // radiusX radiusY 椭圆的主/次半径
      // 也就是椭圆的宽度/高度方向的半径

      // rotation 椭圆的旋转角度

      // startAngle/endAngle 绘制椭圆弧的起始/结束角度
      // 角度的计算以椭圆的主轴方向为起点。（默认 0 度，三点钟 🕒 方向。）

      // counterclockwise 这是一个可选参数，用于指定绘制方向。
      // true  按逆时针方向绘制弧线
      // false 按顺时针方向绘制（默认值）

      // 注意：传递参数时，传递的是弧度而非角度。

      ctx.beginPath()
      ctx.ellipse(200, 100, 100, 50, 0, 0, Math.PI * 2)
      // 200, 100        表示椭圆中心的坐标是 (200, 100)
      // 100, 50         表示椭圆的主半径是 100，次半径是 50
      // 0               表示椭圆的旋转角度是 0
      // 0 Math.PI * 2   表示椭圆弧的起始角度是 0，结束角度是 2π，即 360°。也就是一个完整的圆。
      ctx.stroke()

      ctx.beginPath()
      ctx.ellipse(100, 300, 100, 50, Math.PI / 2, 0, Math.PI * 2)
      // 100, 300        表示椭圆中心的坐标是 (100, 300)
      // 100, 50         表示椭圆的主半径是 100，次半径是 50
      // Math.PI / 2     表示椭圆的旋转角度是 π/2，即 90°
      // 0 Math.PI * 2   表示椭圆弧的起始角度是 0，结束角度是 2π，即 360°。也就是一个完整的圆。
      ctx.stroke()

      ctx.beginPath()
      ctx.ellipse(350, 300, 100, 50, 0, 0, Math.PI / 2, true)
      // 350, 300        表示椭圆中心的坐标是 (350, 300)
      // 100, 50         表示椭圆的主半径是 100，次半径是 50
      // 0               表示椭圆的旋转角度是 0
      // 0 Math.PI / 2   表示椭圆弧的起始角度是 0，结束角度是 π/2，即 90°。
      //                 这意味着可能是一个 1/4 或者 3/4 的圆
      //                 如果按照顺时针方向绘制，那么是 1/4 的圆
      //                 如果按照逆时针方向绘制，那么是 3/4 的圆
      // true            表示按照逆时针方向绘制弧线
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-10-57-32.png)


# [README.md](./0027.%20使用%20ctx.arcTo%20绘制圆弧/README.md)<!-- !======> SEPERATOR <====== -->
# [0027. 使用 ctx.arcTo 绘制圆弧](https://github.com/Tdahuyou/canvas/tree/main/0027.%20%E4%BD%BF%E7%94%A8%20ctx.arcTo%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BC%A7)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1](#2--demo1)
- [3. 💻 demo2](#3--demo2)
<!-- endregion:toc -->

## 1. 📝 Summary

- 学会使用 `ctx.arcTo` 绘制圆弧。
**需要注意：**传入的参数并不决定绘制的线条的起点 or 终点，而仅仅是起到决定圆弧弧度的作用。
`ctx.arcTo` 绘制圆弧比较奇怪，你只需要通过控制点描述出一个角就行，它这玩意儿会根据你给定的角去绘制弧，最终绘制出来的弧的起点和终点，并不一定是从你的控制点开始的。

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 arcTo 方法</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      // #region 辅助线
      ctx.beginPath()
      ctx.moveTo(100, 100)
      ctx.lineTo(100, 300)
      ctx.lineTo(300, 300)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(200, 200, 100, 0, Math.PI * 2)
      ctx.stroke()
      // #endregion 辅助线

      // context.arcTo(x1, y1, x2, y2, radius)
      // 用于绘制圆角路径。
      // 常用于绘制具有特定半径的圆角。

      // 第 1 个点：moveTo 指定的点或者上一次图形路径结束的点
      // 第 2 个点：(x1, y1)
      // 第 3 个点：(x2, y2)
      // 由 3 个控制点实现圆弧的绘制。
      // 按照 3 个点的位置，连线，形成一个夹角。
      // 绘制的圆弧，与夹角的两条边相切。
      // 根据指定的半径的不同，绘制出来的圆弧也不同。

      // radius 指定了圆角的大小，即圆弧的半径。
      // 根据 r 绘制圆弧，保证与两个线条相切。
      // 注意：如果 radius 值过大，无法基于提供的点和半径绘制圆角，那么浏览器将不绘制圆弧。

      ctx.beginPath()
      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'
      ctx.moveTo(100, 200) // 起点
      ctx.arcTo(100, 300, 200, 300, 100)
      // 100 300 表示第 1 个控制点
      // 200 300 表示第 2 个控制点
      // 100 表示圆角的半径
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-10-58-45.png)

## 3. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 arcTo 方法</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      // #region 辅助线
      ctx.beginPath()
      ctx.moveTo(100, 100)
      ctx.lineTo(100, 300)
      ctx.lineTo(300, 300)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(200, 200, 100, 0, Math.PI * 2)
      ctx.stroke()
      // #endregion 辅助线

      ctx.beginPath()
      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'
      ctx.moveTo(100, 100) // 起点坐标
      ctx.arcTo(100, 300, 300, 300, 50)
      // 100 300 表示第 1 个控制点
      // 300 300 表示第 2 个控制点
      // 50 表示圆角的半径
      // 注意：ctx.arcTo 这玩意儿绘制的是圆弧
      // 所以最终结束位置是在圆弧的终点，而非控制点 2 所在的位置。
      // 把控制点 2 的坐标由 300 300 改成 101 300 最终绘制的效果也是一样的。
      // ctx.arcTo(100, 300, 101, 300, 50)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-10-58-53.png)


# [README.md](./0028.%20矩形边框旋转动画/README.md)<!-- !======> SEPERATOR <====== -->
# [0028. 矩形边框旋转动画](https://github.com/Tdahuyou/canvas/tree/main/0028.%20%E7%9F%A9%E5%BD%A2%E8%BE%B9%E6%A1%86%E6%97%8B%E8%BD%AC%E5%8A%A8%E7%94%BB)


<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo1](#2--demo1)
<!-- endregion:toc -->

## 1. 📒 notes

当你想要让线条沿着绘制的路径动起来的时候，都可以尝试下 `lineDashOffset`。

**原理：**通过不断设置虚线的位移 `lineDashOffset` 来实现的动画效果。

`lineDashOffset` 虚线的位移不仅作用于直线上边，在矩形轮廓，弧形轮廓，圆形轮廓上都能够起作用。当你想要让线条沿着绘制的路径动起来的时候，都可以尝试下 `lineDashOffset`。

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 矩形边框旋转动画</title>
    <style>
      canvas {
        outline: 1px solid #ddd;
      }
    </style>
  </head>
  <body>
    <div>
      <button id="start-move">开始运动</button>
    </div>
    <script>
      const canvas = document.createElement('canvas')
      canvas.width = 400
      canvas.height = 400
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      ctx.lineWidth = 5
      ctx.strokeStyle = 'blue'
      ctx.setLineDash([10])

      function move() {
        ctx.clearRect(0, 0, 400, 400)
        ctx.beginPath()

        ctx.lineDashOffset -= 1
        // 正负：大于 0 逆时针，小于 0 顺时针
        // 绝对值：越大旋转速度越快

        ctx.rect(100, 100, 200, 200)
        ctx.stroke()

        requestAnimationFrame(move)
      }
      const startMove = document.getElementById('start-move')
      startMove.addEventListener('click', move)
    </script>
  </body>
</html>
```

![](md-imgs/矩形边框旋转动画.gif)

# [README.md](./0029.%20线条穿梭动画/README.md)<!-- !======> SEPERATOR <====== -->
# [0029. 线条穿梭动画](https://github.com/Tdahuyou/canvas/tree/main/0029.%20%E7%BA%BF%E6%9D%A1%E7%A9%BF%E6%A2%AD%E5%8A%A8%E7%94%BB)



<!-- region:toc -->
- [1. 📒 notes](#1--notes)
- [2. 💻 demo1](#2--demo1)
<!-- endregion:toc -->


## 1. 📒 notes

学会使用 `lineDashOffset` 来设置线条的动画效果，理解动画的实现原理。

通过不断设置虚线的位移 `lineDashOffset` 来实现的动画效果。

## 2. 💻 demo1

```html
<!-- 1.html -->
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 线条穿梭动画</title>
    <style>
      canvas {
        outline: 1px solid #ddd;
      }
    </style>
  </head>
  <body>
    <div>
      <button id="start-move">开始运动</button>
    </div>
    <script>
      const canvas = document.createElement('canvas')
      canvas.width = 400
      canvas.height = 400
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      // 开始位置的竖线
      ctx.beginPath()
      ctx.moveTo(50, 100)
      ctx.lineTo(50, 200)
      ctx.stroke()

      // 结束位置的竖线
      ctx.beginPath()
      ctx.moveTo(250, 100)
      ctx.lineTo(250, 200)
      ctx.stroke()

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'
      ctx.setLineDash([200]) // 设置虚线间隙 200
      ctx.lineDashOffset = 200 // 设置线条偏移量为 200

      function move() {
        ctx.clearRect(50, 145, 200, 10) // 将线条运动过的路径给清空
        ctx.beginPath()
        ctx.lineDashOffset -= 2 // 调节运动速度
        ctx.moveTo(50, 150)
        ctx.lineTo(250, 150) // 线段的长度是 250 - 50 = 200
        ctx.stroke()

        if (ctx.lineDashOffset == -200) {
          // 200 偏移量作为临界值
          ctx.lineDashOffset = 200
        }
        requestAnimationFrame(move)
      }
      const startMove = document.getElementById('start-move')
      startMove.addEventListener('click', move)
    </script>
  </body>
</html>
```

![](md-imgs/线条穿梭动画.gif)

# [README.md](./0030.%20模拟进度条动画效果/README.md)<!-- !======> SEPERATOR <====== -->
# [0030. 模拟进度条动画效果](https://github.com/Tdahuyou/canvas/tree/main/0030.%20%E6%A8%A1%E6%8B%9F%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 notes](#2--notes)
- [3. 💻 demo1](#3--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary

- 学会使用 `lineDashOffset` 来设置线条的动画效果。

## 2. 📒 notes

如果线条每次偏移（即，改变 `ctx.lineDashOffset`）的时候，没有清空画布的话，那么线条之前的运动轨迹将保留在界面上。此时看起来就有些类似于进度条加载的效果。

## 3. 💻 demo1

```html
<!-- 1.html -->
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <button id="start-move">开始动画</button>
    </div>

    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      ctx.lineWidth = 10
      ctx.strokeStyle = 'red'

      ctx.beginPath()
      ctx.moveTo(50, 100)
      ctx.lineTo(450, 100)
      ctx.stroke()

      ctx.beginPath()
      ctx.setLineDash([400])
      ctx.lineDashOffset = 400
      ctx.moveTo(50, 200)
      ctx.lineTo(450, 200)
      ctx.stroke()

      function move() {
        ctx.lineDashOffset--
        console.log(ctx.lineDashOffset)
        // 通过不断改变 lineDashOffset 的值，实现动画效果。
        ctx.stroke()

        if (ctx.lineDashOffset > 0) {
          requestAnimationFrame(move)
        }
      }
      const startMoveBtn = document.getElementById('start-move')
      startMoveBtn.addEventListener('click', move)
    </script>
  </body>
</html>
```

点击【开始运动】按钮后，进度条会从起点加载到终点。

![](md-imgs/2024-10-04-11-03-20.png)

最终效果如下图所示。

![](md-imgs/模拟进度条动画效果.gif)


# [README.md](./0031.%20使用%20ctx.clip%20实现图像裁剪/README.md)<!-- !======> SEPERATOR <====== -->
# [0031. 使用 ctx.clip 实现图像裁剪](https://github.com/Tdahuyou/canvas/tree/main/0031.%20%E4%BD%BF%E7%94%A8%20ctx.clip%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E8%A3%81%E5%89%AA)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. ⏰ todos](#2--todos)
- [3. 🔗 links](#3--links)
- [4. 📒 notes](#4--notes)
- [5. 👨‍🏫 搞懂 SVG/Canvas 中 nonzero 和 evenodd 填充规则](#5--搞懂-svg/canvas-中-nonzero-和-evenodd-填充规则)
  - [5.1. 填充有两种规则](#51-填充有两种规则)
  - [5.2. 一切都是交叉点们的选择](#52-一切都是交叉点们的选择)
  - [5.3. 啦啦啦，结束语](#53-啦啦啦结束语)
- [6. 💻 demo1 - 裁剪菱形](#6--demo1---裁剪菱形)
- [7. 💻 demo2 - 裁剪圆形](#7--demo2---裁剪圆形)
- [8. 💻 demo3 - 理解 fillRule](#8--demo3---理解-fillrule)
- [9. 💻 demo4 - 问题记录](#9--demo4---问题记录)
<!-- endregion:toc -->

## 1. 📝 Summary

ctx.clip 的基本使用是比较简单的，但是填充规则不太好理解，并且暂时也还不清楚填充规则有何实际的应用场景……

## 2. ⏰ todos

- [ ] 在这篇文章的最后一个示例中，存在个问题还没理解。

## 3. 🔗 links

- https://www.zhangxinxu.com/wordpress/2018/10/nonzero-evenodd-fill-mode-rule/ - 搞懂SVG/Canvas中nonzero和evenodd填充规则 « 张鑫旭-鑫空间-鑫生活。
- https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clip - MDN - CanvasRenderingContext2D：clip() 方法
- https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule - Wiki - Even–odd rule
- https://en.wikipedia.org/wiki/Nonzero-rule - Wiki - Nonzero-rule

## 4. 📒 notes

`ctx.clip` 用来裁剪图像，难点在于理解填充规则。

下面截图是来自 wiki 中对于 Even–odd rule 的解释。

![](md-imgs/2024-10-04-11-07-34.png)

当画布上出现多个闭合路径的时候，区分哪些区域是有效区域。

## 5. 👨‍🏫 搞懂 SVG/Canvas 中 nonzero 和 evenodd 填充规则

> 注：以下为搬运内容！

### 5.1. 填充有两种规则

![](md-imgs/2024-10-04-11-30-30.png)

只要是路径填充，都有两种规则，nonzero和evenodd，无论是SVG中的路径填充，还是Canvas中的路径填充，如果还有其他和路径相关的技术（甚至设计软件），也离不开这两种填充规则。

换句话说，这是超越各种语言，普世通用的技能点。

下面，看看我能不能用足够精简的语言，尽可能让大家都搞懂这两种路径填充规则。

如果我们用3个点，连成一个三角形，则这两种填充规则没什么区别，如下对比（Canvas语法举例，JS实时渲染，如果无效果，请[访问原文](https://www.zhangxinxu.com/wordpress/?p=8043)）。

| nonzero（默认）                      | evenodd                              |
| ------------------------------------ | ------------------------------------ |
| ![](md-imgs/2024-10-04-11-30-48.png) | ![](md-imgs/2024-10-04-11-30-48.png) |


如果是两个三角形，并且发生重叠，差异就出现了，如下：

| nonzero（默认）                      | evenodd                              |
| ------------------------------------ | ------------------------------------ |
| ![](md-imgs/2024-10-04-11-31-10.png) | ![](md-imgs/2024-10-04-11-31-16.png) |


究竟是如何作用的呢？且看~

### 5.2. 一切都是交叉点们的选择

填充规则的关键，就是确定复杂路径构成的图形，哪些是内部，哪些是外部。内部则填充，外部则透明。

“nonzero规则”顾名思意就是“非零规则”，用通俗的话讲，就算计算某些东西是不是`0`，如果不是`0`则内部，填充；如果是`0`则外部，不填充。

“evenodd规则”顾名思意就是“奇偶规则”，用通俗的话讲，就算计算某些东西是不是奇数，如果是是奇数则内部，填充；如果是偶数则外部，不填充。

下面关键来了，这里的“计算某些东西”究竟计算的是什么东西呢？

nonzero规则和evenodd规则计算的东西还不一样，nonzero是计算顺时针逆时针数量，evenodd是交叉路径数量。

---

为了示意更加直观，我们可以把本文示意的三角路径方向和序号标记下，如下表：

| nonzero（默认）                      | evenodd                              |
| ------------------------------------ | ------------------------------------ |
| ![](md-imgs/2024-10-04-11-31-44.png) | ![](md-imgs/2024-10-04-11-31-51.png) |


接下来，高能来了……

---

我们要判断某一个区域是路径内还是路径外，很简单，在这个区域内任意找一个点，然后以这个点为起点，发射一条无限长的射线，然后——

- 对于nonzero规则：起始值为0，射线会和路径相交，如果路径方向和射线方向形成的是顺时针方向则+1，如果是逆时针方向则-1，最后如果数值为0，则是路径的外部；如果不是0，则是路径的内部，因此被称为“非0规则”。

一图胜千言：

![](md-imgs/2024-10-04-11-32-09.png)

例如上图点A，我们随便发出一条射线，结果经过了路径5和路径2，我们顺着路径前进方向和射线前进方向，可以看到，合并后的运动方向都是逆时针，逆时针方向-1，因此，最后计算值是-2，不是0，因此，是内部，fill时候可以被填充。

再看外部的例子，一图胜千言+1：

![](md-imgs/2024-10-04-11-32-17.png)

点B再发出一条射线，经过两条路径片段，为路径2和路径3，我们顺着路径前进方向和射线前进方向，可以看到，合并后的运动方向一个是逆时针，-1，一个是顺时针，+1，因此，最后的计算值是0，是外部，因此，不被填充。

+ 对于evenodd规则：起始值为0，射线会和路径相交，每交叉一条路径，我们计数就+1，最后看我们的总计算数值，如果是奇数，则认为是路径内部，如果是偶数，则认为是路径外部。

一图胜千言+2：

![](md-imgs/2024-10-04-11-32-26.png)

例如上图点A，我们随便发出一条射线，结果经过了路径5和路径2，交叉的路径个数为2，是偶数，因此，属于路径外，不填充。

一图胜千言+3：

![](md-imgs/2024-10-04-11-32-36.png)

点B再发出一条射线，经过路径片段路径2和路径3，交叉的路径个数为2，是偶数，因此，也属于路径外，不填充。

一图胜千言+4：

![](md-imgs/2024-10-04-11-32-44.png)

最后这个点C，发出的射线总共和3个路径交叉，是奇数。因此，属于路径内，填充。

### 5.3. 啦啦啦，结束语

不知大家搞懂没？

![](md-imgs/2024-10-04-11-32-52.png)

## 6. 💻 demo1 - 裁剪菱形

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // 使用 ctx.clip() 方法设置裁剪区域。
      // 接下来绘制的图形只会在裁剪路径中展示。
      // 在指定裁剪区域之前绘制的图形不会受到影响。

      // 注意：裁剪的时候是先指定裁剪区域再绘制图形。

      // 绘制一个蓝色矩形。
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 400, 400, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.fillStyle = 'blue'
        ctx.fillRect(100, 100, 200, 200)
      }

      // 从一个蓝色的矩形中裁剪出一个菱形。
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 400, 400, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        // 菱形裁剪区域
        ctx.beginPath()
        ctx.moveTo(100, 200)
        ctx.lineTo(200, 100)
        ctx.lineTo(300, 200)
        ctx.lineTo(200, 300)
        ctx.closePath()
        ctx.clip()

        // 下面绘制的矩形，只有在上述菱形中的那一部分区域会正常展示。
        ctx.beginPath()
        ctx.fillStyle = 'blue'
        ctx.fillRect(100, 100, 200, 200)
      }

    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-34-27.png)

## 7. 💻 demo2 - 裁剪圆形

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 400, 400, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')
        const img = new Image()
        img.src = './week.png'
        img.onload = function () {
          ctx.drawImage(img, -200, -10)
        }
      }

      // 裁剪出 week 的头像
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 400, 400, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        const img = new Image()
        img.src = './week.png'
        img.onload = function () {
          ctx.beginPath()
          ctx.arc(200, 200, 100, 0, Math.PI * 2)
          ctx.clip()

          ctx.drawImage(img, -200, -10)
        }
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-34-35.png)

## 8. 💻 demo3 - 理解 fillRule

```html
<!-- 3.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // ctx.clip 方法还可以传递一个参数，表示裁剪路径的填充规则（fillRule）。

      // 🤔 为什么需要填充规则（fillRule）？
      // 因为在绘制裁剪路径的时候，有些路径区域可能会被重复包含。

      // 填充规则（fillRule）：
      // nonzero  非零环绕路径（默认值）
      // evenodd  奇偶环绕路径

      // 本文的两个示例，如果不理解的话，可以看看下面 👇 的推荐文章。

      // 推荐文章：
      // https://www.zhangxinxu.com/wordpress/2018/10/nonzero-evenodd-fill-mode-rule/
      // 搞懂SVG/Canvas中nonzero和evenodd填充规则
      // —— 张鑫旭

      // nonzero 示例
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 400, 400, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.lineWidth = 5
        ctx.fillStyle = '#2d66bd'
        ctx.strokeStyle = '#e83727'

        ctx.beginPath()
        ctx.moveTo(100, 100)
        ctx.lineTo(350, 150)
        ctx.lineTo(225, 400)
        ctx.lineTo(100, 100)
        ctx.lineTo(220, 50)
        ctx.lineTo(360, 360)
        ctx.lineTo(100, 100)
        ctx.clip('nonzero')
        // nonzero 是默认值，因此 ctx.clip() 不传递参数效果也是一样的效果。

        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.stroke()
      }

      // evenodd 示例
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 400, 400, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.lineWidth = 5
        ctx.fillStyle = '#2d66bd'
        ctx.strokeStyle = '#e83727'

        ctx.beginPath()
        ctx.moveTo(100, 100)
        ctx.lineTo(350, 150)
        ctx.lineTo(225, 400)
        ctx.lineTo(100, 100)
        ctx.lineTo(220, 50)
        ctx.lineTo(360, 360)
        ctx.lineTo(100, 100)
        ctx.clip('evenodd')

        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.stroke()
      }

    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-34-46.png)

## 9. 💻 demo4 - 问题记录

```html
<!-- 4.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // 被裁剪的参考图像。
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 500, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 500, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.arc(150, 150, 100, 0, Math.PI * 2, false) // 顺时针
        ctx.arc(300, 150, 100, 0, Math.PI * 2, false) // 顺时针
        ctx.arc(225, 250, 100, 0, Math.PI * 2, false) // 顺时针
        ctx.clip('nonzero')

        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      /*
      问题：
      暂时还不理解为什么最终渲染出来的图像。
      */
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 500, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.arc(150, 150, 100, 0, Math.PI * 2, false) // 顺时针
        ctx.arc(300, 150, 100, 0, Math.PI * 2, true) //  逆时针
        ctx.arc(225, 250, 100, 0, Math.PI * 2, false) // 顺时针
        ctx.clip('nonzero')

        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-34-53.png)

# [README.md](./0032.%20使用%20ctx.createPattern%20创建填充图案/README.md)<!-- !======> SEPERATOR <====== -->
# [0032. 使用 ctx.createPattern 创建填充图案](https://github.com/Tdahuyou/canvas/tree/main/0032.%20%E4%BD%BF%E7%94%A8%20ctx.createPattern%20%E5%88%9B%E5%BB%BA%E5%A1%AB%E5%85%85%E5%9B%BE%E6%A1%88)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
- [4. 💻 demo1](#4--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary

- 理解 ctx.createPattern 的填充机制。
需要注意 **填充的图案是禁止的，并不会随着我们绘制的图案而移动。**

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern - MDN - CanvasRenderingContext2D: createPattern() method

## 3. 📒 notes

ctx.createPattern 重点在于理解填充的机制，这可能和你常规印象中的填充机制不一样。**填充的图案是禁止的，并不会随着我们绘制的图案而移动。**我们在使用填充的时候，其实是指定哪一块区域可以看到已经准备好的填充图案。如果这块区域看不到填充图案的话，那么填充看起来就是无效的。

## 4. 💻 demo1

```html
<!-- 1.html -->
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        display: block;
        border: 1px solid #ccc;
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // 提前创建好一个菱形，作为填充素材。
      let rhombus
      {
        rhombus = document.createElement('canvas')
        rhombus.width = 50
        rhombus.height = 50
        document.body.append(rhombus)
        const ctx1 = rhombus.getContext('2d')

        ctx1.moveTo(0, rhombus.width / 2)
        ctx1.lineTo(rhombus.height / 2, 0)
        ctx1.lineTo(rhombus.height, rhombus.width / 2)
        ctx1.lineTo(rhombus.height / 2, rhombus.width)
        ctx1.closePath()
        ctx1.fill()
      }
      // const pattern = ctx.createPattern(imgSource, repetition)
      // 用于创建一个图案来填充图形。

      // imgSource 表示图像源
      // repetition 表示重复机制

      // 创建的图案 pattern 可以作为填充背景或描边背景。
      // ctx.fillStyle = pattern
      // ctx.strokeStyle = pattern

      // 注意：
      // 1. pattern 是基于画布坐标系的原点开始计算的，绝对位置，并不会随着图形的移动而发生变化。
      // 2. ctx.lineWidth 这玩意儿设置的描边宽度，作用到图形上时，分别向两侧扩散 lineWidth / 2 的距离。

      // 一、填充整个画布
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 500, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()

        const pattern = ctx.createPattern(rhombus, 'repeat')
        // 使用 rhombus 来创建一个填充图案 pattern
        // repeat 表示填充整个画布

        ctx.fillStyle = pattern
        // 将 pattern 设置为填充样式

        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fill()
      }

      // 二、填充 x 轴
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 500, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()

        const pattern = ctx.createPattern(rhombus, 'repeat-x')
        // repeat-x 表示填充 x 轴

        ctx.fillStyle = pattern
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fill()
      }

      // 三、填充 y 轴
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 500, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()

        const pattern = ctx.createPattern(rhombus, 'repeat-y')
        // repeat-y 表示填充 y 轴

        ctx.fillStyle = pattern
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fill()
      }

      // 四、填充指定区域
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 500, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()

        const pattern = ctx.createPattern(rhombus, 'repeat')
        ctx.fillStyle = pattern

        ctx.rect(100, 100, 100, 100)
        ctx.fill()

        ctx.beginPath()
        ctx.rect(75, 300, 100, 100)
        ctx.fill()
      }

      // 五、填充描边区域
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 500, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()

        const pattern = ctx.createPattern(rhombus, 'repeat')
        ctx.strokeStyle = pattern

        ctx.beginPath()
        ctx.lineWidth = 100
        ctx.rect(100, 100, 300, 300)
        ctx.stroke()
      }
    </script>
  </body>
</html>
```

首先绘制了一个菱形的 icon，这个 icon 用于后续的填充素材。

然后一共绘制了 5 个示例，可挨个展开代码块查看逻辑。

下面是所有示例汇总的最终效果。

![](md-imgs/2024-10-04-11-37-37.png)


# [README.md](./0033.%20使用%20ctx.drawImage%20绘制视频图像/README.md)<!-- !======> SEPERATOR <====== -->
# [0033. 使用 ctx.drawImage 绘制视频图像](https://github.com/Tdahuyou/canvas/tree/main/0033.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E7%BB%98%E5%88%B6%E8%A7%86%E9%A2%91%E5%9B%BE%E5%83%8F)


<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 notes](#2--notes)
- [3. 💻 demo1](#3--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary

## 2. 📒 notes

可以使用 ctx.drawImage 来处理视频图像，这个功能点有些 🐂 🍺，水应该蛮深的。

可以将视频数据作为 ctx.drawImage 的第一个参数传入，将会绘制视频当前播放帧的图像，并且可以使用 canvas 技术来对图像做一些额外的处理，实现一些特殊效果。

获取到视频图像数据后，结合 canvas 技术会有不少玩法。比如：
- 可以对视频图像加一个滤镜、裁剪效果。
- 由于 canvas 本身就是一张图片，你可以设置一个下载图片的钩子，想要获取某一帧图像时，执行钩子即可。
- ……

## 3. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <video src="./01.mp4" autoplay controls width="400" height="400" muted></video>
      <!--
        autoplay 属性表示视频加载完成后自动播放
        controls 属性表示显示播放控件
        muted 属性表示静音播放

        注意：如果要设置自动播放的话，需要设置 muted 属性，否则浏览器会阻止自动播放。
       -->
    </div>

    <script>
      const canvas = document.createElement('canvas')
      canvas.width = 400
      canvas.height = 400
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      const video = document.querySelector('video')
      video.addEventListener('play', draw) // 当视频播放后，调用 draw 函数

      ctx.arc(200, 200, 150, 0, Math.PI * 2)
      ctx.clip()
      // 表示裁剪出一个圆形区域

      // 可以加一些滤镜效果（有关滤镜的相关知识点，在后续内容中会介绍。）
      ctx.filter = 'blur(5px)' // 表示 5px 的模糊效果
      ctx.filter = 'invert(0.8)' // 表示反色效果

      function draw() {
        ctx.clearRect(0, 0, 400, 400)
        ctx.drawImage(video, 0, 0, 400, 400)
        requestAnimationFrame(draw)
      }

      // requestAnimationFrame 是一个用于创建平滑动画效果的浏览器 API
      // 与浏览器的帧刷新率（通常是60次/秒，即每16.67毫秒一帧）同步

      // requestAnimationFrame(draw)
      // 请求浏览器在下次重新绘制之前调用 draw 函数，从而创建一个动画循环。
      // 通常用于实现高效率的、平滑的动画效果。
    </script>
  </body>
</html>
```

![](md-imgs/使用%20ctx.drawImage%20绘制视频图像.gif)

上面是原始视频。

下面是获取到的视频图像，并对获取到的视频图像进行了一些处理。


# [README.md](./0034.%20使用%20ctx.drawImage%20实现人物奔跑动画效果/README.md)<!-- !======> SEPERATOR <====== -->
# [0034. 使用 ctx.drawImage 实现人物奔跑动画效果](https://github.com/Tdahuyou/canvas/tree/main/0034.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E5%AE%9E%E7%8E%B0%E4%BA%BA%E7%89%A9%E5%A5%94%E8%B7%91%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1 - 素材图片展示](#2--demo1---素材图片展示)
- [3. 💻 demo2 - 原地跑](#3--demo2---原地跑)
- [4. 💻 demo3 - 向前跑](#4--demo3---向前跑)
<!-- endregion:toc -->

## 1. 📝 Summary

- 能够理解任务的运动原理即可，本质上使用的是 `ctx.drawImage` 的“截图”功能。

## 2. 💻 demo1 - 素材图片展示

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 实现人物奔跑动画效果</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 500, 150, 50)
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      ctx.globalAlpha = 0.5

      const img = new Image()
      img.src = './run.png'
      img.onload = function () {
        ctx.drawImage(img, 0, 0)
      }
      // 图像宽度的计算过程：
      // 在使用的素材图片 run.png 中。
      // 结合坐标系，估算各个图像的大致坐标范围是 90 ～ 100 的宽度。
      // 开发时不断微调，最终确定每个图像的宽度为 94 比较合适。

      // 实际上如果图像是负责 UI 的同事丢给你的话，可以直接问他们图像的间隔是多少。
      // 比如直接让对方设计成 100 的宽度，这样你就不用自己去估算了。
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-40-47.png)

## 3. 💻 demo2 - 原地跑

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 实现人物奔跑动画效果</title>
  </head>
  <body>
    <script>
      const canvas = document.createElement('canvas')
      canvas.width = 500
      canvas.height = 500
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      const img = new Image()
      img.src = './run.png'
      img.onload = function () {
        let i = 0
        function show() {
          ctx.clearRect(0, 0, 500, 500)
          ctx.drawImage(
            img,
            // 从 (i * 94, 0) 位置开始截取宽度为 94 高度为 img.height 的图片
            i * 94,
            0,
            94,
            img.height,
            // 从 (0, 0) 位置开始绘制宽度为 94 高度为 img.height 的图片
            // 相当于原地奔跑
            0,
            0,
            94,
            img.height
          )
          i++
          if (i == 5) {
            i = 0
          }
        }

        setInterval(show, 1000 / 30) // 调节动画速度
      }
    </script>
  </body>
</html>
```

![](md-imgs/demo2-使用%20ctx.drawImage%20实现人物奔跑动画效果.gif)

## 4. 💻 demo3 - 向前跑

```html
<!-- 3.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 实现人物奔跑动画效果</title>
  </head>
  <body>
    <script>
      const canvas = document.createElement('canvas')
      canvas.width = 500
      canvas.height = 500
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      const img = new Image()
      img.src = './run.png'
      img.onload = function () {
        let i = 0
        let j = 0
        function show() {
          const runDistance = j * 10
          ctx.clearRect(0, 0, 500, 500)
          ctx.drawImage(
            img,
            // 从 (i * 94, 0) 位置开始截取宽度为 94 高度为 img.height 的图片
            i * 94,
            0,
            94,
            img.height,
            // 每次切换图片时，横向位移 10 个单位
            runDistance,
            0,
            94,
            img.height
          )
          i++
          j++

          if (i == 5) {
            i = 0
          }
          if (runDistance >= canvas.width) {
            j = 0
          }
        }

        setInterval(show, 1000 / 30) // 调节动画速度
      }
    </script>
  </body>
</html>
```

![](md-imgs/demo3-使用%20ctx.drawImage%20实现人物奔跑动画效果.gif)


# [README.md](./0035.%20使用%20ctx.drawImage%20引入图像/README.md)<!-- !======> SEPERATOR <====== -->
# [0035. 使用 ctx.drawImage 引入图像](https://github.com/Tdahuyou/canvas/tree/main/0035.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E5%BC%95%E5%85%A5%E5%9B%BE%E5%83%8F)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
- [4. 💻 demo1 - 保持图片原始尺寸](#4--demo1---保持图片原始尺寸)
- [5. 💻 demo2 - 约束图片尺寸](#5--demo2---约束图片尺寸)
- [6. 💻 demo3 - 裁剪图片](#6--demo3---裁剪图片)
<!-- endregion:toc -->

## 1. 📝 Summary

一共有 3 种传参方式：
1. `drawImage(image, dx, dy)`
2. `drawImage(image, dx, dy, dWidth, dHeight)`
3. `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`
最后一种能用来模拟截图效果。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage - MDN - `ctx.drawImage`

## 3. 📒 notes

`ctx.drawImage` 常见有 3 种写法：

1. `drawImage(image, dx, dy)`
2. `drawImage(image, dx, dy, dWidth, dHeight)`
3. `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`

![](md-imgs/2024-10-04-11-47-00.png)

`ctx.drawImage` 从单词角度出发，draw 表示画，Image 表示图片，这 API 是用来画图片的。有 3 种常见用法，其中“截图”功能比较 🐂 🍺，可以玩出很多花样。

你可以自由裁剪图片的某一部分矩形区域来显示，实现仅展示一张图片的局部效果，在制作一些简单的连续的动画效果时特别有用。

## 4. 💻 demo1 - 保持图片原始尺寸

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 使用 ctx.drawImage 引入图像</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 1500, 1000, 50)
      document.body.appendChild(cavnas)

      const ctx = cavnas.getContext('2d')

      // ctx.drawImage(imgSource, x, y)
      // x, y 表示在图像在 canvas 画布中放置的起始坐标位置。
      // 这种写法会按照图像原大小展示。

      const img = new Image()
      img.src = './week.png'
      img.onload = function () {
        // ctx.globalAlpha = 0.5
        ctx.drawImage(img, 100, 100)
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-47-57.png)

## 5. 💻 demo2 - 约束图片尺寸


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 使用 ctx.drawImage 引入图像</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 500, 500, 50)
      document.body.appendChild(cavnas)

      const ctx = cavnas.getContext('2d')

      // ctx.drawImage(imgSource, x, y, width, height)

      // x, y
      // 表示在图像在 canvas 画布中放置的起始坐标位置。

      // width, height
      // 表示图像展示的大小，此时图片会按照指定的尺寸展示。
      // 如果照片儿的宽高比和指定的宽高比不一致，图片会被拉伸或压缩。

      const img = new Image()
      img.src = './week.png'
      img.onload = function () {
        ctx.drawImage(img, 100, 100, 300, 150)
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-48-03.png)

## 6. 💻 demo3 - 裁剪图片


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>📝 使用 ctx.drawImage 引入图像</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const cavnas = document.createElement('canvas')
      drawGrid(cavnas, 1500, 1000, 50)
      document.body.appendChild(cavnas)
      const ctx = cavnas.getContext('2d')

      // ctx.drawImage(imgSource, x1, y1, w1, h1, x2, y2, w2, h2)
      // x1 y1 w1 h1 表示图像的“截图”区域（基于图像的坐标系）
      // x2 y2 w2 h2 表示画布展示区域（基于画布的坐标系）

      const img = new Image()
      img.src = './week.png'
      img.onload = function () {
        ctx.globalAlpha = 0.5
        ctx.drawImage(img, 0, 0)

        ctx.drawImage(
          img,
          150,
          100,
          900,
          img.height - 100,
          0,
          700,
          300,
          150
        )
      }
    </script>
  </body>
</html>
```

`ctx.globalAlpha = 0.5` 设置为半透明的效果，以便查看坐标。

![](md-imgs/2024-10-04-11-48-10.png)


# [README.md](./0036.%20使用%20ctx.getImageData、ctx.putImageData%20实现图像的像素处理/README.md)<!-- !======> SEPERATOR <====== -->
# [0036. 使用 ctx.getImageData、ctx.putImageData 实现图像的像素处理](https://github.com/Tdahuyou/canvas/tree/main/0036.%20%E4%BD%BF%E7%94%A8%20ctx.getImageData%E3%80%81ctx.putImageData%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E7%9A%84%E5%83%8F%E7%B4%A0%E5%A4%84%E7%90%86)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
- [4. 💻 demo1 - 置灰](#4--demo1---置灰)
- [5. 💻 demo2 - 图像反色处理](#5--demo2---图像反色处理)
- [6. 💻 demo3 - 置蓝](#6--demo3---置蓝)
<!-- endregion:toc -->

## 1. 📝 Summary

先对 `ctx.getImageData`、`ctx.putImageData` 的使用有个基本的了解即可。想要玩 6️⃣ 它们，还需要去学习图像颜色处理的更多知识。
文档中提到的示例，处理逻辑都是：
1. 先读图片数据 `ctx.getImageData`
2. 再对图片数据进行修改
3. 最后将修改后的数据写入图片 `ctx.putImageData`

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData - MDN - CanvasRenderingContext2D: getImageData() method，读图片数据。
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData - MDN - CanvasRenderingContext2D: putImageData() method，写图片数据。

## 3. 📒 notes

ctx.getImageData、ctx.putImageData 这俩 API 的功能很强大，能玩出很多效果 —— 因为拿到了整个图像的所有像素点数据。

素材原图像：
![](md-imgs/2024-10-04-11-50-13.png)

## 4. 💻 demo1 - 置灰

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script>
      // 【读】读取图片像素点的 rgba 值
      // imageData = ctx.getImageData(x, y, width, height)
      // imageData.data 是一个一维数组
      // 每 4 位表示一个像素点的 rgba 值

      // 【写】设置图片像素点的 rgba 值
      // ctx.putImageData(imageData, x, y)
      // 在读取到 imageData 数据之后，可以对每个像素点的 rgba 值进行处理，然后再将处理后的数据放回到 canvas 中。
      // 比如可以对原图进行置灰、反色等处理。

      // 注意：要使用 open with Live Server 打开，否则会报跨域错误。

      const canvas = document.createElement('canvas')
      canvas.width = 800
      canvas.height = 800
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      // console.log(
      //   '(0, 0) 点到 (10, 10) 点围成的区域 像素点数量：',
      //   ctx.getImageData(0, 0, 10, 10).data.length / 4
      // )

      const img = new Image()
      img.src = './home.png'
      img.onload = function () {
        ctx.drawImage(img, 0, 0)

        const imageData = ctx.getImageData(0, 0, img.width, img.height)
        for (let i = 0; i < imageData.data.length; i += 4) {
          const r = imageData.data[i]
          const g = imageData.data[i + 1]
          const b = imageData.data[i + 2]
          // const a = imageData.data[i + 3]

          // 图像置灰处理
          const avg = (r + g + b) / 3
          imageData.data[i] = avg
          imageData.data[i + 1] = avg
          imageData.data[i + 2] = avg
        }
        ctx.putImageData(imageData, 0, 0)
        // ctx.putImageData(imageData, img.width, 0) // 将置灰的图像放在原图像右侧
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-50-46.png)

## 5. 💻 demo2 - 图像反色处理

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script>
      const canvas = document.createElement('canvas')
      canvas.width = 800
      canvas.height = 800
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      const img = new Image()
      img.src = './home.png'
      img.onload = function () {
        ctx.drawImage(img, 0, 0)

        const imageData = ctx.getImageData(0, 0, img.width, img.height)
        for (let i = 0; i < imageData.data.length; i += 4) {
          const r = imageData.data[i]
          const g = imageData.data[i + 1]
          const b = imageData.data[i + 2]

          // 图像反色处理
          imageData.data[i] = 255 - r
          imageData.data[i + 1] = 255 - g
          imageData.data[i + 2] = 255 - b
        }
        ctx.putImageData(imageData, 0, 0)
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-51-02.png)

## 6. 💻 demo3 - 置蓝

```html
<!-- 3.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script>
      // 置蓝：将红色绿色通道设置为 0，蓝色通道的值保留不变。
      // 置红：将绿色蓝色通道设置为 0，红色通道的值保留不变。
      // 置绿：将红色蓝色通道设置为 0，绿色通道的值保留不变。

      // 通过对像素的处理，还能实现很多效果。
      // 毕竟都拿到了一张图片的所有像素点数据了，想怎么处理都行。
      //   颜色变换
      //   滤镜效果
      //   马赛克
      //   图像合成
      //   动画效果
      //   图形填充
      //   ……
      const canvas = document.createElement('canvas')
      canvas.width = 800
      canvas.height = 800
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      const img = new Image()
      img.src = './home.png'
      img.onload = function () {
        ctx.drawImage(img, 0, 0)

        const imageData = ctx.getImageData(0, 0, img.width, img.height)
        for (let i = 0; i < imageData.data.length; i += 4) {
          // 置蓝
          imageData.data[i] = 0 // 红色通道设置为 0
          imageData.data[i + 1] = 0 // 绿色通道设置为 0
        }
        ctx.putImageData(imageData, 0, 0)
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-51-17.png)


# [README.md](./0037.%20使用%20ctx.globalCompositeOperation%20处理图像合成/README.md)<!-- !======> SEPERATOR <====== -->
# [0037. 使用 ctx.globalCompositeOperation 处理图像合成](https://github.com/Tdahuyou/canvas/tree/main/0037.%20%E4%BD%BF%E7%94%A8%20ctx.globalCompositeOperation%20%E5%A4%84%E7%90%86%E5%9B%BE%E5%83%8F%E5%90%88%E6%88%90)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
- [4. 💻 demo1](#4--demo1)
- [5. 💻 demo2](#5--demo2)
<!-- endregion:toc -->

## 1. 📝 Summary

理解单词 source（源）和目标 destination（目标）的含义，有助于对 `ctx.globalCompositeOperation` 的相关属性值（`source-over`、`destination-in`……）的理解。
至于合成颜色，比如更亮 lighter、更暗 darken、颜色盘 hue 等等和颜色相关的，可以先跳过，因为还看不懂它的颜色具体是如何计算出来的，只要对最终呈现的效果有个大致的概念即可（比如你想要让合成区域亮一些，知道用 `lighter` 这个值来尝试下就行，至于如何微调就先不用去想了）。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation - MDN - ctx.globalCompositeOperation

## 3. 📒 notes

`ctx.globalCompositeOperation` 用于设置如何将新绘制的图像与已存在的画布内容合成，决定新图像如何与底层内容相结合。

从代码书写层面，需要掌握 `ctx.globalCompositeOperation` 的写法。至于最终渲染效果的一些细节先不管，这部分的内容涉及到图像合成技术相关的专业知识。

**比较典型的应用场景：**
- “橡皮擦”效果
  - destination-out
  - 在原图上面绘制新的图形，把原图形中的图案给擦掉。
- “图层”效果

> **单词**
> destination 目标
> composite 合成
> operation 操作

## 4. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script>
      // ctx.globalCompositeOperation
      // 用于设置在已有的画布内容上绘制新图形时，如何控制这些图形之间的合成或混合模式。
      // 通过改变这个属性的值，你可以定义新图形应该如何与背景的已有图形相结合。

      // Source（源）
      // 指的是你正尝试在画布上绘制的新图形或图像。

      // Destination（目标）
      // 指的是画布上已经存在的图形或图像。

      // source-over（默认值） 新的图形会绘制在旧图形上方。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        // ctx.globalCompositeOperation = 'source-over'
        // 这条语句写或者不写都一样，因为默认值就是 source-over。

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }

      // source-in 新图形只在旧图形和新图形重叠的部分显示。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'source-in'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }

      // source-out 新图形只在与旧图形不重叠的部分显示。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'source-out'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }

      // source-atop 新图形只在与旧图形重叠的部分显示，且这部分会显示在旧图形之上。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'source-atop'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }

      // destination-over 新图形会绘制在旧图形的下方。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'destination-over'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }

      // destination-in 旧图形只在与新图形重叠的部分显示。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'destination-in'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }

      // destination-out 旧图形只在与新图形不重叠的部分显示。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'destination-out'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }

      // destination-atop 旧图形只在与新图形重叠的部分显示，且这部分会显示在新图形之上。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'destination-atop'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }

      // copy 只显示新图形，忽略旧图形。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'copy'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }

      // xor 只显示新图形和旧图形不重叠的部分。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'xor'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-53-55.png)

## 5. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script>
      // 这部分的内容涉及到图像合成技术相关的专业知识。
      // 对于初学者来说，只需要知道这个属性的值可以控制图像的合成效果即可。
      // 比如知道如何实现更亮、更暗等效果就行。
      // 暂时不要求掌握像素计算的具体细节。
      // 也就是暂时不需要知道如何更细粒度的去调节图像的合成效果。

      // lighter 重叠部分的颜色值相加，造成亮化效果。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'lighter'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }
      // multiply 重叠部分的颜色值相乘，结果更暗，增加色彩的饱和度。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'multiply'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }
      // screen 重叠部分采用补色相乘的方式处理，使颜色值更亮，产生高光效果。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'screen'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }
      // darken 在重叠部分选择较暗的颜色，使图像整体显得更暗。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'darken'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }
      // lighten 在重叠部分选择较亮的颜色，使图像整体显得更亮。
      {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 200
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 100, 100)

        ctx.globalCompositeOperation = 'lighten'

        ctx.fillStyle = 'red'
        ctx.fillRect(50, 50, 100, 100)
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-54-04.png)

# [README.md](./0038.%20使用%20ctx.globalCompositeOperation%20实现刮刮乐效果/README.md)<!-- !======> SEPERATOR <====== -->
# [0038. 使用 ctx.globalCompositeOperation 实现刮刮乐效果](https://github.com/Tdahuyou/canvas/tree/main/0038.%20%E4%BD%BF%E7%94%A8%20ctx.globalCompositeOperation%20%E5%AE%9E%E7%8E%B0%E5%88%AE%E5%88%AE%E4%B9%90%E6%95%88%E6%9E%9C)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1](#2--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary

看懂实现原理即可。
这个效果挺好玩的，不过想要监听结果如何出现，不太容易。
**最终效果展示：**
![](md-imgs/使用%20ctx.globalCompositeOperation%20实现刮刮乐效果.gif)

## 2. 💻 demo1

```css
/* 1.css */
/*
使用绝对定位的方式
让结果和 canvas 绘制在同一块区域
 */
canvas {
  border: 1px solid #ccc;
  margin-right: 5px;
  position: absolute;
}

#result {
  width: 300px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 3rem;
  position: absolute;

  /* 防止文本内容被选中 */
  user-select: none;
}
```

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./1.css">
    <title>Document</title>
  </head>
  <body>
    <div id="result">谢谢惠顾</div>
    <script>
      const canvas = document.createElement('canvas')
      canvas.width = 300
      canvas.height = 200
      document.body.append(canvas)

      const ctx = canvas.getContext('2d')

      // 绘制填充矩形，将结果盖住。
      ctx.beginPath()
      ctx.fillStyle = '#ccc'
      ctx.fillRect(0, 0, 300, 200)

      ctx.globalCompositeOperation = 'destination-out'
      // destination-out 旧图形只在与新图形不重叠的部分显示。
      // 这意味着如果在旧图形上绘制新图形，重叠的部分会被删除。

      ctx.beginPath()
      // ctx.strokeStyle = '#fff' // 这里是否设置颜色都可以
      ctx.lineWidth = 20
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      canvas.onmousedown = function (e) {
        ctx.moveTo(e.offsetX, e.offsetY)

        // 按下鼠标之后就不断地画线
        canvas.onmousemove = function (e) {
          ctx.lineTo(e.offsetX, e.offsetY)
          ctx.stroke()
        }

        canvas.onmouseup = canvas.onmouseout = function () {
          canvas.onmousemove = null
          canvas.onmouseout = null
        }
      }
    </script>
  </body>
</html>
```

![](md-imgs/使用%20ctx.globalCompositeOperation%20实现刮刮乐效果.gif)


# [README.md](./0039.%20下载、使用%20canvas%20图像/README.md)<!-- !======> SEPERATOR <====== -->
# [0039. 下载、使用 canvas 图像](https://github.com/Tdahuyou/canvas/tree/main/0039.%20%E4%B8%8B%E8%BD%BD%E3%80%81%E4%BD%BF%E7%94%A8%20canvas%20%E5%9B%BE%E5%83%8F)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 💻 demo1](#2--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary

canvas 本身也是图像，可以被下载，可以被引用。
通过一个示例，加深对 canvas 的理解，你可以将其就看做是一个白色的图片，然后通过 canvas 提供的一些 API 在这个白色的图片上绘图，绘图完毕后你可以下载这张图片，也可以引用这张图进行二次创作。

## 2. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        display: block;
        margin-top: 2rem;
      }
    </style>
  </head>
  <body>
    <div>
      <button id="bnt-1">下载 canvas 1</button>
      <button id="bnt-2">下载 canvas 2</button>
      <button id="bnt-3">下载 canvas 3</button>
    </div>
    <script>
      let canvas1
      let canvas2
      let canvas3

      // 【canvas1】
      // 使用 canvas 绘制一个 靶心图标 🎯
      // 可以将其视作一张图片
      // 这张图片可以被下载，也可以被另一个 canvas 绘制。
      {
        canvas1 = document.createElement('canvas')
        canvas1.width = 200
        canvas1.height = 200
        document.body.append(canvas1)

        const ctx = canvas1.getContext('2d')

        // 同心圆
        for (let i = 1; i <= 5; i++) {
          ctx.beginPath()
          ctx.arc(100, 100, 20 * i, 0, Math.PI * 2)
          ctx.stroke()
        }

        // 横线
        ctx.beginPath()
        ctx.moveTo(0, 100)
        ctx.lineTo(200, 100)
        ctx.stroke()

        // 竖线
        ctx.beginPath()
        ctx.moveTo(100, 0)
        ctx.lineTo(100, 200)
        ctx.stroke()
      }

      // 【canvas2】
      // 将 canvas1 图像的一部分，绘制到 canvas2 上。
      {
        canvas2 = document.createElement('canvas')
        canvas2.width = 400
        canvas2.height = 400
        document.body.append(canvas2)
        const ctx = canvas2.getContext('2d')

        ctx.drawImage(canvas1, 0, 0, 100, 100, 150, 150, 100, 100)
        // canvas1 也是图片，所以可以使用 drawImage 方法绘制到 canvas2 上。
      }

      // 【canvas3】
      // 使用 canvas 绘制一张图片。
      {
        const canvas = document.createElement('canvas')
        canvas3 = canvas
        canvas.width = 800
        canvas.height = 400
        document.body.append(canvas)

        const ctx = canvas.getContext('2d')

        const img = new Image()
        img.src = './week.png'
        img.onload = function () {
          ctx.drawImage(img, 0, 0, 600, 300)
        }
      }

      // 【绑定下载的点击事件】
      // 注意：需要使用服务器环境（open with live server）打开，否则在下载 canvas3 时会报跨域错误。
      {
        const bnt1 = document.getElementById('bnt-1')
        bnt1.onclick = function () {
          const url = canvas1.toDataURL()
          const a = document.createElement('a')
          a.href = url
          a.download = 'canvas1'
          a.click()
        }

        const bnt2 = document.getElementById('bnt-2')
        bnt2.onclick = function () {
          const url = canvas2.toDataURL()
          const a = document.createElement('a')
          a.href = url
          a.download = 'canvas2'
          a.click()
        }

        const bnt3 = document.getElementById('bnt-3')
        bnt3.onclick = function () {
          const url = canvas3.toDataURL()

          const a = document.createElement('a')
          a.href = url
          a.download = 'canvas3'
          a.click()
        }
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-56-45.png)


# [README.md](./0040.%20使用%20ctx.createConicGradient%20实现锥形渐变效果/README.md)<!-- !======> SEPERATOR <====== -->
# [0040. 使用 ctx.createConicGradient 实现锥形渐变效果](https://github.com/Tdahuyou/canvas/tree/main/0040.%20%E4%BD%BF%E7%94%A8%20ctx.createConicGradient%20%E5%AE%9E%E7%8E%B0%E9%94%A5%E5%BD%A2%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 💻 demo1](#3--demo1)
- [4. 💻 demo2](#4--demo2)
- [5. 💻 demo3](#5--demo3)
<!-- endregion:toc -->

## 1. 📝 Summary

`ctx.createConicGradient(startAngle, x, y)` 用于创建一个锥形渐变。
- `startAngle` 渐变的起始角度
- `x, y` 渐变的中心点坐标

## 2. 🔗 links

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createConicGradient - MDN - `ctx.createConicGradient(startAngle, x, y)`。

## 3. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // createConicGradient(startAngle, x, y)
      // startAngle: 渐变的起始角度
      // x, y: 渐变的中心点坐标

      // 渐变的起始角度是 0，也就是 3 点钟方向 🕒。
      // 渐变角度的单位是弧度，而非度。

      const canvas = document.createElement('canvas')
      drawGrid(canvas, 400, 400, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.globalAlpha = 0.8

      const gradient = ctx.createConicGradient(0, 200, 200)
      // 0 表示从 3 点钟方向开始渐变
      // 200 200 表示渐变的中心点坐标

      gradient.addColorStop(0, 'red')
      // 表示渐变的起点颜色为红色
      gradient.addColorStop(0.25, 'orange')
      // 表示渐变到 25% 的位置时的颜色为橙色
      gradient.addColorStop(0.5, 'yellow')
      // 表示渐变到 50% 的位置时的颜色为黄色
      gradient.addColorStop(0.75, 'green')
      // 表示渐变到 75% 的位置时的颜色为绿色
      gradient.addColorStop(1, 'blue')
      // 表示渐变的终点颜色为蓝色

      ctx.fillStyle = gradient

      ctx.rect(0, 0, canvas.width, canvas.height)
      ctx.stroke()
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-58-04.png)

## 4. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 400, 400, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()

      const gradient = ctx.createConicGradient(Math.PI / 2, 200, 200)
      // Math.PI / 2 表示从 6 点钟方向开始渐变
      // 200 200 表示渐变的中心点坐标

      gradient.addColorStop(0, 'red')
      gradient.addColorStop(0.25, 'orange')
      gradient.addColorStop(0.5, 'yellow')
      gradient.addColorStop(0.75, 'green')
      gradient.addColorStop(1, 'blue')

      ctx.fillStyle = gradient

      ctx.arc(200, 200, 100, 0, Math.PI * 2)
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-58-14.png)

## 5. 💻 demo3

```html
<!-- 3.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 400, 400, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()

      const gradient = ctx.createConicGradient(Math.PI / 2, 200, 200)

      gradient.addColorStop(0, 'red')
      gradient.addColorStop(0.25, 'orange')
      gradient.addColorStop(0.5, 'yellow')
      gradient.addColorStop(0.75, 'green')
      gradient.addColorStop(1, 'blue')

      ctx.fillStyle = gradient

      ctx.arc(200, 200, 100, 0, Math.PI * 2)
      ctx.fill()

      // 在中间绘制一个白色的圆，实现类似色相环的效果。
      ctx.beginPath()
      ctx.fillStyle = '#fff'
      ctx.arc(200, 200, 60, 0, Math.PI * 2)
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-58-27.png)


# [README.md](./0041.%20使用%20ctx.createLinearGradient%20实现线性渐变效果/README.md)<!-- !======> SEPERATOR <====== -->
# [0041. 使用 ctx.createLinearGradient 实现线性渐变效果](https://github.com/Tdahuyou/canvas/tree/main/0041.%20%E4%BD%BF%E7%94%A8%20ctx.createLinearGradient%20%E5%AE%9E%E7%8E%B0%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 💻 demo1](#3--demo1)
- [4. 💻 demo2](#4--demo2)
<!-- endregion:toc -->

## 1. 📝 Summary

- `createLinearGradient(x0, y0, x1, y1)` 它设置的仅仅是线性渐变的区域。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient - MDN - `ctx.createLinearGradient`。

## 3. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // ctx.createLinearGradient 方法是 Canvas API 中用于创建线性渐变对象的函数。

      // 接受四个参数：x0, y0, x1, y1
      // 分别代表渐变的起点 (x0, y0) 和终点 (x1, y1) 的坐标。
      // 会按照两点的连线方向渐变。
      // 可以是横向、纵向、斜向。

      // 注意：
      // 渐变的参考系是画布坐标系。
      // 位置不会随着图形的变化而变化。
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 200, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.globalAlpha = 0.8

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, 'red') // 表示渐变的起点颜色为红色
        gradient.addColorStop(0.5, 'green') // 表示渐变的中间（50% 位置）颜色为绿色
        gradient.addColorStop(1, 'blue') // 表示渐变的终点颜色为蓝色

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // 仅修改矩形的尺寸和位置观察渐变效果。
      // 会发现渐变是固定的，矩形位置和尺寸仅仅决定了展示哪一部分的渐变效果。
      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 200, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.globalAlpha = 0.8

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, 'red')
        gradient.addColorStop(0.5, 'green')
        gradient.addColorStop(1, 'blue')

        ctx.fillStyle = gradient
        ctx.fillRect(200, 0, 100, canvas.height)
      }

      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 500, 200, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.globalAlpha = 0.8

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, 'red')
        gradient.addColorStop(0.5, 'green')
        gradient.addColorStop(1, 'blue')

        ctx.fillStyle = gradient
        ctx.fillRect(400, 0, 100, canvas.height)
      }

    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-59-28.png)

## 4. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // 前面的示例创建的是一个铺满整个 canvas 的渐变效果。
      // 如果渐变区域小于矩形区域的话，那么非渐变区域，将展示渐变的“终点”颜色。
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 500, 200, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.globalAlpha = 0.8

      // 渐变区域是从 100-400
      const gradient = ctx.createLinearGradient(100, 0, 400, 0)
      gradient.addColorStop(0, 'red')
      gradient.addColorStop(0.5, 'green')
      gradient.addColorStop(1, 'blue')

      // 绘制的矩形是从 0-500
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 仔细观察最终效果，会发现 0-100 和 400-500 的区域是渐变的“终点”颜色。
      // 这部分是没有渐变效果的。
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-11-59-37.png)


# [README.md](./0042.%20使用%20ctx.createRadialGradient%20实现径向渐变效果/README.md)<!-- !======> SEPERATOR <====== -->
# [0042. 使用 ctx.createRadialGradient 实现径向渐变效果](https://github.com/Tdahuyou/canvas/tree/main/0042.%20%E4%BD%BF%E7%94%A8%20ctx.createRadialGradient%20%E5%AE%9E%E7%8E%B0%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 💻 demo1](#3--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary

ctx.createRadialGradient 用于创建径向渐变（或称为放射状渐变）。
`createRadialGradient(x0, y0, r0, x1, y1, r1)`
- `x0, y0, r0` 圆1
- `x1, y1, r1` 圆2
从圆 1 的边缘开始渐变到圆 2 的边缘。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient - MDN - `ctx.createRadialGradient`。

## 3. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid #888;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // createRadialGradient(x0, y0, r0, x1, y1, r1)
      // x0, y0, r0: 渐变的起点坐标和半径
      // x1, y1, r1: 渐变的终点坐标和半径

      // 注意：两个圆是包含关系。
      // 即一个圆在另一个圆的内部。

      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 400, 400, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.globalAlpha = 0.8

        const gradient = ctx.createRadialGradient(200, 200, 50, 200, 200, 100)
        // 表示从 (200, 200) 半径为 50 的圆开始渐变
        // 到 (200, 200) 半径为 100 的圆结束渐变

        gradient.addColorStop(0, 'red')
        // 表示渐变的起点颜色为红色
        gradient.addColorStop(0.9, 'yellow')
        // 表示渐变到 90% 的位置时的颜色为黄色
        gradient.addColorStop(1, 'black')
        // 表示渐变的终点颜色为黑色

        ctx.fillStyle = gradient

        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.stroke()
        ctx.fill()
      }

      {
        const canvas = document.createElement('canvas')
        drawGrid(canvas, 400, 400, 50)
        document.body.append(canvas)
        const ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.globalAlpha = 0.8

        const gradient = ctx.createRadialGradient(200, 200, 100, 200, 200, 50)
        // 表示从 (200, 200) 半径为 100 的圆开始渐变
        // 到 (200, 200) 半径为 50 的圆结束渐变

        gradient.addColorStop(0, 'red')
        gradient.addColorStop(0.9, 'yellow')
        gradient.addColorStop(1, 'black')
        ctx.fillStyle = gradient

        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.stroke()
        ctx.fill()
      }
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-01-09.png)


# [README.md](./0043.%20给图像添加阴影/README.md)<!-- !======> SEPERATOR <====== -->
# [0043. 给图像添加阴影](https://github.com/Tdahuyou/canvas/tree/main/0043.%20%E7%BB%99%E5%9B%BE%E5%83%8F%E6%B7%BB%E5%8A%A0%E9%98%B4%E5%BD%B1)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
- [4. 💻 demo1](#4--demo1)
- [5. 💻 demo2](#5--demo2)
<!-- endregion:toc -->

## 1. 📝 Summary

跟 css 中的 box-shadow 类似，都可以用于给盒子添加阴影。在 canvas 中，可以给阴影添加颜色ctx.shadowColor、模糊半径shadowBlur、偏移shadowOffsetX、shadowOffsetY。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor

## 3. 📒 notes

shadowColor 设置阴影的颜色。

shadowBlur 设置阴影的模糊程度。值越大，阴影越模糊。

shadowOffsetX 和 shadowOffsetY 属性用于设置阴影的偏移量。

## 4. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // shadowColor: 阴影的颜色
      // shadowBlur: 阴影的模糊程度。值越大，阴影越模糊。

      const canvas = document.createElement('canvas')
      drawGrid(canvas, 400, 400, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()

      ctx.shadowColor = 'yellow'
      // 表示阴影的颜色为黄色

      ctx.shadowBlur = 100
      // 表示阴影的模糊程度为 100

      ctx.fillStyle = 'red'
      ctx.arc(200, 200, 100, 0, Math.PI * 2)
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-02-11.png)

## 5. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 400, 400, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.shadowColor = '#888' // 阴影的颜色为灰色
      ctx.shadowBlur = 15

      // shadowOffsetX 和 shadowOffsetY 属性用于设置阴影的偏移量。
      ctx.shadowOffsetX = 8
      ctx.shadowOffsetY = 8

      // 创建一个径向渐变
      const gradient = ctx.createRadialGradient(170, 170, 30, 200, 200, 100)
      // 170, 170, 30 表示渐变的起点是一个圆心为 (170, 170) 半径为 30 的圆。
      // 200, 200, 100 表示渐变的终点是一个圆心为 (200, 200) 半径为 100 的圆。
      gradient.addColorStop(0, 'rgb(221, 0, 0)') // 开始位置更亮红
      gradient.addColorStop(1, 'rgb(136, 0, 0)') // 结束位置更黑红

      ctx.fillStyle = gradient
      ctx.arc(200, 200, 100, 0, Math.PI * 2)
      ctx.fill()

      // 模拟场景：
      // 光源在左上角，阴影在右下角。
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-02-24.png)


# [README.md](./0044.%20使用%20ctx.filter%20实现滤镜效果/README.md)<!-- !======> SEPERATOR <====== -->
# [0044. 使用 ctx.filter 实现滤镜效果](https://github.com/Tdahuyou/canvas/tree/main/0044.%20%E4%BD%BF%E7%94%A8%20ctx.filter%20%E5%AE%9E%E7%8E%B0%E6%BB%A4%E9%95%9C%E6%95%88%E6%9E%9C)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
- [4. 💻 demo1 - blur](#4--demo1---blur)
- [5. 💻 demo2 - brightness](#5--demo2---brightness)
- [6. 💻 demo3 - hue-rotate](#6--demo3---hue-rotate)
- [7. 💻 demo4 - drop-shadow](#7--demo4---drop-shadow)
- [8. 💻 demo5 - invert](#8--demo5---invert)
- [9. 💻 demo6 - sepia](#9--demo6---sepia)
- [10. 💻 demo7 - grayscale](#10--demo7---grayscale)
- [11. 💻 demo8 - saturate](#11--demo8---saturate)
- [12. 💻 demo9 - contrast](#12--demo9---contrast)
- [13. 💻 demo10 - 使用 url 引用 svg 滤镜](#13--demo10---使用-url-引用-svg-滤镜)
<!-- endregion:toc -->

## 1. 📝 Summary

文档对 ctx.filter 实现滤镜效果做了个简述，快速过了一遍和滤镜相关的部分内容。
陌生的单词有些多…… 需要理解这些单词的含义。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter - MDN - ctx.filter。

## 3. 📒 notes

ctx.filter 用于设置滤镜效果，跟 css 中的滤镜语法、功能都非常类似。

**单词**

- brightness，亮度
- hue，色调
- drop，投影，下投
- invert，反转
- sepia，棕褐色，乌贼墨色
- saturate，饱和度
- contrast，对比度

**准备辅助函数 createCanvas**

```javascript
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
```

## 4. 💻 demo1 - blur

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script src="./createCanvas.js"></script>
    <script>
      // 原图
      createCanvas()

      // ctx.filter = 'blur(5px)'
      // 设置模糊，值越大，模糊效果越明显。
      createCanvas('blur(5px)')
      createCanvas('blur(10px)')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-05-21.png)

## 5. 💻 demo2 - brightness

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script src="./createCanvas.js"></script>
    <script>
      // 原图
      createCanvas()

      // ctx.filter = 'brightness(1.5)'
      // 设置亮度
      // 1 表示原样
      // < 1 变暗
      // > 1 变亮
      createCanvas('brightness(1.5)')
      createCanvas('brightness(1)')
      createCanvas('brightness(0.5)')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-05-31.png)

## 6. 💻 demo3 - hue-rotate

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script src="./createCanvas.js"></script>
    <script>
      // 原图
      createCanvas()

      // ctx.filter = 'hue-rotate(180deg)'
      // 用于设置色调
      // 参数表示色调旋转的角度。
      // 角度可以是从 0deg 到 360deg。
      // 其中 0deg 表示不进行色调改变，360deg 表示完全旋转一圈，效果同 0deg。
      // 不同的角度值会将颜色沿着色彩环移动，产生不同的视觉效果。
      createCanvas('hue-rotate(0deg)')
      createCanvas('hue-rotate(90deg)')
      createCanvas('hue-rotate(180deg)')
      createCanvas('hue-rotate(270deg)')
      createCanvas('hue-rotate(360deg)')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-05-41.png)

## 7. 💻 demo4 - drop-shadow


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script src="./createCanvas.js"></script>
    <script>
      // 原图
      createCanvas()

      // ctx.filter = 'drop-shadow(x y blur color)'
      // x - 阴影在水平方向上的偏移量，可以是正值或负值。
      // y - 阴影在垂直方向上的偏移量，可以是正值或负值。
      // blur - 模糊半径，定义阴影的软化程度。数值越大，阴影越模糊和扩散。
      // color - 阴影的颜色。
      createCanvas('drop-shadow(10px 10px 10px yellow)')
      createCanvas('drop-shadow(10px 10px 10px #231f1d)')
      createCanvas('drop-shadow(10px 10px 10px #e4a5a8)')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-05-51.png)

## 8. 💻 demo5 - invert

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script src="./createCanvas.js"></script>
    <script>
      // 原图
      createCanvas()

      // ctx.filter = 'invert(1)'

      // 该函数将所有颜色的值反转，例如黑变白，白变黑，以及其他颜色的相对反色。
      // 这种滤镜可以创建具有强烈视觉对比效果的图像，常用于特殊视觉效果或辅助功能（比如夜间模式或视觉障碍模式）。

      // 设置反色
      // 0   表示原样
      // 0.5 表示灰色
      // 1   表示颜色取反
      createCanvas('invert(0)')
      createCanvas('invert(0.5)')
      createCanvas('invert(1)')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-06-02.png)

## 9. 💻 demo6 - sepia

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script src="./createCanvas.js"></script>
    <script>
      // 原图
      createCanvas()

      // ctx.filter = 'sepia(1)'
      // 用于给图像添加一种深褐色的怀旧效果，类似于早期摄影中使用的棕褐色调。
      // 0 表示原样
      // 1 怀旧风格（深褐色）
      createCanvas('sepia(0)')
      createCanvas('sepia(0.5)')
      createCanvas('sepia(1)')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-06-13.png)

## 10. 💻 demo7 - grayscale

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script src="./createCanvas.js"></script>
    <script>
      // 原图
      createCanvas()

      // ctx.filter = 'grayscale()'
      // 设置灰度
      // 取值范围：0～1
      // 当设为 0 时，元素的颜色不发生变化。
      // 当设为 1 时，表示元素完全转为灰色，即彻底灰度化。
      createCanvas('grayscale(0)')
      createCanvas('grayscale(0.5)')
      createCanvas('grayscale(1)')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-06-26.png)

## 11. 💻 demo8 - saturate

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script src="./createCanvas.js"></script>
    <script>
      // 原图
      createCanvas()

      // ctx.filter = 'saturate()'
      // 设置饱和度
      // 1 表示原样
      // < 1 图像整体会变灰
      // > 1 图像整体颜色会更鲜明
      createCanvas('saturate(0.5)')
      createCanvas('saturate(1)')
      createCanvas('saturate(1.5)')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-06-37.png)

## 12. 💻 demo9 - contrast

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        margin: 2rem;
      }
    </style>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script src="./createCanvas.js"></script>
    <script>
      // 原图
      createCanvas()

      // ctx.filter = 'contrast()'
      // 设置对比度
      // 1 表示原样
      // < 1 对比度减弱，图像各部分颜色更加接近
      // > 1 对比度增强，颜色更鲜明
      createCanvas('contrast(0.5)')
      createCanvas('contrast(1)')
      createCanvas('contrast(1.5)')
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-06-50.png)

## 13. 💻 demo10 - 使用 url 引用 svg 滤镜

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Canvas Using SVG Filter</title>
  </head>
  <body>
    <svg width="0" height="0">
      <!-- 定义一个 svg 滤镜 -->
      <defs>
        <filter id="blur-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur>
        </filter>
      </defs>
    </svg>


    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 200, 200, 50)
      document.body.appendChild(canvas)
      const ctx = canvas.getContext('2d')

      // 引用 svg 滤镜。
      ctx.filter = 'url(#blur-filter)'

      // 绘制一个矩形
      ctx.fillStyle = 'red'
      ctx.fillRect(50, 50, 100, 100)
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-12-07-07.png)


# [README.md](./0045.%20使用%20ctx.rotate%20实现图像旋转/README.md)<!-- !======> SEPERATOR <====== -->
# [0045. 使用 ctx.rotate 实现图像旋转](https://github.com/Tdahuyou/canvas/tree/main/0045.%20%E4%BD%BF%E7%94%A8%20ctx.rotate%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E6%97%8B%E8%BD%AC)

<!-- region:toc -->
- [1. 🔗 links](#1--links)
- [2. 📒 notes](#2--notes)
- [3. 💻 demo1](#3--demo1)
- [4. 💻 demo2](#4--demo2)
<!-- endregion:toc -->


## 1. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate - MDN - CanvasRenderingContext2D：rotate() 方法。

## 2. 📒 notes

ctx.rotate 用于旋转画布的当前绘图。

**注意：**
1. 旋转不会对之前绘制好的内容有影响。
2. 旋转的角度单位是弧度。
3. 旋转默认是基于画布的原点来旋转的。
4. 这种旋转会影响到之后所有的绘制操作，直到画布的变换状态被重置或者再次修改。
5. 每次的旋转都是基于当前的坐标轴已旋转的角度进一步旋转的。

## 3. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // ctx.rotate 用于旋转画布的当前绘图。

      // 注意：
      // 1. 旋转不会对之前绘制好的内容有影响。
      // 2. 旋转的角度单位是弧度。
      // 3. 旋转默认是基于画布的原点来旋转的。
      // 4. 这种旋转会影响到之后所有的绘制操作，直到画布的变换状态被重置或者再次修改。
      // 5. 每次的旋转都是基于当前的坐标轴已旋转的角度进一步旋转的。

      const canvas = document.createElement('canvas')
      drawGrid(canvas, 300, 300, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.globalAlpha = 0.5

      ctx.fillStyle = 'red'
      ctx.rect(50, 50, 50, 50)
      ctx.fill()

      // 坐标轴旋转 0°
      // 在 (200, 50) 位置绘制一个圆
      ctx.beginPath()
      ctx.arc(200, 50, 10, 0, Math.PI * 2)
      ctx.fill()

      // 坐标轴旋转 10°
      // 坐标旋转 10° 再绘制一个圆
      ctx.rotate(10 * Math.PI / 180)
      ctx.beginPath()
      ctx.arc(200, 50, 10, 0, Math.PI * 2)
      ctx.fill()

      // 坐标轴旋转 20°
      // 坐标旋转 10° 再绘制一个圆
      ctx.rotate(10 * Math.PI / 180)
      ctx.beginPath()
      ctx.arc(200, 50, 10, 0, Math.PI * 2)
      ctx.fill()

      // 坐标轴旋转 30°
      // 坐标旋转 10° 再绘制一个圆
      ctx.rotate(10 * Math.PI / 180)
      ctx.beginPath()
      ctx.arc(200, 50, 10, 0, Math.PI * 2)
      ctx.fill()

      // 坐标轴旋转 40°
      // 坐标旋转 10° 再绘制一个圆
      ctx.rotate(10 * Math.PI / 180)
      ctx.beginPath()
      ctx.arc(200, 50, 10, 0, Math.PI * 2)
      ctx.fill()

      // 坐标轴旋转 50°
      // 坐标旋转 10° 再绘制一个圆
      ctx.rotate(10 * Math.PI / 180)
      ctx.beginPath()
      ctx.arc(200, 50, 10, 0, Math.PI * 2)
      ctx.fill()

      // 坐标轴旋转 60°
      // 坐标旋转 10° 再绘制一个圆
      ctx.rotate(10 * Math.PI / 180)
      ctx.beginPath()
      ctx.arc(200, 50, 10, 0, Math.PI * 2)
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-15-03-44.png)

## 4. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // 需求描述：
      // 画布上有一个正方形，请通过 ctx.rotate 旋转，将这个正方形变为菱形。
      // 要求正方形中心位置和旋转后得到的菱形的中心位置是一样的。
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 150, 150, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()

      // 假设正方形绘制在 (50, 50) 位置，宽高为 50。
      ctx.strokeStyle = 'red'
      ctx.setLineDash([10])
      ctx.strokeRect(50, 50, 50, 50)

      // 1. 将坐标轴的原点设置为旋转矩形的中心
      ctx.translate(75, 75)
      // 2. 坐标轴旋转 45°
      ctx.rotate(45 * Math.PI / 180)

      ctx.fillStyle = 'blue'
      // 3. 绘制矩形
      ctx.rect(50 - 75, 50 - 75, 50, 50)
      // 注意：
      // 坐标轴的位置发生了变化
      // 如果想要在原始图形的中心绘制菱形，需要将矩形的位置设置为 (-25, -25)
      // 这是基于原始图形的位置和坐标偏移位置计算出来的结果 (50 - 75, 50 - 75)
      ctx.fill()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-15-03-54.png)


# [README.md](./0046.%20使用%20ctx.scale%20缩放绘制的图像/README.md)<!-- !======> SEPERATOR <====== -->
# [0046. 使用 ctx.scale 缩放绘制的图像](https://github.com/Tdahuyou/canvas/tree/main/0046.%20%E4%BD%BF%E7%94%A8%20ctx.scale%20%E7%BC%A9%E6%94%BE%E7%BB%98%E5%88%B6%E7%9A%84%E5%9B%BE%E5%83%8F)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
- [4. 💻 demo1](#4--demo1)
- [5. 💻 demo2](#5--demo2)
<!-- endregion:toc -->

## 1. 📝 Summary

ctx.scale 用于在画布上缩放绘制的图像。通过传入负数，还能实现坐标的翻转。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale - MDN - CanvasRenderingContext2D：scale() 方法

## 3. 📒 notes

ctx.scale 用于在画布上缩放绘制的图像。

通过这个方法，你可以更改画布上图形的大小，而不改变图形本身的定义。

**注意：**
1. 这玩意儿不会对之前绘制的图像起作用。
2. 这玩意儿如果传入的参数是负数，那么将会导致坐标系反转。
3. 这种变换对后续的所有绘图操作都是有效的，直到画布的缩放状态被重置或修改。

## 4. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // ctx.scale 用于在画布上缩放绘制的图像。

      // 通过这个方法，你可以更改画布上图形的大小，而不改变图形本身的定义。

      // 注意：
      // 1. 这玩意儿不会对之前绘制的图像起作用。
      // 2. 这种变换对后续的所有绘图操作都是有效的，直到画布的缩放状态被重置或修改。

      const canvas = document.createElement('canvas')
      drawGrid(canvas, 300, 300, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.globalAlpha = 0.5

      // 绘制一个原始大小的红色矩形
      ctx.fillStyle = 'red'
      ctx.fillRect(10, 10, 50, 50)

      // 缩放画布
      ctx.scale(2, 2)
      // 横向缩放 2 倍，纵向缩放 2 倍

      // 在缩放后的画布上绘制一个蓝色矩形
      ctx.fillStyle = 'blue'
      ctx.fillRect(10, 10, 50, 50)

      // 两次在同一个位置绘制同样尺寸的矩形。
      // 在坐标被缩放后，这两个矩形绘制的位置和尺寸都是不一样的。
      // 主要原因在于坐标的刻度改变了，原坐标系的两个刻度相当于新坐标系的一个刻度。
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-15-05-25.png)

## 5. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // ctx.scale 这玩意儿如果传入的参数是负数，那么将会导致坐标系反转。

      const canvas = document.createElement('canvas')
      drawGrid(canvas, 500, 500, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.globalAlpha = 0.5

      // 将画布原点移至中心
      ctx.translate(canvas.width / 2, canvas.height / 2)

      // 辅助点 标注出原点
      ctx.fillStyle = 'blue'
      ctx.arc(0, 0, 10, 0, Math.PI * 2)
      ctx.fill()

      // 绘制一个原始大小的红色矩形
      ctx.fillStyle = 'red'
      ctx.fillRect(50, 50, 100, 100)

      // 水平翻转
      ctx.scale(-1, 1)
      // 由于坐标系被翻转，所以这里的 x 坐标的正方向（向右）指向了原来的负方向（向左）。

      // 绘制一个蓝色矩形，坐标和尺寸都跟前面的矩形一样。
      ctx.fillStyle = 'blue'
      ctx.fillRect(50, 50, 100, 100) // 注意这里的 x 坐标是负的
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-15-05-36.png)


# [README.md](./0047.%20使用%20ctx.transform%20来转换图形/README.md)<!-- !======> SEPERATOR <====== -->
# [0047. 使用 ctx.transform 来转换图形](https://github.com/Tdahuyou/canvas/tree/main/0047.%20%E4%BD%BF%E7%94%A8%20ctx.transform%20%E6%9D%A5%E8%BD%AC%E6%8D%A2%E5%9B%BE%E5%BD%A2)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
  - [3.1. ctx.transform 坐标转换计算规则](#31-ctxtransform-坐标转换计算规则)
- [4. 💻 demo1](#4--demo1)
- [5. 💻 demo2](#5--demo2)
- [6. 💻 demo3](#6--demo3)
- [7. 💻 demo4](#7--demo4)
<!-- endregion:toc -->

## 1. 📝 Summary

ctx.transform 很强大，可以实现很多转换效果，难点在于计算坐标的转换规则。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform - MDN - CanvasRenderingContext2D：transform() 方法

## 3. 📒 notes

ctx.transform 很强大，可以实现很多转换效果。但是这玩意儿的参数值需要根据具体的转换效果来挨个计算。

### 3.1. ctx.transform 坐标转换计算规则

这部分介绍有关 ctx.transform 坐标转换的计算规则。

重点需要理解文中提到的公式，需要知道 `(x`, y`)` 是如何计算出来的。

`ctx.transform` 方法用于修改画布的当前变换矩阵。它执行一个矩阵乘法来应用一个变换，这个变换可以包括旋转、缩放、移动（平移）以及倾斜（错切）等操作。

使用 `transform()` 方法可以非常灵活地对图形进行多种变换操作，是高级图形处理中非常有用的工具。

`ctx.transform(a, b, c, d, e, f)` 这里的参数对应于变换矩阵的组成部分，具体如下：

- **a** (m11): 水平缩放绘图
- **b** (m12): 水平倾斜绘图
- **c** (m21): 垂直倾斜绘图
- **d** (m22): 垂直缩放绘图
- **e** (dx): 水平移动绘图
- **f** (dy): 垂直移动绘图

所谓的变换就是将原坐标按照一定的变换公式（逻辑），变换成一个新坐标。

**转换公式：**

$$
\begin{bmatrix}
x' \\
y' \\
1
\end{bmatrix}
=
\begin{bmatrix}
a & c & e \\
b & d & f \\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
x \\
y \\
1
\end{bmatrix}
=>
\begin{aligned}
x' &= ax + cy + e \\
y' &= bx + dy + f \\
1 &= 0x + 0y + 1
\end{aligned}
$$

在公式中，我们知道的值是图形的当前坐标 `(x, y)`，其中 a～f 是我们传递的参数。

**累积效应：**

`transform()` 方法会与当前变换矩阵相乘，因此它的效果是累积的。

如果要重置变换矩阵到默认状态，可以使用 `ctx.setTransform(1, 0, 0, 1, 0, 0)`。将 a、d 置 1，其他值都置 0，也就是说 `x = x`` `y = y``。

**区别于 `setTransform()`：**

`setTransform()` 也用于设置变换矩阵，但它会重置当前的变换矩阵再设置新的矩阵，而不是累积应用。

## 4. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 500, 500, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      // 原始矩形
      ctx.fillStyle = 'blue'
      ctx.fillRect(50, 50, 100, 50)

      ctx.transform(1, 0, 0, 1, 100, 100)
      // 表示横纵各移动 100

      ctx.fillStyle = 'red'
      ctx.fillRect(50, 50, 100, 50)
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-15-11-05.png)

## 5. 💻 demo2

```html
<!-- 2.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 500, 200, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      // 原始矩形
      ctx.fillStyle = 'blue'
      ctx.fillRect(100, 100, 100, 50)
      // 从 x 为 100，y 为 100 的位置开始
      // 画一个横向长度为 100 纵向长度为 50 的矩形

      ctx.transform(2, 0, 0, 0.5, 0, 0)
      // 表示横向放大 2 倍，纵向缩小 0.5 倍。

      ctx.fillStyle = 'red'
      ctx.fillRect(100, 100, 100, 50)
      // 从 x 为 2 * 100，y 为 0.5 * 100 的位置开始
      // 画一个横向长度为 2 * 100 纵向长度为 0.5 * 50 的矩形
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-15-11-15.png)

## 6. 💻 demo3

```html
<!-- 3.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 500, 200, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.globalAlpha = 0.8

      ctx.fillStyle = 'blue'
      ctx.fillRect(100, 100, 100, 50)

      ctx.transform(1, 0, Math.tan((30 * Math.PI) / 180), 1, 0, 0)
      // 实现倾斜效果

      ctx.fillStyle = 'red'
      ctx.fillRect(100, 100, 100, 50)
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-15-11-25.png)

## 7. 💻 demo4

```html
<!-- 4.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 500, 200, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.globalAlpha = 0.8
      ctx.lineWidth = 10

      ctx.beginPath()
      ctx.strokeStyle = 'blue'
      ctx.moveTo(0, 0)
      ctx.lineTo(200, 0)
      ctx.stroke()

      ctx.transform(
        Math.cos((45 * Math.PI) / 180), // a
        Math.sin((45 * Math.PI) / 180), // b
        -Math.sin((45 * Math.PI) / 180), // c
        Math.cos((45 * Math.PI) / 180), // d
        0, // e
        0 // f
      )
      // 实现旋转效果 旋转角度 45°

      ctx.beginPath()
      ctx.strokeStyle = 'red'
      ctx.moveTo(0, 0)
      ctx.lineTo(200, 0)
      ctx.stroke()

      ctx.transform(
        Math.cos((45 * Math.PI) / 180), // a
        Math.sin((45 * Math.PI) / 180), // b
        -Math.sin((45 * Math.PI) / 180), // c
        Math.cos((45 * Math.PI) / 180), // d
        0, // e
        0 // f
      )
      // 实现旋转效果 旋转角度 45°
      // 每次变化都是基于之前的效果累加
      // 这次是第二次旋转 45°，相当于一共旋转了 90°。

      ctx.beginPath()
      ctx.strokeStyle = 'orange'
      ctx.moveTo(0, 0)
      ctx.lineTo(200, 0)
      ctx.stroke()
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-15-11-36.png)


# [README.md](./0048.%20使用%20ctx.translate%20移动画布/README.md)<!-- !======> SEPERATOR <====== -->
# [0048. 使用 ctx.translate 移动画布](https://github.com/Tdahuyou/canvas/tree/main/0048.%20%E4%BD%BF%E7%94%A8%20ctx.translate%20%E7%A7%BB%E5%8A%A8%E7%94%BB%E5%B8%83)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
- [3. 📒 notes](#3--notes)
- [4. 💻 demo1](#4--demo1)
<!-- endregion:toc -->

## 1. 📝 Summary

ctx.translate 用于移动画布和其原点到一个新的位置。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate - MDN - CanvasRenderingContext2D：translate() 方法

## 3. 📒 notes

ctx.translate 用于移动画布和其原点到一个新的位置。

**注意：**
1. 这玩意儿移动的是整个坐标系，而非指定的某个图像。
2. 这种变换是对后续的所有画布绘制操作起作用的，而不会影响已经绘制到画布上的内容。

![](md-imgs/2024-10-04-15-12-33.png)

## 4. 💻 demo1

```html
<!-- 1.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./drawGrid.js"></script>
    <script>
      // ctx.translate 用于移动画布和其原点到一个新的位置。

      // 注意：
      // 1. 这玩意儿移动的是整个坐标系，而非指定的某个图像。
      // 2. 这种变换是对后续的所有画布绘制操作起作用的，而不会影响已经绘制到画布上的内容。
      const canvas = document.createElement('canvas')
      drawGrid(canvas, 300, 300, 50)
      document.body.append(canvas)
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.globalAlpha = 0.5

      // 原始绘制
      ctx.fillStyle = 'red'
      ctx.fillRect(0, 0, 100, 100)
      // 在 (0, 0) 处绘制一个红色矩形，矩形尺寸为 100x100。

      ctx.translate(150, 150)
      // 移动坐标原点到 (150, 150)
      // 这一操作，仅会对后续绘制的图像起作用，而不会影响已经绘制到画布上的内容。

      // 在新的坐标原点绘制蓝色矩形
      ctx.fillStyle = 'blue'
      ctx.fillRect(0, 0, 100, 100)
      // 在 (0, 0) 处绘制一个蓝色矩形，矩形尺寸为 100x100。

      // 两次绘制矩形的位置都是 (0, 0)，但是由于坐标原点的不同，导致了两次绘制的位置不同。
    </script>
  </body>
</html>
```

![](md-imgs/2024-10-04-15-13-02.png)


# [README.md](./0049.%20模拟烟花效果/README.md)<!-- !======> SEPERATOR <====== -->
# [0049. 模拟烟花效果](https://github.com/Tdahuyou/canvas/tree/main/0049.%20%E6%A8%A1%E6%8B%9F%E7%83%9F%E8%8A%B1%E6%95%88%E6%9E%9C)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 烟花 - 最终效果](#2--烟花---最终效果)
- [3. 📒 烟花 - 上升过程分析](#3--烟花---上升过程分析)
- [4. 💻 demo - 实现上升过程](#4--demo---实现上升过程)
- [5. 📒 烟花 - 爆炸过程分析](#5--烟花---爆炸过程分析)
- [6. 💻 demo - 实现爆炸过程](#6--demo---实现爆炸过程)
<!-- endregion:toc -->

## 1. 📝 Summary

理解文档中提到的烟花效果的实现原理。
本节仅仅是实现一个非常简易版本的烟花的可视化效果，最终要实现的烟花效果，重点有两个：
- 烟花的上升过程。
- 烟花的爆炸过程。

## 2. 📒 烟花 - 最终效果

![](md-imgs/0049-烟花爆炸过程.gif)

## 3. 📒 烟花 - 上升过程分析

- 把烟花模拟成一个黄色的圆。
- 每间隔 50 帧，放一个烟花。
- 页面上烟花数量的上限为 5 个。
  - 第 n 个烟花出现，意味着第 n - 5 爆炸。
  - 爆炸后的烟花意味着消失。
- 烟花上升的速度是一个随机值。
- 烟花上升的过程中有尾迹效果，类似一个水滴 💧 形状。
  - 大圆在上，小尖尖在下。
  - 从大圆到小尖尖，亮度不断降低。

![](md-imgs/2024-10-04-15-33-21.png)

- 烟花上升过程中，透明度不断地降低。

## 4. 💻 demo - 实现上升过程

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

```css
/* index.css */
html,
body {
  margin: 0;
  padding: 0;
}

canvas {
  background-color: black;
}
```

```js
// index.js
const canvas = document.createElement('canvas')
document.body.append(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

ctx.translate(0, canvas.height)

ctx.scale(1, -1)
// y 轴反转
// y 值变大的过程，就是上升的过程。

// Firework 用于创建和管理烟花
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
```

![](md-imgs/0049-烟花上升过程.gif)

## 5. 📒 烟花 - 爆炸过程分析

**烟花的爆炸原理分析：**

爆炸后的烟花，本质上就是绘制若干个小球，小球的数量由 `this.particleCount` 变量来表示。所有爆炸的粒子实例存储在 `this.particles` 数组中，每次更新烟花 `Firework.update()` 的时候需要去绘制俩玩意儿：
1. 还没爆炸的烟花 `Firework.activeFireworks`
2. 已经爆炸的烟花 `Firework.explodeFireworks`

还没爆炸的烟花，绘制逻辑就是前面提到的烟花上升逻辑，保持不变即可。

爆炸后的烟花，需要将烟花实例存储到 `Firework.explodeFireworks` 中，然后遍历所有已经爆炸的烟花实例，创建爆炸粒子、更新爆炸粒子的状态。

## 6. 💻 demo - 实现爆炸过程

html、css 保持不变，主要扩展 index.js 文件。

```js
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
    this.particleCount = 100 // 爆炸的粒子数量
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
```

上述的高亮区域是主要修改的内容，index.html、index.css 中的内容是没有发生变化的。

主要加了一个粒子类，用于创建爆炸后的烟花的粒子实例。

![](md-imgs/0049-烟花爆炸过程.gif)


# [README.md](./0050.%20实现动态时钟效果/README.md)<!-- !======> SEPERATOR <====== -->
# [0050. 实现动态时钟效果](https://github.com/Tdahuyou/canvas/tree/main/0050.%20%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E6%97%B6%E9%92%9F%E6%95%88%E6%9E%9C)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 动态时钟的最终实现效果](#2--动态时钟的最终实现效果)
- [3. 💻 demo - 动态始终效果实现源码](#3--demo---动态始终效果实现源码)
<!-- endregion:toc -->

## 1. 📝 Summary

UI 还有很大的优化空间，重点在于理解时钟效果的实现逻辑。

## 2. 📒 动态时钟的最终实现效果

![](md-imgs/0050-实现动态时钟效果.gif)

## 3. 💻 demo - 动态始终效果实现源码

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

```css
/* index.css */
/* 页面垂直居中、水平居中显示 */
canvas {
  /* border: 2px solid #ccc; */
  /* background-color: black; */
  position: absolute;
  left: 50%;
  top: 50%;
  /* 画布大小是 400px * 400px */
  margin-left: -200px;
  margin-top: -200px;
}
```

```js
// index.js
// #region 绘制时钟背景
const clock_bg_canvas = document.createElement('canvas')
document.body.append(clock_bg_canvas)
clock_bg_canvas.width = 400
clock_bg_canvas.height = 400

let ctx = clock_bg_canvas.getContext('2d')

// 移动原点置容器中心
ctx.translate(200, 200)

// #region 绘制时钟的圆盘轮廓
// ctx.save()
// ctx.beginPath()
// ctx.arc(0, 0, 200, 0, Math.PI * 2)
// ctx.stroke()
// ctx.restore()
// #endregion 绘制时钟的圆盘轮廓

// #region 绘制一个黑底的圆
// ctx.arc(0, 0, 200, 0, Math.PI * 2)
// ctx.fill()
// #endregion 绘制一个黑底的圆

// #region 绘制小时刻度
ctx.strokeStyle = 'black'
ctx.lineWidth = 8
for (let i = 0; i < 12; i++) {
  ctx.beginPath()
  ctx.moveTo(0, -200)
  ctx.lineTo(0, -180)
  ctx.stroke()
  ctx.rotate((Math.PI * 2) / 12)
  // 将一圈分为 12 份，每次旋转都是基于上次的位置来旋转的。
  // 一共旋转 12 次，绘制 12 个刻度点。
}
// #endregion 绘制小时刻度

// #region 绘制分钟刻度
// 每个小时刻度之间再绘制 5 个分钟刻度，分别表示 10、20、30、40、50 分。
ctx.strokeStyle = 'gray'
ctx.lineWidth = 4
for (let i = 0; i < 60; i++) {
  if (i % 5 != 0) {
    ctx.beginPath()
    ctx.moveTo(0, -200)
    ctx.lineTo(0, -190)
    ctx.stroke()
  }
  ctx.rotate((Math.PI * 2) / 60)
}
// #endregion 绘制分钟刻度

// #region 绘制小时数字
ctx.font = '20px sans-serif'
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillStyle = 'balck'
const r = 160
const hd = (Math.PI * 2) / 12
for (let i = 0; i < 12; i++) {
  const text = i == 0 ? 12 : i
  const x = Math.sin(hd * i) * r
  const y = -Math.cos(hd * i) * r
  ctx.fillText(text, x, y)
}
// #endregion 绘制小时数字
// #endregion 绘制时钟背景

// #region 绘制动态的指针
const canvas = document.createElement('canvas')
document.body.append(canvas)
canvas.width = 400
canvas.height = 400
ctx = canvas.getContext('2d')

ctx.translate(200, 200)

start() // 时钟开始转动

function start() {
  ctx.clearRect(-200, -200, canvas.width, canvas.height)
  // 获得当前时间的时分秒，分别计算表针旋转角度
  const now = new Date()
  const hour = now.getHours() % 12
  const minute = now.getMinutes()
  const second = now.getSeconds()

  // #region 绘制时针
  ctx.save()
  ctx.rotate(
    ((hour * 3600 + minute * 60 + second) * Math.PI * 2) / (60 * 60 * 12)
  )
  ctx.beginPath()
  ctx.moveTo(-5, 10)
  ctx.lineTo(-5, -100)
  // 使用贝塞尔曲线绘制一个心形
  ctx.quadraticCurveTo(-15, -100, 0, -120)
  ctx.quadraticCurveTo(15, -100, 5, -100)
  ctx.lineTo(5, 10)
  // ctx.lineTo(5, -100)
  ctx.closePath()
  ctx.stroke()
  ctx.fill()
  ctx.restore()
  // #endregion 绘制时针

  // #region 绘制分针
  ctx.save()
  ctx.rotate(((minute * 60 + second) * Math.PI * 2) / 3600)
  ctx.lineWidth = 6
  ctx.strokeStyle = 'gray'
  ctx.beginPath()
  ctx.moveTo(0, 20)
  ctx.lineTo(0, -160)
  ctx.stroke()
  ctx.restore()
  // #endregion 绘制分针

  // #region 绘制秒针
  ctx.save()
  ctx.rotate(((Math.PI * 2) / 60) * second)
  ctx.lineWidth = 2
  ctx.strokeStyle = 'red'
  ctx.beginPath()
  ctx.moveTo(0, 30)
  ctx.lineTo(0, -190)
  ctx.stroke()
  ctx.restore()
  // #endregion 绘制秒针

  // #region 绘制圆心点
  ctx.save()
  ctx.beginPath()
  ctx.arc(0, 0, 6, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
  // #endregion 绘制圆心点

  setTimeout(start, 1000) // 每秒更新一次
}
// #endregion 绘制动态的指针
```

**脚本分为两个部分：**
1. 静态部分：绘制时钟背景，这一部分主要就是绘制时钟背景所需要的各个组件。
2. 动态部分：绘制动态的指针，这一部分主要通过 js 来控制 3 个指针的转向，每秒更新一次。

![](md-imgs/2024-10-04-15-16-31.png)

# [README.md](./0051.%20贪吃蛇小游戏/README.md)<!-- !======> SEPERATOR <====== -->
# [0051. 贪吃蛇小游戏](https://github.com/Tdahuyou/canvas/tree/main/0051.%20%E8%B4%AA%E5%90%83%E8%9B%87%E5%B0%8F%E6%B8%B8%E6%88%8F)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 📒 贪吃蛇小游戏 - 最终效果](#2--贪吃蛇小游戏---最终效果)
- [3. 📒 贪吃蛇小游戏 - 实现原理分析](#3--贪吃蛇小游戏---实现原理分析)
  - [3.1. 蛇头移动](#31-蛇头移动)
  - [3.2. 游戏结束检查](#32-游戏结束检查)
  - [3.3. 吃食物检查](#33-吃食物检查)
  - [3.4. 蛇身更新](#34-蛇身更新)
  - [3.5. 动画和速度调节](#35-动画和速度调节)
- [4. 💻 demo - 贪吃蛇小游戏 - 实现源码](#4--demo---贪吃蛇小游戏---实现源码)
<!-- endregion:toc -->

## 1. 📝 Summary

理解贪吃蛇小游戏的实现的基本原理。

## 2. 📒 贪吃蛇小游戏 - 最终效果

![](md-imgs/0051-贪吃蛇小游戏.gif)

## 3. 📒 贪吃蛇小游戏 - 实现原理分析

贪吃蛇 `Snake` 中的逻辑，是整个游戏的核心。

核心要理解以下逻辑的实现：

- 蛇的移动逻辑
    - 蛇头的移动
    - 蛇身的移动（重点）
- 蛇吃食物的逻辑
- 游戏的结束判定逻辑

### 3.1. 蛇头移动

1. **方向判断**：根据蛇当前的方向，蛇头的位置会更新。这是通过一个 `switch` 语句来实现的，它检查 `this.direction` 的值（即蛇的当前方向），然后根据方向来增减蛇头的 `x` 或 `y` 坐标值。每个方向对应一个坐标轴的变化：

- `ARROW_RIGHT`: `x` 坐标增加 `gridSize`，表示向右移动。
- `ARROW_DOWN`: `y` 坐标增加 `gridSize`，表示向下移动。
- `ARROW_LEFT`: `x` 坐标减少 `gridSize`，表示向左移动。
- `ARROW_UP`: `y` 坐标减少 `gridSize`，表示向上移动。

2. **位置更新**：更新位置后，蛇头的新位置存储在 `this.head.x` 和 `this.head.y` 中。

> 注意：「坐标的更新」和「界面的渲染」是两个步骤。
>
> 坐标位置的更新并不意味着在界面上看到蛇头的位置发生了移动。当你看到界面上蛇头的位置发生了变化，这意味着重新绘制 `draw` 了。
>
> 每次移动 `move` 的时候都是先更新坐标 `x`、`y`，做完一系列的判定之后，最后才重新绘制 `draw` 更新界面。

### 3.2. 游戏结束检查

- **出界检查** (`isOutOfBounds`): 如果蛇头的新位置超出了画布的边界（游戏区域），游戏结束。
- **自身碰撞检查** (`isCollidingWithSelf`): 如果蛇头的新位置与蛇身的任何部分重叠（通过查看网格状态 `gridState` 判断），则游戏也会结束。

### 3.3. 吃食物检查

- **食物检查** (`isEatingFood`): 如果蛇头的新位置与食物的位置相同，蛇将吃掉食物。这会导致蛇的得分增加，并且在蛇身的前端添加一个新的身体部分（即蛇变长）。

### 3.4. 蛇身更新

- **蛇身移动** (`moveBody`): 如果蛇没有吃到食物，蛇身需要更新来跟随蛇头移动。这是通过移除蛇身数组的最后一个元素（尾部），并将其位置设置为蛇头移动前的位置，然后将这个元素插入到数组的开头来实现的。这样，蛇身的每个部分都跟随前一个向前移动，从而实现整体的流畅移动。

### 3.5. 动画和速度调节

- **定时器** (`setTimeout`): 通过使用定时器，蛇的 `move` 方法会周期性地被调用，创建连续移动的效果。移动的速度随着蛇的得分增加而加快，使游戏难度逐渐增大。

```javascript
// 生成食物
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
```

```javascript
// 开始游戏
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
```

## 4. 💻 demo - 贪吃蛇小游戏 - 实现源码

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

```css
/* index.css */
canvas {
  border: 2px solid #ccc;

  /* 让两个 canvas 重合在一起 */
  position: absolute;
}
```

```javascript
// index.js
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
```

**常量**

```javascript
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
```

**画布初始化**

```javascript
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
```

**网格数据初始化**

```javascript
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
```

**绘制网格棋盘**

```javascript
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
```

**蛇和食物的基类**

```javascript
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
```

**贪吃蛇**

```javascript
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
```




# [README.md](./0052.%20canvas%20在线学习%20-%20掘金/README.md)<!-- !======> SEPERATOR <====== -->
# [0052. canvas 在线学习 - 掘金](https://github.com/Tdahuyou/canvas/tree/main/0052.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20%E6%8E%98%E9%87%91)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
<!-- endregion:toc -->

## 1. 📝 Summary

记录了掘金上 canvas 相关的链接。

## 2. 🔗 links

- https://juejin.cn/post/7116784455561248775
  - Canvas 从入门到劝朋友放弃（图解版）。

# [README.md](./0053.%20canvas%20在线学习%20-%20html5canvas%20tutorials/README.md)<!-- !======> SEPERATOR <====== -->
# [0053. canvas 在线学习 - html5canvas tutorials](https://github.com/Tdahuyou/canvas/tree/main/0053.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20html5canvas%20tutorials)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
<!-- endregion:toc -->


## 1. 📝 Summary

记录了一个 canvas 在线学习站点 - html5canvas tutorials。

> [!NOTE]
> ![](md-imgs/2024-10-20-08-21-11.png)
> 目前（24.10.20）站点突然访问不了了，提示协议不受支持。

## 2. 🔗 links

- https://www.html5canvastutorials.com/
  - html5canvas tutorials。


# [README.md](./0054.%20canvas%20在线学习%20-%20MDN%20Canvas%20tutorial/README.md)<!-- !======> SEPERATOR <====== -->
# [0054. canvas 在线学习 - MDN Canvas tutorial](https://github.com/Tdahuyou/canvas/tree/main/0054.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20MDN%20Canvas%20tutorial)


<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
<!-- endregion:toc -->

## 1. 📝 Summary

记录了 MDN 上 canvas 相关的链接。

## 2. 🔗 links

- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
  - MDN Canvas tutorial



# [README.md](./0055.%20canvas%20在线学习%20-%20HTML%20Canvas%20Deep%20Dive/README.md)<!-- !======> SEPERATOR <====== -->
# [0055. canvas 在线学习 - HTML Canvas Deep Dive](https://github.com/Tdahuyou/canvas/tree/main/0055.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20HTML%20Canvas%20Deep%20Dive)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
<!-- endregion:toc -->

## 1. 📝 Summary

记录了一个 canvas 的在线学习站点 - HTML Canvas Deep Dive。

## 2. 🔗 links

- https://joshondesign.com/p/books/canvasdeepdive/title.html
  - HTML Canvas Deep Dive
  - 介绍了 Canvas API 和 WebGL。

# [README.md](./0056.%20canvas%20在线学习%20-%20菜鸟教程/README.md)<!-- !======> SEPERATOR <====== -->
# [0056. canvas 在线学习 - 菜鸟教程](https://github.com/Tdahuyou/canvas/tree/main/0056.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B)


<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🔗 links](#2--links)
<!-- endregion:toc -->

## 1. 📝 Summary

记录了菜鸟教程上 canvas 相关的链接。

## 2. 🔗 links

- https://www.runoob.com/html/html5-canvas.html
  - HTML5 Canvas。
- https://www.runoob.com/tags/ref-canvas.html
  - HTML5 `<canvas>` 参考手册。
- https://www.runoob.com/w3cnote/html5-canvas-intro.html
   - 结尾有俩案例，一个是“太阳系”，一个是“时钟”效果。
