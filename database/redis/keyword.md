# Redis

> Remote Dictionary Server

## 特点

- 支持数据持久化. 可以将内存中的数据保持在磁盘中, 重启后可再次使用
- 支持 `key-val`, `list`, `set`, `zset`, `hash` 等数据结构存储
- 支持数据备份, `master-slave` 模式数据备份

## 基础知识

- 单进程 (*) 单进程处理客户端的请求, 对读写事件响应是通过 epoll 函数而包装来操作. Redis 实际处理速度完全依靠主进程执行效率
- 默认 16 个数据库, 类似数组下标从 0 开始, 初始默认使用 0 号库
- 统一密码管理, 16 个库同一个密码
- 索引是从 0 开始

## 数据类型

- String
  - 一个 key 对应一个 value
  - 二进制安全. 可以包含任何数据, 包括图片或者序列化对象
  - value 最多可以是 512M

- Hash
  - string 类型的 field 和 value 的映射表

- List
  - 底层是一个链表
  - 按照插入顺序排序, 可以在头部或者尾部插入数据

- Set
  - string 类型的无序集合, 是通过 HashTable 实现的

- Zset (Sorted Set)
  - string 类型的集合
  - 与 Set 不同的是: 每个元素都会关联一个 double 类型的分数
  - Redis 通过分数来为集合中的成员进行从小到大排序
  - zset 成员唯一, 但是分数 (score) 可以重复!

## 持久化 (Persistence)

- RDB (Redis Database)

- AOF (Append Only File)
  - 简介：以日志的形式来记录每个写操作, 将 Redis 执行过的所有写指令记录下来 (读操作不记录) 只许追加文件但不可以改写文件, Redis 启动之初会读取改文件重新创建数据

## 事务

## 发布订阅机制

## 主从复制 (Master / Slave)

- 简介：主机数据更新后根据配置和策略, 自动同步到备份机的 Master / slave 机制. Master 以写为主, Slave 以读为主
  - 读写分离
  - 读写分离

- 如何配置

- 常用模式
  - De-centralized ，一台机器既是 Master 又是 Slave
  - 一个 Master, 两个 Slave
  - SLAVEOF no one 使当前数据库停止与其他数据库的同步, 转成数据库

- 复制原理

- 哨兵模式 (Sentinel)
  - 简介：Redis-Sentinel 是官方推荐的高可用解决方案，当 redis 在做 master-slave 的高可用方案时，假如 master 宕机了，redis 本身（以及其很多客户端）都没有实现自动进行主备切换，而redis-sentinel本身也是独立运行的进程，可以部署在其他与redis集群可通讯的机器中监控 redis 集群
  - 注意事项
    - 单个哨兵会存在自己挂掉而无法监控整个集群的问题，所以哨兵也是支持集群的，我们通常用三台哨兵机器来监控一组redis集群

## References

[1] Redis 知识点笔记整理: https://zhenye-na.github.io/2019/08/29/redis-cheatsheet.html#redis-%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6-master--slave
