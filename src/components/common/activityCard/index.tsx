/*
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-13 18:45:50
 * @modify: 2022-04-14 14:54:11
 * @desc:
 */
import { APPIActivityType } from 'src/types/data'
import { defineComponent } from 'vue'
import './index.less'

const IProps = {
  time: {
    description: 'published time',
    default: () => '',
    required: false,
    type: String,
  },
  type: {
    description: '操作类型',
    default: () => '', // 'publish' 'create'
    required: false,
    type: String,
  },
  name: {
    description: '具体操作',
    default: () => '',
    required: false,
    type: String,
  },
  status: {
    description: '操作状态',
    default: () => '', // 'seccuss' 'faild' ''
    required: false,
    type: String,
  },
}

export const ActivityCard = defineComponent({
  name: 'ActivityCard',
  props: IProps,
  setup(props) {
    const icons: { [key in APPIActivityType]: any } = {
      publish: 'icon-publish1',
      create: 'icon-add2',
    }

    const types = {}

    return () => (
      <div class={['dvis-activity-card', 'flex']}>
        <dvis-icon icon={icons[props.type as APPIActivityType]} size='20px'></dvis-icon>
        <main>
          <div class={['flex', 'justify-between']}>
            <h1>
              {props.type}&nbsp;
              {props.name}
            </h1>
            <dvis-tags type={'default'} round>
              {props.time}
            </dvis-tags>
          </div>
          <p class={props.status}>{props.status}</p>
        </main>
      </div>
    )
  },
})
