<script lang="ts" setup>
  import { defineEmits, ref } from 'vue'
  import ComponItem from 'src/components/Layout/editor/SideBar/cmpItems.vue'
  import LayerButton from 'src/components/Layout/editor/LayerButton.vue'
  import { Category3D, pie } from 'src/data/compoentsCategory'

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
    const items = [Category3D, pie]

    // 菜单点击
    const onClick = (index: number) => {
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
    @click="MMenu.onClick(index)"
    v-for="({ icon, name }, index) in MMenu.items"
    :key="index"
  >
    <i :class="['iconfont', 'icon', icon]"></i>
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
  @import '@/assets/styles/var/index.less';
  .editor-menu-item {
    @layer-item-height: 32px;
    @transition-duration: 0.3s;
    margin: 16px 0;
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

    &.actived {
      color: #324168;
    }

    &.actived .icon {
      color: #fff;
      background-color: #e84393;
    }

    .icon {
      width: @layer-item-height;
      margin-right: 8px;
      font-size: 14px;
      text-align: center;
      border-radius: 10px;
      display: inline-block;
      box-sizing: border-box;
      transition: background-color @transition-duration linear, color @transition-duration linear;
      background-color: rgba(79, 134, 255, 0.08);
    }

    .effect {
      top: 0;
      right: 0;
      opacity: 0;
      content: '';
      width: 32px;
      height: 32px;
      display: flex;
      position: absolute;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      transform: translateX(50%) rotate(45deg);
      background-color: rgba(246, 249, 255);
      transition: opacity @transition-duration linear;

      &::after {
        width: 6px;
        height: 6px;
        content: '';
        border-radius: 50%;
        background-color: #e84393;
        transform: translate(-3px, 3px);
      }
    }

    &.actived .effect {
      opacity: 1;
    }
  }

  .component-list {
    top: 0;
    left: 0;
    /* right: 0; */
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
    transform: translate(@component-menu-width, @dvis-header-height);
    border-top: 0.1rem solid #edf1f5;
    border-left: 0.1rem solid #edf1f5;

    .component-method {
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
