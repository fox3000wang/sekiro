// 三大原则
// 1.单一数据源
//   整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
// 2.State 是只读的
//   唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
// 3.使用纯函数来执行修改
//   为了描述 action 如何改变 state tree ，你需要编写 reducers。

import { combineReducers } from "redux";
import { handleAction } from "redux-actions";
import { handleActions } from "redux-actions";
import { AppEnv } from "../tasks/init-env";
import { returnPayload } from "../utils/reducerHelper";

export const appConfig = handleActions<any, AppEnv>({}, {});
export const APP_READY = "APP_READY";

const isReady = handleAction<boolean, boolean>(APP_READY, returnPayload, false);

export type AppData = {
  isReady: boolean;
};

const appDataReducer = combineReducers<AppData>({
  isReady
});

export type AppDataReducer = typeof appDataReducer;
export default appDataReducer;
