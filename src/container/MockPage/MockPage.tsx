import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { IAppActionProps, mapAppActions } from "../../action";

const Button = styled.button`
  height: 0.5rem;
  line-height: 0.5rem;
  flex: 1 0 auto;
  font-size: 0.15rem;
  margin: 0.1rem;
`;

function mapStateToProps() {
  return {};
}

@connect(mapStateToProps, mapAppActions)
export default class MockPage extends React.Component<IAppActionProps, any> {
  state: any;
  dom: any;

  constructor(props: IAppActionProps) {
    super(props);
    this.state = {
      isConfirmModalShow: false
    };
  }

  render() {
    return (
      <div
        style={{
          marginTop: "30%",
          marginLeft: "25%"
        }}
        ref={dom => (this.dom = dom)}
      >
        <Button>I'm here!</Button>
      </div>
    );
  }
}
