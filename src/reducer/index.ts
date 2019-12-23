import appData, { AppData } from "./app-data";

const State = {
  appData: appData
};

export type RootState = {
  readonly appData: AppData;
};
export default State;
