<template>
  <el-space size="large">
    <ToggleSiderBar />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <MenuSearch />
    <FullScreen />
    <Notification />
    <UserInfo />
  </el-space>
</template>
<script lang="ts" setup>
import ToggleSiderBar from './ToggleSiderbar.vue'
import Breadcrumb from './Breadcrumb.vue'
import MenuSearch from './MenuSearch.vue'
import FullScreen from './FullScreen.vue'
import Notification from './Notification.vue'
import UserInfo from './UserInfo.vue'
</script>
