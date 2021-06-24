import { request as tReq, RequestTask } from "@tarojs/taro";

type ReqMethod = 'get' | 'post'

export interface MyReq<T> {
  (method: ReqMethod, url: string, data?: any): Promise<T>;
  get: (url: string, data?: any) => Promise<T>;
  post: (url: string, data?: any) => Promise<T>;
}

export const baseUrl = 'http://192.168.3.152:3456'

export function request<T>(method: ReqMethod, url: string, data?: any): Promise<T> {
  return tReq<T>({
    method: method as keyof tReq.method, url: [
      baseUrl, url
    ].join('/'), data
  }).then(res => res.data)
}

;['get', 'post'].forEach((method: ReqMethod) => {
  request[method] = (url: string, data?: any) => request(method, url, data)
})

