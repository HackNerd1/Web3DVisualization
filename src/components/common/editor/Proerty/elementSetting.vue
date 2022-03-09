<!--
 * @Descripttion: 界面属性及组件属性设置
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-02-24 16:22:22
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-09 15:47:40
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
  const cmpSetting = ref<ICmpSetting>(store.state.elementLists[store.state.currentElement])
  // console.log(store.state.elementLists[store.state.currentElement])
  const selectElement = (index: number) => {
    cmpSetting.value = store.state.elementLists[index]
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
    <section v-if="!cmpSetting"> 未选中元素 </section>
    <section v-else>
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
    </section>
    <!-- <div class="layer-buttons flex space-around">
      <LayerButton icon="icon-shezhi" message="界面设置" />
      <LayerButton icon="icon-xiayi" message="下移" />
      <LayerButton icon="icon-zhiding" message="置顶" />
      <LayerButton icon="icon-zhidi" message="置底" />
    </div> -->
    <div></div>
  </div>
</template>
<style lang="less" scoped>
  .dvis-proerty {
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
