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
  Icon,
  Photo
} from "./style";

import * as es6 from "../../assets/vita/es6.png";
import * as react from "../../assets/vita/react.png";
import * as redux from "../../assets/vita/redux.png";
import * as styled from "../../assets/vita/styled-components.png";
import * as css from "../../assets/vita/css3.png";
import * as webpack from "../../assets/vita/webpack.png";
import * as npm from "../../assets/vita/npm.png";
import * as jenkins from "../../assets/vita/jenkins.png";
import * as gitlabci from "../../assets/vita/gitlab-ci.png";
import * as shell from "../../assets/vita/shell.png";
import * as ubuntu from "../../assets/vita/ubuntu.png";
import * as docker from "../../assets/vita/docker.png";
import * as python from "../../assets/vita/python.png";
import * as ts from "../../assets/vita/ts.png";

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
              {this.renderIntention(intention)}
              {this.renderWork(work)}
              {this.renderProject(project)}
              {this.renderEdu()}
              {this.renderTech()}
              {this.renderTech()}
              {this.renderSubTech()}
              {this.renderOther()}
            </Center>
          </Body>
        </Layout>
      </Background>
    );
  }

  renderIntention(intention) {
    return (
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
    );
  }

  renderWork(work) {
    return (
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
    );
  }

  renderProject(project) {
    return (
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
    );
  }

  renderEdu() {
    return (
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
    );
  }

  renderTech() {
    return (
      <Module>
        <Headline>
          <TheHead>专业技能</TheHead>
          <Theline></Theline>
        </Headline>
        <SubModule>
          <Content>
            <Item>
              <Icon bg={es6}>es6</Icon>
              <Progress>
                <Bar width={75} />
              </Progress>
            </Item>
            <Item>
              <Icon bg={webpack}>webpack</Icon>
              <Progress>
                <Bar width={75} />
              </Progress>
            </Item>
            <Item>
              <Icon bg={react}>react</Icon>
              <Progress>
                <Bar width={85} />
              </Progress>
            </Item>
            <Item>
              <Icon bg={redux}>redux</Icon>
              <Progress>
                <Bar width={70} />
              </Progress>
            </Item>
            <Item>
              <Icon bg={css}>css3</Icon>
              <Progress>
                <Bar width={85} />
              </Progress>
            </Item>
            <Item>
              <Icon bg={styled}>styled-components</Icon>
              <Progress>
                <Bar width={82} />
              </Progress>
            </Item>
          </Content>
        </SubModule>
      </Module>
    );
  }

  renderSubTech() {
    return (
      <Module>
        <Headline>
          <TheHead>附属技能</TheHead>
          <Theline></Theline>
        </Headline>
        <SubModule>
          <Content>
            <Label>自动化集成</Label>
            <Item>
              <Icon bg={npm}>npm</Icon>
              <Icon bg={gitlabci}>gitlab-ci</Icon>
              <Icon bg={jenkins}>jenkins</Icon>
            </Item>
          </Content>
        </SubModule>
        <SubModule>
          <Content>
            <Label>服务器</Label>
            <Item>
              <Icon bg={shell}>shell</Icon>
              <Icon bg={ubuntu}>ubuntu</Icon>
              <Icon bg={docker}>docker</Icon>
            </Item>
          </Content>
        </SubModule>
        <SubModule>
          <Content>
            <Label>其他语言</Label>
            <Item>
              <Icon bg={python}>pyton</Icon>
              <Icon bg={ts}>TypeScript</Icon>
            </Item>
          </Content>
        </SubModule>
      </Module>
    );
  }

  renderOther() {
    return (
      <Module>
        <Headline>
          <TheHead>其他</TheHead>
          <Theline></Theline>
        </Headline>
        <SubModule>
          <Content>
            <Label>大头照</Label>
            <Item>
              <Photo></Photo>
            </Item>
          </Content>
        </SubModule>
        <SubModule>
          <Content>
            <Label>信奉原则：</Label>
            <Item>KISS，DRY</Item>
          </Content>
        </SubModule>
        <SubModule>
          <Content>
            <Label>开发环境：</Label>
            <Item>Macbook + 辅助屏</Item>
          </Content>
        </SubModule>
        <SubModule>
          <Content>
            <Label>家庭状况：</Label>
            <Item>
              居住在浦东，已婚，有{new Date().getFullYear() - 2018}
              岁女儿一枚
            </Item>
          </Content>
        </SubModule>
        <SubModule>
          <Content>
            <Label>联系方式：</Label>
            <Item>微信/手机：13482123330</Item>
          </Content>
        </SubModule>
      </Module>
    );
  }
}

export default connect(mapStateToProps, mapAppActions)(VitaPage);
