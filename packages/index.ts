import { App } from 'vue'
import Button from './Button'
import Input from './Input'
import CollapseButton from './CollapseButton'

const components = { Input, Button, CollapseButton }

const install = (app: App) => {
  Object.values(components).forEach((component) => app.use(component))
}

const MyComponents = {
  version: '0.0.1',
  name: 'my-components',
  install,
  ...components,
}

export default MyComponents
export { Input, Button, CollapseButton }
