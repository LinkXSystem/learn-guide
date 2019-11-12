# Libuv 入门

> 参考文档：https://buildmedia.readthedocs.org/media/pdf/libuv/v1.x/libuv.pdf

## 环境配置

> Libuv 的 Github 项目地址： https://github.com/libuv/libuv

由于 Libuv 是使用 C 语言编写的，作为 Node 的核心。

以下的环境配置是基于 Ubuntu 实现：

```shell
git clone https://github.com/libuv/libuv.git

cd libuv

sudo apt-get update
sudo apt-get install -y automake libtool

sh autogen.sh
./configure

sudo make check
sudo make install
```

## 测试文件

以下为测试 Libuv 的环境是否正常配置完成的代码：

```shell
vi main.c
```

```c
#include <stdio.h>
#include <stdlib.h>
#include <uv.h>

int main() {
    uv_loop_t *loop = malloc(sizeof(uv_loop_t));
    uv_loop_init(loop);

    printf("Now Quite !!!\n");

    uv_run(loop, UV_RUN_DEFAULT);

    uv_loop_close(loop);
    free(loop);
    return 0;
}
```

编译此文件的命令为：

```shell
gcc main.c -o main /usr/local/lib/libuv.a -pthread
```

运行编译之后的文件：

```shell
./main

Now Quite !!!
```
