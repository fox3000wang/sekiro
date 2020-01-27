import thunk from "redux-thunk";
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
  bindActionCreators
} from "redux";
import { createBrowserHistory as createHistory } from "history";
import reducers from "../reducer";
import { conbinedActions } from "../action";

const ignoreAction = {};

export interface IDependency {
  api: Api;
  exp: AOCExperiment;
  service: ServiceProxy;
}

export default (context: any) => {
  // use chrome extension
  const composeEnhancers = compose;

  // history
  const history = createHistory();

  const store = createStore(
    combineReducers({
      ...reducers
    })
  );

  window.__AOC_STORE__ = store;

  return Promise.resolve({ ...context, ...{ store, history } });
};
