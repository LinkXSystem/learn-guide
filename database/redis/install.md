# Redis

## 配置

- 基于 Ubuntu 系统的环境， 命令如下

```shell
# 默认 redis 安装完成，将自动启动
sudo apt install -y redis-server

# 查看 redis-server 的帮助
sudo /etc/init.d/redis-server --help

# 启动 redis
sudo /etc/init.d/redis-server start


# 控制界面
redis-cli

# 查看 redis 的
ps -aux | grep redis
sudo /etc/init.d/redis-server status
```

- 基于 docker 部署， 命令如下：

```shell
docker pull redis:latest

# 运行， -v 指定数据卷， --privileged 赋予权限
docker run --name redis -p 6379:6379 -d -v /tmp/data:/data:rw --privileged=true redis redis-server
```
