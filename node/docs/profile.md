# Node.js 性能分析工具

## 环境配置

- [wrk](https://github.com/wg/wrk.git)

安装步骤如下：

```js
brew install wrk
```

基本使用方法如下：

```shell
# -t 线程数 -c 并发数 -d 压测时间 --latency 在压测结束后，打印延迟统计信息 
wrk -t 50 -c 200 -d 100s --latency "http://localhost:4200"
```

## Profile

执行分析步骤：

- 启动应用

```shell
node --prof server.js
```

- 压测

```shell
wrk -t 50 -c 200 -d 100s --latency "http://localhost:4200"
```

- 处理 LOG 文件
  
```shell
node --prof-process isolate-0XXXXXXXXXXX-v8-XXXX.log > profile.txt
```

- 使用 Vscode 查看 profile 文件

```shell
code profile.txt
```

那性能分析，我们首先要查看摘要信息，如下：

```shell
[Summary]:
   ticks  total  nonlib   name
      5    6.0%    6.8%  JavaScript
     68   81.9%   91.9%  C++
      3    3.6%    4.1%  GC
      9   10.8%          Shared libraries
      1    1.2%          Unaccounted
```

接着我们只需要通过查看对应的 ticks ，查看对应的函数占用 CPU 的时间片，以此来判断
需要优化的代码片段。

## 相关工具

- [Chrome Devtool](https://developers.google.com/web/tools/chrome-devtools/): 使用--inspect，或者--inspect-brk开启调试开关，如node --inspect path/xxx.js 或者node --inspect-brk path/xxx.js。通过浏览器控制面板可以获取内存使用情况，CPU计算性能。NodeJS程序调用堆栈等信息。

- [Clinic](https://www.npmjs.com/package/clinic): NearForm 提供的开源Node.js性能分析套件

- [EasyMonitor](https://github.com/hyj1991/easy-monitor): 企业级 Node.js 应用性能监控与线上故障定位解决方案

- [AliNode](https://help.aliyun.com/document_detail/60489.html?spm=a2c4g.11186623.6.550.525744284gOk55): 基于 Node 运行时的应用性能管理解决方案

## References

[1] 易于分析的 Node.js 应用程序: https://nodejs.org/zh-cn/docs/guides/simple-profiling/
