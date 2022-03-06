<script lang="ts" setup>
  import Vue3DraggableResizable, { DraggableContainer } from 'vue3-draggable-resizable'
  import { ref, inject, reactive, onMounted, nextTick, getCurrentInstance } from 'vue'
  import { useStore } from '@/store'
  import EventBus from '@/utils/eventBus'
  import { KEventBus } from '@/symbols'
  import { SketchRule } from 'vue3-sketch-ruler'
  import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
  import 'vue3-sketch-ruler/lib/style.css'

  type TDraggableContainer = InstanceType<typeof DraggableContainer>
  // type TDragResizable = InstanceType<typeof Vue3DraggableResizable>

  interface IResizing {
    w?: number
    h?: number
    x?: number
    y?: number
  }
  // interface IDraging {
  //   x: number
  //   y: number
  // }
  interface IRuler {
    width: number
    height: number
    scale: number
    thick: number
    startX: number
    startY: number
    shadow?: {
      width?: number
      height?: number
      x?: number
      y?: number
    }
    lines?: {
      v: number[]
      h: number[]
    }
  }
  const store = useStore()
  const Instance = getCurrentInstance()
  const componentData = ref<EventTarget | null>(null)
  const dragContainer = ref<TDraggableContainer | null>(null)
  // const dragResizable = ref<TDragResizable | null>(null)
  const screen = ref<Element | null>(null)
  const eventBus = inject(KEventBus, new EventBus()) // 注入Event Bus; Event Bus 有默认值 ; 接受菜单栏发送的拖拽事件
  const wrapper = ref<Element | null>(null)
  const itemList = reactive([
    {
      x: 100,
      y: 100,
      h: 100,
      w: 100,
      active: false,
      content: 'This is a test example1',
    },
    {
      x: 200,
      y: 200,
      h: 200,
      w: 200,
      active: false,
      content: 'This is a test example2',
    },
  ])

  // const contextMenuOption = reactive({
  //   items: [
  //     {
  //       label: 'Copy',
  //       onClick: () => {
  //         console.log('copy')
  //       },
  //     },
  //     { label: 'Paste', disabled: true },
  //     {
  //       label: 'Print',
  //       icon: 'icon-print',
  //       onClick: () => {
  //         console.log('print')
  //       },
  //     },
  //   ],
  //   iconFontClass: 'iconfont',
  //   customClass: 'class-a',
  //   minWidth: 230,
  //   x: 0,
  //   y: 0,
  // })

  const rulerParam = reactive<IRuler>({
    width: 1920,
    height: 1080,
    scale: 1,
    thick: 20,
    startX: 0,
    startY: 0,
    lines: {
      v: [],
      h: [],
    },
    shadow: {
      x: 0,
      y: 0,
      width: store.state.pageSetting.width,
      height: store.state.pageSetting.height,
    },
  })

  // const activatedItem = ref<number[]>([])

  const MSiderBar = (() => {
    const dragend = (data: DragEvent) => {
      // 判断是否拖拽进入画布，添加组件
      if (dragContainer.value && componentData.value === dragContainer.value.$el) {
        const { x: domX, y: domY } = dragContainer.value.$el.getClientRects()[0]
        const { pageX, pageY } = data

        itemList.push({
          x: pageX - domX,
          y: pageY - domY,
          h: 300,
          w: 300,
          active: false,
          content: 'This is a test example3',
        })
      }
      componentData.value = null
    }
    const dragenter = () => (componentData.value = null)

    return {
      dragend,
      dragenter,
    }
  })()

  // const test = (e) => {
  //   console.log(e)
  // }

  // const MProerty = (() => {})()

  const MScreen = (() => {
    const print = (message: string) => console.log(message)
    const dragenter = (e: DragEvent) => (componentData.value = e.target)
    const dragleave = () => (componentData.value = null)
    const change = (e: IResizing, index: number) => Object.assign(itemList[index], e)
    // const dragging = ({ x, y }: IDraging, index: number) => {
    //   const { scale } = rulerParam
    //   // console.log(x, y, ':', x / scale, y / scale)
    //   // Object.assign(itemList[index], { x: x / scale, y: y / scale })
    // }
    // const toggleActive = (type: 'deactivated' | 'activated') => {
    //   eventBus.emit(type, null)
    //   console.log(type)
    // }
    // const dragging = () => {}
    const deleteItem = (e: KeyboardEvent, index?: number) => {
      console.log(index, ' run')
    }
    /**
     * 捕获点击事件
     * 如果点在拖拽项外 将属性面板切换至界面设置
     * @param { MouseEvent } e
     */
    const click = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isDragResizable = Array.from(target.classList).includes('dragResizable') // 获取target中的Class name 列表， 判断是否是dragResizable组件
      if (isDragResizable) eventBus.emit('activated', null)
      else eventBus.emit('deactivated', null)
    }
    /**
     * 控制缩放
     * @param { WheelEvent } e
     */
    const wheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
        // const { pageSetting } = store.state
        const scale = parseFloat(Math.max(0.2, rulerParam.scale - e.deltaY / 500).toFixed(2))
        rulerParam.scale = scale
        // store.dispatch('setPageSetting', { ...pageSetting, scale })
      }
      nextTick(() => scroll())
    }

    const scroll = () => {
      const { thick, scale } = rulerParam
      const screensRect = screen.value?.getBoundingClientRect()
      const canvasRect = dragContainer.value?.$el.getBoundingClientRect()
      // // 标尺开始的刻度
      if (screensRect) {
        const startX = (screensRect.left + thick - canvasRect.left) / scale
        const startY = (screensRect.top + thick - canvasRect.top) / scale
        rulerParam.startX = startX >> 0
        rulerParam.startY = startY >> 0
      }
    }
    const initSize = () => {
      // const wrapperRect = wrapper.value?.getBoundingClientRect()
      // const borderWidth = 1
      // if (wrapperRect) {
      //   rulerParam.width = wrapperRect.width - rulerParam.thick - borderWidth
      //   rulerParam.height = wrapperRect.height - rulerParam.thick - borderWidth
      //   // console.log(wrapperRect, rulerParam.width, rulerParam.height)
      // }
    }

    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      const { x, y } = e
      Instance?.proxy?.$contextmenu({
        items: [
          {
            label: 'Copy',
            onClick: () => {
              console.log('copy')
            },
          },
          { label: 'Paste', disabled: true },
          {
            label: 'Print',
            icon: 'icon-print',
            onClick: () => {
              console.log('print')
            },
          },
        ],
        iconFontClass: 'iconfont',
        customClass: 'class-a',
        minWidth: 230,
        x,
        y,
      })
      // console.log(e)

      // showContextMenu.value = true
      // Object.assign(contextMenuOption, { x, y })

      // console.log(showContextMenu.value)
    }

    return {
      print,
      dragenter,
      dragleave,
      deleteItem,
      change,
      wheel,
      scroll,
      initSize,
      onContextMenu,
      // dragging,
      click,
      // toggleActive,
    }
  })()

  onMounted(() => {
    if (!screen.value) return
    screen.value.scrollLeft =
      dragContainer.value?.$el.getBoundingClientRect().width / 2 - screen.value.getBoundingClientRect().width / 2
    MScreen.initSize()
  })

  eventBus.on('dragenter', MSiderBar.dragenter)
  eventBus.on('dragend', MSiderBar.dragend)
</script>

<template>
  <div class="screen-wrapper" ref="wrapper">
    <SketchRule
      :thick="rulerParam.thick"
      :scale="rulerParam.scale"
      :width="rulerParam.width"
      :height="rulerParam.height"
      :startX="rulerParam.startX"
      :startY="rulerParam.startY"
      :lines="rulerParam.lines"
      :shadow="rulerParam.shadow"
      :style="{
        height: `${store.state.pageSetting.height}px`,
        width: `${store.state.pageSetting.width}px`,
      }"
      :palette="{ lineColor: 'rgba(0, 173, 255, 0.84)' }"
    />
    <div
      class="screen"
      ref="screen"
      @wheel="MScreen.wheel"
      @scroll="MScreen.scroll"
      @contextmenu="MScreen.onContextMenu"
      @click="MScreen.click"
    >
      <DraggableContainer
        ref="dragContainer"
        :referenceLineVisible="true"
        @dragenter.prevent="MScreen.dragenter"
        @dragover.prevent
        @dragleave="MScreen.dragleave"
        :style="{
          height: `${store.state.pageSetting.height}px`,
          width: `${store.state.pageSetting.width}px`,
          backgroundColor: store.state.pageSetting.backgroundColor,
          transform: `scale(${rulerParam.scale})`,
        }"
      >
        <template v-for="({ content }, index) in itemList" :key="index">
          <!-- 
            @deactivated="MScreen.toggleActive('deactivated')"
            @activated="MScreen.toggleActive('activated')" 
            @dragging="(e) => MScreen.dragging(e, index)"-->
          <Vue3DraggableResizable
            :parent="true"
            :initW="110"
            :initH="120"
            class="dragResizable"
            v-model:x="itemList[index].x"
            v-model:y="itemList[index].y"
            v-model:w="itemList[index].w"
            v-model:h="itemList[index].h"
            v-model:active="itemList[index].active"
            :draggable="true"
            :resizable="true"
            @drag-start="MScreen.print('drag-start')"
            @resize-start="MScreen.print('resize-start')"
            @drag-end="(e) => MScreen.change(e, index)"
            @resize-end="(e) => MScreen.change(e, index)"
          >
            {{ content }}
          </Vue3DraggableResizable>
        </template>
      </DraggableContainer>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .screen-wrapper {
    width: 100%;
    height: 100%;
    user-select: none;

    .screen {
      width: 100%;
      height: 100%;
      overflow: auto;
    }
  }
</style>
