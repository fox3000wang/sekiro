import { combineReducers } from "redux";
import { handleAction } from "redux-actions";
import { handleActions } from "redux-actions";
import { AppEnv } from "../tasks/init-env";
import { returnPayload } from "../utils/reducerHelper";

export const appConfig = handleActions<any, AppEnv>({}, {});

export const APP_READY = "APP_READY";
const isReady = handleAction<boolean, boolean>(APP_READY, returnPayload, false);

export const SET_VIST_INFO = "SET_VIST_INFO";
export interface IVitaInfo {
  info?: any;
  work?: any;
  project?: any;
  education: any;
  tech: any;
  subTech: any;
}
const vitaInfo = handleAction<IVitaInfo, IVitaInfo>(
  SET_VIST_INFO,
  returnPayload,
  null
);

export type AppData = {
  isReady: boolean;
  vitaInfo: IVitaInfo;
};

const appDataReducer = combineReducers<AppData>({
  isReady,
  vitaInfo
});

export type AppDataReducer = typeof appDataReducer;
export default appDataReducer;
