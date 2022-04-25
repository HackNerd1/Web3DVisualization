<!--
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-09-29 16:44:15
 * @LastEditors: Please set LastEditors
 * @modify: 2022-04-25 15:41:15
-->
<script lang="ts" setup>
  import cmpCategory from 'src/components/Layout/editor/SideBar/cmpCategory/cmpCategory.vue'
  const title = 'DVIS'
</script>
<template>
  <div class="dvis-side-bar">
    <section class="title">
      {{ title }}
    </section>
    <div class="menu dvis-scroll-bar">
      <div class="group">menu</div>
      <cmpCategory />
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import './index.less';
</style>
