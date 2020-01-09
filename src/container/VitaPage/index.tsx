import * as React from "react";
import { connect } from "react-redux";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left } from "./style";
import { Center, Line, Title, SubTitle, Cube } from "./style";
import { Circle, Triangle, LabelLeft, TextLeft, Headline } from "./style";
import { Theline, TheHead, Partition, Item, Clabel } from "./style";
import { CText, Content, CTextarea, Module, SubModule } from "./style";

import { info } from "./data";

function mapStateToProps() {
  return {};
}

class VitaPage extends React.Component<IAppActionProps, any> {
  constructor(props: IAppActionProps) {
    super(props);
    this.state = {
      isConfirmModalShow: false
    };
  }

  render() {
    const { name, position, sub, intention, work, project, education } = info;

    return (
      <Background>
        <Layout>
          <Head>
            <Title>{name}</Title>
            <SubTitle>/{position}</SubTitle>
            <Cube></Cube>
            <Circle></Circle>
            <Triangle></Triangle>
          </Head>
          <Line></Line>
          <Body>
            <Left>
              {Object.keys(sub).map((obj, idx) => (
                <div key={idx}>
                  <LabelLeft>{obj}</LabelLeft>
                  <TextLeft>{sub[obj]}</TextLeft>
                </div>
              ))}
            </Left>
            <Center>
              <Module>
                <Headline>
                  <TheHead>求职意向</TheHead>
                  <Theline></Theline>
                </Headline>
                {Object.keys(intention).map((obj, idx) => (
                  <Item key={idx}>
                    <Clabel>{obj}：</Clabel>
                    <CText>{intention[obj]}</CText>
                  </Item>
                ))}
              </Module>
              <Module>
                <Headline>
                  <TheHead>工作经历</TheHead>
                  <Theline></Theline>
                </Headline>
                {work.map((obj, idx) => (
                  <SubModule key={idx}>
                    <Clabel>{obj.time}</Clabel>
                    <Content>
                      <CText>{obj.name}</CText>
                      <Clabel>{obj.position}</Clabel>
                      <CTextarea>{obj.introduction}</CTextarea>
                    </Content>
                  </SubModule>
                ))}
              </Module>
              <Module>
                <Headline>
                  <TheHead>项目经验</TheHead>
                  <Theline></Theline>
                </Headline>
                {project.map((obj, idx) => (
                  <SubModule key={idx}>
                    <Clabel>{obj.time}</Clabel>
                    <Content>
                      <CText>{obj.name}</CText>
                      <Clabel>项目描述</Clabel>
                      <CTextarea>{obj.introduction}</CTextarea>
                      <Clabel>个人职责</Clabel>
                      <CTextarea>{obj.duty}</CTextarea>
                    </Content>
                  </SubModule>
                ))}
              </Module>
              <Module>
                <Headline>
                  <TheHead>教育经历</TheHead>
                  <Theline></Theline>
                </Headline>
                {education.map((obj, idx) => (
                  <SubModule key={idx}>
                    <Item>
                      <Clabel>{obj.time}</Clabel>
                    </Item>
                    <Content>
                      <CTextarea>{obj.name}</CTextarea>
                    </Content>
                  </SubModule>
                ))}
              </Module>
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

export default connect(mapStateToProps, mapAppActions)(VitaPage);
