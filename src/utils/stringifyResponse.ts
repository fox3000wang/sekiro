export default (respoonse: object, isObje: boolean = false) => {
  if (!respoonse) {
    return "empty response";
  } else {
    return isObje
      ? { status, statusText, reqID, traceId }
      : JSON.stringify({ status, statusText, reqID, traceId });
  }
};
