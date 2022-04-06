import { AxiosResponse } from "axios";
import IotRequest from "./iot-axios";

type METHODS = "get" | "GET" | "post" | "POST" | "delete" | "DELETE";
const tenantCode = "njts";
const loginName = "admin";

const httpRequest = {
  // 请求实例
  async publicReq<T>(
    url: string,
    method: METHODS,
    header: { [key: string]: string | number },
    params: T
  ) {
    const headers = {
      ...header,
      ...{
        "Content-Type":
          Object.prototype.toString.call(params) === "[object String]"
            ? "application/json; charset=utf-8"
            : "application/json",
        tenantCode,
        loginName,
      },
    };
    const iot = new IotRequest();
    return await iot
      .instance({
        url,
        method,
        headers,
        [method === "post" ? "data" : "params"]: params,
      })
      .then((res: AxiosResponse) => {
        if (res) {
          return res.data;
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },

  //   get 请求
  getRequest<T>(url: string, params: T) {
    const req = new IotRequest();

    const res = req.instance({
      url,
      method: "GET",
    });
    return res;
  },
};

export default httpRequest;
