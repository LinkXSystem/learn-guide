## elasticsearch 部署

> 部署

```
# 配置 Java 环境，注意该命令部署的是 OpenJDK
sudo yum install -y java
# 下载 elastic-search，文件格式是 elasticsearch-{version}.tar.gz
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.0.0.tar.gz
# 解压 elastic-search，注意解压出来的文件夹即是 $ES_HOME
tar -xzf elasticsearch-6.0.0.tar.gz
```

> 运行

```
# 守护模式, -p 指定进程，终止命令：kill `cat file`
./bin/elasticsearch -d --pidfile file
# 前台模式
./bin/elasticsearch
# 指定集群名称，当前节点名称
./bin/elasticsearch -d -Ecluster.name=link-cluster -Enode.name=core
```

> 检查

```
 curl -XGET 'localhost:9200/?pretty'
 # 响应结果
 {
  "name" : "utKzIqN",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "NkSuitvFRpW74pjSFCfdMA",
  "version" : {
    "number" : "6.0.0",
    "build_hash" : "8f0685b",
    "build_date" : "2017-11-10T18:41:22.859Z",
    "build_snapshot" : false,
    "lucene_version" : "7.0.1",
    "minimum_wire_compatibility_version" : "5.6.0",
    "minimum_index_compatibility_version" : "5.0.0"
  },
  "tagline" : "You Know, for Search"
}
```

## elasticsearch 配置

> 相关文件

* 配置文件位于 config 目录中

```
ls config/
elasticsearch.yml # elasticsearch的相关配置
jvm.options # jvm 配置
log4j2.properties # 日志的相关配置
```

> 配置说明

* Development 与 Production 模式说明
  * 以 transport 的地址是否绑定在 localhost 为判断标准 network.host
  * Development 模式下在启动时会以 warning 的 方式提示配置检查异常
  * Production 模式下在启动时会以 error 的 方式提示配置检查异常并退出
* 参数修改的方式

```
# 指定参数选项
./bin/elasticsearch -Ehttp.port=2017
```

* elasticsearch.yml 关键配置说明
  * cluster.name 集群名称，以此作为是否为同一集群的判断条件
  * node.name 节点名称，以此作为集群中不同节点的区分条件
  * path.data 数据存储地址
  * path.log 日志存储地址
  * network.host/http.port 网络地址和端口，用于 http 和 transport 服务使用

## elasticsearch 集群

> 本地集群

```
./bin/elasticsearch -d -Ecluster.name=link-cluster -Enode.name=master -Ehttp.port=2017
./bin/elasticsearch -d -Ecluster.name=link-cluster -Enode.name=slave -Ehttp.port=2018
```

> 测试命令

```
# 查看集群的信息
curl -XGET 'localhost:2017/_cluster/stats'
# 查看集群的节点
curl -XGET 'localhost:2017/_cat/nodes'
curl -XGET 'localhost:2017/_cat/nodes?v'
```
