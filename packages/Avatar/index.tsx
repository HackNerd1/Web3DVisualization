import { defineComponent, App, PropType } from 'vue'
import Icon from '/packages/Icon/index.tsx'
import './index.less'

type IType = 'default' | 'success' | 'error' | 'warning' | 'info'

const IProps = {
  ...Icon.props,
  // TODO
  image: {
    type: String,
    default: () => '',
    description: '头像地址',
  },
}

const Avatar = defineComponent({
  name: 'DvisAvatar',
  props: IProps,
  setup(props) {
    return () => <Icon {...props} class={['dvis-avatar']} style={{ backgroundImage: `url(${props.image})` }}></Icon>
  },
  install: function (App: App) {
    App.component(Avatar.name, Avatar)
  },
})

export default Avatar
