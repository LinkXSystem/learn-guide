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

## 绕任意轴三维旋转

对于一个三维空间的点$P(x,y,z)$，将其绕对应的轴旋转 $\theta$ 度，可以用以下旋转矩阵表示：

- 绕 Z 轴旋转

$$
R_{z}(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0\\\\ \sin\theta & \cos\theta &0 \\\\ 0 & 0 & 1\end{bmatrix}
$$

- 绕 X 轴旋转

$$
R_{x}(\theta) = \begin{bmatrix} 1 & 0 & 0 \\\\ 0 & \cos\theta & -\sin\theta \\\\ 0 &  \sin\theta & \cos\theta \end{bmatrix}
$$

- 绕 Y 轴旋转

$$
R_{y}(\theta) = \begin{bmatrix} \cos\theta & 0 & \sin\theta \\\\ 0 & 1 & 0 \\\\ -\sin\theta & 0 & \cos\theta \end{bmatrix}
$$

那么在此之上我们如果需要绕任意轴旋转，我们需要如何实现呢？

我们可以通过将这个旋转分解，得到如下步骤：

- 将整个坐标轴旋转，使得旋转轴 p 和 z 轴重合
- 再将点 P 绕 z 轴旋转 $\theta$ 角
- 再将整个坐标轴旋转回原位

![image](https://github.com/LinkXSystem/learn-guide/blob/master/mathematics/assets/images/3d-angle-rotation-matrix-1024x967.png)

通过上图，我们便可以得到如何通过两个角 $\phi$ 和 $\psi$来表示任意旋转轴的位置，公式如下：

$$
\begin{cases}
x = \sin\phi\cos\psi \\
y = \sin\phi\cos\psi \\
z = \cos\psi \\
\end{cases}
$$

那整个旋转便可以这样表示：

$$
R_{z}(\psi)R_{y}(\phi)R_{z}(\theta)R_{y}(-\phi)R_{z}(-\psi)
$$

等效于

$$
R_{z}(\psi)R_{y}(\phi)R_{z}(\theta)R_{y}^{T}(\phi)R_{z}^{T}(\psi)
$$

最终，通过化简我们可以的到最后的旋转矩阵：

$$
\begin{bmatrix} \cos\theta + x^2(1 - \cos\theta) & xy(1 - \cos\theta) - z\sin\theta & xz(1 - \cos\theta) + y\sin\theta \\\\ yx(1 -\cos\theta) + z\sin\theta & \cos\theta + y^2(1 - \cos\theta) & yz(1 - \cos\theta) - x\sin\theta \\\\ zx(1 - \cos\theta) + y\sin\theta &  zy(1 - \cos\theta) + x\sin\theta & \cos\theta + z^2(1 - \cos\theta) \end{bmatrix}
$$
