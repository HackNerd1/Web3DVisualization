import { App } from 'vue'
import Icon from './Icon'
import Input from './Input'
import Badge from './Badge'
import Button from './Button'
import Avatar from './Avatar'
import CollapseButton from './CollapseButton'
import Form from './Form'

const components = { Input, Button, CollapseButton, Form, Icon, Badge, Avatar }

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
export { Input, Button, CollapseButton, Form, Icon, Badge, Avatar }
