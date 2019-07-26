#!/bin/sh

# installing python
yum install -y https://centos7.iuscommunity.org/ius-release.rpm
yum install -y python36u python36u-pip python36u-devel

# checking python's info
python3.6 --version
pip3.6 --version

# update pip's module
pip3.6 install --upgrade pip

# find python's folder
whereis python3.6
whereis pip3.6

# link to python3 & pip3
ln -s /usr/bin/python3.6m /usr/bin/python3
ln -s /usr/bin/pip3.6 /usr/bin/pip3

