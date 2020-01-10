import { replaceUrlWithGetSchema } from "./url-utils";

type ApiArg = { url: string; data: any };
/**
 * 所有 api 返回的是一个高阶函数, args 是这个 api 的参数,因为有的参数会反映到 url,有的反映到 header 上.需要每个 api 解析 args
 */
export function courseInfo() {
  return (args: ApiArg) => {
    const schema = replaceUrlWithGetSchema("/courseInfo", args);
    return {
      method: "post",
      path: schema.url,
      payload: schema.data
    };
  };
}
