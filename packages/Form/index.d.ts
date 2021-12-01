import { VNode } from 'vue'

export interface IValue {
  value: {
    b: 1
  }
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
  icon?: string // TODO 暂定为input组件的图标
  placeholder?: string
  showPassword?: boolean
}

export interface IOption {
  labelWidth?: string | number
  menuBtn?: boolean | VNode
}
