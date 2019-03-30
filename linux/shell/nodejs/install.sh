#!/bin/sh

# 优先更新源
sudo apt update -y

echo "============================================"
echo "Nodejs Install"
echo "============================================"

# 配置 nodejs 的 lts 版本
sudo apt install -y nodejs
# 需要手动安装 npm，默认不存在
sudo apt install -y npm

# 升级 npm 版本
sudo npm install -g npm@latest

# 配置 nodejs 的版本管理
sudo npm install -g n

# 配置 yarn
sudo npm install -g yarn

# 配置对应的镜像源管理工具
sudo npm install -g nrm
sudo npm install -g yrm

# 配置 C++ 环境，用于 nodejs 的编译
sudo apt install build-essential

echo "============================================"
echo "Complete !!!"
echo "============================================"