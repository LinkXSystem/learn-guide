# GLSL 语法

## 变量

下面是 GLSL 语法的相关变量：

| 变量类别   | 变量类型                  | 描述                               |
| :--------- | :------------------------ | :--------------------------------- |
| 空         | void                      | 用于无返回值的函数或空的参数列表   |
| 标量       | float, int, bool          | 浮点型，整型，布尔型的标量数据类型 |
| 浮点型向量 | float, vec2, vec3, vec4   | 包含 1，2，3，4 个元素的浮点型向量 |
| 整数型向量 | int, ivec2, ivec3, ivec4  | 包含 1，2，3，4 个元素的整型向量   |
| 布尔型向量 | bool, bvec2, bvec3, bvec4 | 包含 1，2，3，4 个元素的布尔型向量 |
| 矩阵       | mat2, mat3, mat4          | 尺寸为 2x2，3x3，4x4 的浮点型矩阵  |
| 纹理句柄   | sampler2D, samplerCube    | 表示 2D，立方体纹理的句柄          |

## 类型转换

只有类型一致时，变量才能完成赋值或其它对应的操作

示例代码如下：

```c
float myFloat = 1.0;
bool myBool = true;

myFloat = float(myBool);
myBool = bool(myFloat);
```

## 限定符

GLSL 中支持的存储限定符见下表：

| 限定符            | 描述                                                 |
| :---------------- | :--------------------------------------------------- |
| < none: default > | 局部可读写变量，或者函数的参数                       |
| const             | 编译时常量，或只读的函数参数                         |
| attribute         | 由应用程序传输给顶点着色器的逐顶点的数据             |
| uniform           | 在图元处理过程中其值保持不变，由应用程序传输给着色器 |
| varying           | 由顶点着色器传输给片段着色器中的插值数据             |

详细解析如下：

- uniform、attribute 和 varying 限定符修饰的变量不能在初始化时被赋值，这些变量的值由 OpenGL ES 计算提供
- attribute 变量只用于顶点着色器中，用来存储顶点着色器中每个顶点的输入（per-vertex inputs）
- uniform 是 GLSL 中的一种变量类型限定符，用于存储应用程序通过 GLSL 传递给着色器的只读值。uniform 可以用来存储着色器需要的各种数据，如变换矩阵、光参数和颜色等

## 参考文章

- https://colin1994.github.io/2017/11/11/OpenGLES-Lesson04
- https://colin1994.github.io/2017/11/12/OpenGLES-Lesson05
