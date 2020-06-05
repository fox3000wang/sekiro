import * as React from "react";
import { connect } from "react-redux";

import { RootState } from "../../reducer";
import { IAppActionProps, mapAppActions } from "../../action";
import * as data from "./data";
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
  Photo,
  Github,
  Foot,
} from "./style";
import { setVitaInfo } from "../../action/vita";
import { getVisaInfo } from "../../services/api-service";

function mapStateToProps(state: RootState) {
  const { vitaInfo } = state.appData;
  return { vitaInfo };
}

function renderOther() {
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
          <Item>DRY K.I.S.S. Keep Learning</Item>
        </Content>
      </SubModule>
      <SubModule>
        <Content>
          <Label>开发环境：</Label>
          <Item>Macbook, vscode</Item>
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
          <Label>职业状况：</Label>
          <Item>离职，可一周内到岗</Item>
        </Content>
      </SubModule>
      <SubModule>
        <Content>
          <Label>联系方式：</Label>
          <Item>微信/手机：13482123330</Item>
        </Content>
      </SubModule>
      <SubModule>
        <Content>
          <Label>托管</Label>
          <Item>aws(wangzm.cn) </Item>
        </Content>
      </SubModule>
    </Module>
  );
}

class VitaPage extends React.Component<IAppActionProps, any> {
  constructor(props: IAppActionProps) {
    super(props);
    this.state = {
      isConfirmModalShow: false,
    };
  }

  componentDidMount() {
    const { tech, subTech } = data;
    getVisaInfo(null)
      .then((response) => {
        console.log(response);
        const { info, work, project, education } = response.data;
        window.__STORE__.dispatch(
          setVitaInfo({ info, work, project, education, tech, subTech })
        );
      })
      .catch(() => {
        // 服务器忘记启动了就加载本地数据，不会翻车。
        const { info, work, project, education } = data;
        window.__STORE__.dispatch(
          setVitaInfo({ info, work, project, education, tech, subTech })
        );
      });
  }

  render() {
    const { vitaInfo } = this.props;
    if (!vitaInfo) {
      return <div></div>;
    }

    const { info, work, project, education, tech, subTech } = vitaInfo;
    const { name, position, intention, sub } = info;

    return (
      <Background>
        <Layout>
          <Head>
            <Title>{name}</Title>
            <SubTitle>/{position}</SubTitle>
            <Github href="https://github.com/fox3000wang/sekiro"></Github>
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
              {this.renderEducation(education)}
              {this.renderTech(tech)}
              {this.renderSubTech(subTech)}
              {renderOther()}
            </Center>
          </Body>
          <Foot>桂ICP备20000524号</Foot>
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

  renderEducation(education) {
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

  renderTech(tech) {
    return (
      <Module>
        <Headline>
          <TheHead>专业技能</TheHead>
          <Theline></Theline>
        </Headline>
        {tech.map((obj, idx) => (
          <SubModule key={idx}>
            <Content>
              <Item>
                <Icon bg={obj.bg}>{obj.name}</Icon>
                <Progress>
                  <Bar width={obj.width} />
                </Progress>
              </Item>
            </Content>
          </SubModule>
        ))}
      </Module>
    );
  }

  renderSubTech(subTech) {
    return (
      <Module>
        <Headline>
          <TheHead>附属技能</TheHead>
          <Theline></Theline>
        </Headline>
        {subTech.map((obj, idx) => (
          <SubModule key={idx}>
            <Content>
              <Label>{obj.category}</Label>
              <Item>
                {obj.tech.map((o, i) => (
                  <Icon key={i} bg={o.bg}>
                    {o.name}
                  </Icon>
                ))}
              </Item>
            </Content>
          </SubModule>
        ))}
      </Module>
    );
  }
}

export default connect(mapStateToProps, mapAppActions)(VitaPage);
