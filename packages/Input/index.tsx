import { ref, defineComponent, PropType, App } from 'vue'
import './index.less'

type IType = 'text' | 'textarea' | 'password'

const IProps = {
  /**
   * Attributes
   * @description 组件的 attrs slot等其余属性
   *
   * @attrs round 是否圆角
   * @attrs readonly 是否只读
   *
   * @slot prefix 输入框头部内容
   * @slot suffix 输入框尾部内容
   *
   * @event update:modelValue 输入事件 用v-model绑定
   * @event enter 回车事件
   */
  modelValue: {
    description: '文本输入的值',
    type: [String, Number],
    required: false,
    default: () => '',
  },
  placeholder: {
    description: '文本输入的占位符。',
    default: () => '',
    type: [String],
    required: false,
  },
  // readonly: {
  //   description: '是否只读',
  //   default: () => false,
  //   type: [Boolean],
  //   required: false,
  // },
  type: {
    type: String as PropType<IType>,
    description: '输入框类型',
    default: () => '',
    required: false,
  },
}

const Input = defineComponent({
  name: 'DvisInput',
  props: IProps,
  setup(props, { slots, emit, attrs }) {
    const handleInput = (e: any) => {
      emit('update:modelValue', e.target.value)
    }

    const { class: _, onKeyup, ...others } = attrs

    return () => (
      <div class='dvis-input'>
        {/**前缀 */ slots.prefix && <div class='input-prefix'>{slots.prefix()}</div>}
        {/**后缀 */ slots.suffix && <div class='input-suffix'>{slots.suffix()}</div>}
        <input
          {...others}
          onInput={handleInput}
          value={props.modelValue}
          type={props.type || 'text'}
          placeholder={props.placeholder}
        />
      </div>
    )
  },
  install(App: App) {
    App.component(Input.name, Input)
  },
})

export default Input
