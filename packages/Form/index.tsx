import { IValue, IRules, IColumns, IOption } from './index.d'
import { isRequired } from './hooks'
import { defineComponent, App, PropType, VNode, SetupContext, ref } from 'vue'
import { Input, Icon } from '/packages/index.ts'
import Wrapper from './wrapper.vue'
import './index.less'

const IProps = {
  modelValue: {
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

const Form = defineComponent({
  name: 'DvisForm',
  props: IProps,
  setup(props, ctx: SetupContext) {
    const { modelValue, columns } = props
    const { slots, emit } = ctx

    const onReset = () => {
      emit('onReset')
    }

    const onSubmit = () => {
      emit('submit')
    }

    const form = ref(modelValue)
    // const valid = ref(true)

    const renderColumns = (columns: IColumns) => {
      const { type, label, span, prop, ...others } = columns

      const handleChange = (content: string) => {
        Object.assign(form.value, { [prop || '']: content })
        emit('update:modelValue', form)
      }

      // const handleValid = () => {
      //   console.log(modelValue[prop || ''])

      //   if (modelValue && modelValue[prop || '']) valid.value = true
      //   else valid.value = false
      // }

      switch (type) {
        case 'input':
          const { isPassword, prefix, rules, ...rest } = others
          const slots = {
            prefix: () => <Icon icon={prefix} size='18px' color='rgba(164, 182, 225, 1)'></Icon>,
          }
          return (
            // <Wrapper required={true} label={label} onValid={handleValid} isValid={valid.value}>
            <Wrapper required={isRequired(rules)} label={label}>
              <Input
                round
                {...rest}
                rules={rules}
                v-slots={slots}
                type={isPassword ? 'password' : 'text'}
                onUpdate:modelValue={handleChange}
              />
            </Wrapper>
          )
        default:
          break
      }
    }

    return () => (
      <div class='dvis-form'>
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
