/**
 * https://juejin.cn/post/7071518211392405541
 */
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_URL = "/api";
const TIME_OUT = 6 * 1000;

class IotRequest {
  instance: AxiosInstance;
  constructor(baseURL: string = BASE_URL, timeout: number = TIME_OUT) {
    //   初始化axiox实例
    this.instance = axios.create({
        baseURL,
        timeout 
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log("qingqiu拦截器");
        return res;
      },
      (err: any) => err
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosRequestConfig) => {
        console.log("响应拦截器");
        return res;
      },
      (err: any) => err
    );
  }
  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}
export default IotRequest;
