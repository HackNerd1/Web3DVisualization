/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-04-10 15:42:25
 * @LastEditors Please set LastEditors
 * @LastEditTime: 2022-04-10 15:47:36
 */
export interface APPIAssetsList {
  title: string
  description?: string
  background?: string
  status: string
  uid: string
}

export interface APPIActivity {
  time: string
  type: APPIActivityType
  name: string
  status: 'success' | 'faild'
}

export type APPIActivityType = 'publish' | 'create'

export interface APPIWorkStatistics {
  icon: string
  name: string
  statistics: number
  type: 'primary' | 'success' | 'error'
}