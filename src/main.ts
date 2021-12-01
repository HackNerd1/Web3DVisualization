import App from './App.vue'
import { createApp } from 'vue'
import Router from './router/index'
import EventBus from './utils/eventBus'
import { create, NButton, NResult } from 'naive-ui'
import MyComponents from '/packages/index.ts'
import 'vfonts/FiraCode.css' // 等宽字体
import 'vfonts/Lato.css' // 通用字体

const nvcomponents = create({
  components: [NButton, NResult],
})

const app = createApp(App)
const $bus = new EventBus()

app.use(Router)
app.use(nvcomponents)
app.use(MyComponents)
app.provide('$bus', $bus)
app.mount('#app')
