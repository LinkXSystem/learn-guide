# 基于 webpack 和 typescript 的开发模板

## 快速构建项目

```shell
mkdir project

npm init

yarn add webpack webpack-cli webpack-dev-server  clean-webpack-plugin html-webpack-plugin --dev

yarn add typescript ts-loader --dev
```

## 配置 tsconfig.json

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "target": "es5",
    "lib": ["es2015", "dom"]
  },
  "include": ["src"]
}
```

## 配置 webpack 的 dev 环境配置

在 configs 目录下构建 webpack 的配置文件：

```shell
mkdir configs & cd configs

touch webpack.dev.conf.js
```

然后键入下面的内容：

```js
const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TargetFileOfCompile = path.resolve(__dirname, '..', 'src/index.ts');
const OutputOfDistFolder = path.resolve(__dirname, '..', 'dist');
const TargetHtmlTemplate = path.resolve(__dirname, '..', 'public/index.html');

const TargetFileOfOutput = 'Library.js';
const LibraryName = 'Library';

const HtmlTemplateConfig = Object.assign(
  {},
  // 查询 inject 字段
  { inject: 'head', template: TargetHtmlTemplate },
);

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  entry: TargetFileOfCompile,

  output: {
    filename: TargetFileOfOutput,
    path: OutputOfDistFolder,
    libraryTarget: 'umd',
    // globalObject: 'window',
    library: LibraryName,
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(HtmlTemplateConfig),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
```

然后配置 webpack.server.conf.js 的文件：

```js
/**
 * @doc https://webpack.docschina.org/configuration/dev-server/
 */

const path = require('path');

const HOST = 'localhost';
const PORT = process.env.PORT || 8080;
const PublicPath = '/';

const TargetHtmlTemplateFolder = path.resolve(__dirname, '..', 'template');

module.exports = {
  contentBase: TargetHtmlTemplateFolder,
  compress: true,
  quiet: true,
  hot: true,
  host: HOST,
  port: PORT,
  open: true,
  overlay: true,
};
```

## 配置 dev 的 script 脚本

接着，在 scripts 目录下构建 dev 的脚本文件：

```shell
mkdir scripts & cd scripts

touch dev.js
```

然后键入下面的内容：

```js
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');

const config = require('../configs/webpack.dev.conf');
const options = require('../configs/webpack.server.conf');

webpackDevServer.addDevServerEntrypoints(
  config,
  Object.assign(
    {},
    {
      clientLogLevel: 'warning',
    },
    options,
  ),
);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(options.port, options.host, () => {});
```

## 配置运行命令

接着我们只需在 package.json 中配置 dev 的命令即可，如下：

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node scripts/dev.js"
  }
}
```
