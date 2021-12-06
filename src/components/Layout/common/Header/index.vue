<script lang="ts" setup>
  import { ref, inject } from 'vue'
  // interface IProps {
  //   avater: string
  // }

  const isCollpased = ref(false)
  const $bus: any = inject('$bus')
  const handleCollpase = () => {
    isCollpased.value = !isCollpased.value
  }

  $bus.on('isCollpased', handleCollpase)
</script>

<template>
  <div class="dvis-header">
    <collapse-button icon="icon-indent" :collpased="isCollpased" @click="handleCollpase" />
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
