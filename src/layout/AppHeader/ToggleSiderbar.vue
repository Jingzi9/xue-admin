<template>
  <el-icon
    @click="handleCollapse"
    :class="collapseIcon"
    :size="24"
  >
    <Expand v-if="collapseIcon" />
    <Fold v-else />
  </el-icon>
  <!-- <el-icon><Fold /></el-icon> -->
</template>
<script lang="ts" setup>
import {
  Expand,
  Fold
} from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { computed } from 'vue'
const store = useStore()
const collapseIcon = computed(() => {
  return !store.state.isCollapse
})
const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>
<style lang="scss" scoped></style>
