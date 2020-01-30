/* tslint:disable */
declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.xml";
declare module "*.json";
declare module "*.css";
declare module "*.mp3";
declare module "*.wav";

type reduxDispatch = (action: any) => void;

interface Window {
  startMock: (apiName: any, axios: any) => void;
  stopMock: (apiName: any, axios: any) => void;

  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (args: any) => any;
  __STORE__: any;
  require: (...args: any) => any;
  exp: Experiments;
}
