// import { ref, defineComponent, App, defineProps, defineEmits } from 'vue'

// interface IProps {
//   width?: string
//   height?: string
//   className?: string
//   type?: 'primary' | 'default' | 'planet'
// }

// const MyButton = defineComponent({
//   name: 'MyButton',
//   emits: {
//     click: null, // 事件校验
//   },
//   setup<IProps>(props) {
//     const { width } = props
//     defineProps<IProps>()
//     return () => (
//       <button ref='button' style={widt} class={['dvis-button', className, type]}>
//         <slot></slot>
//       </button>
//     )
//   },
//   install(app: App) {
//     app.component(this.name, this)
//   },
// })
