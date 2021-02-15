# NVS 的使用

> NVS 的项目地址：https://github.com/jasongin/nvs

## NVS 是啥

NVS 全名为 Node Version Switcher，和 NVM 一样是 node 的版本管理工具。

但相较于 NVM 的不同之处是 NVM 的 package 相对于 Node 的版本来说都是独立的，即你在版本 A 中安装了 webpack ，而当你切换至版本 B 的时候，webpack 将是不存在的。

而 NVS 则不是这样的， NVS 中的 Node 的 package 是共享的，意味着当你在版本 A 中安装时，版本 B 也同样可以使用。

## NVS 的配置

NVS 是跨平台的，你可以在 Window/Linux/MacOS 中使用，以下便是 Linux/MacOS 的部署命令：

```shell
export NVS_HOME="$HOME/.nvs"
git clone https://github.com/jasongin/nvs "$NVS_HOME"
. "$NVS_HOME/nvs.sh" install
```

而 Window 上则建议使用 [chocolatey](https://chocolatey.org/) 来完成部署，命令如下：

```shell
choco install nvs
```

部署完成之后，我们即可在命令行中， 输入以下命令来获取 NVS 命令的使用:

```shell
nvs --help
```

通常情况下， 你只是使用 NVS 命令，可以直接进入图形界面操作你的 Node 版本，命令的使用如下：

```shell
> nvs

.------------------------------.
| Select a version             |
+------------------------------+
| [a] node/12.6.0/x64          |
|                              |
|  ,) Download another version |
|  .) Don't use any version    |
'------------------------------'
Type a hotkey or use Down/Up arrows then Enter to choose an item.
```

相对于 NVM 而言，我们可以直接在这个界面选择和安装我们需要的 Node 的版本，而无需额外的寻找 Node 的版本信息和重新配置环境

## NVS 的镜像地址

由于 NVS 默认配置的是最新的 LTS 版本，通常如果你切换安装版本的时候感觉到慢，那么你可以查看以下自己的 NVS 的 Node 的镜像源， 命令如下：

```shell
> nvs remote

default             node
chakracore          https://nodejs.org/download/chakracore-release/
chakracore-nightly  https://nodejs.org/download/chakracore-nightly/
iojs                https://iojs.org/dist/
nightly             https://nodejs.org/download/nightly/
node                https://nodejs.org/dist/
```

那么当我们需要切换 NVS 的 Node 的镜像源,同样是基于 nvs remote 命令来实现切换镜像源，命令如下：

```shell
nvs remote node https://npm.taobao.org/mirrors/node/
```

此时再次查看的时候，我们便能看到 NVS 的镜像的地址已经切换过来成淘宝的镜像源，但是我平时依旧推荐你使用 Node 的官方镜像地址。
