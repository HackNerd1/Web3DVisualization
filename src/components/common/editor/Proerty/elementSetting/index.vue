<!--
 * @Descripttion: 界面属性及组件属性设置
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-02-24 16:22:22
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-14 15:32:30
-->
<script lang="ts" setup>
  import { IOption, ICmpSetting } from '@/types'
  import { ref, reactive, inject, onUnmounted } from 'vue'
  import { useStore } from '@/store'
  import EventBus from '@/utils/eventBus'
  import { KEventBus } from '@/symbols'
  const eventBus = inject(KEventBus, new EventBus())
  const store = useStore()
  // interface IProps {
  //   option: IOption
  //   setting: ICmpSetting
  // }
  /**
   * @description 数据设置
   * dataType: 0 静态数据 1 动态数据 2 sql数据
   */
  const dataSetting = reactive({ dataType: 0, api: '', method: undefined })
  const cmpSetting = ref<ICmpSetting>(store.state.elementLists[store.state.currentElement])
  // console.log(store.state.elementLists[store.state.currentElement])
  const selectElement = (index: number) => {
    cmpSetting.value = store.state.elementLists[index]
  }
  const methodsOption = [
    {
      label: 'GET',
      value: 0,
    },
    {
      label: 'POST',
      value: 1,
    },
  ]

  const handleChange = (e: Event) => {
    dataSetting.dataType = Number((e.target as HTMLInputElement).value)
  }
  // const props = defineProps<IProps>()
  const cmpOption = ref<IOption>({})
  eventBus.on('selectElement', selectElement)
  onUnmounted(() => {
    eventBus.off('selectElement', selectElement)
  })
  // import LayerButton from '@/components/common/editor/LayerButton.vue'
</script>
<template>
  <div class="dvis-proerty">
    <section v-if="!cmpSetting" class="element-setting-info">
      <dvis-icon icon="icon-info1" size="30px" />
      请选择元素
    </section>
    <n-tabs v-else type="line">
      <n-tab-pane name="setting" tab="配置">
        <title>元素尺寸</title>
        <label>宽</label>
        <n-input-number v-model:value="cmpSetting.w" :show-button="false" placeholder="请输入">
          <template #suffix> px </template>
        </n-input-number>
        <label>高</label>
        <n-input-number v-model:value="cmpSetting.h" :show-button="false" placeholder="请输入">
          <template #suffix> px </template>
        </n-input-number>
        <label>x</label>
        <n-input-number v-model:value="cmpSetting.x" :show-button="false" placeholder="请输入">
          <template #suffix> px </template>
        </n-input-number>
        <label>y</label>
        <n-input-number v-model:value="cmpSetting.y" :show-button="false" placeholder="请输入">
          <template #suffix> px </template>
        </n-input-number>
      </n-tab-pane>
      <n-tab-pane name="data" tab="数据">
        <title>title</title>
        <label>数据类型</label>
        <n-radio @change="handleChange" :value="0" name="静态数据" :checked="dataSetting.dataType === 0">
          静态数据
        </n-radio>
        <n-radio @change="handleChange" :value="1" name="远程数据" :checked="dataSetting.dataType === 1">
          远程数据
        </n-radio>
        <n-radio @change="handleChange" :value="2" name="SQL数据" :checked="dataSetting.dataType === 2">
          SQL数据
        </n-radio>
        <section v-if="dataSetting.dataType === 0"> 静态数据 </section>
        <section v-if="dataSetting.dataType === 1">
          <label>请求地址</label>
          <n-input v-model:value="dataSetting.api" placeholder="请输入API地址" />
          <label>请求方式</label>
          <n-select v-model:value="dataSetting.method" :options="methodsOption" placeholder="请选择请求方式" />
        </section>
        <section v-if="dataSetting.dataType === 2"> SQL数据 </section>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
<style lang="less" scoped>
  .dvis-proerty {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.5rem 1rem 1rem 1rem;

    .element-setting-info {
      text-align: center;
      transform: translateY(50%);
    }

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
