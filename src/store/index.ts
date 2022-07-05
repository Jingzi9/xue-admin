// import { State } from './index'
// import { createStore, Store } from 'vuex'//复杂的useStore 用法
import { createStore, useStore as baseUseStore, Store } from 'vuex' // 简化的useStore 用法
import { InjectionKey } from 'vue'
// 创建一个新的 store 实例
// export interface State {
//   count: number,
//   isCollapse :boolean
// }
const state = {
  count: 0,
  isCollapse: false
}
export type State = typeof state
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')// key用来在组件js中作为useStore函数的key获取store填充state的类型

export const store = createStore<State>({

  mutations: {
    increment (state) {
      state.count++
    },
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () { // 通过自定义封装useStore，内部传key
  return baseUseStore(key)
}
