/// <reference path="../types/IApis.ts" />

import { v1 } from "uuid";
import axios, { AxiosInstance, AxiosPromise } from "axios";

import * as apiSchema from "./api-schema";

const TIMEOUT = 6000;

/**
 * 对axios请求进行包装，方便后面根据不同的配置，返回不同的ajax请求
 * @param service {AxiosInstance} Axios实例(axios.create())
 * @param api {Object} 请求的配置信息，包含path(要发送的地址)、method(请求类型))、data(所携带的信息)
 */
function makeService(
  service: AxiosInstance,
  api: IApiType,
  isMock: boolean = false
): AxiosPromise {
  const xRequestId = v1();
  const responseType = api.onDownloadProgress ? { responseType: "blob" } : {};

  // todo cache support and connect to redux state
  return service.request({
    url: api.path,
    method: api.method,
    // data: api.payload,
    body: JSON.stringify({ query: "{ data }" }),

    params: api.params || null,
    onUploadProgress: api.onUploadProgress || null,
    onDownloadProgress: api.onDownloadProgress || null,
    cancelToken: api.cancelToken || null,
    timeout: api.onUploadProgress || api.onDownloadProgress ? 0 : TIMEOUT,
    // headers: {
    //   "x-request-id": xRequestId,
    //   ...service.defaults.headers,
    //   ...(api.headers || {})
    // },

    //@ts-ignore
    //注入 meta 信息方便在 interceptors 里面收集信息
    metadata: {
      name: api.name,
      xRequestId
    },
    ...responseType
  });
}

const service: AxiosInstance = axios.create({
  // baseURL: "http://106.13.103.146:4000/",
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    charset: "UTF-8"
  }
});

export function getVisaInfo(body: any): AxiosPromise {
  return makeService(service, apiSchema.getVisaInfo()(body));
}
