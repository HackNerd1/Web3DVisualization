import { defineComponent, App } from 'vue'
import './index.less'
const IProps = {
  /**
   * 传入background 代表是否展示背景
   * 传入round 代表是否圆角
   * 支持自定义内容
   */
  icon: {
    description: '图标',
    default: () => '',
    required: false,
    type: String,
  },
}

const Icon = defineComponent({
  name: 'DvisIcon',
  props: IProps,
  setup(props, { slots }) {
    return () => <i class={['dvis-icon', 'iconfont', props.icon]}>{slots.default && slots.default()}</i>
  },
  install: function (App: App) {
    App.component(Icon.name, Icon)
  },
})

export default Icon
