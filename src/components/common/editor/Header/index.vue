<!--
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-09-29 16:44:08
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-14 16:58:33
-->
<script lang="ts" setup>
  import HButton from 'src/components/common/editor/Header/HeaderButton.vue'
  import { IPropertyType } from '@/types'
  import EventBus from '@/utils/eventBus'
  import { KEventBus } from '@/symbols'
  import { useRouter } from 'vue-router'
  import { useStore } from '@/store'
  import { defineEmits, defineProps, inject, onUnmounted, computed } from 'vue'

  interface IProps {
    title?: string
  }

  const router = useRouter()
  const store = useStore()
  const eventBus = inject(KEventBus, new EventBus()) // 注入Event Bus; 接受组件激活和停用事件 切换设置展示
  const propertyType = computed(() => store.getters['propertyType'])
  const showProp = computed(() => store.getters['showProp'])
  const emit = defineEmits(['onEditTitle'])

  /**
   * 按钮方法
   */
  const MButton = (function () {
    const goBack = () => router.go(-1) // 返回键
    const show = (type: IPropertyType) => {
      if (propertyType.value === type) return close()
      store.dispatch('setPropertyType', type)
      if (!showProp.value) {
        // const { wwidth } = store.state.pageSetting
        store.dispatch('setShowProp', true)
      }
    }
    const close = () => {
      store.dispatch('setPropertyType', NaN)
      store.dispatch('setShowProp', false)
    }
    const toggleActive = (type: IPropertyType) => {
      if (!showProp.value) return
      store.dispatch('setPropertyType', type)
    }
    const active = () => toggleActive(0)
    const deactive = () => toggleActive(1)

    return {
      goBack,
      show,
      close,
      toggleActive,
      active,
      deactive,
    }
  })()

  /**
   * 标题事件
   */
  const MTitle = (() => {
    const onChange = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      emit('onEditTitle', target.textContent)
    }
    return {
      onChange,
    }
  })()

  eventBus.on('deactivated', MButton.active)
  eventBus.on('activated', MButton.deactive)

  defineProps<IProps>()

  onUnmounted(() => {
    eventBus.off('deactivated', MButton.active)
    eventBus.off('deactivated', MButton.deactive)
  })
</script>

<template>
  <div class="dvis-editor-header">
    <aside class="button-group">
      <HButton icon="icon-zhedie" @click="MButton.goBack()" />
      <HButton icon="icon-shangyibu" message="撤销 Ctrl + Y" @click="MButton.goBack()" />
      <HButton icon="icon-xiayibu1" message="还原 Ctrl + Z" @click="MButton.goBack()" />
    </aside>
    <main>
      <cite contenteditable="true" @blur="MTitle.onChange">
        <!-- <template v-if="title "></template> -->
        {{ title || 'Untitled' }}
      </cite>
    </main>
    <aside class="button-group-right">
      <HButton icon="icon-menu" @click="MButton.show(0)" :activated="propertyType === 0" />
      <HButton icon="icon-shezhi" message="界面设置" @click="MButton.show(1)" :activated="propertyType === 1" />
    </aside>

    <!-- <aside :class="['property', showProp ? 'show-proerty' : null]">
      <Proerty v-if="propertyType === 0" />
      <PageSetting v-if="propertyType === 1" />
    </aside> -->
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
