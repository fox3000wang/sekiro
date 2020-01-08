import * as React from "react";
import { connect } from "react-redux";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left, Center, Line } from "./style";
import { Title, SubTitle, Cube, Circle, Triangle } from "./style";
import { Label, Text, Headline, Theline, TheHead } from "./style";
import { Partition, Item, Clabel, CText, Content } from "./style";

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
              <Partition></Partition>
              <Headline>
                <TheHead>教育经历</TheHead>
                <Theline></Theline>
              </Headline>
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
