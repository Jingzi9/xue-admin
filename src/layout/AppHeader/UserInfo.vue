<template>
  <el-dropdown>
    {{ $store.state.user?.account }}
    <i class="el-icon-arrow-down el-icon--right" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { logout } from '@/api/common'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
const store = useStore()
const router = useRouter()
const handleLogout = () => {
  ElMessageBox.confirm(
    '确认退出吗？',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(async () => {
      await logout()
      router.push({ name: 'login' })
      store.commit('setUser', null)
      ElMessage({
        type: 'success',
        message: '退出登陆成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消登陆成功'
      })
    })
}
</script>
<style scoped lang="scss"></style>
