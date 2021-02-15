# Fetch 的技巧

## 基本使用

```js
const TestUrl = 'https://github.com/';

fetch(TestUrl)
  .then(res => res.json())
  .then(res => consolr.dir(res))
  .catch(err => console.error(err));
```

## 超时检测

由于 Fetch 无法设置请求超时，那么我们只能通过使用 setTimeout 和 Promise.race 来实现，主要是使用了 Promise.race 的特性：传入 n 个 Promise 对象，等待最快对象完成

如果 Timeout 的 Promise 优先完成则可以标记成`请求超时`, 示例代码如下：

```js
const TimeoutPromise = timeout => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('timeout !!!');
    }, timeout);
  });
};

const FetchPromise = url => {
  return fetch(url);
};

const TestUrl = 'https://github.com/';

Promise.race([TimeoutPromise(2000), FetchPromise(TestUrl)])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```
