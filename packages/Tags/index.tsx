/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-04-10 15:31:50
 * @LastEditors: Please set LastEditors
 * @modify: 2022-04-14 14:39:31
 */
import { defineComponent, App } from 'vue'
import './index.less'
const IProps = {
  type: {
    description: 'tag类型',
    default: () => 'default', // 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error' | ''
    required: false,
    type: String,
  },
  size: {
    description: '大小',
    default: () => 'default', // 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
    required: false,
    type: String,
  },
  /**
   * attrs
   * @description
   * 是否启用圆角
   */
}

const Tags = defineComponent({
  name: 'DvisTags',
  props: IProps,
  setup(props, { slots, attrs }) {
    return () => (
      <div {...attrs} class={['dvis-tags', props.type]}>
        {slots.default && slots.default()}
      </div>
    )
  },
  install: function (App: App): void {
    App.component(Tags.name, Tags)
  },
})

export default Tags
