> 关于 ElasticSearch 的 Dockerfile 编写

- 由于 ElasticSearch 的版本存在着较大的差异，所以每个版本之间的 Elastic Stack 都是整体迁移的，因此在编写 Dockerfile 的时候，我们需要基于[该文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html)或[此文档](https://docs.docker.com/samples/library/elasticsearch/#running-containers)来进行编写

- 由于 ElasticSearch 的容器的默认内存是 2G 和 docker 的容器存在内存限制，所以在较小的云服务器中是无法正常运行的，我们是需要居于上面的文档重新编写新的镜像，以下是参考代码

  ```dockerfile
  FROM docker.elastic.co/elasticsearch/elasticsearch:6.4.1

  ENV ES_JAVA_OPTS="-Xms256m -Xmx256m"
  ```

- 同时 ElasticSearch 的底层框架是 Lucene 框架，存在堆内存交换问题，如果 docker 的宿主环境的内存可以内存较小，容易引发这个问题。解决方案是调整 ElasticSearch 的 Java 内存配置参数，即上面的 Dockerfile 所定义的环境变量。其二，是调整宿主的内核配置，配置如下：

  ```shell
  $ grep vm.max_map_count /etc/sysctl.conf
  vm.max_map_count=262144
  ```
