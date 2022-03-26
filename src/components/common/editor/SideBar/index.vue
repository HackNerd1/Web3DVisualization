<!--
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-09-29 16:44:15
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-27 00:42:30
-->
<script lang="ts" setup>
  import cmpCategory from 'src/components/common/editor/SideBar/cmpCategory.vue'
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
