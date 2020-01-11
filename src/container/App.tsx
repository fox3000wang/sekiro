import * as React from "react";
import { Switch, Route } from "react-router";
import VitaPage from "./VitaPage";

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
          <Route path="/" component={VitaPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
