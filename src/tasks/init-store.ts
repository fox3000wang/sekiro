import {
  configureStore,
  getDefaultMiddleware,
  createSerializableStateInvariantMiddleware
} from "redux-starter-kit";
import * as _ from "lodash";
import thunk from "redux-thunk";
import { AppActions } from "../action";
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
  bindActionCreators,
  AnyAction,
  Action
} from "redux";
import { createBrowserHistory as createHistory } from "history";
import reducers from "../reducer";
import { conbinedActions, mapAppActions } from "../action";
import { Dispatch } from "react";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { actions } from "@storybook/addon-actions";

const ignoreAction = {};

const catchErrorMiddleware = (store: any) => (next: Dispatch<AnyAction>) => (
  action: Action
) => {
  try {
    next(action);
  } catch (e) {
    setTimeout(() => {
      // TODO:
      // sendErrorLog("unhandled_action_error", ERROR_ACTION_ERROR, e, {
      //   erroStack: e.stack
      // });
    });
  }
};

export interface IDependency {
  api: Api;
  exp: AOCExperiment;
  service: ServiceProxy;
}

export default (context: any) => {
  // use chrome extension
  const composeEnhancers = compose;

  const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable: val => {
      return (
        val === null ||
        typeof val === "undefined" ||
        typeof val === "string" ||
        typeof val === "boolean" ||
        typeof val === "number" ||
        typeof val === "function" ||
        typeof val === "object" ||
        Array.isArray(val)
      );
    }
  });

  const starterKitDefaultMiddleware = getDefaultMiddleware();
  starterKitDefaultMiddleware.length > 1
    ? (starterKitDefaultMiddleware[
        starterKitDefaultMiddleware.length - 1
      ] = serializableMiddleware)
    : null;

  // history
  const history = createHistory();

  // const store = configureStore({
  //   // 目前 devTools 无法自定义,所以不支持以前的白名单了,已经有 prhttps://github.com/reduxjs/redux-starter-kit/pull/130/files
  //   devTools: true,
  //   reducer: reducers,
  //   middleware: [...starterKitDefaultMiddleware, catchErrorMiddleware]
  // });

  const middlewares = [thunk, routerMiddleware(history)];

  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  const actions = _.mapValues(AppActions, action =>
    bindActionCreators(action as any, store.dispatch)
  );

  window.__AOC_STORE__ = store;

  return Promise.resolve({ ...context, ...{ store, history, actions } });
};
