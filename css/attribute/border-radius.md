> border-radius 简介

- 圆角属性

> 使用样式
- 原型
```css
/* 常用样式 */
border-radius: 0px 0px 0px 0px;
/* 高级样式 */
/* 参考样例：http://www.zhangxinxu.com/study/201511/demo-border-radius.html */
/* 水平半径 / 垂直半径 */
border-radius：0px 0px 0px 0px / 0px 0px 0px 0px;
```
- 拓展
```
/* 常用样式 */
border-top-left-radius:     0px;
border-top-right-radius:    0px;
border-bottom-left-radius:  0px;
border-bottom-right-radius: 0px;
/* 高级样式 */
border-top-left-radius:     0px 0px;
border-top-right-radius:    0px 0px;
border-bottom-left-radius:  0px 0px;
border-bottom-right-radius: 0px 0px;
```

> 使用样例
```html
<html>
    <head>
        <style type="text/css">
            .example {
                width: 200px;
                height: 300px;
                border-radius：300px 0px 0px 0px / 300px 0px 0px 0px;
            }
        </style>
    </head>
    <body>
        <div class="example"></div>
    </body>
</html>
```
