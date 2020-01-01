import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router";
import { AppContainer } from "react-hot-loader";
export const ExperimentsContext = React.createContext("Experiments"); // must before app
import App from "../container/App";

function renderApp(store: any, history: any, exp: any) {
  // eslint-disable-next-line
  return ReactDOM.render(
    <AppContainer>
      <ExperimentsContext.Provider value={exp}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Route path="/" component={App} />
          </ConnectedRouter>
        </Provider>
      </ExperimentsContext.Provider>
    </AppContainer>,
    document.getElementById("root")
  );
}

declare var module;

export default context => {
  renderApp(context.store, context.history, context.exp);
  // Webpack Hot Module Replacement API
  if (module.hot) {
    // module.hot.accept('../container/App', () => renderApp(context.store, context.history));
  }
  return Promise.resolve(context);
};
