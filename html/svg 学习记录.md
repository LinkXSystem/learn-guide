> svg 标签的基本格式
- SVG 是使用 XML 来描述二维图形和绘图程序的语言。
- 可伸缩矢量, 即不失真。
```
<!--  svg 文件格式 -->
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<!-- 内嵌 svg 格式 -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  
</svg>
```

> svg 预定义的形状元素
```
<!-- 矩形 [位置： x="0" y="0", 圆角：rx="20" ry="20"， 透明：style="opacity:0.5, fill-opacity:0.5, stroke-opacity: 0.5"] -->
<rect width="300" height="100"
  style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>

<!-- 圆形 -->
<circle cx="100" cy="50" r="40" stroke="black"
  stroke-width="2" fill="red"/>

<!-- 椭圆 -->
<ellipse cx="300" cy="80" rx="100" ry="50"
  style="fill:yellow;stroke:purple;stroke-width:2"/>

<!-- 直线 -->
<line x1="0" y1="0" x2="200" y2="200"
  style="stroke:rgb(255,0,0);stroke-width:2"/>

<!-- 边形 -->
<polygon points="200,10 250,190 160,210"
  style="fill:lime;stroke:purple;stroke-width:1"/>

<!-- 曲线 -->
<polyline points="20,20 40,25 60,40 80,120 120,140 200,180"
  style="fill:none;stroke:black;stroke-width:3" />

<!-- 路径 下面的命令可用于路径数据
[
    M = moveto
    L = lineto
    H = horizontal lineto
    V = vertical lineto
    C = curveto
    S = smooth curveto
    Q = quadratic Bézier curve
    T = smooth quadratic Bézier curveto
    A = elliptical Arc
    Z = closepath
]
注意：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。 
-->
<path d="M150 0 L75 200 L225 200 Z" />

<!-- 文本 [旋转：transform="rotate(30 20,40)"] -->
<text x="0" y="15" fill="red">I love SVG</text>

<defs>
    <path id="path1" d="M75,20 A1,1 0 0,0 100,0" />
</defs>
<text x="10" y="100" style="fill:red;">
    <textPath xlink:href="#path1">I love SVG I love SVG</textPath>
</text>

<text x="10" y="20" style="fill:red;">Several lines:
    <tspan x="10" y="45">First line</tspan>
    <tspan x="10" y="70">Second line</tspan>
</text>
```





