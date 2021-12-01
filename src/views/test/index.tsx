import { defineComponent, App } from 'vue'
import { NButton } from 'naive-ui'

interface IProp {
  type: String | Number | object
}
// const props: IProp = {
//   name
// }

const TestTsx = defineComponent({
  name: 'TestTsx',
  setup(props) {
    return () => <NButton>Clickme</NButton>
  },
  install(app: App) {
    // app.component(this.name, this)
  },
})
