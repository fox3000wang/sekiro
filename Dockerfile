# docker 打包配置
#
# 打包的脚本
# docker build -t sekiro:latest .
#
# 启动脚本
# docker run --name sekiro -p80:80 sekiro
FROM nginx:latest

MAINTAINER "fox1000wang@gmail.com"

COPY dist /usr/share/nginx/html
