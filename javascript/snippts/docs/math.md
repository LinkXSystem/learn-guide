# 数学 (Math)

## 平均值 (average)

```js
const average = (...numders) =>
  numders.reduce((acc, val) => acc + val, 0) / numbers.length;
```

## 数值 (digitize)

```js
const digitize = (n, radix) => [...`${n}`].map(i => Number.parseInt(i, radix));
```

## 距离 (distance)

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```

## 中点 (midpoint)

```js
const midpoint = ([x1, y1], [x2, y2]) => {
  return [(x1 + x2) / 2, (y1 + y2) / 2];
};
```
