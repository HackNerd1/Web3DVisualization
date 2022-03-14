/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-09-27 16:30:00
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-14 14:00:16
 */
import MyComponents from '/packages/index.ts'
import EventBus from './utils/eventBus'
import Router from './router/index'
import App from './App.vue'
import store from '@/store'
import ContextMenu from '@imengyu/vue3-context-menu'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
// import echart from 'packages/Echarts'
// import { IPageSetting } from '@/types'
import { createApp } from 'vue'
import { KEventBus, KStore } from '@/symbols'
import {
  create,
  NButton,
  NResult,
  NDivider,
  NSkeleton,
  NMessageProvider,
  NTooltip,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NColorPicker,
  NUpload,
  NTabs,
  NTabPane,
  NAlert,
  NRadio,
  NSelect,
} from 'naive-ui'
import 'vfonts/FiraCode.css' // 等宽字体
import 'vfonts/Lato.css' // 通用字体
import '@/assets/styles/index.less'

const nvcomponents = create({
  components: [
    NButton,
    NResult,
    NDivider,
    NSkeleton,
    NMessageProvider,
    NTooltip,
    NForm,
    NFormItem,
    NInput,
    NInputNumber,
    NColorPicker,
    NUpload,
    NTabs,
    NTabPane,
    NAlert,
    NRadio,
    NSelect,
  ],
})

const app = createApp(App)
const $bus = new EventBus()

app.use(Router)
app.use(nvcomponents)
app.use(MyComponents)
app.use(store, KStore)
app.provide(KEventBus, $bus)
app.use(ContextMenu)
app.mount('#app')
