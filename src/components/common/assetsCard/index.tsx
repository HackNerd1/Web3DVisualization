/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-04-10 15:51:43
 * @LastEditors: Hansel
 * @LastEditTime: 2022-04-10 22:05:17
 */
import { defineComponent } from 'vue'
import './index.less'

const IProps = {
  title: {
    description: '标题',
    default: () => '',
    required: false,
    type: String,
  },
  description: {
    description: '描述',
    default: () => '',
    required: false,
    type: String,
  },
  status: {
    description: '发布状态',
    default: () => '',
    required: false,
    type: String,
  },
  background: {
    description: '背景图片',
    default: () => '',
    required: false,
    type: String,
  },
}

export const AssetsCard = defineComponent({
  name: 'AssetsCard',
  props: IProps,
  setup(props, { emit }) {
    const { title, description, background, status } = props
    const mapStatus = (status: string): string => {
      const dict: {
        [key: string]: string
      } = {
        Published: 'success',
        Draft: 'error',
      }

      return dict[status]
    }

    return () => (
      <div class={'dvis-card dvis-assets-card'}>
        <span class={'effect flex justify-evenly align-center'}>
          <dvis-tooltips description='Preview'>
            <dvis-icon icon='icon-preview' color='#333333' size='16px'></dvis-icon>
          </dvis-tooltips>
          <dvis-tooltips description='Edit'>
            <dvis-icon icon='icon-edit1' color='#333333' size='16px'></dvis-icon>
          </dvis-tooltips>
          <dvis-tooltips description='Detete'>
            <dvis-icon icon='icon-delete2' color='#333333' size='16px'></dvis-icon>
          </dvis-tooltips>
        </span>
        <div class={'backgournd'} style={{ backgroundImage: `url(${background})` }}>
          <dvis-tags type={mapStatus(status)} round>
            {status}
          </dvis-tags>
        </div>
        <div class={'content'}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    )
  },
})
