interface IApiType {
  [key: string]: any;
  path: string;
  method: string;
  payload?: any;
  headers?: any;
  name: string;
}
