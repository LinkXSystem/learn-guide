# SQL 笔记

## 数据库

- 创建

```sql
CREATE DATABASE DB_NAME; 
```

- 查看

```sql
\l
```

- 选择

```sql
\c DB_NAME;
```

- 删除

```sql
DROP DATABASE [ IF EXISTS ] DB_NAME;
```

## 表

- 创建表

```sql
CREATE TABLE TABLE_NAME(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( one or more columns )
);
```

- 查看表

```sql
\d
```

```sql
\d TABLE_NAME
```

- 删除表

```sql
DROP TABLE TABLE_NAME, TABLE_NAME;
```
