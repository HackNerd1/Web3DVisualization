import { defineComponent, App, PropType } from 'vue'
import Icon from '/packages/Icon/index.tsx'
import './index.less'

type IType = 'default' | 'success' | 'error' | 'warning' | 'info'

const IProps = {
  ...Icon.props,
  // TODO
  color: {
    description: '标记点的颜色',
    default: () => '#e84393',
    required: false,
    type: String,
  },
  dot: {
    description: '是否展示点',
    default: () => false,
    required: false,
    type: Boolean,
  },
  value: {
    description: '标记数量',
    default: () => '',
    required: false,
    type: [String, Number],
  },
  type: {
    description: '标记显示类型',
    default: () => 'default',
    required: false,
    type: String as PropType<IType>,
  },
}

const Badge = defineComponent({
  name: 'DvisBadge',
  props: IProps,
  setup(props) {
    const slots = {
      default: () => <div class='dots'></div>,
    }

    return () => <Icon {...props} class={['dvis-badge']} v-slots={slots}></Icon>
  },
  install: function (App: App) {
    App.component(Badge.name, Badge)
  },
})

export default Badge
