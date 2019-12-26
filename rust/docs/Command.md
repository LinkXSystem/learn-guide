# Rust 的常用命令

## Cargo 的命令

- 新建命令

```shell
cargo new starter
```

- 构建项目

```shell
cargo build
```

- 运行项目

```shell
cargo run
```

- 检查项目

```shell
cargo check
```

## 配置 `dependencies`

项目中的 `dependencies` 的配置都是配置在 `Cargo.toml` 中，如你需要 rand 这样的 `dependencies`，则配置如下：

```toml
[dependencies]
rand = "0.5.5"
```

