/*
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-14 15:22:29
 * @modify: 2022-04-14 15:53:58
 * @desc:
 */
import { defineComponent } from 'vue'
import './index.less'

const IProps = {
  icon: {
    description: '图标',
    default: () => '',
    required: false,
    type: String,
  },
  name: {
    description: '统计名称',
    default: () => '',
    required: false,
    type: String,
  },
  statistics: {
    description: '统计值',
    default: () => NaN,
    required: false,
    type: Number,
  },
  type: {
    description: '图标类型',
    default: () => 'default', // 'primary' | 'success' | 'error'
    required: false,
    type: String,
  },
}

export const SattisticsCard = defineComponent({
  name: 'SattisticsCard',
  props: IProps,
  setup(props) {
    return () => (
      <div class={['sattistics-card', 'flex', 'align-center']}>
        <dvis-icon class={props.type} icon={props.icon} size='18px'></dvis-icon>
        <main>
          <h1>{props.statistics}</h1>
          <p>{props.name}</p>
        </main>
      </div>
    )
  },
})
