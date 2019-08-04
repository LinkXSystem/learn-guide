# 旋转矩阵 数学推导

## 前言

数学推导

## 绕原点二维旋转

首先要明确旋转在二维中是绕着某一个点进行旋转，三维中是绕着某一个轴进行旋转。二维旋转中最简单的场景是绕着坐标原点进行的旋转，如下图所示

![rotation](https://img-blog.csdn.net/20170323174605746?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY3N4aWFvc2h1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

- 从图中，我们可知下式：

$$
\begin{aligned}
x = r\cos\phi \\
y = r\sin\phi \\
x' = r\cos(\theta+\phi) \\
y' = r\sin(\theta+\phi)
\end{aligned}
$$

- 通过三角函数，可知：

$$
\begin{aligned}
x' = r\cos\phi\cos\theta + r\sin\theta\cos\phi \\
y' = r\sin\theta\cos\phi + r\cos\theta\sin\phi
\end{aligned}
$$

- 代入 x 和 y 的表达式，可知：

$$
\begin{aligned}
x' = x\cos\theta - y\sin\theta \\
y' = x\sin\theta + y\cos\theta
\end{aligned}
$$

- 则转换成矩阵的形式为

$$
\begin{bmatrix} x'\\\\y'\end{bmatrix}
=
\begin{bmatrix} \cos\theta & -\sin\theta\\\\ \sin\theta & \cos\theta \end{bmatrix}
*
\begin{bmatrix} x\\\\y \end{bmatrix}
$$
