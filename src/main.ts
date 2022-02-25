import { create, NButton, NResult, NDivider, NSkeleton, NMessageProvider, NTooltip } from 'naive-ui'
import MyComponents from '/packages/index.ts'
import EventBus from './utils/eventBus'
import Router from './router/index'
import App from './App.vue'
import { createApp } from 'vue'
import 'vfonts/FiraCode.css' // 等宽字体
import 'vfonts/Lato.css' // 通用字体

const nvcomponents = create({
  components: [NButton, NResult, NDivider, NSkeleton, NMessageProvider, NTooltip],
})

const app = createApp(App)
const $bus = new EventBus()

app.use(Router)
app.use(nvcomponents)
app.use(MyComponents)
app.provide('$bus', $bus)
app.mount('#app')
