<script lang="ts" setup>
  // import LayoutHead from './Header/index.vue'
  import LayoutSideBar from './SideBar/index.vue'
  // import LayoutAuthor from './Author/index.vue'
  import { menuConfig } from '@/config/menu'
  // interface IProps {}
</script>

<template>
  <!-- <header> <LayoutHead /> </header> -->
  <section class="dvis-common-layout">
    <aside> <LayoutSideBar v-bind="menuConfig" /> </aside>
    <main>
      <router-view />
    </main>
    <!-- <aside><LayoutAuthor /></aside> -->
  </section>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
