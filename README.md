# sekiro

![](cover.jpg)

<h3 align="center">
  没有人可以打败你，能打败你的只有你自己。
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/language-typescript-blue.svg">
  <a href="https://travis-ci.org/fox3000wang/sekiro">
    <img src="https://travis-ci.org/fox3000wang/sekiro.svg?branch=beta">
  </a>
  <a href="https://codecov.io/gh/fox3000wang/sekiro">
    <img src="https://codecov.io/gh/fox3000wang/sekiro/branch/beta/graph/badge.svg" />
  </a>
  <a href="https://hub.docker.com/r/fox3000wang/sekiro/builds">
    <img src="https://img.shields.io/docker/cloud/build/fox3000wang/sekiro?style=flat-square"/>
  </a>
  <a href="https://codebeat.co/projects/github-com-fox3000wang-sekiro-beta">
  <img src="https://codebeat.co/badges/76d66b0a-9451-4921-a106-38bb71904b03" /></a>
</p>

## 简介

基于 js/ts,react 开发的 H5 项目.

H5 的项目涉及的技术非常多，如果其中一到两个卡住了，非常容易被劝退。这个项目只是把相关的技术串联起来，作为新手做参考，可以少走弯路。

目前只是初期阶段，很多地方还不完善。

## 如何使用

初始化

```
npm i
```

调试

```
npm d
```

构建

```
npm build
```

### client 端访问 server 端如果不做特殊处理会导致跨域的问题，解决的办法是用 Nginx 做个代理

```
  # 编辑nginx.conf配置文件
  server{
    listen 80;
    server_name localhost;
    location / {
      proxy_pass http://localhost:8888;
    }
    location ^~/vita {
      proxy_pass http://localhost:9999;
    }
  }
```

## 项目背景

从上一家公司离职，休息了半年，投简历的时候发现每家招聘网站的简历用起来都不爽，索性自己做一个。

为什么叫只狼? 因为本人觉得麻烦别人帮忙非常不好意思，除非是项目级别的事情，自己可以解决的事情都想办法自己解决了。

## 封面故事(无剧透)

《只狼》是由 From Software 开发与动视发行，总监宫崎英高，于 2019 年 3 月 22 日发售并获得了 2019 年 TGA 年度最佳游戏奖项。

主角只狼，在被斩下一只手的情况下，面对无数的强敌，都不退缩，披荆斩棘最后救下了皇子。（我编不下去了）

其实就是面对困难的时候，无论处境多么糟糕，都要直面困难，想尽办法去克服他，而不是去逃避，逃避的结果就是借高利贷，出来混早晚要还的。

在无数的试错中，获取最后的成功。

![](smile.jpg)

## 作者的 PSN 卡片

<img src="https://card.psnprofiles.com/2/fox_wang_163.png">

## 许可

![](https://img.shields.io/badge/licence-mit-green.svg)
