import * as _ from "lodash";
import * as queryString from "qs";

export function replaceUrlWithGetSchema(
  url: string,
  data: Object,
  remove: boolean = true
) {
  if (!data) {
    // todo /d可能不符合所有 restful 规则
    return { url: url.replace(new RegExp(/\{\w+\}/g), "\\d+"), data: null };
  }
  // if (_.isArray(data)) {
  //   //todo
  //   return;
  // }

  const pattern = new RegExp(/\{\w+\}/g);
  const removePattern = new RegExp(/\{|\}/g);
  const urlArray = [];
  // return  new Error();

  let lastNormalIndex = 0;
  let obj = pattern.exec(url);
  let s = "";
  while (obj) {
    const index = obj.index;
    const match = obj[0];
    const key = match.replace(removePattern, "");

    if (!data.hasOwnProperty(key)) {
      throw new Error(`url ${url} need ${key},but data:${data} not contain`);
    }

    s = url.slice(lastNormalIndex, index);
    if (s.length) urlArray.push(s);
    s = url.substr(index, match.length);
    if (s.length) urlArray.push(data[key]);

    if (remove) {
      delete data[key];
    }
    lastNormalIndex = index + match.length;

    obj = pattern.exec(url);
  }

  if (lastNormalIndex !== url.length) urlArray.push(url.slice(lastNormalIndex));

  const getSchema = createGetSchema(data);

  return { url: urlArray.join("") + getSchema, data: data };
}

export function createGetSchema(data: Object) {
  if (!data || _.isEmpty(data)) return "";
  let params = "";
  params += `?${queryString.stringify(data, { arrayFormat: "brackets" })}`;
  return params;
}

export function getFileExtName(url: string) {
  if (!url) {
    return "";
  }
  const dotPos = url.lastIndexOf(".");
  if (dotPos < 0) {
    return "";
  }
  return url.substring(dotPos + 1);
}
