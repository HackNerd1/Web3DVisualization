<!--
 * @Descripttion: 大屏编辑界面
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-02-23 11:00:48
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-27 00:50:50
-->
<script lang="ts" setup>
  import SideBar from '@/components/common/editor/SideBar/index.vue'
  import EHeader from '@/components/common/editor/Header/index.vue'
  import Screen from '@/components/common/editor/Screen.vue'
  import Proerty from 'src/components/common/editor/Proerty/elementSetting/index.vue'
  import PageSetting from 'src/components/common/editor/Proerty/pageSetting.vue'
  import { useStore } from '@/store'
  import { ref, computed } from 'vue'

  // type IPropertyType = 0 | 1 | 2 // 0:组件属性, 1: 界面设置
  const propertyType = computed(() => store.getters['propertyType'])
  const header = ref(null)
  const store = useStore()
  const showProp = computed(() => store.getters['showProp'])

  const MHeader = {
    // showProerty: (toggle: boolean) => (showProp.value = toggle),
    /**
     * @description 禁用缩放事件
     */
    preventWheel: (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) e.preventDefault()
    },
  }
</script>

<template>
  <div class="dvis-editor-container flex" @wheel="MHeader.preventWheel">
    <SideBar />
    <main>
      <EHeader class="header" ref="header" />
      <section class="content flex">
        <Screen />
        <aside :class="['property', showProp ? 'show-proerty' : null]">
          <Proerty v-if="propertyType === 0" />
          <PageSetting v-if="propertyType === 1" />
        </aside>
      </section>
    </main>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
