# Webassembly 的环境配置

## 基于 Rust 的配置

- 配置 rust 的编译环境：

```shell
// 建议更新 npm 至最新版本
npm install npm@latest -g

// 配置编译转换器
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

// 配置 cargo 的模板生成器
cargo install cargo-generate
```
