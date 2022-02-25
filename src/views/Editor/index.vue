<script lang="ts" setup>
  import HeaderButton from '@/components/Layout/editor/components/HeaderButton.vue'
  import SideBar from '@/components/Layout/editor/SideBar/index.vue'
  import EHeader from '@/components/Layout/editor/Header/index.vue'
  import Proerty from '@/components/Layout/editor/components/Proerty.vue'
  import { ref } from 'vue'

  const showProp = ref(false)
  const header = ref(null)

  const MHeader = (() => {
    const showProerty = () => (showProp.value = !showProp.value)

    return {
      showProerty,
    }
  })()
</script>

<template>
  <div class="dvis-editor-container">
    <EHeader class="header" ref="header" @on-show="MHeader.showProerty" />
    <section>
      <aside class="chart-menu flex">
        <SideBar />
      </aside>
      <main :class="['editor-content', showProp ? 'show-proerty' : null]"> main </main>
      <aside :class="['property', showProp ? 'show-proerty' : null]">
        <HeaderButton icon="icon-menu" message="显示属性" @click="MHeader.showProerty()" />
        <Proerty />
      </aside>
    </section>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
