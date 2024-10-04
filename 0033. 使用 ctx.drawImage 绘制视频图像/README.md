# 0033. 使用 ctx.drawImage 绘制视频图像

## 📝 notes

可以使用 ctx.drawImage 来处理视频图像，这个功能点有些 🐂 🍺，水应该蛮深的。

可以将视频数据作为 ctx.drawImage 的第一个参数传入，将会绘制视频当前播放帧的图像，并且可以使用 canvas 技术来对图像做一些额外的处理，实现一些特殊效果。

获取到视频图像数据后，结合 canvas 技术会有不少玩法。比如：
- 可以对视频图像加一个滤镜、裁剪效果。
- 由于 canvas 本身就是一张图片，你可以设置一个下载图片的钩子，想要获取某一帧图像时，执行钩子即可。
- ……

## 💻 demo1

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
