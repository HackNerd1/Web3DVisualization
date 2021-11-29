import { IColumns } from './index.d'
import { defineComponent } from 'vue'

type IProps = IColumns & { required: boolean }

const Wrapper = defineComponent({
  name: 'dvsi-form-wrapper',
  setup(props: Readonly<IProps>, { slots }) {
    // defineProps<IProps>()
    console.log(props)

    return () => (
      <div class={['dvis-form-item']}>
        {slots.default && slots.default()}
        {/* {label ? (
      <label for={prop} class={{ required: required }}>
        {label}
      </label>
    ) : (
      <></>
    )}
    {node} */}
      </div>
    )
  },
})

export default Wrapper
