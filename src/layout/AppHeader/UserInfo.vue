<template>
  <el-dropdown>
    {{ $store.state.user?.account }}
    <i class="el-icon-arrow-down el-icon--right" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss"></style>
