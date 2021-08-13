#!/bin/bash
docker build -t uni-arts-frontend -f Dockerfile  .
docker tag uni-arts-frontend registry.cn-hongkong.aliyuncs.com/tatmas/uni-arts-frontend:php
docker login --username=lixiumiao@1837074167842277 registry.cn-hongkong.aliyuncs.com
docker push registry.cn-hongkong.aliyuncs.com/tatmas/uni-arts-frontend:php
