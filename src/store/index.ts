// import { State } from './index'
// import { createStore, Store } from 'vuex'//复杂的useStore 用法
import { createStore, useStore as baseUseStore, Store } from 'vuex' // 简化的useStore 用法
import { InjectionKey } from 'vue'
import { IUserInfo } from '@/api/types/common'
import { setItem, getItem } from '@/utils/storage'
import { USER } from '@/utils/constants'
// 创建一个新的 store 实例
// export interface State {
//   count: number,
//   isCollapse :boolean
// }
const state = {
  count: 0,
  isCollapse: false,
  user: getItem<{token:string}&IUserInfo>(USER)// &将多个类型合并成一个类型
  // user: JSON.parse(window.localStorage.getItem('user') || 'null') as IUserInfo |null
}
export type State = typeof state
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')// key用来在组件js中作为useStore函数的key获取store填充state的类型

export const store = createStore<State>({
  state,
  mutations: {
    increment (state) {
      state.count++
    },
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },
    setUser (state, payload) {
      state.user = payload
      setItem(USER, state.user)// 为了之后复用此类读取本地存储的代码，我们进行封装成存储模块并提供类型支持,USER常量避免写错
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () { // 通过自定义封装useStore，内部传key
  return baseUseStore(key)
}
