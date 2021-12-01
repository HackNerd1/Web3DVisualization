<script lang="ts" setup>
  import { ref } from 'vue'
  /**
   * Vue3 的defineProps 目前不支持传入外部导入的导入interface
   * import { IColumns } from './index.d'
   * interface IProps extends IColumns {
   *  required: boolean
   * }
   */

  interface IProps {
    label?: string
    prop?: string
    type?: string
    span?: number
    append?: string // 前缀
    prepend?: string // 后缀
    required?: boolean
    errorMessage?: string
  }

  const emit = defineEmits(['valid'])

  const isValid = ref(false)
  const onFocusout = () => {
    isValid.value = !isValid.value
    emit('valid')
  }

  defineProps<IProps>()
</script>
<template>
  <div :class="['dvis-form-item', !isValid ? 'error' : null]" @focusout="onFocusout">
    <label v-if="label" :for="prop" :class="{ required: required }"> {{ label }} </label>
    <slot></slot>
    <div class="dvis-error-msg" v-show="!isValid">{{ errorMessage }}</div>
  </div>
</template>
