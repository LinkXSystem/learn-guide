# 事务

## 通识

这种把多条语句作为一个整体进行操作的功能，被称为`数据库事务`。

数据库事务具有 ACID 这 4 个特性：

- A：Atomic，原子性，将所有SQL作为原子工作单元执行，要么全部执行，要么全部不执行。

- C：Consistent，一致性，事务完成后，所有数据的状态都是一致的。

- I：Isolation，隔离性，如果有多个事务并发执行，每个事务作出的修改必须与其他事务隔离。

- D：Duration，持久性，即事务完成后，对数据库数据的修改被持久化存储。

对于单条 SQL 语句，数据库系统自动将其作为一个事务执行，这种事务被称为`隐式事务`。

## 隔离级别

SQL标准定义了4种隔离级别，分别对应可能出现的数据不一致的情况：

| Isolation Level  | 脏读（Dirty Read） | 不可重复读（Non Repeatable Read） | 不可重复读（Non Repeatable Read） |
| :--------------- | :----------------- | :-------------------------------- | :-------------------------------- |
| Read Uncommitted | Yes                | Yes                               | Yes                               |
| Read Committed   |                    | Yes                               | Yes                               |
| Repeatable Read  | _                  | _                                 | Yes                               |
| Serializable     | _                  | _                                 | _                                 |


- Read Uncommitted

Read Uncommitted 是隔离级别最低的一种事务级别。在这种隔离级别下，一个事务会读到另一个事务更新后但未提交的数据，如果另一个事务回滚，那么当前事务读到的数据就是脏数据，这就是脏读（Dirty Read）。

- Read Committed

在 Read Committed 隔离级别下，一个事务可能会遇到不可重复读（Non Repeatable Read）的问题。

- Repeatable Read

在 Repeatable Read 隔离级别下，一个事务可能会遇到幻读（Phantom Read）的问题。

- Serializable

Serializable 是最严格的隔离级别。在 Serializable 隔离级别下，所有事务按照次序依次执行，因此，脏读、不可重复读、幻读都不会出现。

虽然 Serializable 隔离级别下的事务具有最高的安全性，但是，由于事务是串行执行，所以效率会大大下降，应用程序的性能会急剧降低。如果没有特别重要的情景，一般都不会使用 Serializable 隔离级别。

如果没有指定隔离级别，数据库就会使用默认的隔离级别。在 MySQL 中，如果使用 InnoDB，默认的隔离级别是 Repeatable Read。

## References

[1] 事务：https://www.liaoxuefeng.com/wiki/1177760294764384/1179611198786848
[2] Read Uncommitted: https://www.liaoxuefeng.com/wiki/1177760294764384/1219071817284064
[3] Read Committed: https://www.liaoxuefeng.com/wiki/1177760294764384/1245266514539200
[4] Repeatable Read: https://www.liaoxuefeng.com/wiki/1177760294764384/1245268672511968
[5] Serializable: https://www.liaoxuefeng.com/wiki/1177760294764384/1245268341158240
