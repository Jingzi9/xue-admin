<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="medium"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <!-- <img
          class="login-logo"
          src="@/assets/login_logo.png"
          alt="随心选"
        > -->
        <strong>随心选</strong>
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-key" />
            </template>
          </el-input>
          <img
            class="imgcode"
            alt="验证码"
            :src="CaptchaSrc"
            @click="loadCaptcha"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          <!-- native-type 最终渲染的就是普通的按钮 不管点击按钮还是回车都会触发表单的提交事件，要阻止表单的默认行为-->
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { getCaptcha, login } from '@/api/common'
import { reactive, ref, onMounted } from 'vue'
import type { IElForm, IFormRule } from '@/types/element-plus'
import { useRouter } from 'vue-router'
import { store } from '@/store'
const CaptchaSrc = ref()
const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})
const router = useRouter()
const form = ref<IElForm | null>(null)
const loading = ref(false)
const rules = ref<IFormRule>({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})
onMounted(() => {
  loadCaptcha()
})
const loadCaptcha = async () => {
  const data = await getCaptcha()
  console.log(Object.prototype.toString.call(data))
  CaptchaSrc.value = URL.createObjectURL(data)
}
const handleSubmit = async () => {
  const valid = form.value?.validate()
  if (!valid) {
    return false
  }
  loading.value = true
  const data = await login(user).finally(() => {
    loading.value = false
  })
  store.commit('setUser', data.user_info)
  console.log(data)
  router.replace({
    name: 'home'
  })
  // loading.value = false
}

</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    font-size: 32px;
    font-family: bold;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>
