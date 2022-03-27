/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-27 16:12:48
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-27 16:35:18
 */

import { APPICmpSetting } from 'src/types'
import { v4 as uuidV4 } from 'uuid'

// import { APPICmpSetting } from 'first'
export abstract class GeneralComponent implements APPICmpSetting {
  readonly id: string
  x = 0
  y = 0
  h = 0
  w = 0
  active = false

  constructor() {
    this.id = uuidV4()
  }
}
