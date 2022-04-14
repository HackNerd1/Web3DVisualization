<!--
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-12 10:50:07
 * @modify: 2022-04-14 16:26:10
 * @desc: 
-->
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
