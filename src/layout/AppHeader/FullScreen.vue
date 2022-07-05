<template>
  <el-icon
    :size="24"
    @click="toggleFullScreen"
  >
    <FullScreen />
  </el-icon>
</template>

<script lang="ts" setup>
import {
  FullScreen
} from '@element-plus/icons-vue'
const toggleFullScreen = function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>
