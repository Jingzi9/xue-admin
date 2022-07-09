<template>
  <h1>index 页面</h1>
  <!-- <p>{{ $store.state.count }}</p> -->
</template>

<script lang="ts" setup>
import User from '@/api/user'
import { onMounted } from 'vue'
// import { useStore } from 'vuex'// 不定义自己的 `useStore` 组合式函数，调用vuex的
import { useStore } from '../../store'
// const store = useStore(key) 不定义自己的 `useStore` 组合式函数，调用vuex的(需要提供key值，state才会有类型)
const store = useStore()
console.log(store.state.count)
console.log(User)
onMounted(() => {
  console.log(window.localStorage.getItem('user'))
})
</script>
<style scoped lang="scss">
  h1{
    color: $color;
  }
</style>
