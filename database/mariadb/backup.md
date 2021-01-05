# MYSQL 的数据库备份

## 备份的类型

- 根据是否需要数据库离线
  
  - 冷备（cold backup）：需要关mysql服务，读写请求均不允许状态下进行
  - 温备（warm backup）：服务在线，但仅支持读请求，不允许写请求
  - 热备（hot backup ）：备份的同时，业务不受影响

- 根据要备份的数据集合的范围

  - 完全备份: full backup，备份全部字符集
  - 增量备份: incremental backup 上次完全备份或增量备份以来改变了的数据，不能单独使用，要借助完全备份，备份的频率取决于数据的更新频率
  - 差异备份: differential backup 上次完全备份以来改变了的数据
  - 建议的恢复策略：
    - 完全+增量+二进制日志
    - 完全+差异+二进制日志

- 根据备份数据或文件
  - 物理备份: 直接备份数据文件
  - 逻辑备份: 备份表中的数据和代码

## 备份的对象

- 数据
- 配置文件
- 代码：存储过程、存储函数、触发器
- OS 相关的配置文件
- 复制相关的配置
- 二进制日志

## 备份和恢复的实现

- 利用select into outfile 实现数据的备份与还原
  - 备份数据
  
  ```sql
  use examples;
  select * from students;
  select * from students where Age > 30 into outfile ‘/tmp/students.txt';
  ```

  - 还原数据

  ```sql
  load data infile '/tmp/students.txt' into table students;
  ```

- 利用 mysqldump 工具对数据进行备份和还原

  - 待定

## References

[1] mysql备份的三种方式详解: http://www.jb51.net/article/41570.htm
