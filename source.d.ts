/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-11-29 10:11:18
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-23 22:10:16
 */
declare const React: string
declare module '*.json'
declare module '*.png'
declare module '*.jpg'
declare module '*.ts'
declare module '*.tsx'
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module '@types/three'
