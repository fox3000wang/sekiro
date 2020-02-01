import "react-hot-loader/patch";
import { bindActionCreators, Dispatch } from "redux";
import * as _ from "lodash";

import * as common from "./common";
import * as vita from "./vita";

/**
 * 模块和模块直接分离各自的action
 */
const actionList = {
  common: common,
  vita: vita
};

export const mapAppActions = (dispatch: Dispatch) => ({
  actions: _.mapValues(actionList, action =>
    bindActionCreators(action as any, dispatch)
  )
});

export type ActionList = typeof actionList;

export interface IAppActionProps {
  actions: ActionList;
}
export const conbinedActions = actionList;
export const AppActions = actionList;
