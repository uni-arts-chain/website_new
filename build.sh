#!/bin/bash
docker build -t uni-arts-frontend -f Dockerfile  .
docker tag uni-arts-frontend registry.cn-hongkong.aliyuncs.com/uniarts/uni-arts-frontend:php
docker login --username=jieliantech --password=tatmas2020 registry.cn-hongkong.aliyuncs.com
docker push registry.cn-hongkong.aliyuncs.com/uniarts/uni-arts-frontend:php
