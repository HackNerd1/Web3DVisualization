<!--
 * @Descripttion: 界面设置
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-02 14:59:57
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-27 20:11:47
-->

<script lang="ts" setup>
  import { useStore } from '@/store'
  import { ref } from 'vue'
  import { IPageSetting } from '@/types'

  const Store = useStore()
  const form = ref<IPageSetting>(Store.state.pageSetting)

  // console.log(getPageSetting)

  const MSetting = (() => {
    const save = () => {
      Store.dispatch('setPageSetting', form.value)
      // console.log(Store.state.pageSetting)

      // TODO 发送请求
    }
    return { save }
  })()
</script>

<template>
  <div class="dvis-page-setting">
    <section>
      <title>界面尺寸</title>
      <label>宽</label>
      <n-input-number v-model:value="form.width" :show-button="false" placeholder="请输入">
        <template #suffix> px </template>
      </n-input-number>
      <label>高</label>
      <n-input-number v-model:value="form.height" :show-button="false" placeholder="请输入">
        <template #suffix> px </template>
      </n-input-number>
    </section>
    <section>
      <title>界面背景</title>
      <label>背景图片</label>
      <n-upload list-type="image-card" />
      <label>背景颜色</label>
      <n-color-picker v-model:value="form.backgroundColor" />
    </section>
    <n-button @click="MSetting.save">保存</n-button>
  </div>
</template>

<style lang="less" scoped>
  .dvis-page-setting {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.5rem 1rem 1rem 1rem;

    section {
      // display: flex;
      // overflow: auto;
      label {
        &::after {
          margin-left: 0.1rem;
          content: ':';
        }
      }
    }
  }
</style>
