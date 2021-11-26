<script lang="ts" setup>
  import LayoutHead from './Header/index.vue'
  import LayoutSideBar from './SideBar/index.vue'
  // interface IProps {}
</script>

<template>
  <header> <LayoutHead /> </header>
  <aside> <LayoutSideBar /> </aside>
  <main>
    <router-view />
  </main>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
