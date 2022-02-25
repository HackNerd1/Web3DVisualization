<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'
  interface IProps {
    icon?: string
    message?: string
  }

  const emit = defineEmits(['click'])

  const handleClick = () => {
    emit('click')
  }

  defineProps<IProps>()
</script>

<template>
  <n-tooltip
    :delay="500"
    :duration="300"
    trigger="hover"
    placement="bottom"
    class="head-button"
    :show-arrow="false"
    :disabled="!message && message !== ''"
    :style="{ backgroundColor: '#576574' }"
  >
    <template #trigger>
      <button @click="handleClick"> <i :class="['iconfont', icon]"></i> </button>
    </template>
    <span>{{ message }}</span>
  </n-tooltip>
</template>

<style lang="less" scoped>
  button {
    cursor: pointer;
    color: #576574;
    font-weight: 600;
    overflow: hidden;
    font-size: 1.5rem;
    position: relative;
    border: transparent;
    align-items: center;
    display: inline-flex;
    letter-spacing: 0.2rem;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    height: var(--dvis-editor-header-height);
    width: var(--dvis-editor-header-height);
    border-right: 0.05rem solid rgb(237, 241, 245);
    transition: background-color ease-in 0.3s, color ease-in 0.3s;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    &:hover {
      background-color: rgba(232, 67, 147);
      color: white;
    }

    i {
      font-size: 1.2rem;
    }
  }
</style>
