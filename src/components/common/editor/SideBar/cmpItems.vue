<script lang="ts" setup>
  import { defineProps, defineEmits, inject } from 'vue'
  import { KEventBus } from '@/symbols'
  import EventBus from '@/utils/eventBus'
  import { IDragEnd, ICmpItem } from '@/types'
  interface IProps {
    // icon?: string
    items: Array<ICmpItem>
  }

  const eventBus = inject(KEventBus, new EventBus()) // 提供默认值
  const emit = defineEmits(['click'])

  /**
   * Menu module
   */
  const MMenu = (() => {
    // 菜单点击
    const onClick = () => {
      emit('click')
    }

    // const dragstart = (e: DragEvent) => {
    //   console.log('start', e)
    // }

    const dragenter = () => eventBus.emit('dragenter', {})
    const dragend = (e: DragEvent, item: ICmpItem) => {
      const param: IDragEnd = { e, item }
      eventBus.emit('dragend', param)
    }

    return {
      onClick,
      dragenter,
      dragend,
    }
  })()

  defineProps<IProps>()
</script>

<template>
  <div
    :class="['editor-menu-item']"
    @click="MMenu.onClick"
    v-for="(item, index) in items"
    :style="{
      backgroundImage: `url(${item.url})`,
    }"
    draggable="true"
    @dragenter="MMenu.dragenter"
    @dragend="(e) => MMenu.dragend(e, item)"
    :key="index"
  >
    <div class="effect">
      <i :class="['iconfont', item.icon]"></i>
      <!-- {{ name }} -->
    </div>
  </div>
</template>

<style lang="less" scoped>
  .editor-menu-item {
    @layer-item-height: 6rem;
    @transition-duration: 0.2s;
    width: 90%;
    display: flex;
    cursor: pointer;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    padding-left: 10px;
    border-radius: 10px;
    margin-top: 12px;
    letter-spacing: 1px;
    box-sizing: border-box;
    background-color: #fff;
    height: @layer-item-height;
    border: 2px solid transparent;
    line-height: @layer-item-height;
    transition: all @transition-duration linear;
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;

    &:hover {
      border: 2px solid #e84393;
      // background-color: rgb(240, 244, 247);
      .effect {
        transform: translateY(0%);
      }
    }

    .effect {
      left: 0;
      bottom: 0;
      width: 100%;
      color: #fff;
      text-align: center;
      height: @layer-item-height;
      background-color: rgba(102, 102, 102, 0.3);
      position: absolute;
      transform: translateY(100%);
      transition: transform 0.3s linear;
    }

    i {
      margin-right: 5px;
    }
  }
</style>
