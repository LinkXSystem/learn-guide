# 配置插件

## 配置方式

使用 [electron-devtools-installer](https://www.npmjs.com/package/electron-devtools-installer) 实现，chrome 的插件加载至 electron 中

```shell
yarn add electron-devtools-installer
```

## 使用方式

编辑及配置插件的加载函数

```js
const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  // extensions 的名称列表
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};
```

在对应的 main.js 中调用此方法，来完成对应的加载

```js
app.on("ready", async () => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.DEBUG_PROD === "true"
  ) {
    // 加载插件
    await installExtensions();
  }
});
```
