import * as _ from "lodash";
export default (respoonse: object, isObje: boolean = false) => {
  if (!respoonse) {
    return "empty response";
  } else {
    const status = _.get(respoonse, "status");
    const statusText = _.get(respoonse, "statusText");
    // const data = _.get(respoonse, 'data');
    const reqID = _.get(respoonse, "config.headers.x-request-id");

    const traceId = _.get(respoonse, "headers.traceid");
    return isObje
      ? { status, statusText, reqID, traceId }
      : JSON.stringify({ status, statusText, reqID, traceId });
  }
};
