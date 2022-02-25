<script lang="ts" setup>
  import LayerButton from '@/components/Layout/editor/components/LayerButton.vue'
  import LayerMenu from '@/components/Layout/editor/components/LayerMenu.vue'
  import ComponItem from '@/components/Layout/editor/components/ComponItem.vue'
</script>
<template>
  <div class="dvis-editor-sidebar">
    <div class="layer-buttons flex space-around">
      <LayerButton icon="icon-shangyi" message="上移" />
      <LayerButton icon="icon-xiayi" message="下移" />
      <LayerButton icon="icon-zhidi" message="置顶" />
      <LayerButton icon="icon-zhiding" message="置底" />
    </div>
    <div class="layer-menu">
      <LayerMenu />
    </div>
  </div>

  <div class="拖拖沓沓44444444444444444444444444444a'q'q'q'q'q'q'q'q'q'q'q'q'q'q'q'q'q'q">
    <ComponItem />
  </div>
</template>
<style lang="less" scoped>
  @import './index.less';
</style>
