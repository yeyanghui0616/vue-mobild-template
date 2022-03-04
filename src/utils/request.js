/*
 * @Author: yeyanghui
 * @Description: 
 * @Date: 2022-02-01 18:57:50
 * @LastEditTime: 2022-03-04 10:43:14
 * @FilePath: /phone_template/src/utils/request.js
 */
import axios from 'axios'
import { getUserToken } from "@/utils/userInfo.js";

const service = axios.create({
  timeout: 10000, // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = getUserToken()
    // 如果有token 就携带tokon
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
      return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
