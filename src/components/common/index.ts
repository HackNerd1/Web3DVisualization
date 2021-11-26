import { App } from 'vue'
import { create, NButton } from 'naive-ui'
import MyInput from './my-input'
import 'vfonts/FiraCode.css' // 等宽字体
import 'vfonts/Lato.css' // 通用字体

const components = { MyInput }
const nvomponents = create({
  components: [NButton],
})

console.log(MyInput)

const install = (app: App) => {
  Object.values(components).forEach((component) => app.use(component))
  app.use(nvomponents)
}

export default {
  version: '',
  name: 'my-components',
  install,
}
