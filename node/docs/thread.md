### 线程 Thread

`node v11.4.0` `2018-12-16`

#### 文档

[参考文档](https://nodejs.org/dist/latest-v11.x/docs/api/worker_threads.html)

#### 相关 API

- isMainThread：false 表示当前为 worker 线程，false 表示为主线程
- parentPort: 在 worker 线程里是表示父进程的 MessagePort 类型的对象，在主线程里为 null
- workerData: 在 worker 线程里是父进程创建 worker 线程时的初始化数据，在主线程里是 undefined
- threadId: 在 worker 线程里是线程 ID，在父进程里是 0。
- MessageChannel: 包含两个已经互相能够夸线程通信的 MessagePort 类型对象，可用于创建自定义的通信频道，可参考样例二的实现。
- MessagePort: 用于跨线程通信的句柄，继承了 EventEmitter，包括 close message 事件用于接收对象关闭和发送的消息，以及 close postMessage 等操作。
- Worker: 主线程用于创建 worker 线程的对象类型，包含所有的 MessagePort 操作以及一些特有的子线程 meta data 操作。构造函数的第一个参数是子线程执行的入口脚本程序，第二个参数包含一些配置项，可以指定一些初始参数。

#### 内存模型

现在 Worker Threads 模块在 API 层不建议多线程共享内存，第一个参数 value 的值会被 clone 一份在接受消息的线程。transferList 只能传递 ArrayBuffer 或者 MessagePort 对象，传递 ArrayBuffer 会修改该 Buffer 的访问权限给接受消息的线程，传递 MessagePort 。
所有跨线程消息的通信都通过走底层的 v8 序列化实现，更具体的 Worker Threads 和 v8 多线程模型以及和浏览器的 Web Worker 标准的关系暂不展开。

#### 运行命令

```shell
node --experimental-worker thread.js
```

#### 样例参考

- 主线程和工作线程的通讯

```js
const {
  isMainThread,
  parentPort,
  workerData,
  threadId,
  MessageChannel,
  MessagePort,
  Worker,
} = require('worker_threads');

function MainThread() {
  const worker = new Worker(__filename, { workerData: 0 });

  worker.on('exit', code => {
    console.log(`M: ${code} [Exit]`);
  });

  worker.on('message', message => {
    console.log(`M: ${message} [Receive]`);
    worker.postMessage(message + 1);
  });
}

function WorkerThread() {
  console.log(`W: ThreadID ${threadId} start with ${__filename}`);
  console.log(`W: WorkerData ${workerData}`);

  parentPort.on('message', message => {
    console.log(`W: ${message} [Receive]`);
    if (message === 5) process.exit();
    parentPort.postMessage(message);
  });

  parentPort.postMessage(workerData);
}

console.log(`isMainThread: ${isMainThread}`);

isMainThread ? MainThread() : WorkerThread();
```

- 线程之间的通讯

```js
const {
  isMainThread,
  parentPort,
  workerData,
  threadId,
  MessageChannel,
  MessagePort,
  Worker,
} = require('worker_threads');

function MainThread() {
  const x = new Worker(__filename);
  const y = new Worker(__filename);

  const channel = new MessageChannel();

  x.postMessage(
    {
      port: channel.port1,
    },
    [channel.port1],
  );

  y.postMessage(
    {
      port: channel.port2,
    },
    [channel.port2],
  );
}

function WorkerThread() {
  parentPort.once('message', value => {
    value.port.postMessage('hello');
    value.port.on('message', message => {
      console.log(`M: ${threadId} [Receive] ${message}`);
    });
  });
}

isMainThread ? MainThread() : WorkerThread();
```
