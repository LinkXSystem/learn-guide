# JavaScript 中的 Binary data，files

## 前言

通常来说，在浏览器端我们遇到二进制数据格式的情况，通常都是在处理文件、音频/视频处理，和 canvas 处理的时候。Javascript 中操作二进制数据都是需要通过一个二进制对象来完成，通常都是类似 Array 的形式，为啥只是类似的形式呢？解决这个问题，那便需要知道 ArrayBuffer 对象。

## ArrayBuffer 与 DataView

> [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

ArrayBuffer 是一个通用的、固定长度的原始二进制数据缓冲区，位于该缓存区中的内存空间都是连续的。ArrayBuffer 标记的是对该内存空间的引用。

需要知道的是 ArrayBuffer 是一个字节数组，即当你进行 ArrayBuffer[i] 的操作的时候，获得是内存空间中的一个字节，它可能是一个完成的数据，也可能不是。为何？在于数据类型中通常都是存在
int 、double、 float 等类型的，只是在 JavaScript 中都统一称之为 Number 类型而已。
