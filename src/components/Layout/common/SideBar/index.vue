<!--
 * @Author: Hansel
 * @Date: 2022-03-10 17:14:49
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-26 23:32:08
 * @FilePath: \Web3DVisualization\src\components\Layout\common\SideBar\index.vue
 * @Description: 
-->
<script lang="tsx" setup>
  import { computed } from '@vue/reactivity'
  import { RouterLink } from 'vue-router'

  interface IItems {
    name?: string
    icon?: string
    link?: string
  }
  interface IMenus {
    group?: string
    children?: IItems[]
  }
  interface IProps {
    // avater?: string | Node
    menu: IMenus[]
    logo?: string | Node
    title?: string | Node
  }
  // const ctx = withCtx()
  const props = defineProps<IProps>()
  const renderLogo = computed(() => {
    if (typeof props.logo === 'string') return <i class={[props.logo, 'dvis-logo']}></i>
    return props.logo
  })
</script>

<template>
  <div class="dvis-side-bar">
    <section class="title">
      {{ renderLogo }}
      {{ title }}
    </section>
    <section class="menu dvis-scroll-bar">
      <template v-for="({ children, group }, index) in menu" :key="index">
        <div class="group">{{ group }}</div>
        <template v-for="({ icon, link, name }, idx) in children" :key="idx">
          <RouterLink :to="{ path: link || '' }" class="router-link" active-class="active">
            <i :class="['iconfont', icon, 'icon']"></i>
            {{ name }}
            <div class="effect"></div>
          </RouterLink>
        </template>
        <n-divider class="divier" />
      </template>
    </section>
    <section class="log-out">
      <i :class="['iconfont', 'icon', 'icon-tubiaozhizuomoban-']"></i>
      Log Out
    </section>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>
