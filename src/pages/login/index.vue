<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { IColumns } from 'packages/Form/index.d'

  interface IForm {
    username: string
    password: string
  }

  const router = useRouter()
  const form = ref<IForm>({
    username: '',
    password: '',
  })
  const loading = ref(false)

  // const handleInputUsername = (value: string) => (form.username = value)
  // const handleInputPassword = (value: string) => (form.password = value)

  const handleLogin = () => {
    loading.value = !loading.value
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }

  const columns: IColumns[] = [
    {
      type: 'input',
      label: 'Username',
      prop: 'username',
      icon: 'iconfont icon-user',
      placeholder: 'Please Input Your Username',
      rules: [
        {
          required: true,
          triggle: '',
        },
      ],
    },
    {
      type: 'input',
      label: 'Password',
      prop: 'password',
      icon: 'iconfont icon-password-fill',
      placeholder: 'Please Input Your Password',
      showPassword: false,
    },
  ]
</script>

<template>
  <div class="data-visualze-login">
    <div>
      <form>
        <h1>Login</h1>
        <my-form :columns="columns" v-model="form" />
        <my-button type="default" @click="handleLogin" color="#9f68e0" :loading="loading">Login</my-button>
      </form>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
