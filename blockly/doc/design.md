# 定制 Blockly 的最佳实践

> 参考文档：https://developers.google.com/blockly/guides/app-integration/best-practices

## Border Style (边框风格)

对于 blockly 来说边框是用于区别同类型或同种块的一个指示，即意味着我们不能因为所谓的“时尚”而选择消除边框, 否则则将导致用户无法识别出块的连接。

PS: 边框与主色不能相同，但是阴影并不是必要的

## Nesting sub-stacks (嵌套子块)

![nesting](https://developers.google.com/blockly/images/mistakes03a.png)

'C'型的 block 是一种常见的块，主要用于标志条件运行的对应的内部子块。但是它的设计风格存在两种，即

- 块内部的底部存在连接器，即凹槽
- 块内部的底部不存在连接器

对应内部存在凹槽的风格可以会导致用户认为只能嵌套一个对应形状的子块，但是对 'C'型的 block 来说通常可能存在多个子块，如果不提示用户的话，那么用户将无法清晰的理解。同样的，当只能嵌套一个子块的时候，也同样存在相应的问题。对于此种风格，我们可以参考 [Scratch](https://scratch.mit.edu/) 。

而对于另一种风格而言，则解决了上述风格的问题，但是同样存在一个问题，对于底部存在凸槽的子块来说用户可能认为该子块无法被使用 'C'型的 block 之中。

所以两种风格的问题都在用户的提示问题上。

## Variable and Function Names (变量名称和函数名称)

对于新手程序员来说，他们基本上是不关注 location_X 和 location_x 是否是不同的变量。因此，Blockly 遵循 BASIC and HTML 标准，即认为变量名称和函数名称不存在大小写的区别。

## Global Variables（全局变量）

同样是新手程序员问题。理解作用域，对于新手程序员来说是困难的。因此 Blockly 和 Scratch 使用一样的方式，使所有变量都成为全局变量。麻烦的是，在函数递归的问题中，全局变量将让变量的定义变得复杂。