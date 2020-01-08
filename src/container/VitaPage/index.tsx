import * as React from "react";
import { connect } from "react-redux";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left, Center, Line } from "./style";
import { Title, SubTitle, Cube, Circle, Triangle } from "./style";
import { Label, Text, Headline, Theline, TheHead } from "./style";
import { Partition, Item, Clabel, CText, Content, CTextarea } from "./style";

function mapStateToProps() {
  return {};
}

class DicomPage extends React.Component<IAppActionProps, any> {
  constructor(props: IAppActionProps) {
    super(props);
    this.state = {
      isConfirmModalShow: false
    };
  }

  render() {
    return (
      <Background>
        <Layout>
          <Head>
            <Title>王志明</Title>
            <SubTitle>/H5前端研发工程师</SubTitle>
            <Cube></Cube>
            <Circle></Circle>
            <Triangle></Triangle>
          </Head>
          <Line></Line>
          <Body>
            <Left>
              <Label>性别</Label>
              <Text>男</Text>
              <Label>年龄</Label>
              <Text>39岁</Text>
              <Label>工作地点</Label>
              <Text>上海浦东</Text>
              <Label>工龄</Label>
              <Text>14年</Text>
            </Left>
            <Center>
              <Headline>
                <TheHead>求职意向</TheHead>
                <Theline></Theline>
              </Headline>
              <Item>
                <Clabel>工作类型：</Clabel>
                <CText>全职</CText>
              </Item>
              <Item>
                <Clabel>期望月薪：</Clabel>
                <CText>15000RMB/月</CText>
              </Item>
              <Item>
                <Clabel>期望职业：</Clabel>
                <CText>H5前端研发,JS全栈工程师</CText>
              </Item>
              <Item>
                <Clabel>期望行业：</Clabel>
                <CText>任意</CText>
              </Item>
              <Partition></Partition>
              <Headline>
                <TheHead>工作经历</TheHead>
                <Theline></Theline>
              </Headline>
              <Clabel>2010年08月 - 2019年08月</Clabel>
              <Content>
                <CText>上海钦文信息科技有限公司 (爱乐奇)</CText>
                <Clabel>前端软件开发工程师</Clabel>
                <CText>
                  本人于2010年08月担任软件工程师一职。主要负责公司的一系列少儿英语培训教学软件项目前端的开发工作，同时也公司内部工具项目开发，数据分析，项目自动化集成，自动化运维工作。
                </CText>
              </Content>
              <Partition></Partition>
              <Clabel>2006年11月 - 2009年04月</Clabel>
              <Content>
                <CText>上海立派信息科技有限公司</CText>
                <Clabel>软件开发工程师</Clabel>
                <CText>
                  主要负责是对日外包项目的开发和测试，项目的业务主要是物流方面的，用的主要技术是java和oracle。通过业余时间的学习，获得了《Oracle
                  Certified Associate》证书
                </CText>
              </Content>
              <Partition></Partition>
              <Headline>
                <TheHead>项目经验</TheHead>
                <Theline></Theline>
              </Headline>
              <Clabel>2017年05月 - 2019年08月</Clabel>
              <Content>
                <CText>爱乐奇视频外教-线上智慧课堂(pc端mac端)(已上线)</CText>
                <Clabel>项目描述</Clabel>
                <CTextarea>
                  {`职位名称：HTML5前端工程师\n` +
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
                    `5.视频服务由第三方提供`}
                </CTextarea>
                <Clabel>个人职责:</Clabel>
                <CTextarea>
                  {`主要负责视频外教项目的pc端和mac端的开发，视频流服务商对接。\n` +
                    `具体内容包括：\n` +
                    `1.根据产品设计师提供的PRD和交互设计师提供的UI，开发并实现学生端，教师端相关页面开发，动画特效。 主要技术栈：electron，react，styled-components，rem\n` +
                    `2.根据运维要求，每两周一次功能迭代，自动化集成发布上线。主要技术栈：webpack, glup, gitlab-ci, jenkins, docker, shell。\n` +
                    `3.采集用户相关的数据和错误栈，管理和监控项目健康状况。 主要技术栈：kibana，elasticsearch, bi。`}
                </CTextarea>
              </Content>
              <Partition></Partition>
              <Clabel>2015年04月 - 2017年01月</Clabel>
              <Content>
                <CText>老师教学中心-互动课件(pc端mac端)(已上线)</CText>
                <Clabel>项目描述</Clabel>
                <CTextarea>
                  {`职位名称：HTML5前端工程师\n` +
                    `主要技术栈：electron + JS + react + flash/as3\n` +
                    `项目规模：前端平台端4人，前端内容端、后端、QA若干。\n` +
                    `项目简介：项目主要是用于电子互动白板上运行的课件。`}
                </CTextarea>
                <Clabel>个人职责:</Clabel>
                <CTextarea>
                  {`主要负责平台端和内容端相关开发\n` +
                    `具体内容：\n` +
                    `1. 前端部分UI功能。 主要技术栈：react css3\n` +
                    `2. 内容端部分题型实现。主要技术栈：react css3\n` +
                    `3. 内容端的PPT播放器功能实现。 主要技术栈： keynote，js`}
                </CTextarea>
              </Content>
              <Partition></Partition>
              <Headline>
                <TheHead>教育经历</TheHead>
                <Theline></Theline>
              </Headline>
              <Item>
                <Clabel>2000年09月 - 2004年06月 </Clabel>
              </Item>
              <Content>
                <CTextarea>中南大学 计算机科学与技术专业 本科</CTextarea>
              </Content>

              <Partition></Partition>
              <Headline>
                <TheHead>专业技能</TheHead>
                <Theline></Theline>
              </Headline>
            </Center>
          </Body>
        </Layout>
      </Background>
    );
  }
}

export default connect(mapStateToProps, mapAppActions)(DicomPage);
