<script lang="ts" setup>
  import { ref } from 'vue'

  interface IProps {
    width?: string
    height?: string
    className?: string
    type?: 'primary' | 'default' | 'planet'
    loading?: boolean
    disabled?: boolean
    // backgroundColor?: string
    color?: string
  }

  const emit = defineEmits(['click'])
  const button = ref<Document>()

  /**
   * handleClick
   * @param { Number } clientX
   * @param { Number } clientY
   * @param { Object } target
   * @description
   *    1. 添加水波纹特效
   *    2. 发送点击事件
   */
  const handleClick = ({ clientX, clientY, target }: MouseEvent) => {
    const { offsetLeft, offsetTop } = target
    const left = clientX - offsetLeft + 'px'
    const right = clientY - offsetTop + 'px'
    const span = document.createElement('span') // JS添加HTML节点不会启用Scoped样式
    button.value && button.value.appendChild(span)
    Object.assign(span.style, { left, right })

    setTimeout(() => {
      // 特效过期 移除节点
      span.remove()
    }, 1000)

    emit('click')
  }

  withDefaults(defineProps<IProps>(), { loading: false, color: '#fff' })
</script>
<template>
  <button
    ref="button"
    :style="{ width, height, color }"
    @click.prevent="handleClick"
    :class="['dvis-button', className, type ? type : 'default', loading ? 'loading' : null]"
    :disabled="loading || disabled"
  >
    <svg
      v-if="loading"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="22px"
      viewBox="0 0 24 30"
      style="enable-background: new 0 0 50 50"
      xml:space="preserve"
    >
      <rect x="0" y="9.22656" width="4" height="12.5469" fill="#fff">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="5.22656" width="4" height="20.5469" fill="#fff">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="8.77344" width="4" height="13.4531" fill="#fff">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
    <slot></slot>
  </button>
</template>

<style lang="less">
  @import './index.less';
</style>
