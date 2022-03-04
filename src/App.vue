<!--
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-09-27 16:30:00
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-02 16:02:58
-->
<template>
  <n-message-provider>
    <router-view />
  </n-message-provider>
</template>

<style>
  @import url('@/assets/styles/index.css');
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  title {
    display: block;
  }
</style>
