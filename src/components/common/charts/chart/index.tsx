import { defineComponent, reactive, onMounted, watch, ref, onUnmounted, nextTick, computed } from 'vue'
import { debounce } from 'lodash'

interface IData {
  year?: number
  weekCategory: Array<any>
  radarData: Array<any>
  radarDataAvg: Array<any>
  maxData: number
  weekMaxData: Array<any>
  weekLineData: Array<any>
}

// 声明类型
// const PropsType = {
//   data: {
//     type: Object,
//     require: true,
//   },
// } as const

// 定义主体

export default defineComponent({
  // components: {
  //   Draw
  // },
  name: '',
  // props: PropsType,
  setup(prop, { expose }) {
    const chartRef = ref()
    // 定义颜色
    const colorList = {
      linearYtoG: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: '#f5b44d',
          },
          {
            offset: 1,
            color: '#28f8de',
          },
        ],
      },
      linearGtoB: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
          {
            offset: 0,
            color: '#43dfa2',
          },
          {
            offset: 1,
            color: '#28f8de',
          },
        ],
      },
      linearBtoG: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
          {
            offset: 0,
            color: '#1c98e8',
          },
          {
            offset: 1,
            color: '#28f8de',
          },
        ],
      },
      areaBtoG: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(35,184,210,.2)',
          },
          {
            offset: 1,
            color: 'rgba(35,184,210,0)',
          },
        ],
      },
    }
    // 手动触发更新

    const drawTiming = ref<any>(0)
    const data = reactive<IData>({
      year: undefined,
      weekCategory: [],
      radarData: [],
      radarDataAvg: [],
      maxData: 12000,
      weekMaxData: [],
      weekLineData: [],
    })

    const options = ref({})

    // 定时函数
    const drawTimingFn = () => {
      setData()
      drawTiming.value = setInterval(() => {
        setData()
      }, 3000)
    }

    const renderChart = debounce(() => chartRef.value.initChart(options.value), 100)

    // methods
    const setData = () => {
      // 清空轮询数据
      data.weekCategory = []
      data.weekMaxData = []
      data.weekLineData = []
      data.radarData = []
      data.radarDataAvg = []

      const dateBase = new Date()
      data.year = dateBase.getFullYear()
      // 周数据
      for (let i = 0; i < 7; i++) {
        // 日期
        const date = new Date()
        data.weekCategory.unshift([date.getMonth() + 1, date.getDate() - i].join('/'))

        // 折线图数据
        data.weekMaxData.push(data.maxData)
        const distance = Math.round(Math.random() * 11000 + 500)
        data.weekLineData.push(distance)

        // 雷达图数据
        // 我的指标
        const averageSpeed = +(Math.random() * 5 + 3).toFixed(3)
        const maxSpeed = averageSpeed + +(Math.random() * 3).toFixed(2)
        const hour = +(distance / 1000 / averageSpeed).toFixed(1)
        const radarDayData = [distance, averageSpeed, maxSpeed, hour]
        data.radarData.unshift(radarDayData)

        // 平均指标
        const distanceAvg = Math.round(Math.random() * 8000 + 4000)
        const averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3)
        const maxSpeedAvg = averageSpeedAvg + +(Math.random() * 2).toFixed(2)
        const hourAvg = +(distance / 1000 / averageSpeed).toFixed(1)
        const radarDayDataAvg = [distanceAvg, averageSpeedAvg, maxSpeedAvg, hourAvg]
        data.radarDataAvg.unshift(radarDayDataAvg)
      }
    }

    watch(
      () => data,
      (val) => {
        options.value = {
          title: {
            text: '',
            textStyle: {
              color: '#D3D6DD',
              fontSize: 24,
              fontWeight: 'normal',
            },
            subtext: val.year + '/' + val.weekCategory[6],
            subtextStyle: {
              color: '#fff',
              fontSize: 16,
            },
            top: 50,
            left: 80,
          },
          legend: {
            top: 120,
            left: 80,
            orient: 'vertical',
            itemGap: 15,
            itemWidth: 12,
            itemHeight: 12,
            data: ['平均指标', '我的指标'],
            textStyle: {
              color: '#fff',
              fontSize: 14,
            },
          },
          tooltip: {
            trigger: 'item',
          },
          radar: {
            center: ['68%', '27%'],
            radius: '40%',
            name: {
              color: '#fff',
            },
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                color: colorList.linearYtoG,
                opacity: 0.6,
              },
            },
            splitLine: {
              lineStyle: {
                color: colorList.linearYtoG,
                opacity: 0.6,
              },
            },
            splitArea: {
              areaStyle: {
                color: '#fff',
                opacity: 0.1,
                shadowBlur: 25,
                shadowColor: '#000',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
              },
            },
            indicator: [
              {
                name: '服务态度',
                max: val.maxData,
              },
              {
                name: '产品质量',
                max: 10,
              },
              {
                name: '任务效率',
                max: 12,
              },
              {
                name: '售后保障',
                max: 3.5,
              },
            ],
          },
          grid: {
            left: 90,
            right: 80,
            bottom: '15%',
            top: '50%',
          },
          xAxis: {
            type: 'category',
            position: 'bottom',
            axisLine: true,
            axisLabel: {
              color: 'rgba(255,255,255,.8)',
              fontSize: 12,
            },
            data: val.weekCategory,
          },
          // 下方Y轴
          yAxis: {
            name: '工单',
            nameLocation: 'end',
            nameGap: 24,
            nameTextStyle: {
              color: 'rgba(255,255,255,.5)',
              fontSize: 14,
            },
            max: val.maxData,
            splitNumber: 4,

            axisLine: {
              lineStyle: {
                opacity: 0,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                opacity: 0.1,
              },
            },
            axisLabel: {
              color: 'rgba(255,255,255,.8)',
              fontSize: 12,
            },
          },
          series: [
            {
              name: '',
              type: 'radar',
              symbolSize: 0,
              data: [
                {
                  value: val.radarDataAvg[6],
                  name: '平均指标',
                  itemStyle: {
                    normal: {
                      color: '#f8d351',
                    },
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0,
                    },
                  },
                  areaStyle: {
                    normal: {
                      color: '#f8d351',
                      shadowBlur: 25,
                      shadowColor: 'rgba(248,211,81,.3)',
                      shadowOffsetX: 0,
                      shadowOffsetY: -10,
                      opacity: 1,
                    },
                  },
                },
                {
                  value: val.radarData[6],
                  name: '我的指标',
                  itemStyle: {
                    normal: {
                      color: '#43dfa2',
                    },
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0,
                    },
                  },
                  areaStyle: {
                    normal: {
                      color: colorList.linearGtoB,
                      shadowBlur: 15,
                      shadowColor: 'rgba(0,0,0,.2)',
                      shadowOffsetX: 0,
                      shadowOffsetY: 5,
                      opacity: 0.8,
                    },
                  },
                },
              ],
            },
            {
              name: '',
              type: 'line',
              smooth: true,
              symbol: 'emptyCircle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#fff',
                },
              },
              lineStyle: {
                normal: {
                  color: colorList.linearBtoG,
                  width: 3,
                },
              },
              areaStyle: {
                normal: {
                  color: colorList.areaBtoG,
                },
              },
              data: val.weekLineData,
              lineSmooth: true,
              markLine: {
                silent: true,
                data: [
                  {
                    type: 'average',
                    name: '平均值',
                  },
                ],
                precision: 0,
                label: {
                  normal: {
                    formatter: '平均值: \n {c}',
                  },
                },
                lineStyle: {
                  normal: {
                    color: 'rgba(248,211,81,.7)',
                  },
                },
              },
              tooltip: {
                position: 'top',
                formatter: '{c} m',
                backgroundColor: 'rgba(28,152,232,.2)',
                padding: 6,
              },
            },
            {
              name: '占位背景',
              type: 'bar',
              itemStyle: {
                normal: {
                  show: true,
                  color: '#000',
                  opacity: 0,
                },
              },
              silent: true,
              barWidth: '50%',
              data: val.weekMaxData,
              animation: false,
            },
          ],
        }

        if (chartRef.value) {
          // 通过初始化参数打入数据
          chartRef.value.updateData(options.value)
        }
      },
      {
        immediate: true,
        deep: true,
      },
    )
    expose({ renderChart })

    // 生命周期
    onMounted(() => {
      drawTimingFn()
    })

    onUnmounted(() => {
      clearInterval(drawTiming.value)
    })

    return () => {
      return (
        <div style={{ height: '100%' }}>
          <echart ref={chartRef} />
        </div>
      )
    }
  },
})
