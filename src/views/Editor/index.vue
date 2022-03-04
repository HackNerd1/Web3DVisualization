<!--
 * @Descripttion: 大屏编辑界面
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-02-23 11:00:48
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-03 15:27:53
-->
<script lang="ts" setup>
  import SideBar from '@/components/common/editor/SideBar/index.vue'
  import EHeader from '@/components/common/editor/Header/index.vue'
  import Screen from '@/components/common/editor/Screen.vue'
  import { ref } from 'vue'

  const showProp = ref(false)
  const header = ref(null)

  const MHeader = {
    showProerty: () => (showProp.value = !showProp.value),
    /**
     * @description 禁用缩放事件
     */
    preventWheel: (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) e.preventDefault()
    },
  }
</script>

<template>
  <div class="dvis-editor-container" @wheel="MHeader.preventWheel">
    <EHeader class="header" ref="header" @on-show="MHeader.showProerty" />
    <section>
      <aside class="chart-menu flex">
        <SideBar />
      </aside>
      <!-- <main :class="['editor-content', showProp ? 'show-proerty' : null]"> -->
      <Screen />
      <!-- </main> -->
    </section>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
