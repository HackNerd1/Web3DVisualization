/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-02 20:49:30
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-27 23:10:38
 */
import { ComponentPublicInstance } from 'vue'

export interface IPageSetting {
  height?: number
  width?: number
  backgroundImage?: string
  backgroundColor?: string
  // scale: number
  // thick: number
  // startX: number
  // startY: number
}

export type IPropertyType = 0 | 1 | 2 | number

export interface IStroe {
  pageSetting: IPageSetting
  dragElement: ICmpItem
  elementLists: Array<APPICmpSetting> | []
  currentElement: number
  showProp: boolean
  propertyType: IPropertyType // 0:组件属性, 1: 界面设置
}

export type IComponentID = string

export interface IDragEnd {
  e: DragEvent
  item: ICmpItem
}

export interface ICmpItem {
  id?: IComponentID
  category?: string
  name?: string
  used?: boolean
  alias?: string
  url?: string | (() => Promise<any>)
  icon?: string
  componentPath?: string
}

export interface ICmpCategory {
  // category: string
  icon: string
  // prop: string
  name: string
  data: Array<ICmpItem>
}

// export interface IOption {}

export interface APPICmpSetting {
  id?: string
  x?: number
  y?: number
  h: number
  w: number
  active?: boolean
  // option?: IOption
  cmp?: any // 异步组件
  // content: string | ComponentPublicInstance
}

/** 通用可视化组件接口 */
export interface APPIGeneralComponent extends ComponentPublicInstance {
  renderChart: () => void
}
