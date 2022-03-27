/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-24 22:19:21
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-27 17:15:52
 */
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { AppMap } from './render'
import './index.less'
import { debounce } from 'lodash'

const Map = defineComponent({
  name: 'Map',
  props: {
    tagData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { expose }) {
    let mapObj: AppMap | null = null
    const box = ref<Element | null>(null)
    const init = () => {
      nextTick(() => {
        mapObj = new AppMap(box.value, document.querySelector('#provinceInfo'), {})
        mapObj.init()
        mapObj.setTag(props.tagData)
      })
    }
    const renderChart = debounce(() => {
      mapObj && mapObj.reRender()
    }, 100)

    watch(
      () => props.tagData,
      (value) => mapObj?.setTag(value),
    )

    onMounted(() => init())

    expose({ renderChart })

    return () => (
      <div ref={box} class='china-chart'>
        <div id='provinceInfo'> </div>
      </div>
    )
  },
})

export default Map
