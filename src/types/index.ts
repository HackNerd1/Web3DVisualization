/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-02 20:49:30
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-09 15:06:17
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
  dragElement?: any | null // TODO
  elementLists: Array<ICmpSetting> | []
  currentElement: number
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

export interface IOption {}

export interface ICmpSetting {
  x?: number
  y?: number
  h: number
  w: number
  active?: boolean
  option?: IOption
  // content: string | ComponentPublicInstance
}
