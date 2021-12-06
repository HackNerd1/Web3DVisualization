import DvisInput from './index.vue'
import { App } from 'vue'

const Input = {
  ...DvisInput,
  name: 'DvisInput',
  install(app: App) {
    app.component(this.name, this)
  },
}
export default Input
