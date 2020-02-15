# 守护进程

## 什么是守护进程

守护进程是以后台形式运行，此进程不存在父进程，通常通过对子进程进行 fork ，然后终止自身，导致父进程中止被托管，从而成为守护进程

## 使用 ps 命令

在 linux 系统中，我们可以使用 ps 命令来查看进程信息，如下即可：

```shell
> ps -x
  PID TTY      STAT   TIME COMMAND
 5530 ?        S      0:00 sshd: dev@pts/3
 5531 pts/3    Ss+    0:00 -bash
11296 ?        S      0:00 sshd: dev@pts/4
11297 pts/4    Ss     0:00 -bash
13318 pts/4    R+     0:00 ps -x
23733 ?        Ssl    2:53 PM2 v1.1.2: God Daemon
```

其中需要注意的是 ? 标识的即为守护进程

## 如何创建守护进程（node.js）

前面提到过创建守护进程的方式，是对应自己进行 fork，那么在 node.js 中，需要创建子进程的话，
那么我们可以使用 child_process 的 spawn 来创建子进程，代码如下：

```js
const { spawn } = require('child_process');
const process = require('process');

const subprocess = spawn('node', ['children.js'], {
  detached: true,
  // 设置父进程与子进程的通信方式
  stdio: 'ignore',
});

subprocess.unref();
```
