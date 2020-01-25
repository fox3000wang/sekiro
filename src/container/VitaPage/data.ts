export const info = {
  name: `王志明`,
  position: `H5前端研发工程师`,
  sub: {
    英文名: `Fox`,
    性别: `男`,
    年龄: `${new Date().getFullYear() - 1981}岁`,
    工作地点: `上海浦东`,
    工龄: `${new Date().getFullYear() - 2006}年`,
    政治面貌: `群众`
  },
  intention: {
    工作类型: `全职`,
    期望月薪: `15000+RMB/月`,
    期望职业: `H5前端研发`,
    期望行业: `任意`
  },
  work: [
    {
      time: `2010年08月 - 2019年08月`,
      name: `上海钦文信息科技有限公司 (爱乐奇)`,
      position: `H5前端研发工程师`,
      introduction: `本人于2010年08月入职担任软件工程师一职。主要负责公司的一系列少儿英语培训教学软件项目前端的研发工作，同时也公司内部工具项目开发，项目自动化集成，自动化运维，数据分析等工作。`
    },
    {
      time: `2006年11月 - 2009年04月`,
      name: `上海立派信息科技有限公司`,
      position: `对日软件开发工程师`,
      introduction: `主要负责是对日外包项目的开发和测试，项目的业务主要是物流方面的，用的主要技术是java和oracle。通过业余时间的学习，获得了《Oracle Certified Associate》证书`
    }
  ],
  project: [
    {
      time: `2017年05月 - 2019年08月`,
      name: `爱乐奇视频外教-线上智慧课堂(pc端mac端)(已上线)`,
      introduction:
        `职位名称：HTML5前端工程师\n` +
        `项目规模：前端5人，后端，QA，运维若干。\n` +
        `项目简介：视频外教是爱乐奇公司为培训学校提供的一套教学解决方案。通过在线视频，让外教老师授课，提升学员英语听说和应用能力。（https://www.alo7.com/services/izj.html）\n` +
        `主要技术栈：\n` +
        `1. 底层：js(ES6), TS。\n` +
        `用TS的目的是TS数据要求带有明确的类型，便于在项目逐渐变大以后方便团队协作。\n` +
        `2. 封装：electron 解决了跨平台，自动更新，安装应用\n` +
        `3. UI:css3，rem，styled-components\n` +
        `styled-components可以解决css中不能带逻辑，可以减少css相关的代码。\n` +
        `rem可以解决在不同分辨率显示器页面展现问题\n` +
        `4. 渲染层: react提升UI渲染性能，提高用户体验。 UI组件模块化，提高可复用性。 \n` +
        `5.视频服务由第三方提供`,
      duty:
        `主要负责视频外教项目的pc端和mac端的开发，视频流服务商对接。\n` +
        `具体内容包括：\n` +
        `1.根据产品设计师提供的PRD和交互设计师提供的UI，开发并实现学生端，教师端相关页面开发，动画特效。 主要技术栈：electron，react，styled-components，rem\n` +
        `2.根据运维要求，每两周一次功能迭代，自动化集成发布上线。主要技术栈：webpack, glup, gitlab-ci, jenkins, docker, shell。\n` +
        `3.采集用户相关的数据和错误栈，管理和监控项目健康状况。 主要技术栈：kibana，elasticsearch, bi。`
    },
    {
      time: `2015年04月 - 2017年01月`,
      name: `老师教学中心-互动课件(pc端mac端)(已上线)`,
      introduction:
        `职位名称：HTML5前端工程师\n` +
        `主要技术栈：electron + JS + react + flash/as3\n` +
        `项目规模：前端平台端4人，前端内容端、后端、QA若干。\n` +
        `项目简介：项目主要是用于电子互动白板上运行的课件。`,
      duty:
        `主要负责平台端和内容端相关开发\n` +
        `具体内容：\n` +
        `1. 前端部分UI功能。 主要技术栈：react css3\n` +
        `2. 内容端部分题型实现。主要技术栈：react css3\n` +
        `3. 内容端的PPT播放器功能实现。 主要技术栈： keynote，js`
    }
  ],
  education: [
    {
      time: `2000年09月 - 2004年06月`,
      name: `中南大学 计算机科学与技术专业 本科`
    }
  ]
};
