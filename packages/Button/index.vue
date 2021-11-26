<script lang="ts" setup>
  import { ref } from 'vue'

  interface IProps {
    width?: string
    height?: string
    className?: string
    type?: 'primary' | 'default' | 'planet'
  }

  const emit = defineEmits(['click'])
  const button = ref(null)

  /**
   * handleClick
   * @param { Number } clientX
   * @param { Number } clientY
   * @param { Object } target
   * @description
   *    1. 添加水波纹特效
   *    2. 发送点击事件
   */
  const handleClick = ({ clientX, clientY, target }) => {
    const { offsetLeft, offsetTop } = target
    const left = clientX - offsetLeft + 'px'
    const right = clientY - offsetTop + 'px'
    const span = document.createElement('span') // JS添加HTML节点不会启用Scoped样式
    button.value.appendChild(span)
    Object.assign(span.style, { left, right })

    setTimeout(() => {
      // 特效过期 移除节点
      span.remove()
    }, 1000)

    emit('click')
  }

  defineProps<IProps>()
</script>
<template>
  <button
    ref="button"
    :width="width || '100%'"
    @click.prevent="handleClick"
    :class="['data-visualze-button', className, type ? type : 'default']"
  >
    <slot></slot>
  </button>
</template>

<style lang="less">
  @import './index.less';
</style>
