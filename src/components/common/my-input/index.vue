<script lang="ts" setup>
  interface IRule {}

  interface IProps {
    rules?: IRule
    value: string
    icon?: string
    label?: string
    required?: boolean
    palceholder?: string
    width?: string | number
    height?: string | number
    type?: 'text' | 'textarea' | 'password'
  }

  let input: string
  let isValid: boolean = false
  const emit = defineEmits(['input'])
  const handleInput = (e: any) => {
    emit('input', e.target.value)
  }
  const handleValid = (rule: any, value: any) => {
    isValid = false
  }

  defineProps<IProps>()
</script>

<template>
  <div class="data-visualize-input">
    <label v-if="label" :class="{ required: required }">{{ label }}</label>
    <div>
      <div v-if="icon" class="input-icon"><i :class="icon"></i></div>
      <input
        :value="input"
        @input="handleInput"
        :type="type || 'text'"
        :placeholder="palceholder"
        :class="{ 'input-prefix': icon, error: !isValid }"
      />
    </div>
    <div class="data-visualize-error-msg" v-show="!isValid">用户名输入错误</div>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
