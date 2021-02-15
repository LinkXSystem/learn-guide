# 函数式编程

## 柯里化

## 函数合成

## 参数倒置

## 执行边界

执行边界（until）指的是函数执行到满足条件为止。

## 队列操作

## 合并操作

合并操作分为 concat 和 concatMap 两种。前者就是将多个数组合成一个，后者则是先处理一下参数，然后再将处理结果合成一个数组。

## 配对操作

配对操作分为 zip 和 zipWith 两种方法。zip 操作将两个队列的成员，一一配对，合成一个新的队列。如果两个队列不等长，较长的那个队列多出来的成员，会被忽略。zipWith操作的第一个参数是一个函数，然后会将后面的队列成员一一配对，输入该函数，返回值就组成一个新的队列。

## References

[1] 函数式编程: https://www.bookstack.cn/read/es6-3rd/docs-fp.md
[2] Haskell in ES6: Part 1: http://casualjavascript.com/?1
