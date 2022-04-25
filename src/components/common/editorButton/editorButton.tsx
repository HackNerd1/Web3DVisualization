/*
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-18 10:23:33
 * @modify: 2022-04-25 16:13:05
 * @desc:
 */
import { defineComponent } from 'vue'
import './editorButton.less'
import { Tooltips } from '/packages/index.ts'

const IProps = {
  ...Tooltips.props,
  icon: {
    description: '图标',
    default: () => '',
    required: false,
    type: String,
  },
  size: {
    description: '图标大小',
    default: () => '28px',
    required: false,
    type: String,
  },
}

export const EditorButton = defineComponent({
  name: 'EditorButton',
  props: IProps,
  emits: ['on-click'],
  setup(props, { emit }) {
    const { size, icon, description, title, position } = props
    const Icon = (
      <dvis-icon
        icon={icon}
        color='#A4B6E1'
        size={size}
        onClick={() => {
          emit('on-click')
        }}
        class={['dvis-editor-button', 'flex', 'align-center', 'justify-center']}
      ></dvis-icon>
    )
    return () => (
      <>{description || title ? <Tooltips {...{ description, title, position }}>{Icon}</Tooltips> : <>{Icon}</>}</>
    )
  },
})
