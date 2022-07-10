// 公共接口封装
import request from '@/utils/request'
import { ILoginInfo, ILoginResponse } from './types/common'
// interface ResponseData<T = any> {
//   msg: string,
//   status: number,
//   data: T
// }
// export interface loginInfo {
//   logo_square: string,
//   logo_reactangle: string,
//   login_logo: string,
//   slide: string[]
// }
export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
  // return request.get<ResponseData<{
  //     logo_square: string,
  //     logo_reactangle: string,
  //     login_logo: string,
  //     side: string[]
  // }>>('/login/info')
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob'// 请求图片
  })
}
export const login = (data:{
  account: string,
  pwd: string,
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const logout = () => {
  return request<ILoginResponse>({
    method: 'get',
    url: '/setting/admin/logout'
  })
}
