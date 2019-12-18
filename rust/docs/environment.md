# Rust 的环境配置

# Linux 系统

由于国内受 GFW 的影响，如果你遵照 rust 官网上的安装形式，那某种意义上难以成功。因为这是镜像站无法下载或下载慢导致的无法正常安装，所以我们只需要配置镜像站的地址即可， 命令如下：


```shell
# 该镜像地址为 中科大的镜像地址
export RUSTUP_UPDATE_ROOT="https://mirrors.ustc.edu.cn/rust-static/rustup"

sudo curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

注意： WSL 使用此方式会存在问题，因为它会触发这个[问题](https://github.com/rust-lang/rustup/issues/1912)，暂时无解