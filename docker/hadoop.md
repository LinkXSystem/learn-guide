### Hadoop 教程

#### 运行步骤

> 导入镜像
```
# 样例：docker load --input hadoop-[module].tar
docker load --input hadoop-install.tar
```

> 运行容器
```
# hadoop-install 容器
docker -d -p 22:22 -p 50070:50070 -p 8088:8088 --hostname master hadoop-install:v1.0.0

# hadoop-hive    容器
docker -d -p 22:22 -p 50070:50070 -p 8088:8088 --hostname master hadoop-hive:v1.0.0

# hadoop-hbase   容器
docker -d -p 22:22 -p 50070:50070 -p 8088:8088 -p 16010:16010 --hostname master hadoop-hbase:v1.0.0

# hadoop-mahout  容器
docker -d -p 22:22 -p 50070:50070 -p 8088:8088 --hostname master hadoop-mahout:v1.0.0

# hadoop-pig     容器
docker -d -p 22:22 -p 50070:50070 -p 8088:8088 --hostname master hadoop-pig:v1.0.0

# hadoop-flume   容器
docker -d -p 22:22 -p 50070:50070 -p 8088:8088 --hostname master hadoop-flume:v1.0.0

# hadoop-spark   容器
docker -d -p 22:22 -p 50070:50070 -p 8088:8088 -p 8080:8080 -p 4040:4040 --hostname master hadoop-spark:v1.0.0
```

> SSH，启动 Hadoop 进程