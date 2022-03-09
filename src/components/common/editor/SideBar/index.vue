<script lang="ts" setup>
  import LayerButton from 'src/components/common/editor/LayerButton.vue'
  import LayerMenu from 'src/components/common/editor/SideBar/cmpCategory.vue'
</script>
<template>
  <div class="dvis-editor-sidebar">
    <div class="layer-buttons flex space-around">
      <LayerButton icon="icon-shangyi" message="上移" />
      <LayerButton icon="icon-xiayi" message="下移" />
      <LayerButton icon="icon-zhiding" message="置顶" />
      <LayerButton icon="icon-zhidi" message="置底" />
    </div>
    <LayerMenu />
  </div>
</template>
<style lang="less" scoped>
  @import './index.less';
</style>
