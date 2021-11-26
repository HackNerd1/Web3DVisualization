<script lang="ts" setup>
  import CollapseButton from 'src/components/common/collapseButton/index.vue';
  interface IProps {
    avater: string;
  }
</script>

<template>
  <div class="data-visiualize-side-bar">
    sidebar
    <CollapseButton icon="icon-indent"></CollapseButton>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
