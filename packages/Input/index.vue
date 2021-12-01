<script lang="ts" setup>
  import { ref } from 'vue'

  interface IProps {
    modelValue?: string
    icon?: string
    label?: string
    required?: boolean
    placeholder?: string
    width?: string | number
    height?: string | number
    type?: 'text' | 'textarea' | 'password'
    isValid?: boolean
  }

  const emit = defineEmits(['update:modelValue'])
  const props = withDefaults(defineProps<IProps>(), { isValid: true })
  const input = ref(props.modelValue)

  const handleInput = (e: any) => {
    const content = e.target.value
    input.value = content
    emit('update:modelValue', content)
  }
</script>

<template>
  <div class="dvis-input">
    <div v-if="icon" class="input-icon"><i :class="icon"></i></div>
    <input
      :value="input"
      @input="handleInput"
      :type="type || 'text'"
      :placeholder="placeholder"
      :class="{ 'input-prefix': icon, error: !isValid }"
    />
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
