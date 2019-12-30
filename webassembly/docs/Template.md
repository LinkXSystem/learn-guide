# Webassembly 模板

## 基于 Rust 实现

- 通过模板生成 Webassembly 的项目

```shell
// 执行此命令之后，需要输入项目名称
cargo generate --git https://github.com/rustwasm/wasm-pack-template
```

- 了解项目结构

同样，我们实现的 rust 的代码都定义在 lib.rs 文件中，以此作为功能函数的导出点

```shell
// 样例项目为 starter
cd starter && cd src

tree
.
├── lib.rs // 此处作为代码的导出关键文件
└── utils.rs
```

- 编译项目

编译项目需要执行下面的命令

```shell
wasm-pack build
```

项目完成编译之后，我们便可以看到 rust 编译之后的 npm 的 package ，这个 package 适用于 webpack 的打包，同时它会默认生成对应的 TS 的定义。因此我们可以直接将此 pulish 到 npm 的仓库中。

- 测试项目的使用

测试 rust 的构建的 webassembly 项目能否正常使用，我们可以通过 wasm-app 指令来生成对应的测试模板，命令如下：

> 注意：该命令需要进入 build 命令之后的 pkg 目录下运行

```shell
npm init wasm-app www
```

运行完上面的命令之后，我们便可以得到测试项目。但是生成的模板，指向的测试项目并非我们想要测试的项目。因此我们还需通过在 www 的 package.json 中指定我们需要测试的 package ，改动如下：

```json
{
  // ...
  "dependencies": {
    "starter": "file:../pkg", // Add this line!
    // ...
  }
}
```

完成改动之后，你需要重新 `npm install` 。 但是这样方式可能存在问题，同时你可以替换成下面这种方式：

```shell
cd pkg && npm link
// pkg 中的 package.json 的 name 字段
cd www && npm link starter
```

然后我们只需要修改 www 的 index.js 中 import 的 package 即可。然后便可以通过 `npm run start` 来运行测试即可
