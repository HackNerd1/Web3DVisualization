<script lang="ts" setup>
  interface IProps {
    width?: string
    height?: string
    className?: string
    type?: 'primary' | 'default' | 'planet'
  }

  const emit = defineEmits(['click'])
  const handleClick = () => {
    emit('click')
  }

  defineProps<IProps>()
</script>

<template>
  <button
    :width="width || '100%'"
    @click.prevent="handleClick"
    :class="`data-visualze-button ${className ? className : ''} ${type ? type : 'default'}`"
  >
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
