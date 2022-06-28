// 公共接口封装
import request from '@/utils/request'
import { ILoginInfo } from './types/common'
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
    url: '/admin/login/info'
  })
  // return request.get<ResponseData<{
  //     logo_square: string,
  //     logo_reactangle: string,
  //     login_logo: string,
  //     side: string[]
  // }>>('/login/info')
}
