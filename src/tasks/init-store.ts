import thunk from "redux-thunk";
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
  bindActionCreators
} from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { createBrowserHistory as createHistory } from "history";
import reducers from "../reducer";
import { conbinedActions } from "../action";

const ignoreAction = {
  SEND_AOC_DATA: true,
  "finish: SEND_AOC_DATA": true,
  HANDLER_FOR: true,
  SET_LEFT_TIME: true
};

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

  const middlewares = [thunk, routerMiddleware(history)];

  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  const actions = _.mapValues(conbinedActions, action =>
    bindActionCreators(action, store.dispatch)
  );

  window.__AOC_STORE__ = store;

  window.__GET_ROOM_SUMMARY__ = () => {
    return getRoomSummary$(store.getState() as any);
  };

  return Promise.resolve({ ...context, ...{ store, history, actions } });
};
