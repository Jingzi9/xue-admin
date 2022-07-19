<script lang="ts" setup>
// 1.lang=ts
// 2.要让 TypeScript 正确推断 Vue 组件选项中的类型，需要使用 defineComponent 全局方法定义组件：
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import {
//   defineComponent
// ref,
// onMounted
// } from 'vue'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// import { ElConfigProvider } from 'element-plus'
// import HelloWorld from './components/HelloWorld.vue'
// export default defineComponent({
//   name: 'App',
//   components: {
//     ElConfigProvider
//     HelloWorld
//   },
//   setup () {
//     const helloWorld = ref<InstanceType<typeof HelloWorld> | null>(null)
//     onMounted(() => {
//       console.log(helloWorld.value?.msg)
//     })
//     return {
//       locale: zhCn
//     }
//   }
// })
</script>

<template>
  <!-- 路由渲染出口 -->
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
