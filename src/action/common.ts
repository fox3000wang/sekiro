import { createAction } from "redux-actions";

import { APP_READY } from "../reducer/app-data";
export const setConfig = createAction<any>(APP_READY);
