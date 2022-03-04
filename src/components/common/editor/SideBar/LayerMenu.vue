<script lang="ts" setup>
  import { defineProps, defineEmits, ref } from 'vue'
  import ComponItem from 'src/components/common/editor/SideBar/ComponItem.vue'
  import LayerButton from 'src/components/common/editor/LayerButton.vue'
  interface IProps {
    // icon?: string
    message?: string
  }

  const emit = defineEmits(['click'])
  /**
   * Component Module
   */
  const showComponent = ref(false)
  const MComponent = (() => {
    const toggleShowCompen = (toggle: boolean) => (showComponent.value = toggle)
    return {
      toggleShowCompen,
    }
  })()

  /**
   * Menu module
   */
  const activedMenuIndex = ref(-1)
  const MMenu = (() => {
    const items = [
      {
        icon: 'icon-shuzhuangtu',
        prop: 'bar',
        name: '柱状图',
      },
      {
        icon: 'icon-bingtu',
        prop: 'pie',
        name: '饼图',
      },
    ]

    // 菜单点击
    const onClick = (prop: string, index: number) => {
      activedMenuIndex.value = index
      emit('click')
      MComponent.toggleShowCompen(true)
    }

    return {
      items,
      onClick,
    }
  })()

  defineProps<IProps>()
</script>

<template>
  <div
    :class="['layer-menu-item', activedMenuIndex === index ? 'actived' : null]"
    @click="MMenu.onClick(prop, index)"
    v-for="({ prop, icon, name }, index) in MMenu.items"
    :key="index"
  >
    <i :class="['iconfont', icon]"></i>
    {{ name }}
    <div class="effect"></div>
  </div>
  <div class="layer-component" v-if="showComponent">
    <div class="component-method">
      组件列表
      <LayerButton icon="icon-xiangzuo" @click="MComponent.toggleShowCompen(false)" />
    </div>
    <ComponItem />
  </div>
</template>

<style lang="less" scoped>
  .layer-menu-item {
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

  .layer-component {
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
