import "react-hot-loader/patch";
import { bindActionCreators, Dispatch } from "redux";
import * as common from "./common";

const actionList = {
  common: common
};

export const mapAppActions = (dispatch: Dispatch) => ({});

export type ActionList = typeof actionList;

export interface IAppActionProps {
  actions: ActionList;
}
export const conbinedActions = actionList;
