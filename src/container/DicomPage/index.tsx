import * as React from "react";
import { connect } from "react-redux";

import { IAppActionProps, mapAppActions } from "../../action";
import {
  Background,
  Layout,
  Head,
  Body,
  Left,
  Center,
  Line,
  Button,
  Icon
} from "./style";

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
            <Button>放大</Button>
            <Button>层级</Button>
            <Button>移动</Button>
            <Button>长度</Button>
            <Button>角度</Button>
            <Button>测量</Button>
            <Button>复原</Button>
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
