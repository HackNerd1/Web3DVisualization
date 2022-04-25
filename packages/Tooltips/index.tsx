/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-04-10 21:51:32
 * @LastEditors: Please set LastEditors
 * @modify: 2022-04-25 15:27:54
 */
import { defineComponent, App, PropType } from 'vue'
import './index.less'

const IProps = {
  description: {
    description: '描述',
    default: () => '',
    required: false,
    type: String,
  },
  title: {
    // TODO
    description: '标题',
    default: () => '',
    required: false,
    type: String,
  },
  position: {
    description: '位置',
    default: () => 'bottom', // 'top' 'topleft' | 'topright' | 'left' | 'right' | 'bottomleft' | 'bottomright' | 'bottom'
    required: false,
    type: String,
  },
}

const Tooltips = defineComponent({
  name: 'DvisTooltips',
  props: IProps,
  setup(props, { slots, attrs }) {
    const { description, position } = props
    return () => (
      <div class={['dvis-tooltips', position]} data-content={description}>
        {slots.default && slots.default()}
      </div>
    )
  },
  install: function (App: App) {
    App.component(Tooltips.name, Tooltips)
  },
})

export default Tooltips
