<!--
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-12 10:50:07
 * @modify: 2022-04-14 16:23:14
 * @desc: 
-->
<script lang="ts" setup>
  import avatar from '@/assets/avatar/avatar.png'
  import { APPIActivity, APPIWorkStatistics } from '@/types/data'
  import { ActivityCard } from '@/components/common/activityCard'
  import { SattisticsCard } from '@/components/common/sattisticsCard'
  // TODO对接口
  const activities: APPIActivity[] = [
    {
      name: '3D China Map',
      type: 'publish',
      time: '1d ago',
      status: 'success',
    },
    {
      name: '3D China Map',
      type: 'publish',
      time: '23h ago',
      status: 'success',
    },
    {
      name: 'Mygroup',
      type: 'create',
      time: '3d ago',
      status: 'success',
    },
  ]

  const workStatistics: APPIWorkStatistics[] = [
    {
      icon: 'icon-artwork',
      name: 'products',
      type: 'primary',
      statistics: 4,
    },
    {
      icon: 'icon-work',
      name: 'pubished works',
      type: 'success',
      statistics: 1,
    },
    {
      icon: 'icon-gaoyuan',
      name: 'Drafts',
      type: 'error',
      statistics: 3,
    },
    {
      icon: 'icon-group',
      name: 'groups',
      type: 'primary',
      statistics: 3,
    },
  ]
</script>
<template>
  <div class="dvis-author-bar">
    <section class="flex justify-between">
      <dvis-badge clickable>
        <dvis-icon icon="icon-notice" background round />
      </dvis-badge>
      <div class="avatar">
        <dvis-avatar :image="avatar" background round />
        Hansel Design
      </div>
    </section>
    <section class="dvis-recent-activity">
      <header>
        <h1>Recent Activity</h1>
        <a href="#">View more<dvis-icon icon="icon-right3" size="12px" /></a>
      </header>
      <main>
        <ActivityCard v-bind="item" v-for="(item, index) in activities" :key="index" />
      </main>
    </section>
    <section class="dvis-work-statistics">
      <SattisticsCard v-bind="item" v-for="(item, index) in workStatistics" :key="index" />
    </section>
  </div>
</template>
<style lang="less" scoped>
  @import './index.less';
</style>
