import { VNode } from 'vue'

export interface IValue {
  value: {
    b: 1
  }
}

export interface IRules {
  required?: boolean
}

export interface IColumns {
  label?: string
  prop: string
  type: string
  span?: number
  append?: string // 前缀
  prepend?: string // 后缀
}

export interface IOption {
  labelWidth?: string | number
  menuBtn?: boolean | VNode
}
