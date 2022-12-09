import axios from "axios";

export const request = function (config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000',  //配置项目接口基地址
    timeout: 5000
  });

  // 请求拦截器
  instance.interceptors.request.use(function (config) {

  });

  // 响应拦截器
  instance.interceptors.response.use(function (response) {

  });
  return instance(config);
};