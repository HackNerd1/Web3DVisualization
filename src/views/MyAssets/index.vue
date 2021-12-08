<script lang="ts" setup>
  // import Card from '@/components/common/card'
  import { ref } from 'vue'

  /**
   * 色板
   */
  const color = ['#FFB931', '#FF036D', 'rgba(164, 48, 255, 1)', 'rgba(0, 206, 144, 1)']

  /**
   * 资源分组
   */
  // TODO 待对接口
  const assetsGroup = [
    {
      title: 'Buy',
      icon: 'icon-Buy',
    },
    {
      title: 'Sell',
      icon: 'icon-tagfill',
    },
    {
      title: 'Send',
      icon: 'icon-bx-mail-send',
    },
    {
      title: 'Request',
      icon: 'icon-downloadfill',
    },
    {
      title: 'Send',
      icon: 'icon-bx-mail-send',
    },
    {
      title: 'Request',
      icon: 'icon-downloadfill',
    },
    {
      title: 'Send',
      icon: 'icon-bx-mail-send',
    },
    {
      title: 'Request',
      icon: 'icon-downloadfill',
    },
  ]

  const transform = ref(0)

  const handleTransform = (toggle: number) => {
    transform.value += 154 * toggle
  }

  const handleSearch = () => {
    // console.log('search')
  }
</script>

<template>
  <div class="dvis-common-containter">
    <section>
      <h1>Group</h1>
      <div class="flex group">
        <!-- 
          向左按钮
         -->
        <dvis-icon
          size="18px"
          icon="icon-xiangzuo"
          @click="handleTransform(1)"
          color="rgba(44, 62, 80, 0.6)"
          class="pagination"
        />
        <!-- 
          分组
         -->
        <div class="carousel">
          <dvis-card
            :style="{ transform: `translateX(${transform}px)` }"
            v-for="(props, index) in assetsGroup"
            v-bind="props"
            :iconBGColor="color[index]"
            background
            :key="index"
          />
        </div>
        <!-- 
          向左按钮
         -->
        <dvis-icon
          size="18px"
          icon="icon-xiangyou"
          @click="handleTransform(-1)"
          color="rgba(44, 62, 80, 0.6)"
          class="pagination"
        />
      </div>
      <div class="search-bar">
        <dvis-input placeholder="Search for something..." @keyup.enter="handleSearch">
          <template #prefix>
            <dvis-icon icon="icon-searchfill" size="16px" color="rgba(164, 182, 225, 1)" />
          </template>
          <template #suffix>
            <span class="search-filters" @click="handleSearch">
              <dvis-icon icon="icon-DividerTall" size="24px" color="rgba(120, 136, 150, 0.3)" />
              <dvis-icon icon="icon-filter1" size="18px" />
              Filtters
            </span>
          </template>
        </dvis-input></div
      >
    </section>

    <section>
      <h1>My Portfolio Value</h1>
      <n-skeleton height="330px" width="100%" :sharp="false" />
    </section>
    <section>
      <h1>Following</h1>
      <div class="flex space-between">
        <n-skeleton height="205px" width="205px" :sharp="false" />
        <n-skeleton height="205px" width="205px" :sharp="false" />
        <n-skeleton height="205px" width="205px" :sharp="false" />
      </div>
    </section>
  </div>
</template>

<style lang="less">
  @import './index.less';
</style>
