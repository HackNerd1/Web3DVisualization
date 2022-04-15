/**
 * @author Hansel
 * @email hsh01365238@gongdao.com
 * @create 2022-04-12 10:50:07
 * @modify 2022-04-15 15:57:23
 * @desc 
 */
import { VNode } from 'vue'

export interface IValue {
  [propName: string | number]: any
}

export interface IRules {
  required?: boolean
}

// TODO 按组件区分interface

export type APPILabelPosition = 'top' | 'left' | 'right'
export interface IColumns {
  label?: string
  labelPosition?: APPILabelPosition
  size?: 'mini' | 'small' | 'default' | 'large'
  prop?: string
  type?: string
  span?: number
  append?: string // 后缀
  prepend?: string // 前缀
  prefix?: string
  placeholder?: string
  isPassword?: boolean
  attrs?: any
  rules?: IRules[] // TODO 属性待定
}

export interface IRules {
  required: boolean
  triggle: 'blur' | 'change' | 'focous'
}

export interface IOption {
  labelWidth?: string | number
  menuBtn?: boolean | VNode
}
