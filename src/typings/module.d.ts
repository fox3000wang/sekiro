/* tslint:disable */
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.xml';
declare module '*.json';
declare module '*.css';

declare module '*.mp3';
declare module '*.wav';

type reduxDispatch = (action: any) => void;

interface Window {
  startMock: (apiName: any, axios: any) => void;
  stopMock: (apiName: any, axios: any) => void;

  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (args: any) => any;
  __AOC_STORE__: any;
  __GET_ROOM_SUMMARY__: () => any;
  __GET_SHARE_DOM_RECT__: () => any;
  __UPDATE_SCREEN_SHARE__: () => void;
  next: number;
  zE: any;
  require: (...args: any) => any;
  exp: Experiments;
}
