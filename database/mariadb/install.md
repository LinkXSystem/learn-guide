### MariaDB 的 部署方式

> MariaDB 在 Window10 中的部署步骤

```shell
#
unzip mysql-8.0.13-winx64.zip

cd mysql-8.0.13-winx64

# Error: Failed to find valid data directory.
rm data

New-Item my.ini

# writing your mariadb's config
# the config file about html : https://dev.mysql.com/doc/refman/5.6/en/windows-create-option-file.html
cat my.ini

[mysqld]
# set basedir to your installation path
basedir=D:/Mysql-8.0.13-winx64
# set datadir to the location of your data directory
datadir=D:/Mysql-8.0.13-winx64/data

# 
cd bin

./mysqld --initialize-insecure
./mysqld --install

net start mysql

# pressing enter for twice
mysql -uroot -p

use mysql;
# update your database's password for root
alter user 'root'@'localhost' identified with mysql_native_password BY 'linksystem';
```

> MariaDB 在 Center 中的部署步骤
