/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-02 20:49:30
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-08 14:25:00
 */
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

export interface IStroe {
  pageSetting: IPageSetting
  dragElement?: any // TODO
}

export type IComponentID = string

export interface IDragEnd {
  e: DragEvent
  item: ICmpItem
}

export interface ICmpItem {
  id: IComponentID
  name: string
  used?: boolean
  alias?: string
  url: string
  icon: string
  cmp?: any
}

export interface ICmpCategory {
  type: string
  icon: string
  // prop: string
  name: string
  data: Array<ICmpItem>
}

export interface ICmpSetting {
  x?: number
  y?: number
  h: number
  w: number
  active?: boolean
  // content: string | ComponentPublicInstance
}
