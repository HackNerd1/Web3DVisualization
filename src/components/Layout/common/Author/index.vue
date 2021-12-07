<script lang="ts" setup>
  import avatar from '@/assets/avatar/avatar.png'
</script>
<template>
  <div class="dvis-author-bar">
    <section class="flex space-between">
      <dvis-badge clickable>
        <dvis-icon icon="icon-notice" background round />
      </dvis-badge>
      <div class="avatar">
        <dvis-avatar :image="avatar" background round />
        Hansel Design
      </div>
    </section>
  </div>
</template>
<style lang="less" scoped>
  @import './index.less';
</style>
