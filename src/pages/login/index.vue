<!--
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-12 10:50:07
 * @modify: 2022-04-13 17:06:04
 * @desc: 
-->
<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { IColumns } from 'packages/Form/index.d'
  import { login } from '@/api/user'
  import qs from 'qs'
  import { useMessage } from 'naive-ui'

  interface IForm {
    username: string
    password: string
  }

  const message = useMessage()
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
    login(qs.stringify(form.value))
      .then(({ data }) => {
        if (data.code === 400) message.error(data.msg, { duration: 3000 })
        else {
          // TODO 做JWT储存和校验
          sessionStorage.setItem('auth', 'true')
          router.push('/dashboard')
        }
        return data
      })
      .finally(() => {
        loading.value = !loading.value
      })
  }

  const columns: IColumns[] = [
    {
      type: 'input',
      label: 'Username',
      prop: 'username',
      prefix: 'icon-user',
      placeholder: 'Please Input Your Username',
      rules: [
        {
          required: true,
          triggle: 'blur',
        },
      ],
    },
    {
      type: 'input',
      label: 'Password',
      prop: 'password',
      prefix: 'icon-password-fill',
      placeholder: 'Please Input Your Password',
      isPassword: true,
      rules: [
        {
          required: true,
          triggle: '',
        },
      ],
    },
  ]
</script>

<template>
  <div class="dvis-login">
    <div>
      <form>
        <h1>Login</h1>
        <dvis-form :columns="columns" v-model="form" />
        <dvis-button type="gradient" @click="handleLogin" :loading="loading">Login</dvis-button>
      </form>
    </div></div
  >
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
