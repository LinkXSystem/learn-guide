> clip 简介
- 定义一个剪裁矩形，使用条件：绝对定义元素

> 使用样式
```
.example {
    position:absolute;
    clip:rect(top, right, bottom, left);
}
```

> 使用样例
```html
<html>
    <head>
        <style type="text/css">
            .example {
                width: 200px;
                height: 300px;
                position:absolute;
                clip:rect(top, right, bottom, left);
            }
        </style>
    </head>
    <body>
        <div class="example"></div>
    </body>
</html>
```