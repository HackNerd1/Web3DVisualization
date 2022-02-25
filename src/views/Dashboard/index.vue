<script lang="ts" setup></script>

<template>
  <div class="dvis-common-container">
    <section class="search-bar">
      <n-skeleton height="40px" round />
    </section>
    <section>
      <h1>Dashboard</h1>
      <div class="flex space-between">
        <n-skeleton height="40px" width="142px" round />
        <n-skeleton height="40px" width="142px" round />
        <n-skeleton height="40px" width="142px" round />
        <n-skeleton height="40px" width="142px" round />
      </div>
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
