<script lang="ts" setup>
  import LayoutSideBar from './SideBar/index.vue'
  import LayoutAuthor from './Author/index.vue'
  import { menuConfig } from '@/config/menu'
</script>

<template>
  <section class="dvis-common-layout">
    <aside> <LayoutSideBar v-bind="menuConfig" /> </aside>
    <main>
      <div>
        <router-view />
        <aside> <LayoutAuthor /></aside>
      </div>
    </main>
  </section>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
