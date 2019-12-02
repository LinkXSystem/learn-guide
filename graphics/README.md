# THREE 简易入门教程

## 词语解析

- THREE.Geometry

  - Geometries are easier to work with than BufferGeometries as they store attributes such as vertices, faces, colors and so on directly (rather than in buffers), however they are generally slower.
  - 用于构建对于的物体形状，是所有 Geometry 的基类

- THREE.Material

  - These constants define properties common to all material types, with the exception of Texture Combine Operations which only apply to MeshBasicMaterial, MeshLambertMaterial and MeshPhongMaterial.
  - 用于控制物体的材质

- THREE.Camera

  -

- THREE.Group

  - This is almost identical to an Object3D. Its purpose is to make working with groups of objects syntactically clearer.
  - Object3D 对象的语法糖，将 ThreeJS 组合起来统一操作

- THREE.Vector3

  - Class representing a 3D vector. A 3D vector is an ordered triplet of numbers (labeled x, y, and z), which can be used to represent a number of things, such as:
    - A point in 3D space.
    - A direction and length in 3D space. In three.js the length will always be the Euclidean distance (straight-line distance) from (0, 0, 0) to (x, y, z) and the direction is also measured from (0, 0, 0) towards (x, y, z).
    - Any arbitrary ordered triplet of numbers.
  - 向量，用于描述空间中的点，可以用于测量两点之间的距离，或者组合来描绘一条线
