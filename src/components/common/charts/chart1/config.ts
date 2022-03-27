/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-27 16:46:29
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-27 16:46:43
 */
import { GeneralComponent } from '@/components/common/general-compoents.ts'

export default class APPMapConfig extends GeneralComponent {
  constructor(x: number, y: number, w = 400, h = 400) {
    super()
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
}
