# 错误报告 & 日志

> Nodejs 版本：`12.7.0`

## 前言

错误报告的作用不言而喻，如果在线上环境，你如果未配置错误报告，那你大概率只能徒手摸黑，艰难的复测问题。

其实你一直都在想为啥开发环境复现不了这个问题/(ㄒ o ㄒ)/~~？

是的，那是因为我们根本不知道当时 Node 的运行环境是什么状况，内存栈中存在着怎样的数据， 是我们本身代码的问题还是三方依赖的问题？

由此我们知道对于复现一个问题，我们需要满足以下信息：

- 运行环境
- 错误信息
- 复现条件
- 依赖问题

那么在 Nodejs 的 `12.x` 版本中的新 feature 中的 `report` 便能够解决这些问题。那么我接下来便是介绍基于此 feature 来实现的错误报告。

## 配置

在开始实验之前，是的，我们需要配置环境。那么无论你使用什么环境，请优先配置 `nvm`，如果你不想你的工作环境一团混乱的话。当然 window 的同学，请自行到 `github` 搜索 `nvm-window`。接着，我们只需轻松愉悦的在命令行中输入以下命令：

```shell
nvm install 12.7.0
```

稍等片刻，我们就可以开始实验了

## 基本

注意，由于 `report` 此 feature 实质上是对于运行环境的劫持，因此我们并不需要引入相关的 package ，那么我们只需要编写一个这样的样例文件，内容如下：

```js
function main() {
  throw new Error("That is error of test by nodejs's report feature !!!");
}

main();
```

将此文件命名为 report.js ，接着我们在此文件的目录下，输入下面的命令：

```shell
node --experimental-report --report-uncaught-exception \
  --report-on-signal --report-on-fatalerror app.js
```

那么我们便可以得到这样的一个文件 `x.x.x.x.x.x.json`，当然如果莫有错误，此文件是不会生成的。所以还是整一个错误出来吧。那么我们来看一下这个包含了错误信息的文件:

```json
{
  // 基本的错误信息
  "header": {
    "reportVersion": 1,
    "event": "That is error of test by nodejs's report feature !!!",
    "trigger": "Exception",
    "filename": "report.20190803.094045.12292.0.001.json",
    "dumpEventTime": "2019-08-03T09:40:45Z",
    "dumpEventTimeStamp": "1564796445726",
    "processId": 12292,
    "cwd": "C:\\Users\\Administrator\\Github\\learn-guide\\node\\doc",
    "commandLine": [
      "C:\\Program Files\\nodejs\\node.exe",
      "--experimental-report",
      "--report-uncaught-exception",
      "--report-on-signal",
      "--report-on-fatalerror",
      ".\\report.js"
    ],
    "nodejsVersion": "v12.7.0",
    "wordSize": 64,
    "arch": "x64",
    "platform": "win32",
    // node 的基本信息
    "componentVersions": {
      // ignore someone
    },
    "release": {
      "name": "node",
      "headersUrl": "https://nodejs.org/download/release/v12.7.0/node-v12.7.0-headers.tar.gz",
      "sourceUrl": "https://nodejs.org/download/release/v12.7.0/node-v12.7.0.tar.gz",
      "libUrl": "https://nodejs.org/download/release/v12.7.0/win-x64/node.lib"
    },
    "osName": "Windows_NT",
    "osRelease": "10.0.18362",
    "osVersion": "Windows 10 Pro",
    "osMachine": "x86_64",
    "cpus": [
      // ignore someone
    ],
    "host": "DESKTOP-M7F1UQO"
  },
  // Javascript 的错误的完整信息
  "javascriptStack": {
    "message": "Error: That is error of test by nodejs's report feature !!!",
    "stack": [
      "at main (C:\\Users\\Administrator\\Github\\learn-guide\\node\\doc\\report.js:2:9)",
      "at Object.<anonymous> (C:\\Users\\Administrator\\Github\\learn-guide\\node\\doc\\report.js:5:1)",
      "at Module._compile (internal/modules/cjs/loader.js:777:30)",
      "at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)",
      "at Module.load (internal/modules/cjs/loader.js:643:32)",
      "at Function.Module._load (internal/modules/cjs/loader.js:556:12)",
      "at Function.Module.runMain (internal/modules/cjs/loader.js:840:10)"
    ]
  },
  // V8 相关的信息
  "nativeStack": [
    // ignore someone
  ],
  // 内存栈的状态
  "javascriptHeap": {
    "totalMemory": 4509696,
    "totalCommittedMemory": 4509696,
    "usedMemory": 2408656,
    "availableMemory": 2194992200,
    "memoryLimit": 2197815296,
    "heapSpaces": {
      // ignore someone
    }
  },
  "resourceUsage": {
    "userCpuSeconds": 0.218,
    "kernelCpuSeconds": 0.031,
    "cpuConsumptionPercent": 24.9,
    "maxRss": 43020288,
    "pageFaults": {
      "IORequired": 11133,
      "IONotRequired": 0
    },
    "fsActivity": {
      "reads": 1,
      "writes": 5
    }
  },
  "libuv": [
    // ignore someone
  ],
  // 系统的环境变量
  "environmentVariables": {
    // ignore someone
  },
  "sharedObjects": [
    // ignore someone
  ]
}
```

文件里面，我们主要关注的只有数个字段，它们分别对应我们上面前言提到的复测问题的关键，映射如下：

- 运行环境 : header /  environmentVariables
- 错误信息 : javascriptStack
- 复现条件 : javascriptStack / nativeStack / javascriptHeap
- 依赖问题 : javascriptStack

那么我们讲解一下我们接下运行的命令中的一些指令有何作用：

- --experimental-report : Enables the diagnostic report feature. In the absence of this flag, use of all other related options will result in an error.
- --report-uncaught-exception : Enables report to be generated on un-caught exceptions. Useful when inspecting JavaScript stack in conjunction with native stack and other runtime environment data.
- --report-on-signal :  Enables report to be generated upon receiving the specified (or predefined) signal to the running Node.js process. (See below on how to modify the signal that triggers the report.) Default signal is SIGUSR2. Useful when a report needs to be triggered from another program. Application monitors may leverage this feature to collect report at regular intervals and plot rich set of internal runtime data to their views.
- --report-on-fatalerror :  Enables the report to be triggered on fatal errors (internal errors within the Node.js runtime, such as out of memory) that leads to termination of the application. Useful to inspect various diagnostic data elements such as heap, stack, event loop state, resource consumption etc. to reason about the fatal error.
  
## 生产

那么在生产环境启用之前，我们先看一下下面这段代码：

```shell
NODE_OPTIONS="--experimental-report --report-uncaught-exception \
  --report-on-fatalerror --report-on-signal \
  --report-signal=SIGUSR2  --report-filename=./report.json \
  --report-directory=/home/nodeuser"
```
