# Expo 的基础教程

## 配置

在开发之前，我们需要安装 expo 的 cli 来配置项目， 命令如下

```shell
npm install expo-cli --global
```

> 由于国内的环境比较卡顿，所以建议使用 nrm 来配置 npm 的镜像源:

```shell
npm install nrm --global

nrm --help
```

在完成安装之后，我们仅需使用下面的命令来构建我们的项目，命令如下：

```shell
expo init expo-starter
```

## 了解

由于 expo 是 react-native 的框架层面上的封装，那么它主要集成的便是 react-native 相关的工具库，能够便于我们快速进行开发，无需在基础工具库上操心，实现了开箱即用的可能

## 快速开发

在此前的配置中，已经构建了一个用于测试的基础项目 `expo-starter`，那么便可以在此基础上进行 expo 的开发体验。

