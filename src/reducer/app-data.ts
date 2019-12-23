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
