<script lang="ts" setup>
  interface IProps {
    icon?: string;
    height?: string;
    weight?: string;
    collpased?: boolean;
  }

  const emit = defineEmits(['click']);
  const handleClick = () => {
    emit('click');
  };

  defineProps<IProps>();
</script>

<template>
  <button :class="{ collpased: collpased }" @click.prevent="handleClick">
    <i v-if="icon" :class="`iconfont ${icon}`"></i>
  </button>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
