/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-07 14:22:11
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-07 15:11:47
 */

import { ICmpCategory } from '@/types'

// export class CmpCategory implements ICmpCategory {
//   name: string
//   type: string
//   icon: string
//   data: string

//   constructor({ name, type, icon, data }: ICmpCategory) {
//     this.name = name
//     this.type = type
//     this.icon = icon
//     this.data = data
//   }
// }

export const bar: ICmpCategory = {
  type: 'bar',
  name: '柱状图',
  icon: 'icon-shuzhuangtu',
  data: [
    {
      url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.png?_v_=1643452312113',
      icon: 'icon-shuzhuangtu',
      id: '1',
      name: 'VBasicPie',
      alias: '基本饼图',
      cmp: () => import('@/components/Layout/common/index.vue'),
      // img: `${process.env.VUE_APP_QINIU_FILE}/com/basic-pie.png`,
      used: true,
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.png?_v_=1643452312113',
      icon: 'icon-shuzhuangtu',
      id: '2',
      name: 'VPieOneValue',
      alias: '指标占比图',
      // img: `${process.env.VUE_APP_QINIU_FILE}/com/pie-one-value.png`,
      used: true,
    },
  ],
}

export const pie: ICmpCategory = {
  type: 'pie',
  name: '柱状图',
  icon: 'icon-bingtu',
  data: [
    {
      icon: 'icon-shuzhuangtu',
      url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.png?_v_=1643452312113',
      id: '3',
      name: 'VBasicPie',
      alias: '基本饼图',
      // img: `${process.env.VUE_APP_QINIU_FILE}/com/basic-pie.png`,
      used: true,
    },
    {
      icon: 'icon-shuzhuangtu',
      url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.png?_v_=1643452312113',
      id: '4',
      name: 'VPieOneValue',
      alias: '指标占比图',
      // img: `${process.env.VUE_APP_QINIU_FILE}/com/pie-one-value.png`,
      used: true,
    },
    {
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
