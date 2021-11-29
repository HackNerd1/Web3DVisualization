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
