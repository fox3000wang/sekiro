import { createAction } from "redux-actions";
import { APP_READY } from "../reducer/app-data";

export const setIsReady = createAction<boolean>(APP_READY);
