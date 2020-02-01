import { createAction } from "redux-actions";
import { SET_VIST_INFO, IVitaInfo } from "../reducer/app-data";

export const setVitaInfo = createAction<IVitaInfo>(SET_VIST_INFO);
