<script lang="ts" setup>
  import { defineProps, defineEmits, ref } from 'vue'
  interface IProps {
    // icon?: string
    message?: string
  }

  const emit = defineEmits(['click'])
  const activedMenuIndex = ref(-1)

  /**
   * Menu module
   */
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
</template>

<style lang="less" scoped>
  .layer-menu-item {
    @layer-item-height: 2.5rem;
    @transition-duration: 0.3s;
    cursor: pointer;
    width: 100%;
    display: flex;
    color: #a4b6e1;
    font-size: 14px;
    padding-left: 10px;
    box-sizing: border-box;
    position: relative;
    letter-spacing: 1px;
    background-color: #fff;
    height: @layer-item-height;
    line-height: @layer-item-height;
    transition: all @transition-duration linear;

    &:hover {
      background-color: rgb(240, 244, 247);
    }

    &.actived {
      color: #fff;
      // background-color: rgb(240, 244, 247);
      background-color: #e84393;
      // .effect {
      //   opacity: 1;
      // }
    }

    i {
      margin-right: 5px;
    }
  }
</style>
