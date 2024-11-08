<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FREENITRO</title>
    <style>
        
{
          margin: 0;
          padding: 0;
          box-sizing: border-box;}
      html, body {
          height: 100%;
          overflow: auto;
          scroll-behavior: smooth;}
      body {
          background-color: #ffffff; /* Fallback color /
      }
      .container {
          display: flex;
          flex-direction: column; / Stacks the slides vertically /
          height: 100vh; / Full height of the viewport /
      }
      .slide {
          flex: 0 0 100vh; / Full height of viewport /
          width: 100vw; / Full width /
          position: relative; / For positioning the anchor tag /
          background-position: center center;
          background-size: cover; / Make background fill the slide /
          background-repeat: no-repeat;
      }
      .slide a {
          position: absolute; / Cover the whole slide /
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          z-index: 1; / Ensures it's above everything else */}</style>
</head>
<body>
    <div class="container">
        <div class="slide" style="background-image: url('https://i.postimg.cc/762Gm1wJ/img1.png');">
            <a href="https://example.com/1" target="_blank"></a>
        </div>
        <div class="slide" style="background-image: url('https://i.postimg.cc/k5Zw2yT2/img2.png');">
            <a href="https://example.com/2" target="_blank"></a>
        </div>
        <div class="slide" style="background-image: url('https://i.postimg.cc/kgLt8hdP/img3.png');">
            <a href="https://example.com/3" target="_blank"></a>
        </div>
        <div class="slide" style="background-image: url('https://i.postimg.cc/HLHdfQw7/img4.png');">
            <a href="https://example.com/4" target="_blank"></a>
        </div>
        <div class="slide" style="background-image: url('https://i.postimg.cc/4xG3gkZd/img5.png');">
            <a href="https://example.com/5" target="_blank"></a>
        </div>
        <div class="slide" style="background-image: url('https://i.postimg.cc/Jh2mt9wj/img6.png');">
            <a href="https://example.com/6" target="_blank"></a>
        </div>
    </div>
</body>
</html>
