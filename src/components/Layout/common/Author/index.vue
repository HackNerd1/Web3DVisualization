<script lang="ts" setup>
  import avatar from '@/assets/avatar/avatar.png'
</script>
<template>
  <div class="dvis-author-bar">
    <section class="flex space-between">
      <dvis-badge icon="icon-notice" background />
      <!-- <i :class="['iconfont', 'icon-notice', 'icon']"></i> -->
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
