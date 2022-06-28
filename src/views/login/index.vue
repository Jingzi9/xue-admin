<template>
  <h1>登录页面</h1>
</template>
<script lang="ts" setup>// 在这导入的都是以值的形式使用
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'// 显示的告诉ts导入的是一个类型
import { onMounted, ref } from 'vue'
const list = ref<ILoginInfo['slide']>([])
onMounted(() => {
  getLoginInfo().then(data => {
    // console.log(res.headers['content-type'])
    list.value = data.slide
    console.log(list.value)
  })
})
</script>
<style scoped></style>
