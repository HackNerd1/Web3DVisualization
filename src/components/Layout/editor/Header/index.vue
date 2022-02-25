<script lang="ts" setup>
  import HButton from '@/components/Layout/editor/components/HeaderButton.vue'
  import { useRouter } from 'vue-router'
  import { defineEmits, defineProps } from 'vue'

  interface IProps {
    title?: string
  }

  const router = useRouter()
  // const showProerty = ref(false)
  const emit = defineEmits(['onShow', 'onEditTitle'])

  /**
   * 按钮方法
   */
  const MButton = (function () {
    const goBack = () => router.go(-1) // 返回键
    const reflash = () => console.log('reflash')
    const showProerty = () => emit('onShow')

    return {
      goBack,
      reflash,
      showProerty,
    }
  })()

  /**
   * 标题事件
   */
  const MTitle = (() => {
    const onChange = (e: FocusEvent) => emit('onEditTitle', e?.target?.textContent)
    return {
      onChange,
    }
  })()

  defineProps<IProps>()
</script>

<template>
  <div class="dvis-editor-header">
    <aside class="button-group">
      <HButton icon="icon-zhedie" @click="MButton.goBack()" />
      <HButton icon="icon-shangyibu" message="撤销 Ctrl + Y" @click="MButton.reflash()" />
      <HButton icon="icon-xiayibu1" message="还原 Ctrl + Z" @click="MButton.reflash()" />
      <!-- <HButton icon="icon-shangyi" message="上移" @click="MButton.reflash()" />
      <HButton icon="icon-xiayi" message="下移" @click="MButton.reflash()" /> -->
    </aside>
    <main>
      <!-- <label>Title:</label> -->
      <cite contenteditable="true" @blur="MTitle.onChange">
        {{ title || 'Untitled' }}
      </cite>
    </main>
    <aside class="button-group-right">
      <HButton icon="icon-menu" @click="MButton.showProerty()" />
    </aside>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
