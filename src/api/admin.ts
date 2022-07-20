// 公共接口封装
import request from '@/utils/request'
import { IListParams, Admin, AdminPostData } from './types/admin'
export const getAdmins = (params:IListParams) => {
  return request<{
      count: number,
      list: Admin[]
  }>({
    method: 'GET',
    url: '/setting/admin',
    params
  })
}
// 添加
export const createAdmin = (data: AdminPostData) => {
  return request({
    method: 'POST',
    url: '/setting/admin',
    data
  })
}
// 删除
export const deleteAdmin = (id:number) => {
  return request({
    method: 'DELETE',
    url: `/setting/admin/${id}`
  })
}
// 修改
export const updateAdmin = (id: number, data: AdminPostData) => {
  return request({
    method: 'PUT',
    url: `/setting/admin/${id}`,
    data
  })
}
// 更新状态
export const updateAdminStatus = (id: number, status: number) => {
  return request({
    method: 'PUT',
    url: `/setting/set_status/${id}/${status}`
  })
}

// export const getRoles = () => {
//   return request<IFormData>({
//     method: 'GET',
//     url: '/setting/admin/create'
//   }).then(data => {
//     const roles = data.rules.find(item => item.field === 'roles')
//     if (roles && roles.options) {
//       return roles.options
//     }
//     return []
//   })
// }

// export const getAdmin = (id: number) => {
//   return request<IFormData>({
//     method: 'GET',
//     url: `/setting/admin/${id}/edit`
//   }).then(data => {
//     const obj: Record<string, any> = {}
//     data.rules.forEach(item => {
//       obj[item.field] = item.value
//     })
//     return obj as {
//         account: string
//         pwd: string
//         conf_pwd: string
//         real_name: string
//         roles: string[]
//         status: 0 | 1
//       }
//   })
// }
