<script lang="ts" setup>
  import { ref, inject, reactive, onMounted, nextTick, getCurrentInstance, ComponentPublicInstance } from 'vue'
  import Vue3DraggableResizable, { DraggableContainer } from 'vue3-draggable-resizable'
  import { ICmpSetting } from '@/types'
  import { SketchRule } from 'vue3-sketch-ruler'
  import { VTest } from '@/data/cmpSettings'
  import EventBus from '@/utils/eventBus'
  import { KEventBus } from '@/symbols'
  import { useStore } from '@/store'
  import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
  import Draw from 'src/components/common/charts/chart1/index.tsx'
  import 'vue3-sketch-ruler/lib/style.css'

  type TDraggableContainer = InstanceType<typeof DraggableContainer>
  interface IResizing {
    w?: number
    h?: number
    x?: number
    y?: number
  }
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
  // const componentData = ref<EventTarget | null>(null)
  const dragContainer = ref<TDraggableContainer | null>(null)
  // const dragResizable = ref<TDragResizable | null>(null)
  const screen = ref<Element | null>(null)
  const eventBus = inject(KEventBus, new EventBus()) // 注入Event Bus; Event Bus 有默认值 ; 接受菜单栏发送的拖拽事件
  const wrapper = ref<Element | null>(null)
  const elementLists = ref<Array<ICmpSetting>>(store.state.elementLists)

  const drawElements = ref<Array<ComponentPublicInstance>>([])

  const rulerParam = reactive<IRuler>({
    width: 1920,
    height: 1080,
    scale: 0.8,
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

  const MScreen = (() => {
    const updateEleLists = () => store.dispatch('setEleLists', elementLists.value)
    // const dragleave = () => (componentData.value = null)
    const dragend = (e: IResizing, index: number) => {
      Object.assign(elementLists.value[index], e)
      updateEleLists()
    }
    const resizeEnd = (e: IResizing, index: number) => {
      Object.assign(elementLists.value[index], e)
      drawElements.value[index].renderChart()
      updateEleLists()
    }
    // const
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

    /**
     * @description 删除被选中的元素
     */
    const deleteItem = () => (elementLists.value = elementLists.value.filter((item) => item.active === false))

    /**
     * @description 元素多选
     */
    const multiChoose = (index: number) => {
      // TODO 目前还不支持多选
      elementLists.value[index].active = true
    }

    // /**
    //  * 切换属性面板展示
    //  * @param { boolean } toggle true: 展示元素属性，false: 展示界面设置
    //  */
    // const toggleProperty = (toggle: boolean, index?: number) => {
    //   if (toggle) eventBus.emit('activated', index)
    //   else eventBus.emit('deactivated', null)
    // }

    /**
     * 鼠标点击在元素外 将属性面板切换至界面设置
     * @param { MouseEvent } e
     */
    const click = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isDragResizable = Array.from(target.classList).includes('dragResizable') // 获取target中的Class name 列表， 判断是否是dragResizable组件
      const isCanvas = target.nodeName === 'CANVAS'
      if (isDragResizable || isCanvas) return
      eventBus.emit('deactivated', null)
      store.dispatch('setCurrentEle', NaN)
    }

    /**
     * 控制缩放
     * @param { WheelEvent } e
     */
    const wheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
        const scale = parseFloat(Math.max(0.2, rulerParam.scale - e.deltaY / 500).toFixed(2))
        rulerParam.scale = scale
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
    const drop = (e: DragEvent) => {
      if (dragContainer.value) {
        const dragEle = store.state.dragElement
        const { x: domX, y: domY } = dragContainer.value.$el.getClientRects()[0]
        const { pageX, pageY } = e
        // TODO 根据id获取图表配置
        console.log(dragEle)

        elementLists.value.push({
          x: pageX - domX,
          y: pageY - domY,
          ...VTest,
          active: false,
          // content: `This is a example${item.id}`,
          // content: instance,
        })
      }
      store.dispatch('setDragEle', {}) // 重置dragElement数据
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
    const selectElement = (index: number) => {
      eventBus.emit('selectElement', index)
      store.dispatch('setCurrentEle', index)
      eventBus.emit('activated', null)
    }

    return {
      deleteItem,
      dragend,
      resizeEnd,
      wheel,
      scroll,
      initSize,
      onContextMenu,
      click,
      multiChoose,
      drop,
      selectElement,
    }
  })()

  onMounted(() => {
    if (!screen.value) return
    screen.value.scrollLeft =
      dragContainer.value?.$el.getBoundingClientRect().width / 2 - screen.value.getBoundingClientRect().width / 2
    MScreen.initSize()
  })

  // onUnmounted(() => {
  //   // 清空store数据
  //   store.dispatch('setDragEle', {})
  // })
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
    <!-- 
      tabindex="0" 是 让div实现键盘事件的关键
     -->
    <div
      ref="screen"
      class="screen"
      @click.exact="MScreen.click"
      @wheel="MScreen.wheel"
      @scroll="MScreen.scroll"
      @keydown.delete="MScreen.deleteItem"
      @contextmenu="MScreen.onContextMenu"
      tabindex="0"
    >
      <DraggableContainer
        ref="dragContainer"
        id="dragContainer"
        :referenceLineVisible="true"
        @dragenter.prevent
        @dragover.prevent
        @drop="MScreen.drop"
        :style="{
          height: `${store.state.pageSetting.height}px`,
          width: `${store.state.pageSetting.width}px`,
          backgroundColor: store.state.pageSetting.backgroundColor,
          transform: `scale(${rulerParam.scale})`,
        }"
      >
        <template v-for="(items, index) in elementLists" :key="index">
          <!--
            @click.exact="MScreen.selectElement(index)" -->
          <Vue3DraggableResizable
            :parent="true"
            :initW="elementLists[index].w"
            :initH="elementLists[index].h"
            class="dragResizable"
            v-model:x="elementLists[index].x"
            v-model:y="elementLists[index].y"
            v-model:w="elementLists[index].w"
            v-model:h="elementLists[index].h"
            v-model:active="elementLists[index].active"
            :draggable="true"
            :resizable="true"
            @click.ctrl="MScreen.multiChoose(index)"
            @drag-start="MScreen.selectElement(index)"
            @drag-end="(e) => MScreen.dragend(e, index)"
            @resize-end="(e) => MScreen.resizeEnd(e, index)"
          >
            <Draw :ref="(el: any) => (drawElements[index] = el)" />
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

      &:focus-visible {
        // 按下键盘按键会触发focus-visible；隐藏focus-visible时的边框
        outline: none;
      }
    }
  }
</style>
