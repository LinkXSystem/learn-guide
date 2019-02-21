#!/bin/sh

echo "============================================"
echo "Config Repo About Nginx"
echo "============================================"

# system's version about centos
release = 7

sudo cd /etc/yum.repos.d & touch nginx.repo

echo "
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/${release}/$basearch/
gpgcheck=0
enabled=1
" > nginx.repo

sudo yum clean all & yum makecache

sudo yum list | grep nginx