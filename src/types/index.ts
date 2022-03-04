/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-02 20:49:30
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-03 15:45:34
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
