### docker machine 的 基本使用

> 基本命令

```shell
# geting ralated commands about docker-machine
docker-machine help

# listing all machine 
docker-machine ls 

# creating machine, but that is simple example
docker-machine create machine-name

# using ssh, make machine execute some command
docker-machine ssh machine-name command
```

> 远程主机

- 关于 docker-machine 指定驱动的部署文档： https://docs.docker.com/machine/drivers/
- driver ：

```shell
docker-machine create \
  --driver generic \
  --generic-ip-address=203.0.113.81 \
  --generic-ssh-key ~/.ssh/id_rsa \
  t-cloud
```