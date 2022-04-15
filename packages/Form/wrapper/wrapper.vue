<!--
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-12 10:50:07
 * @modify: 2022-04-15 15:14:00
 * @desc: 
-->
<script lang="ts" setup>
  import { APPILabelPosition } from '../index.d'

  interface IProps {
    /** label  */
    label?: string
    labelWidth?: number
    labelPosition?: APPILabelPosition
    /** other  */
    prop?: string
    type?: string
    span?: number
    /** icon */
    append?: string // 前缀
    prepend?: string // 后缀
    /** valid */
    required?: boolean
    errorMessage?: string
    isValid?: boolean
  }

  const emit = defineEmits(['valid'])

  // const isValid = ref(false)
  const onFocusout = () => {
    // isValid.value = !isValid.value
    emit('valid')
  }

  withDefaults(defineProps<IProps>(), {
    labelPosition: 'left',
    labelWidth: 20,
  })
</script>
<template>
  <div
    :class="['dvis-form-item', isValid ? 'error' : null]"
    @focusout="onFocusout"
    :data-label-position="labelPosition"
    :data-label-width="labelWidth"
  >
    <main>
      <label v-if="label" :for="prop" :class="{ required: required }"> {{ label }} </label>
      <div class="content">
        <slot></slot>
      </div>
    </main>
    <div class="dvis-error-msg" v-show="!isValid">{{ errorMessage }}</div>
  </div>
</template>
<style lang="less" scoped>
  @import './wrapper.less';
</style>
