/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-07 14:22:11
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-27 15:26:36
 */

import { ICmpCategory } from '@/types'
import { staticAssetsUrl } from '@/utils'

export const Category3D: ICmpCategory = {
  name: '地图',
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

export const pie: ICmpCategory = {
  name: '柱状图',
  icon: 'icon-bingtu',
  data: [
    {
      category: 'charts',
      icon: 'icon-shuzhuangtu',
      url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.png?_v_=1643452312113',
      id: '3',
      name: 'VBasicPie',
      alias: '基本饼图',
      used: true,
    },
    {
      category: 'charts',
      icon: 'icon-shuzhuangtu',
      url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.png?_v_=1643452312113',
      id: '4',
      name: 'VPieOneValue',
      alias: '指标占比图',
      // img: `${process.env.VUE_APP_QINIU_FILE}/com/pie-one-value.png`,
      used: true,
    },
    {
      category: 'charts',
      icon: 'icon-shuzhuangtu',
      url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.png?_v_=1643452312113',
      id: '5',
      name: 'VPieOneValue',
      alias: '指标占比图',
      // img: `${process.env.VUE_APP_QINIU_FILE}/com/pie-one-value.png`,
      used: true,
    },
  ],
}
