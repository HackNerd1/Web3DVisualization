/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-02-27 15:52:20
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-04 11:05:57
 */
import { createStore, useStore as vuexUseStore, Store } from 'vuex'
import { IStroe } from '@/types'
import { KStore } from '@/symbols'
// import { InjectionKey } from 'vue'

export default createStore<IStroe>({
  state: {
    dragElement: {},
    pageSetting: {
      width: 1920,
      height: 1080,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      // scale: 1,
      // thick: 16,
      // startX: 0,
      // startY: 0,
    },
  },
  mutations: {
    // UPD,
    SET_DRAG_ELE: (state, payload) => (state.dragElement = payload),
    SET_PAGE_SETTING: (state, payload) => (state.pageSetting = payload),
  },
  actions: {
    setDragEle: (context, payload) => context.commit('SET_DRAG_ELE', payload),
    setPageSetting: (context, payload) => context.commit('SET_PAGE_SETTING', payload),
  },
  getters: {
    getDragEle: (state) => state.dragElement,
    getPageSetting: (state) => state.pageSetting,
  },
  modules: {},
})

/**
 * Store 为 import useStore as Store，不用在每次useStore的时候导入Key
 * @returns { Function } Store<IStroe>
 */
export const useStore = (): Store<IStroe> => vuexUseStore(KStore)
