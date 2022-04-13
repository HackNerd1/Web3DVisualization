import { VNode } from 'vue'

export interface IValue {
  [propName: string | number]: any
}

export interface IRules {
  required?: boolean
}

// TODO 按组件区分interface

export interface IColumns {
  label?: string
  prop?: string
  type?: string
  span?: number
  append?: string // 后缀
  prepend?: string // 前缀
  prefix?: string
  placeholder?: string
  isPassword?: boolean
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
