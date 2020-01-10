# docker 打包配置
#
# 打包的脚本
# docker build -t sekiro:latest .
FROM nginx:latest

MAINTAINER "fox1000wang@gmail.com"

COPY dist /usr/share/nginx/html

