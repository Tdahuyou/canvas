### [0001. 认识 canvas 标签](https://github.com/Tdahuyou/canvas/tree/main/0001.%20%E8%AE%A4%E8%AF%86%20canvas%20%E6%A0%87%E7%AD%BE) <!-- [locale](./0001.%20%E8%AE%A4%E8%AF%86%20canvas%20%E6%A0%87%E7%AD%BE/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0002. 判断浏览器是否支持 canvas](https://github.com/Tdahuyou/canvas/tree/main/0002.%20%E5%88%A4%E6%96%AD%E6%B5%8F%E8%A7%88%E5%99%A8%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81%20canvas) <!-- [locale](./0002.%20%E5%88%A4%E6%96%AD%E6%B5%8F%E8%A7%88%E5%99%A8%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81%20canvas/README.md) -->

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


<!-- !====================>分隔符<====================! -->
### [0003. 区分 canvas 的 width、height 属性和 style 中设置的 width、height 值](https://github.com/Tdahuyou/canvas/tree/main/0003.%20%E5%8C%BA%E5%88%86%20canvas%20%E7%9A%84%20width%E3%80%81height%20%E5%B1%9E%E6%80%A7%E5%92%8C%20style%20%E4%B8%AD%E8%AE%BE%E7%BD%AE%E7%9A%84%20width%E3%80%81height%20%E5%80%BC) <!-- [locale](./0003.%20%E5%8C%BA%E5%88%86%20canvas%20%E7%9A%84%20width%E3%80%81height%20%E5%B1%9E%E6%80%A7%E5%92%8C%20style%20%E4%B8%AD%E8%AE%BE%E7%BD%AE%E7%9A%84%20width%E3%80%81height%20%E5%80%BC/README.md) -->

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


<!-- !====================>分隔符<====================! -->
### [0004. 使用 ctx.clearRect 清除画布](https://github.com/Tdahuyou/canvas/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20ctx.clearRect%20%E6%B8%85%E9%99%A4%E7%94%BB%E5%B8%83) <!-- [locale](./0004.%20%E4%BD%BF%E7%94%A8%20ctx.clearRect%20%E6%B8%85%E9%99%A4%E7%94%BB%E5%B8%83/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0005. canvas 的默认尺寸 300 x 150](https://github.com/Tdahuyou/canvas/tree/main/0005.%20canvas%20%E7%9A%84%E9%BB%98%E8%AE%A4%E5%B0%BA%E5%AF%B8%20300%20x%20150) <!-- [locale](./0005.%20canvas%20%E7%9A%84%E9%BB%98%E8%AE%A4%E5%B0%BA%E5%AF%B8%20300%20x%20150/README.md) -->

- 知道 `<canvas>` 默认是 300x150 的行盒。


<!-- !====================>分隔符<====================! -->
### [0006. 使用 JSDoc 来标注 canvas 变量类型](https://github.com/Tdahuyou/canvas/tree/main/0006.%20%E4%BD%BF%E7%94%A8%20JSDoc%20%E6%9D%A5%E6%A0%87%E6%B3%A8%20canvas%20%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B) <!-- [locale](./0006.%20%E4%BD%BF%E7%94%A8%20JSDoc%20%E6%9D%A5%E6%A0%87%E6%B3%A8%20canvas%20%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B/README.md) -->

本节介绍的内容是 —— 如何在 IDE 中获取更友好地 canvas 相关的 API 智能提示问题。
- 【示例 2】如果想要获取到 IDE 的智能提示，有些教程中的做法是推荐你使用 createElement 的方式来创建 canvas，这么做的目的是为了获取到更有好的智能提示。
- 【示例 1】而如果你页面上如果已经有了 canvas 标签，然后你通过查询的方式找到这个标签，此时默认是没有智能提示的，这个问题可以通过 JSDoc 标注的方式来解决。


<!-- !====================>分隔符<====================! -->
### [0007. 使用 ctx.save 和 ctx.restore 保存和恢复画布状态](https://github.com/Tdahuyou/canvas/tree/main/0007.%20%E4%BD%BF%E7%94%A8%20ctx.save%20%E5%92%8C%20ctx.restore%20%E4%BF%9D%E5%AD%98%E5%92%8C%E6%81%A2%E5%A4%8D%E7%94%BB%E5%B8%83%E7%8A%B6%E6%80%81) <!-- [locale](./0007.%20%E4%BD%BF%E7%94%A8%20ctx.save%20%E5%92%8C%20ctx.restore%20%E4%BF%9D%E5%AD%98%E5%92%8C%E6%81%A2%E5%A4%8D%E7%94%BB%E5%B8%83%E7%8A%B6%E6%80%81/README.md) -->

画笔状态的存储和恢复还是比较常见的操作，需要掌握一些常见的写法。


<!-- !====================>分隔符<====================! -->
### [0008. 使用 ctx.lineCap 设置线条端点样式](https://github.com/Tdahuyou/canvas/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20ctx.lineCap%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E7%AB%AF%E7%82%B9%E6%A0%B7%E5%BC%8F) <!-- [locale](./0008.%20%E4%BD%BF%E7%94%A8%20ctx.lineCap%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E7%AB%AF%E7%82%B9%E6%A0%B7%E5%BC%8F/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0009. 使用 ctx.lineDashOffset 设置虚线的偏移量](https://github.com/Tdahuyou/canvas/tree/main/0009.%20%E4%BD%BF%E7%94%A8%20ctx.lineDashOffset%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF%E7%9A%84%E5%81%8F%E7%A7%BB%E9%87%8F) <!-- [locale](./0009.%20%E4%BD%BF%E7%94%A8%20ctx.lineDashOffset%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF%E7%9A%84%E5%81%8F%E7%A7%BB%E9%87%8F/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0010. 使用 ctx.setLineDash 设置虚线](https://github.com/Tdahuyou/canvas/tree/main/0010.%20%E4%BD%BF%E7%94%A8%20ctx.setLineDash%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF) <!-- [locale](./0010.%20%E4%BD%BF%E7%94%A8%20ctx.setLineDash%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0011. 使用 ctx.miterLimit 约束两线相交处的最大倾斜长度](https://github.com/Tdahuyou/canvas/tree/main/0011.%20%E4%BD%BF%E7%94%A8%20ctx.miterLimit%20%E7%BA%A6%E6%9D%9F%E4%B8%A4%E7%BA%BF%E7%9B%B8%E4%BA%A4%E5%A4%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BE%E6%96%9C%E9%95%BF%E5%BA%A6) <!-- [locale](./0011.%20%E4%BD%BF%E7%94%A8%20ctx.miterLimit%20%E7%BA%A6%E6%9D%9F%E4%B8%A4%E7%BA%BF%E7%9B%B8%E4%BA%A4%E5%A4%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BE%E6%96%9C%E9%95%BF%E5%BA%A6/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0012. 使用 ctx.lineTo 来绘制线条](https://github.com/Tdahuyou/canvas/tree/main/0012.%20%E4%BD%BF%E7%94%A8%20ctx.lineTo%20%E6%9D%A5%E7%BB%98%E5%88%B6%E7%BA%BF%E6%9D%A1) <!-- [locale](./0012.%20%E4%BD%BF%E7%94%A8%20ctx.lineTo%20%E6%9D%A5%E7%BB%98%E5%88%B6%E7%BA%BF%E6%9D%A1/README.md) -->

- 学会使用 `ctx.lineTo` 来绘制线条。


<!-- !====================>分隔符<====================! -->
### [0013. 使用 ctx.lineJoin 设置线条连接处的样式](https://github.com/Tdahuyou/canvas/tree/main/0013.%20%E4%BD%BF%E7%94%A8%20ctx.lineJoin%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E8%BF%9E%E6%8E%A5%E5%A4%84%E7%9A%84%E6%A0%B7%E5%BC%8F) <!-- [locale](./0013.%20%E4%BD%BF%E7%94%A8%20ctx.lineJoin%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E8%BF%9E%E6%8E%A5%E5%A4%84%E7%9A%84%E6%A0%B7%E5%BC%8F/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0014. 使用 ctx.fillText、ctx.strokeText 绘制文本](https://github.com/Tdahuyou/canvas/tree/main/0014.%20%E4%BD%BF%E7%94%A8%20ctx.fillText%E3%80%81ctx.strokeText%20%E7%BB%98%E5%88%B6%E6%96%87%E6%9C%AC) <!-- [locale](./0014.%20%E4%BD%BF%E7%94%A8%20ctx.fillText%E3%80%81ctx.strokeText%20%E7%BB%98%E5%88%B6%E6%96%87%E6%9C%AC/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0015. 使用 ctx.font 设置字体样式](https://github.com/Tdahuyou/canvas/tree/main/0015.%20%E4%BD%BF%E7%94%A8%20ctx.font%20%E8%AE%BE%E7%BD%AE%E5%AD%97%E4%BD%93%E6%A0%B7%E5%BC%8F) <!-- [locale](./0015.%20%E4%BD%BF%E7%94%A8%20ctx.font%20%E8%AE%BE%E7%BD%AE%E5%AD%97%E4%BD%93%E6%A0%B7%E5%BC%8F/README.md) -->

- 知道 `ctx.font` 属性有什么用
- 知道 `ctx.font` 属性值的书写规则是什么


<!-- !====================>分隔符<====================! -->
### [0016. 使用 ctx.textBaseline、ctx.textAlign 设置文本对齐方式](https://github.com/Tdahuyou/canvas/tree/main/0016.%20%E4%BD%BF%E7%94%A8%20ctx.textBaseline%E3%80%81ctx.textAlign%20%E8%AE%BE%E7%BD%AE%E6%96%87%E6%9C%AC%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F) <!-- [locale](./0016.%20%E4%BD%BF%E7%94%A8%20ctx.textBaseline%E3%80%81ctx.textAlign%20%E8%AE%BE%E7%BD%AE%E6%96%87%E6%9C%AC%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F/README.md) -->

- ctx.textBaseline 设置文本的 **垂直** 对齐方式
- ctx.textAlign 设置文本的 **水平** 对齐方式


<!-- !====================>分隔符<====================! -->
### [0017. 绘制网格](https://github.com/Tdahuyou/canvas/tree/main/0017.%20%E7%BB%98%E5%88%B6%E7%BD%91%E6%A0%BC) <!-- [locale](./0017.%20%E7%BB%98%E5%88%B6%E7%BD%91%E6%A0%BC/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0018. 使用 ctx.fillRect 绘制矩形](https://github.com/Tdahuyou/canvas/tree/main/0018.%20%E4%BD%BF%E7%94%A8%20ctx.fillRect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2) <!-- [locale](./0018.%20%E4%BD%BF%E7%94%A8%20ctx.fillRect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2/README.md) -->

- 学会使用 `ctx.fillRect()` 来绘制一个填充矩形。


<!-- !====================>分隔符<====================! -->
### [0019. 使用 ctx.strokeRect 绘制矩形](https://github.com/Tdahuyou/canvas/tree/main/0019.%20%E4%BD%BF%E7%94%A8%20ctx.strokeRect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2) <!-- [locale](./0019.%20%E4%BD%BF%E7%94%A8%20ctx.strokeRect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0020. 使用 ctx.roundRect 绘制圆角矩形](https://github.com/Tdahuyou/canvas/tree/main/0020.%20%E4%BD%BF%E7%94%A8%20ctx.roundRect%20%E7%BB%98%E5%88%B6%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2) <!-- [locale](./0020.%20%E4%BD%BF%E7%94%A8%20ctx.roundRect%20%E7%BB%98%E5%88%B6%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2/README.md) -->

- 学会使用 `ctx.roundRect()` 来绘制一个圆角矩形路径。


<!-- !====================>分隔符<====================! -->
### [0021. 使用 ctx.rect 绘制矩形](https://github.com/Tdahuyou/canvas/tree/main/0021.%20%E4%BD%BF%E7%94%A8%20ctx.rect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2) <!-- [locale](./0021.%20%E4%BD%BF%E7%94%A8%20ctx.rect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2/README.md) -->

- 学会使用 `ctx.rect()` 来绘制一个填充路径。


<!-- !====================>分隔符<====================! -->
### [0022. 使用 ctx.closePath 闭合路径](https://github.com/Tdahuyou/canvas/tree/main/0022.%20%E4%BD%BF%E7%94%A8%20ctx.closePath%20%E9%97%AD%E5%90%88%E8%B7%AF%E5%BE%84) <!-- [locale](./0022.%20%E4%BD%BF%E7%94%A8%20ctx.closePath%20%E9%97%AD%E5%90%88%E8%B7%AF%E5%BE%84/README.md) -->

了解手动闭合和自动闭合之间的区别。通过示例，了解路径如果没有设置自动闭合的话，可能会导致什么问题。


<!-- !====================>分隔符<====================! -->
### [0023. 使用 ctx.beginPath 方法对路径进行分组](https://github.com/Tdahuyou/canvas/tree/main/0023.%20%E4%BD%BF%E7%94%A8%20ctx.beginPath%20%E6%96%B9%E6%B3%95%E5%AF%B9%E8%B7%AF%E5%BE%84%E8%BF%9B%E8%A1%8C%E5%88%86%E7%BB%84) <!-- [locale](./0023.%20%E4%BD%BF%E7%94%A8%20ctx.beginPath%20%E6%96%B9%E6%B3%95%E5%AF%B9%E8%B7%AF%E5%BE%84%E8%BF%9B%E8%A1%8C%E5%88%86%E7%BB%84/README.md) -->

- 学会使用 `ctx.beginPath()` 对路径进行分组，并了解如果不使用分组的话，会存在什么潜在问题。


<!-- !====================>分隔符<====================! -->
### [0024. 使用 ctx.arc 绘制圆弧](https://github.com/Tdahuyou/canvas/tree/main/0024.%20%E4%BD%BF%E7%94%A8%20ctx.arc%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BC%A7) <!-- [locale](./0024.%20%E4%BD%BF%E7%94%A8%20ctx.arc%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BC%A7/README.md) -->

- 学会使用 `ctx.arc` 绘制圆弧，可以根据文档中提供的图来理解绘制原理。
- 知道角度和弧度之间的区别，清楚它们俩之间的转换关系。


<!-- !====================>分隔符<====================! -->
### [0025. 使用 ctx.quadraticCurveTo、ctx.bezierCurveTo 绘制贝塞尔曲线](https://github.com/Tdahuyou/canvas/tree/main/0025.%20%E4%BD%BF%E7%94%A8%20ctx.quadraticCurveTo%E3%80%81ctx.bezierCurveTo%20%E7%BB%98%E5%88%B6%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF) <!-- [locale](./0025.%20%E4%BD%BF%E7%94%A8%20ctx.quadraticCurveTo%E3%80%81ctx.bezierCurveTo%20%E7%BB%98%E5%88%B6%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF/README.md) -->

- 重点在于理解贝塞尔曲线的绘制原理。理解原理后，自然就理解这俩 API 应该如何使用了。


<!-- !====================>分隔符<====================! -->
### [0026. 使用 ctx.ellipse 绘制椭圆](https://github.com/Tdahuyou/canvas/tree/main/0026.%20%E4%BD%BF%E7%94%A8%20ctx.ellipse%20%E7%BB%98%E5%88%B6%E6%A4%AD%E5%9C%86) <!-- [locale](./0026.%20%E4%BD%BF%E7%94%A8%20ctx.ellipse%20%E7%BB%98%E5%88%B6%E6%A4%AD%E5%9C%86/README.md) -->

- 学会使用 ctx.ellipse 绘制椭圆，它和绘制圆弧是很类似的。
可以对比着圆弧【0024】的绘制原理来理解椭圆的绘制。


<!-- !====================>分隔符<====================! -->
### [0027. 使用 ctx.arcTo 绘制圆弧](https://github.com/Tdahuyou/canvas/tree/main/0027.%20%E4%BD%BF%E7%94%A8%20ctx.arcTo%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BC%A7) <!-- [locale](./0027.%20%E4%BD%BF%E7%94%A8%20ctx.arcTo%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BC%A7/README.md) -->

- 学会使用 `ctx.arcTo` 绘制圆弧。
**需要注意：**传入的参数并不决定绘制的线条的起点 or 终点，而仅仅是起到决定圆弧弧度的作用。
`ctx.arcTo` 绘制圆弧比较奇怪，你只需要通过控制点描述出一个角就行，它这玩意儿会根据你给定的角去绘制弧，最终绘制出来的弧的起点和终点，并不一定是从你的控制点开始的。


<!-- !====================>分隔符<====================! -->
### [0028. 矩形边框旋转动画](https://github.com/Tdahuyou/canvas/tree/main/0028.%20%E7%9F%A9%E5%BD%A2%E8%BE%B9%E6%A1%86%E6%97%8B%E8%BD%AC%E5%8A%A8%E7%94%BB) <!-- [locale](./0028.%20%E7%9F%A9%E5%BD%A2%E8%BE%B9%E6%A1%86%E6%97%8B%E8%BD%AC%E5%8A%A8%E7%94%BB/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0029. 线条穿梭动画](https://github.com/Tdahuyou/canvas/tree/main/0029.%20%E7%BA%BF%E6%9D%A1%E7%A9%BF%E6%A2%AD%E5%8A%A8%E7%94%BB) <!-- [locale](./0029.%20%E7%BA%BF%E6%9D%A1%E7%A9%BF%E6%A2%AD%E5%8A%A8%E7%94%BB/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0030. 模拟进度条动画效果](https://github.com/Tdahuyou/canvas/tree/main/0030.%20%E6%A8%A1%E6%8B%9F%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C) <!-- [locale](./0030.%20%E6%A8%A1%E6%8B%9F%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C/README.md) -->

- 学会使用 `lineDashOffset` 来设置线条的动画效果。


<!-- !====================>分隔符<====================! -->
### [0031. 使用 ctx.clip 实现图像裁剪](https://github.com/Tdahuyou/canvas/tree/main/0031.%20%E4%BD%BF%E7%94%A8%20ctx.clip%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E8%A3%81%E5%89%AA) <!-- [locale](./0031.%20%E4%BD%BF%E7%94%A8%20ctx.clip%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E8%A3%81%E5%89%AA/README.md) -->

ctx.clip 的基本使用是比较简单的，但是填充规则不太好理解，并且暂时也还不清楚填充规则有何实际的应用场景……


<!-- !====================>分隔符<====================! -->
### [0032. 使用 ctx.createPattern 创建填充图案](https://github.com/Tdahuyou/canvas/tree/main/0032.%20%E4%BD%BF%E7%94%A8%20ctx.createPattern%20%E5%88%9B%E5%BB%BA%E5%A1%AB%E5%85%85%E5%9B%BE%E6%A1%88) <!-- [locale](./0032.%20%E4%BD%BF%E7%94%A8%20ctx.createPattern%20%E5%88%9B%E5%BB%BA%E5%A1%AB%E5%85%85%E5%9B%BE%E6%A1%88/README.md) -->

- 理解 ctx.createPattern 的填充机制。
需要注意 **填充的图案是禁止的，并不会随着我们绘制的图案而移动。**


<!-- !====================>分隔符<====================! -->
### [0033. 使用 ctx.drawImage 绘制视频图像](https://github.com/Tdahuyou/canvas/tree/main/0033.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E7%BB%98%E5%88%B6%E8%A7%86%E9%A2%91%E5%9B%BE%E5%83%8F) <!-- [locale](./0033.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E7%BB%98%E5%88%B6%E8%A7%86%E9%A2%91%E5%9B%BE%E5%83%8F/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0034. 使用 ctx.drawImage 实现人物奔跑动画效果](https://github.com/Tdahuyou/canvas/tree/main/0034.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E5%AE%9E%E7%8E%B0%E4%BA%BA%E7%89%A9%E5%A5%94%E8%B7%91%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C) <!-- [locale](./0034.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E5%AE%9E%E7%8E%B0%E4%BA%BA%E7%89%A9%E5%A5%94%E8%B7%91%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C/README.md) -->

- 能够理解任务的运动原理即可，本质上使用的是 `ctx.drawImage` 的“截图”功能。


<!-- !====================>分隔符<====================! -->
### [0035. 使用 ctx.drawImage 引入图像](https://github.com/Tdahuyou/canvas/tree/main/0035.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E5%BC%95%E5%85%A5%E5%9B%BE%E5%83%8F) <!-- [locale](./0035.%20%E4%BD%BF%E7%94%A8%20ctx.drawImage%20%E5%BC%95%E5%85%A5%E5%9B%BE%E5%83%8F/README.md) -->

一共有 3 种传参方式：
1. `drawImage(image, dx, dy)`
2. `drawImage(image, dx, dy, dWidth, dHeight)`
3. `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`
最后一种能用来模拟截图效果。


<!-- !====================>分隔符<====================! -->
### [0036. 使用 ctx.getImageData、ctx.putImageData 实现图像的像素处理](https://github.com/Tdahuyou/canvas/tree/main/0036.%20%E4%BD%BF%E7%94%A8%20ctx.getImageData%E3%80%81ctx.putImageData%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E7%9A%84%E5%83%8F%E7%B4%A0%E5%A4%84%E7%90%86) <!-- [locale](./0036.%20%E4%BD%BF%E7%94%A8%20ctx.getImageData%E3%80%81ctx.putImageData%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E7%9A%84%E5%83%8F%E7%B4%A0%E5%A4%84%E7%90%86/README.md) -->

先对 `ctx.getImageData`、`ctx.putImageData` 的使用有个基本的了解即可。想要玩 6️⃣ 它们，还需要去学习图像颜色处理的更多知识。
文档中提到的示例，处理逻辑都是：
1. 先读图片数据 `ctx.getImageData`
2. 再对图片数据进行修改
3. 最后将修改后的数据写入图片 `ctx.putImageData`


<!-- !====================>分隔符<====================! -->
### [0037. 使用 ctx.globalCompositeOperation 处理图像合成](https://github.com/Tdahuyou/canvas/tree/main/0037.%20%E4%BD%BF%E7%94%A8%20ctx.globalCompositeOperation%20%E5%A4%84%E7%90%86%E5%9B%BE%E5%83%8F%E5%90%88%E6%88%90) <!-- [locale](./0037.%20%E4%BD%BF%E7%94%A8%20ctx.globalCompositeOperation%20%E5%A4%84%E7%90%86%E5%9B%BE%E5%83%8F%E5%90%88%E6%88%90/README.md) -->

理解单词 source（源）和目标 destination（目标）的含义，有助于对 `ctx.globalCompositeOperation` 的相关属性值（`source-over`、`destination-in`……）的理解。
至于合成颜色，比如更亮 lighter、更暗 darken、颜色盘 hue 等等和颜色相关的，可以先跳过，因为还看不懂它的颜色具体是如何计算出来的，只要对最终呈现的效果有个大致的概念即可（比如你想要让合成区域亮一些，知道用 `lighter` 这个值来尝试下就行，至于如何微调就先不用去想了）。


<!-- !====================>分隔符<====================! -->
### [0038. 使用 ctx.globalCompositeOperation 实现刮刮乐效果](https://github.com/Tdahuyou/canvas/tree/main/0038.%20%E4%BD%BF%E7%94%A8%20ctx.globalCompositeOperation%20%E5%AE%9E%E7%8E%B0%E5%88%AE%E5%88%AE%E4%B9%90%E6%95%88%E6%9E%9C) <!-- [locale](./0038.%20%E4%BD%BF%E7%94%A8%20ctx.globalCompositeOperation%20%E5%AE%9E%E7%8E%B0%E5%88%AE%E5%88%AE%E4%B9%90%E6%95%88%E6%9E%9C/README.md) -->

看懂实现原理即可。
这个效果挺好玩的，不过想要监听结果如何出现，不太容易。
**最终效果展示：**
![](md-imgs/使用%20ctx.globalCompositeOperation%20实现刮刮乐效果.gif)


<!-- !====================>分隔符<====================! -->
### [0039. 下载、使用 canvas 图像](https://github.com/Tdahuyou/canvas/tree/main/0039.%20%E4%B8%8B%E8%BD%BD%E3%80%81%E4%BD%BF%E7%94%A8%20canvas%20%E5%9B%BE%E5%83%8F) <!-- [locale](./0039.%20%E4%B8%8B%E8%BD%BD%E3%80%81%E4%BD%BF%E7%94%A8%20canvas%20%E5%9B%BE%E5%83%8F/README.md) -->

canvas 本身也是图像，可以被下载，可以被引用。
通过一个示例，加深对 canvas 的理解，你可以将其就看做是一个白色的图片，然后通过 canvas 提供的一些 API 在这个白色的图片上绘图，绘图完毕后你可以下载这张图片，也可以引用这张图进行二次创作。


<!-- !====================>分隔符<====================! -->
### [0040. 使用 ctx.createConicGradient 实现锥形渐变效果](https://github.com/Tdahuyou/canvas/tree/main/0040.%20%E4%BD%BF%E7%94%A8%20ctx.createConicGradient%20%E5%AE%9E%E7%8E%B0%E9%94%A5%E5%BD%A2%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C) <!-- [locale](./0040.%20%E4%BD%BF%E7%94%A8%20ctx.createConicGradient%20%E5%AE%9E%E7%8E%B0%E9%94%A5%E5%BD%A2%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C/README.md) -->

`ctx.createConicGradient(startAngle, x, y)` 用于创建一个锥形渐变。
- `startAngle` 渐变的起始角度
- `x, y` 渐变的中心点坐标


<!-- !====================>分隔符<====================! -->
### [0041. 使用 ctx.createLinearGradient 实现线性渐变效果](https://github.com/Tdahuyou/canvas/tree/main/0041.%20%E4%BD%BF%E7%94%A8%20ctx.createLinearGradient%20%E5%AE%9E%E7%8E%B0%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C) <!-- [locale](./0041.%20%E4%BD%BF%E7%94%A8%20ctx.createLinearGradient%20%E5%AE%9E%E7%8E%B0%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C/README.md) -->

- `createLinearGradient(x0, y0, x1, y1)` 它设置的仅仅是线性渐变的区域。


<!-- !====================>分隔符<====================! -->
### [0042. 使用 ctx.createRadialGradient 实现径向渐变效果](https://github.com/Tdahuyou/canvas/tree/main/0042.%20%E4%BD%BF%E7%94%A8%20ctx.createRadialGradient%20%E5%AE%9E%E7%8E%B0%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C) <!-- [locale](./0042.%20%E4%BD%BF%E7%94%A8%20ctx.createRadialGradient%20%E5%AE%9E%E7%8E%B0%E5%BE%84%E5%90%91%E6%B8%90%E5%8F%98%E6%95%88%E6%9E%9C/README.md) -->

ctx.createRadialGradient 用于创建径向渐变（或称为放射状渐变）。
`createRadialGradient(x0, y0, r0, x1, y1, r1)`
- `x0, y0, r0` 圆1
- `x1, y1, r1` 圆2
从圆 1 的边缘开始渐变到圆 2 的边缘。


<!-- !====================>分隔符<====================! -->
### [0043. 给图像添加阴影](https://github.com/Tdahuyou/canvas/tree/main/0043.%20%E7%BB%99%E5%9B%BE%E5%83%8F%E6%B7%BB%E5%8A%A0%E9%98%B4%E5%BD%B1) <!-- [locale](./0043.%20%E7%BB%99%E5%9B%BE%E5%83%8F%E6%B7%BB%E5%8A%A0%E9%98%B4%E5%BD%B1/README.md) -->

跟 css 中的 box-shadow 类似，都可以用于给盒子添加阴影。在 canvas 中，可以给阴影添加颜色ctx.shadowColor、模糊半径shadowBlur、偏移shadowOffsetX、shadowOffsetY。


<!-- !====================>分隔符<====================! -->
### [0044. 使用 ctx.filter 实现滤镜效果](https://github.com/Tdahuyou/canvas/tree/main/0044.%20%E4%BD%BF%E7%94%A8%20ctx.filter%20%E5%AE%9E%E7%8E%B0%E6%BB%A4%E9%95%9C%E6%95%88%E6%9E%9C) <!-- [locale](./0044.%20%E4%BD%BF%E7%94%A8%20ctx.filter%20%E5%AE%9E%E7%8E%B0%E6%BB%A4%E9%95%9C%E6%95%88%E6%9E%9C/README.md) -->

文档对 ctx.filter 实现滤镜效果做了个简述，快速过了一遍和滤镜相关的部分内容。
陌生的单词有些多…… 需要理解这些单词的含义。


<!-- !====================>分隔符<====================! -->
### [0045. 使用 ctx.rotate 实现图像旋转](https://github.com/Tdahuyou/canvas/tree/main/0045.%20%E4%BD%BF%E7%94%A8%20ctx.rotate%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E6%97%8B%E8%BD%AC) <!-- [locale](./0045.%20%E4%BD%BF%E7%94%A8%20ctx.rotate%20%E5%AE%9E%E7%8E%B0%E5%9B%BE%E5%83%8F%E6%97%8B%E8%BD%AC/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0046. 使用 ctx.scale 缩放绘制的图像](https://github.com/Tdahuyou/canvas/tree/main/0046.%20%E4%BD%BF%E7%94%A8%20ctx.scale%20%E7%BC%A9%E6%94%BE%E7%BB%98%E5%88%B6%E7%9A%84%E5%9B%BE%E5%83%8F) <!-- [locale](./0046.%20%E4%BD%BF%E7%94%A8%20ctx.scale%20%E7%BC%A9%E6%94%BE%E7%BB%98%E5%88%B6%E7%9A%84%E5%9B%BE%E5%83%8F/README.md) -->

ctx.scale 用于在画布上缩放绘制的图像。通过传入负数，还能实现坐标的翻转。


<!-- !====================>分隔符<====================! -->
### [0047. 使用 ctx.transform 来转换图形](https://github.com/Tdahuyou/canvas/tree/main/0047.%20%E4%BD%BF%E7%94%A8%20ctx.transform%20%E6%9D%A5%E8%BD%AC%E6%8D%A2%E5%9B%BE%E5%BD%A2) <!-- [locale](./0047.%20%E4%BD%BF%E7%94%A8%20ctx.transform%20%E6%9D%A5%E8%BD%AC%E6%8D%A2%E5%9B%BE%E5%BD%A2/README.md) -->

ctx.transform 很强大，可以实现很多转换效果，难点在于计算坐标的转换规则。


<!-- !====================>分隔符<====================! -->
### [0048. 使用 ctx.translate 移动画布](https://github.com/Tdahuyou/canvas/tree/main/0048.%20%E4%BD%BF%E7%94%A8%20ctx.translate%20%E7%A7%BB%E5%8A%A8%E7%94%BB%E5%B8%83) <!-- [locale](./0048.%20%E4%BD%BF%E7%94%A8%20ctx.translate%20%E7%A7%BB%E5%8A%A8%E7%94%BB%E5%B8%83/README.md) -->

ctx.translate 用于移动画布和其原点到一个新的位置。


<!-- !====================>分隔符<====================! -->
### [0049. 模拟烟花效果](https://github.com/Tdahuyou/canvas/tree/main/0049.%20%E6%A8%A1%E6%8B%9F%E7%83%9F%E8%8A%B1%E6%95%88%E6%9E%9C) <!-- [locale](./0049.%20%E6%A8%A1%E6%8B%9F%E7%83%9F%E8%8A%B1%E6%95%88%E6%9E%9C/README.md) -->

理解文档中提到的烟花效果的实现原理。
本节仅仅是实现一个非常简易版本的烟花的可视化效果，最终要实现的烟花效果，重点有两个：
- 烟花的上升过程。
- 烟花的爆炸过程。


<!-- !====================>分隔符<====================! -->
### [0050. 实现动态时钟效果](https://github.com/Tdahuyou/canvas/tree/main/0050.%20%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E6%97%B6%E9%92%9F%E6%95%88%E6%9E%9C) <!-- [locale](./0050.%20%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E6%97%B6%E9%92%9F%E6%95%88%E6%9E%9C/README.md) -->

UI 还有很大的优化空间，重点在于理解时钟效果的实现逻辑。


<!-- !====================>分隔符<====================! -->
### [0051. 贪吃蛇小游戏](https://github.com/Tdahuyou/canvas/tree/main/0051.%20%E8%B4%AA%E5%90%83%E8%9B%87%E5%B0%8F%E6%B8%B8%E6%88%8F) <!-- [locale](./0051.%20%E8%B4%AA%E5%90%83%E8%9B%87%E5%B0%8F%E6%B8%B8%E6%88%8F/README.md) -->

理解贪吃蛇小游戏的实现的基本原理。


<!-- !====================>分隔符<====================! -->
### [0052. canvas 在线学习 - 掘金](https://github.com/Tdahuyou/canvas/tree/main/0052.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20%E6%8E%98%E9%87%91) <!-- [locale](./0052.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20%E6%8E%98%E9%87%91/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0053. canvas 在线学习 - html5canvas tutorials](https://github.com/Tdahuyou/canvas/tree/main/0053.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20html5canvas%20tutorials) <!-- [locale](./0053.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20html5canvas%20tutorials/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0054. canvas 在线学习 - MDN Canvas tutorial](https://github.com/Tdahuyou/canvas/tree/main/0054.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20MDN%20Canvas%20tutorial) <!-- [locale](./0054.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20MDN%20Canvas%20tutorial/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0055. canvas 在线学习 - HTML Canvas Deep Dive](https://github.com/Tdahuyou/canvas/tree/main/0055.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20HTML%20Canvas%20Deep%20Dive) <!-- [locale](./0055.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20HTML%20Canvas%20Deep%20Dive/README.md) -->



<!-- !====================>分隔符<====================! -->
### [0056. canvas 在线学习 - 菜鸟教程](https://github.com/Tdahuyou/canvas/tree/main/0056.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B) <!-- [locale](./0056.%20canvas%20%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0%20-%20%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B/README.md) -->



<!-- !====================>分隔符<====================! -->
### [9999. template](https://github.com/Tdahuyou/canvas/tree/main/9999.%20template) <!-- [locale](./9999.%20template/README.md) -->



<!-- !====================>分隔符<====================! -->
