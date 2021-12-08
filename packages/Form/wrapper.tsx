// import { IColumns } from './index.d'
import { defineComponent, defineProps, withDefaults } from 'vue'

interface IColumns {
  label?: string
  prop: string
  type: string
  span?: number
  append?: string // 前缀
  prepend?: string // 后缀
}

const Wrapper = defineComponent({
  setup(_, { slots }) {
    const props = withDefaults(defineProps<IColumns>(), {})

    return () => (
      <div class={['dvis-form-item']}>
        {slots.default && slots.default()}
        {}
        {}
        {/* <label v-if="label" :for="prop" :class="{ required: required }"> {{ label }} </label>  */}
        <slot></slot>
      </div>
    )
  },
})

export default Wrapper
