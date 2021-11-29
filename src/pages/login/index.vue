<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { IColumns } from 'packages/Form/index.d'

  interface IForm {
    username: string
    password: string
  }

  const router = useRouter()
  const form: IForm = {
    username: '',
    password: '',
  }

  const handleInputUsername = (value: string) => (form.username = value)
  const handleInputPassword = (value: string) => (form.password = value)

  const handleLogin = () => {
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }

  const columns: IColumns[] = [
    {
      type: 'input',
      label: 'password',
      prop: 'password',
    },
  ]
</script>

<template>
  <div class="data-visualze-login">
    <div>
      <form>
        <h1>Login</h1>
        <my-form :columns="columns" />
        <my-input
          width="100px"
          label="Username"
          :required="true"
          :value="form.username"
          icon="iconfont icon-user"
          @input="handleInputUsername"
          palceholder="Please Input Your Username"
        />

        <my-input
          type="password"
          label="Password"
          :required="true"
          :value="form.password"
          @input="handleInputPassword"
          icon="iconfont icon-password-fill"
          palceholder="Please Input Your Password"
        />
        <my-button type="default" @click="handleLogin" color="#9f68e0">Login</my-button>
      </form>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
