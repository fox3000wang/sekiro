import "react-hot-loader/patch";

import * as _ from "lodash";
import { bindActionCreators, Dispatch } from "redux";
import * as common from "./common";

const actionList = {
  common: common
};

export const mapAppActions = (dispatch: Dispatch) => ({
  actions: _.mapValues(actionList, action =>
    bindActionCreators(action, dispatch)
  )
});

export type ActionList = typeof actionList;

export interface IAppActionProps {
  actions: ActionList;
}
export const conbinedActions = actionList;
