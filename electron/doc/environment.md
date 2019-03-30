# 开发环境配置（ window 版）

## Node 环境

> 注意，以下步骤只适合在从未安装过 node 的 window 平台上使用。如果你之前已经使用过 node，你只能**卸载 node 和清空 node_modules** 才能执行下面的操作

- 配置 nvm 环境，便于管理 node 的版本。 nvm 的 window 版本，[下载地址](https://github.com/coreybutler/nvm-windows/releases)。请下载 nvm-setup.zip 这个版本

- 解压 nvm-setup.zip, 完成安装，然后我们需要配置，以下文件：

```cmd
// 将 Administrator 替换成自己的用户名
cd C:\Users\Administrator\AppData\Roaming\nvm

// 重新配置该文件
type settings.txt

root: C:\Users\Administrator\AppData\Roaming\nvm
path: C:\Program Files\nodejs

node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

- 完成上述配置，之后我们可以使用以下命令来完成 node 的配置

```cmd
nvm -v
# 安装 node，官方版本：https://nodejs.org/en/download/releases/
nvm install 8.15.0
# 查看已安装的版本
nvm list
# 使用指定的 node 版本
nvm use 8.15.0
```

## react 环境

- 直接使用 create-react-app 命令行配置

```cmd
npm install -g create-react-app
```

- 创建项目的命令，如下:

```cmd
create-react-app project-example
```

- 或者使用 npx 来完成，如下:

```
npx create-react-app project-example
```

- 如果你需要修改配置才使用 npm run reject 这个命令，否则请不要执行此命令

## electron 配置

- react 和 electron 的话，请先使用 creat-react-app 生成项目:

```cmd
create-react-app project-example

cd project-example

yarn add electron -dev
# 当你使用原生 node 包的时候，这个命令是必须的，能根据你的 electron 重新编译对应的版本
# 参考链接：https://electronjs.org/docs/tutorial/using-native-node-modules
yarn add electron-rebuild -dev
# 打包 electron 的库
# 参考连接：https://github.com/electron-userland/electron-packager
yarn add electron-packager -dev
# 配置 npm-script 时使用，开发
yarn add concurrently --dev
yarn add cross-env --dev
yarn add wait-on --dev
```

- 添加对应的 electron 命令

```js
scripts: {
  "scripts": {
    // 命令参考格式：electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
    "electron-build": " npm run build && electron-packager . --ignore token.txt --overwrite ",
    // version 以 electron 为准
    "electron-rebuild": "electron-rebuild --version 2.0.6"
    "electron-dev": "concurrently \"cross-env PORT=3000 BROWSER=none yarn start\" \"wait-on http://localhost:3000 && electron .\"",
  },
}
```

- 在完成命令配置之后，请自己修改 main.js 或 package.json 的 main 字段所指向的文件, 示例代码如下：

```js
// 添加此代码
win.loadURL("http://localhost:3000");
```
