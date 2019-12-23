import * as React from "react";
import { Switch, Route } from "react-router";

import MockPage from "./MockPage/MockPage";
import I18nPage from "./i18n";

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
          <Route path="/" component={MockPage} />
          <Route path="/i18n" component={I18nPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
