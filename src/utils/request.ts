import router from '@/router/index'
import { store } from '@/store/index'
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
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
// 控制登陆过期的锁（当登陆过期后，页面同时有多个请求会多次触发拦截器）
let isRefreshing = false
// 响应拦截
request.interceptors.response.use(function (response) {
  const status = response.data.status
  if (!status || status === 200) {
    return response
  }
  // 统一处理接口响应错误，比如token过期无效，服务端异常
  if (status === 410000) {
    if (isRefreshing) return Promise.reject(response)
    ElMessageBox.confirm('你的登陆已过期，您可以取或停留在此页面，或确认重新登陆', '登陆过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
      // 清除过期的本地登陆状态
      store.commit('setUser', null)
      // 跳转到登录页面
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
    }).finally(() => {
      // 解开锁，不管怎么样都需要解开
      isRefreshing = false
    })
    // 在内部消化掉业务异常
    return Promise.reject(response)
  }
  // 抛出异常
  ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  return Promise.reject(response.data)

  // return response
}, function (error) {
  return Promise.reject(error)
})
export default <T = any>(config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
