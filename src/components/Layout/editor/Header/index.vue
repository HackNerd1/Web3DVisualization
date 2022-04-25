<!--
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-09-29 16:44:08
 * @LastEditors: Please set LastEditors
 * @modify: 2022-04-25 16:16:01
-->
<script lang="ts" setup>
  import { IPropertyType } from '@/types'
  import EventBus from '@/utils/eventBus'
  import { KEventBus } from '@/symbols'
  import { useRouter } from 'vue-router'
  import { useStore } from '@/store'
  import { EditorButton } from 'src/components/common/editorButton/editorButton'
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
      <EditorButton icon="icon-shangyibu1" @on-click="MButton.goBack()" description="undo, ctrl + z" />
      <EditorButton icon="icon-xiayibu3" description="restore, ctrl + y" />
    </aside>
    <main>
      <cite contenteditable="true" @blur="MTitle.onChange">
        <!-- <template v-if="title "></template> -->
        {{ title || 'Untitled' }}
      </cite>
    </main>
    <aside class="button-group-right">
      <EditorButton icon="icon-save" size="18px" />
      <EditorButton icon="icon-publish1" size="18px" />
      <EditorButton icon="icon-menu" size="18px" @on-click="MButton.show(0)" description="menu" />
      <EditorButton
        size="18px"
        icon="icon-shezhi"
        description="界面设置"
        @on-click="MButton.show(1)"
        :activated="propertyType === 1"
      />
    </aside>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
