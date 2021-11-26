import myCollapseButton from './index.vue'
import { App } from 'vue'

const CollapseButton = {
  ...myCollapseButton,
  name: 'CollapseButton',
  install(app: App) {
    app.component(this.name, this)
  },
}
export default CollapseButton
