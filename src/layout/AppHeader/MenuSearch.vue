<template>
  <el-input
    v-model="input"
    placeholder="输入内容"
    :prefix-icon="Search"
    size="default"
  />
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
</script>
