import { IValue, IRules, IColumns, IOption } from './index.d'
import { defineComponent, App, PropType, VNode } from 'vue'
import { Input } from '/packages/index.ts'
import Wrapper from './wrapper'
import './index.less'

const IProps = {
  value: {
    type: Object as PropType<IValue>,
    required: true,
    description: '表单数据对象',
  },
  rules: {
    type: Array as PropType<IRules[]>,
    required: false,
    description: '表单验证规则',
    default: () => [],
  },
  columns: {
    type: Array as PropType<IColumns[]>,
    required: true,
    description: '表单项',
  },
  option: {
    type: Object as PropType<IOption>,
    description: '表格总配置属性',
    required: false,
    default: () => {},
  },
}

const wrapTags = (node: VNode, rest: IColumns & { required: boolean }) => {
  const { label, span, prop, required } = rest
  return () => (
    <div class={['dvis-form-item']}>
      {label ? (
        <label for={prop} class={{ required: required }}>
          {label}
        </label>
      ) : (
        <></>
      )}
      {node}
    </div>
  )
}

const renderColumns = (columns: IColumns) => {
  const { type, label, span, prop, ...rest } = columns

  switch (type) {
    case 'input':
      return (
        <Wrapper required={true}>
          <Input></Input>
        </Wrapper>
      )

    default:
      break
  }
}

const Form = defineComponent({
  name: 'MyForm',
  props: IProps,
  setup(props, ctx) {
    const { value, columns } = props
    const { slots, emit } = ctx

    const onReset = () => {
      emit('onReset')
    }

    const onSubmit = () => {
      emit('submit')
    }

    return () => (
      <div onClick={onReset}>
        {slots.default && slots.default()}
        {columns?.map((ele) => renderColumns(ele))}
      </div>
    )
  },
  install: function (App: App) {
    App.component(Form.name, Form)
  },
})

export default Form
