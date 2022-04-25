<!--
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-12 10:53:45
 * @modify: 2022-04-25 16:13:57
 * @desc: 
-->
<script lang="ts" setup>
  import { defineEmits, ref } from 'vue'
  import ComponItem from 'src/components/Layout/editor/SideBar/cmpItems/cmpItems.vue'
  // import LayerButton from 'src/components/Layout/editor/LayerButton.vue'
  import { useCmpCategory } from 'src/data/compoentsCategory'

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
      // TODO 屏幕右移, 迁移至外部
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
    const items = useCmpCategory()

    // 菜单点击
    const onClick = (index: number) => {
      emit('click')
      if (activedMenuIndex.value === index) {
        MComponent.toggleShowCompen(false)
        activedMenuIndex.value = -1
      } else {
        activedMenuIndex.value = index
        MComponent.toggleShowCompen(true)
      }
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
    <ComponItem :items="MMenu.items[activedMenuIndex].data" />
  </div>
</template>

<style lang="less" scoped>
  @import './cmpCategory.less';
</style>
