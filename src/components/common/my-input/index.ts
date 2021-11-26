import MyInput from './index.vue'
import { App } from 'vue'

const Input = {
  ...MyInput,
  name: 'MyInput',
  install(app: App) {
    app.component(this.name, this)
  },
}
export default Input
