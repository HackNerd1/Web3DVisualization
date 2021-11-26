import App from './App.vue'
import { createApp } from 'vue'
import Router from './router/index'
import EventBus from './utils/eventBus'
import myComponents from './components/common'

const app = createApp(App)
const $bus = new EventBus()

app.use(Router)
app.provide('$bus', $bus)
app.mount('#app')
