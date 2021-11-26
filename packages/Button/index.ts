import MyButton from './index.vue'
import { App } from 'vue'

const Button = {
  ...MyButton,
  name: 'MyButton',
  install(app: App) {
    app.component(this.name, this)
  },
}
export default Button
