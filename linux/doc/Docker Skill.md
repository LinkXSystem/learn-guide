# Docker 的常用命令技巧

## 清理状态为 Exit 的容器

```shell
sudo docker rm `docker ps -a | grep Exited |awk '{print $1}'`
```

或者

```shell
sudo docker container prune
```

## 清理未运行的容器

```shell
# 注意 -f 的使用
sudo docker rm -f $(sudo docker ps -a -q)
```
