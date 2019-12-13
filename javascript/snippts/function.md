# 函数式

## 记忆函数

```js
const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
};
```

## partial 函数

```js
const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);
```

或者

```js
const partial = (fn, ...partials) => (...args) => fn(...args, ...partials);
```

## 延时函数

```js
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
```

## 重复函数

```js
// 如果 fn 返回 false 即终止
const times = (n, fn, context => undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < 0) {}
};
```
