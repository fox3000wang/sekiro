import * as React from "react";
import { connect } from "react-redux";

import { IAppActionProps, mapAppActions } from "../../action";
import { info } from "./data";
import {
  Background,
  Layout,
  Head,
  Body,
  Left,
  Center,
  Line,
  Title,
  SubTitle,
  Cube,
  Circle,
  Triangle,
  LabelLeft,
  TextLeft,
  Headline,
  Theline,
  TheHead,
  Item,
  Label,
  Text,
  Textarea,
  Content,
  Module,
  SubModule,
  Progress,
  Bar,
  Icon
} from "./style";

import * as react from "../../assets/vita/react.png";
import * as css from "../../assets/vita/css3.png";
import * as webpack from "../../assets/vita/webpack.png";
import * as npm from "../../assets/vita/npm.png";

import * as jenkins from "../../assets/vita/jenkins.png";
import * as gitlabci from "../../assets/vita/gitlab-ci.png";
import * as shell from "../../assets/vita/shell.png";
import * as ubuntu from "../../assets/vita/ubuntu.png";

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
                  <TheHead>专业技能</TheHead>
                  <Theline></Theline>
                </Headline>
                <SubModule>
                  <Content>
                    <Item>
                      <Icon bg={react}>react</Icon>
                      <Progress>
                        <Bar width={0.8 * 100} />
                      </Progress>
                    </Item>
                    <Item>
                      <Icon bg={css}>css3</Icon>
                      <Progress>
                        <Bar width={0.8 * 100} />
                      </Progress>
                    </Item>
                    <Item>
                      <Icon bg={webpack}>webpack</Icon>
                      <Progress>
                        <Bar width={0.7 * 100} />
                      </Progress>
                    </Item>
                  </Content>
                </SubModule>
              </Module>
              <Module>
                <Headline>
                  <TheHead>附属技能</TheHead>
                  <Theline></Theline>
                </Headline>
                <SubModule>
                  <Content>
                    <Text>自动化集成</Text>
                    <Item>
                      <Icon bg={jenkins}>jenkins</Icon>
                      <Icon bg={gitlabci}>gitlab-ci</Icon>
                      <Icon bg={shell}>shell</Icon>
                      <Icon bg={ubuntu}>ubuntu</Icon>
                    </Item>
                  </Content>
                </SubModule>
              </Module>
              <Module>
                <Headline>
                  <TheHead>求职意向</TheHead>
                  <Theline></Theline>
                </Headline>
                {Object.keys(intention).map((obj, idx) => (
                  <Item key={idx}>
                    <Label>{obj}：</Label>
                    <Text>{intention[obj]}</Text>
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
                    <Label>{obj.time}</Label>
                    <Content>
                      <Text>{obj.name}</Text>
                      <Label>{obj.position}</Label>
                      <Textarea>{obj.introduction}</Textarea>
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
                    <Label>{obj.time}</Label>
                    <Content>
                      <Text>{obj.name}</Text>
                      <Label>项目描述</Label>
                      <Textarea>{obj.introduction}</Textarea>
                      <Label>个人职责</Label>
                      <Textarea>{obj.duty}</Textarea>
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
                      <Label>{obj.time}</Label>
                    </Item>
                    <Content>
                      <Textarea>{obj.name}</Textarea>
                    </Content>
                  </SubModule>
                ))}
              </Module>
            </Center>
          </Body>
        </Layout>
      </Background>
    );
  }
}

export default connect(mapStateToProps, mapAppActions)(VitaPage);
