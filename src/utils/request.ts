import { store } from '@/store/index'
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL // 不加域名默认去的就是当前服务器的域名
})
// request不支持泛型
// request.get,post,put 支持响应数据泛型
// 由于我们的后端又包装了一层数据data，导致我们访问数据比较麻烦
request.interceptors.request.use(function (config) {
// 统一设置用户身份token
  const user = store.state.user
  if (user && user.token) {
    if (config && config?.headers) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截
request.interceptors.response.use(function (response) {
// 统一处理接口响应错误，比如token过期无效，服务端异常
  if (response.data.status && response.data.status !== 200) {
    ElMessage.error(response.data.msg || '请求失败，请稍后重试')
    return Promise.reject(response.data)
  }

  return response
}, function (error) {
  return Promise.reject(error)
})
export default <T = any>(config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
