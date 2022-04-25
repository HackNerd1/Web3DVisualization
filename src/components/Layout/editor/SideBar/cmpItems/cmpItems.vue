<!--
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-12 10:53:45
 * @modify: 2022-04-25 16:14:21
 * @desc: 
-->
<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'
  import { useStore } from '@/store'
  import { ICmpItem } from '@/types'
  interface IProps {
    items: Array<ICmpItem>
  }

  const store = useStore()

  const emit = defineEmits(['click'])

  /**
   * Menu module
   */
  const MMenu = (() => {
    // 菜单点击
    const onClick = () => {
      emit('click')
    }
    const dragstart = (item: ICmpItem) => store.dispatch('setDragEle', item)

    // const dragstart = (e: DragEvent) => {
    //   console.log('start', e)
    // }

    // const dragenter = () => eventBus.emit('dragenter', {})
    // const dragend = (e: DragEvent, item: ICmpItem) => {
    //   const param: IDragEnd = { e, item }
    //   eventBus.emit('dragend', param)
    // }

    return {
      onClick,
      dragstart,
      // dragenter,
      // dragend,
    }
  })()

  defineProps<IProps>()
</script>

<template>
  <!-- 
    @dragenter="MMenu.dragenter"
    @dragend="(e) => MMenu.dragend(e, item)" -->
  <div
    :class="['editor-menu-item']"
    @click="MMenu.onClick"
    @dragstart="MMenu.dragstart(item)"
    v-for="(item, index) in items"
    :style="{
      backgroundImage: `url(${item.url})`,
    }"
    draggable="true"
    :key="index"
  >
    <div class="effect">
      {{ item.alias }}
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import './cmpItems.less';
</style>
