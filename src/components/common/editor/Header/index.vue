<!--
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-09-29 16:44:08
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-06 16:25:24
-->
<script lang="ts" setup>
  import HButton from 'src/components/common/editor/Header/HeaderButton.vue'
  import LayerButton from '@/components/common/editor/LayerButton.vue'
  import Proerty from '@/components/common/editor/Proerty/index.vue'
  import PageSetting from '@/components/common/editor/Proerty/PageSetting.vue'
  import EventBus from '@/utils/eventBus'
  import { KEventBus } from '@/symbols'
  import { useRouter } from 'vue-router'
  import { defineEmits, defineProps, ref, inject } from 'vue'

  interface IProps {
    title?: string
  }

  type IPropertyType = 0 | 1 | 2 // 0:组件属性, 1: 界面设置

  const router = useRouter()

  const eventBus = inject(KEventBus, new EventBus()) // 注入Event Bus; 接受组件激活和停用事件 切换设置展示
  const propertyType = ref<IPropertyType | null>(null)
  const showProp = ref(false)
  // const show = ref(false)
  const emit = defineEmits(['onEditTitle'])

  /**
   * 按钮方法
   */
  const MButton = (function () {
    const goBack = () => router.go(-1) // 返回键
    const reflash = () => console.log('reflash')
    // const show = () => emit('onShow')
    const show = (type: IPropertyType) => {
      if (propertyType.value === type) return close()
      propertyType.value = type
      if (!showProp.value) showProp.value = true
    }
    const close = () => {
      propertyType.value = null
      showProp.value = false
    }
    const toggleActive = (type: IPropertyType) => {
      if (!showProp.value) return
      propertyType.value = type
    }

    return {
      goBack,
      reflash,
      show,
      close,
      toggleActive,
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

  eventBus.on('deactivated', () => MButton.toggleActive(1))
  eventBus.on('activated', () => MButton.toggleActive(0))
  defineProps<IProps>()
</script>

<template>
  <div class="dvis-editor-header">
    <aside class="button-group">
      <HButton icon="icon-zhedie" @click="MButton.goBack()" />
      <HButton icon="icon-shangyibu" message="撤销 Ctrl + Y" @click="MButton.reflash()" />
      <HButton icon="icon-xiayibu1" message="还原 Ctrl + Z" @click="MButton.reflash()" />
    </aside>
    <main>
      <cite contenteditable="true" @blur="MTitle.onChange">
        {{ title || 'Untitled' }}
      </cite>
    </main>
    <aside class="button-group-right">
      <HButton icon="icon-menu" @click="MButton.show(0)" :activated="propertyType === 0" />
      <HButton icon="icon-shezhi" message="界面设置" @click="MButton.show(1)" :activated="propertyType === 1" />
    </aside>

    <aside :class="['property', showProp ? 'show-proerty' : null]">
      <div class="layer-buttons flex space-around">
        <LayerButton icon="icon-shezhi" message="界面设置" />
        <LayerButton icon="icon-xiayi" message="下移" />
        <LayerButton icon="icon-zhiding" message="置顶" />
        <LayerButton icon="icon-zhidi" message="置底" />
        <LayerButton icon="icon-guanbi1" message="关闭" @click="MButton.close" />
      </div>
      <Proerty v-if="propertyType === 0" />
      <PageSetting v-if="propertyType === 1" />
    </aside>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
