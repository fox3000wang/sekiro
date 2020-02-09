import * as React from "react";
import { Switch, Route } from "react-router";
import { VITA, CSS } from "../consts/route-names";
import VitaPage from "./VitaPage";
import CSSPage from "./CSSPage";

class App extends React.Component<any, any> {
  static displayName = "App";

  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <Switch>
          <Route path={CSS} component={CSSPage} />
          <Route path={VITA} component={VitaPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
