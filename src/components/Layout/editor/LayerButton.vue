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
    background-color: transparent;
    height: var(2rem);
    width: var(3rem);
    transition: color ease-in 0.3s;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    &:hover {
      color: rgba(232, 67, 147);
    }

    i {
      font-size: 1.2rem;
    }
  }
</style>
