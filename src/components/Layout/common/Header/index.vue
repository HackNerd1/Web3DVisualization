<script lang="ts" setup>
  import { ref, inject } from 'vue';
  import CollapseButton from 'src/components/common/collapseButton/index.vue';
  interface IProps {
    avater: string;
  }

  const isCollpased = ref(false);
  const $bus: any = inject('$bus');
  const handleCollpase = () => {
    isCollpased.value = !isCollpased.value;
  };

  $bus.on('isCollpased', handleCollpase);
</script>

<template>
  <div class="data-visiualize-header">
    <CollapseButton icon="icon-indent" :collpased="isCollpased" @click="handleCollpase"></CollapseButton>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
