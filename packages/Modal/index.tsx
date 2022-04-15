/*
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-13 10:43:57
 * @modify: 2022-04-15 16:34:28
 * @desc:
 */
import { defineComponent, App, ref, watchEffect } from 'vue'
import Button from '../Button'
import './index.less'

const IProps = {
  /**
   * Attributes
   * @description
   *
   * @event update:visable 更新是否隐藏
   */
  visable: {
    description: '文本输入的值',
    type: Boolean,
    default: () => false,
    required: false,
  },
  title: {
    description: '标题',
    type: String,
    default: () => 'Mdoal',
    required: false,
  },
}

const Modal = defineComponent({
  props: IProps,
  name: 'DvisModal',
  emits: ['update:visable', 'save'],
  setup(props, { emit, expose, slots }) {
    const isVisable = ref<boolean>(props.visable)
    const maskRef = ref<HTMLElement | null>(null)

    const cancel = () => {
      isVisable.value = false
      emit('update:visable', false)
    }
    const clickMask = (e: MouseEvent) => {
      e.preventDefault()
      if (e.target === maskRef.value) cancel()
      return
    }
    const save = () => {
      emit('save')
    }

    watchEffect(() => {
      isVisable.value = props.visable
    })

    const defaultFooter = () => (
      <>
        <Button size={'large'} round onClick={save}>
          Save
        </Button>
        <Button type={'plain'} size={'large'} round onClick={cancel}>
          Cancel
        </Button>
      </>
    )

    return () => (
      <>
        {isVisable.value && (
          <div class={'dvis-modal'} ref={maskRef} onClick={clickMask}>
            <div class={'dvis-modal-box'}>
              <header>{slots.header && slots.header()}</header>
              <main>{slots.default ? slots.default() : props.title}</main>
              <footer>{slots.footer ? slots.footer() : defaultFooter()}</footer>
            </div>
          </div>
        )}
      </>
    )
  },
  install: function (App: App) {
    App.component(Modal.name, Modal)
  },
})

export default Modal
