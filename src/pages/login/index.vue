<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import Input from '../../components/common/my-input/index.vue'
  import Button from '../../components/common/my-button/index.vue'

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
    router.push('/')

    // console.log(form)
  }
</script>

<template>
  <div class="data-visualze-login">
    <div>
      <form>
        <h1>Login</h1>
        <Input
          :required="true"
          width="100px"
          label="Username"
          :value="form.username"
          icon="iconfont icon-user"
          @input="handleInputUsername"
          palceholder="Please Input Your Username"
        />

        <Input
          type="password"
          label="Password"
          :value="form.password"
          @input="handleInputPassword"
          icon="iconfont icon-password-fill"
          palceholder="Please Input Your Password"
        />
        <Button type="default" @click="handleLogin" color="#9f68e0">Login</Button>
      </form>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
