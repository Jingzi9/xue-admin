import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL // 不加域名默认去的就是当前服务器的域名
})
// request不支持泛型
// request.get,post,put 支持响应数据泛型
// 由于我们的后端又包装了一层数据data，导致我们访问数据比较麻烦
request.interceptors.request.use(function (config) {
// 统一设置用户身份token
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截
request.interceptors.response.use(function (response) {
// 统一处理接口响应错误，比如token过期无效，服务端异常
  return response
}, function (error) {
  return Promise.reject(error)
})
export default <T = any>(config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
