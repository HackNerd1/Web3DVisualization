<script lang="ts" setup>
  import { defineEmits, ref } from 'vue'
  import ComponItem from 'src/components/common/editor/SideBar/cmpItems.vue'
  import LayerButton from 'src/components/common/editor/LayerButton.vue'
  import { bar, pie } from 'src/data/compoentsCategory'

  // interface IProps {
  //   // icon?: string
  //   message?: string
  // }

  const emit = defineEmits(['click'])
  /**
   * Component Module
   */
  const showComponent = ref(false)
  const MComponent = (() => {
    const toggleShowCompen = (toggle: boolean) => {
      // TODO 屏幕右移
      showComponent.value = toggle
    }
    return {
      toggleShowCompen,
    }
  })()

  /**
   * Menu module
   */
  const activedMenuIndex = ref(-1)
  const MMenu = (() => {
    const items = [bar, pie]

    // 菜单点击
    const onClick = (type: string, index: number) => {
      activedMenuIndex.value = index
      emit('click')
      MComponent.toggleShowCompen(true)
    }

    return {
      items,
      onClick,
    }
  })()

  // defineProps<IProps>()
</script>

<template>
  <div
    :class="['editor-menu-item', activedMenuIndex === index ? 'actived' : null]"
    @click="MMenu.onClick(type, index)"
    v-for="({ type, icon, name }, index) in MMenu.items"
    :key="index"
  >
    <i :class="['iconfont', icon]"></i>
    {{ name }}
    <div class="effect"></div>
  </div>
  <div class="component-list" v-if="showComponent">
    <div class="component-method">
      组件列表
      <LayerButton icon="icon-xiangzuo" @click="MComponent.toggleShowCompen(false)" />
    </div>
    <ComponItem :items="MMenu.items[activedMenuIndex].data" />
  </div>
</template>

<style lang="less" scoped>
  .editor-menu-item {
    @layer-item-height: 2.5rem;
    @transition-duration: 0.3s;
    width: 100%;
    display: flex;
    cursor: pointer;
    font-size: 14px;
    color: #a4b6e1;
    padding-left: 10px;
    position: relative;
    letter-spacing: 1px;
    box-sizing: border-box;
    background-color: #fff;
    height: @layer-item-height;
    line-height: @layer-item-height;
    transition: all @transition-duration linear;

    &:hover {
      background-color: rgb(240, 244, 247);
    }

    &.actived {
      color: #fff;
      background-color: #e84393;
    }

    i {
      margin-right: 5px;
    }
  }

  .component-list {
    top: 0;
    right: 0;
    width: 15rem;
    height: 100%;
    display: flex;
    overflow: auto;
    color: #576574;
    z-index: 10;
    position: absolute;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    transform: translate(100%);
    transform: translate(100%, -2px);
    border-top: 0.1rem solid #edf1f5;
    border-left: 0.1rem solid #edf1f5;

    .component-method {
      /* padding: 10px; */
      width: 100%;
      display: flex;
      height: 2.1rem;
      align-items: center;
      padding: 0 0 0 10px;
      box-sizing: border-box;
      justify-content: space-between;
      border-bottom: 0.1rem solid #edf1f5;
    }
  }
</style>
