#!/bin/sh

if ! command -v nginx > dev/null 2>&1; then
    echo "================================"
    echo "Nginx's Environment"
    echo "================================"

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

    sudo yum install -y nginx

    echo "================================"
    echo "Complete, Yes !!!!!"
    echo "================================"
fi

if ! command -v node > dev/null 2>&1; then 
    echo "================================"
    echo "Nodejs's Environment"
    echo "================================"  

    wget https://npm.taobao.org/mirrors/node/v10.15.1/node-v10.15.1-linux-x64.tar.xz
    sudo mkdir -p /usr/local/lib/nodejs
    sudo tar -xJvf node-v10.15.1-linux-x64.tar.xz
    sudo mv node-v10.15.1-linux-x64 /usr/local/lib/nodejs/node-v10.15.1
    sudo rm -rf node-v10.15.1-linux-x64.tar.xz

    ls /usr/local/lib/nodejs

    echo "export NODE_HOME=/usr/local/lib/nodejs/node-v10.15.1" >> /etc/profile
    echo "export PATH='$PATH':'$NODE_HOME'/bin" >> /etc/profile
    echo "export NODE_PATH='$NODE_HOME'/lib/node_modules" >> /etc/profile

    source /etc/profile

    npm -version
    npm config set registry https://registry.npm.taobao.org
    npm install -g yarn

    echo "================================"
    echo "Complete, Yes !!!!!"
    echo "================================"  
fi

git pull origin master

if [ -d "node_modules" ] then

rm -rf node_modules

fi

echo "================================"
echo "Start Deploying Projects ......."
echo "================================" 

yarn
yarn build

cp dist /usr/share/nginx/html
cp nginx.conf /etc/nginx/conf.d

echo "================================"
echo "Deploying completely !!!!!!!!!!!"
echo "================================" 