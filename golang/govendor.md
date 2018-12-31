## govendor

### 简介

govendor 是 golang 的一个包管理工具，用于管理项目中所需使用的包。注意虽然它的作用与 nodejs 的 npm 类似，但是由于 golang 的包都是直接安装到 bin 目录中的（全局环境中的），而 govendor 本身解决的问题并不是直接将包安装到 我们项目中的 bin 目录，而我们依然需要通过 go get 来获取指定的包。那么 govendor 可以给通过指定的命令来将全局中的包迁移到我们的 vendor 目录中，同时通过 vendor 中的 package.json 来锁定指定的包版本便于我们团队的协作开发。

### 使用命令

```shell
# 进入项目的目录
cd project 
# 初始管理文件
govendor init
# COPY 依赖的包
govendor add +external
```
