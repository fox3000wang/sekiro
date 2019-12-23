import * as React from "react";
import { connect } from "react-redux";
import { IAppActionProps, mapAppActions } from "../../action";

import { Background, Layout, Head, Body, Left, Center, Right } from "./style";

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
            <div>我是工具栏</div>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
          </Head>
          <Body>
            <Left>
              <div>我是侧边栏</div>
            </Left>
            <Center>
              <div>照片区</div>
            </Center>
            <Right>
              <div>右侧边栏</div>
            </Right>
          </Body>
        </Layout>
      </Background>
    );
  }
}

export default connect(mapStateToProps, mapAppActions)(DicomPage);
