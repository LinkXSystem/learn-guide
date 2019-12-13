# 适配器 (Adapter)

## 截取参数

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
```
