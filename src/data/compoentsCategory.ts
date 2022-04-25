/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-07 14:22:11
 * @LastEditors Please set LastEditors
 * @LastEditTime: 2022-03-27 15:26:36
 */

import { ICmpCategory } from '@/types'
import { staticAssetsUrl } from '@/utils'

const Maps: ICmpCategory = {
  name: 'Maps',
  icon: 'icon-ditu',
  data: [
    {
      category: '3D',
      url: staticAssetsUrl('src/assets/backgroundImg/map.png'),
      icon: 'icon-ditu_diqiu',
      id: '1',
      name: 'map',
      alias: '3D地图',
      used: true,
    },
    {
      category: 'charts',
      url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.png?_v_=1643452312113',
      icon: 'icon-shuzhuangtu',
      id: '2',
      name: 'chart1',
      alias: '测试图形1',
      used: true,
    },
  ],
}

const Buildings: ICmpCategory = {
  name: 'Buildings',
  icon: 'icon-building',
  data: [
    { category: 'buildings', url: staticAssetsUrl('src/assets/backgroundImg/city&streeet.png'), id: '1', name: 'building', alias: '建筑', used: true },
  ]
}

const Vehicles: ICmpCategory = {
  name: 'Vehicles',
  icon: 'icon-et-vehicle',
  data: [
    { category: 'vehicles', url: '', id: '1', name: 'vehicle', alias: '车辆', used: true },
  ]
}

const Plants: ICmpCategory = {
  name: 'Plants',
  icon: 'icon-plant',
  data: [
    { category: 'plants', url: '', id: '1', name: 'plant', alias: '植物', used: true },
  ]
}
const Planets: ICmpCategory = {
  name: 'Planets',
  icon: 'icon-planet2',
  data: [
    { category: 'planets', url: '', id: '1', name: 'planet', alias: '行星', used: true },
  ]
}
const Others: ICmpCategory = {
  name: 'Others',
  icon: 'icon-others',
  data: [
    { category: 'others', url: '', id: '1', name: 'other', alias: '其他', used: true },
  ]
}

export const useCmpCategory = () => ([
  Maps,
  Buildings,
  Vehicles,
  Plants,
  Planets,
  Others,
])


