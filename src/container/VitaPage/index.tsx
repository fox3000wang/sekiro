import * as React from "react";
import { connect } from "react-redux";

import { IAppActionProps, mapAppActions } from "../../action";
import { Background, Layout, Head, Body, Left, Center, Line } from "./style";
import { Title, SubTitle, Cube, Circle, Triangle } from "./style";

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
              <div>我是侧边栏</div>
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
