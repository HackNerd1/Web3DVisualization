/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-27 15:51:19
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-27 23:09:45
 */

import { GeneralComponent } from '@/components/common/general-compoents.ts'

export default class APPMapConfig extends GeneralComponent {
  constructor(x: number, y: number, w = 1920, h = 1080) {
    super()
    this.x = 0
    this.y = 0
    this.w = w
    this.h = h
  }
}
