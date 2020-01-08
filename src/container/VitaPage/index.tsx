import * as React from "react";
import { connect } from "react-redux";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left, Center, Line } from "./style";
import { Title, SubTitle, Cube, Circle, Triangle } from "./style";
import { Label, Text } from "./style";

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
              <div>照片区</div>
            </Center>
          </Body>
        </Layout>
      </Background>
    );
  }
}

export default connect(mapStateToProps, mapAppActions)(DicomPage);
