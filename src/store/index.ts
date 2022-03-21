/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-02-27 15:52:20
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-21 22:59:43
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
    elementLists: [
      // {
      //   x: 0,
      //   y: 0,
      //   h: 450,
      //   w: 500,
      //   active: false,
      //   cmp:
      // },
      // {
      //   x: 500,
      //   y: 500,
      //   h: 450,
      //   w: 500,
      //   active: false,
      // },
    ],
    currentElement: NaN,
    showProp: false,
    propertyType: NaN,
  },
  mutations: {
    // UPD,
    SET_DRAG_ELE: (state, payload) => (state.dragElement = payload),
    SET_PAGE_SETTING: (state, payload) => (state.pageSetting = payload),
    SET_ELE_LISTS: (state, payload) => (state.elementLists = payload),
    SET_CURRENT_ELE: (state, payload) => (state.currentElement = payload),
    SET_SHOW_PROP: (state, payload) => (state.showProp = payload),
    SET_PROP_TYPE: (state, payload) => (state.propertyType = payload),
  },
  actions: {
    setDragEle: (context, payload) => context.commit('SET_DRAG_ELE', payload),
    setPageSetting: (context, payload) => context.commit('SET_PAGE_SETTING', payload),
    setEleLists: (context, payload) => context.commit('SET_ELE_LISTS', payload),
    setCurrentEle: (context, payload) => context.commit('SET_CURRENT_ELE', payload),
    setShowProp: (context, payload) => context.commit('SET_SHOW_PROP', payload),
    setPropertyType: (context, payload) => context.commit('SET_PROP_TYPE', payload),
  },
  getters: {
    dragEle: (state) => state.dragElement,
    pageSetting: (state) => state.pageSetting,
    eleLists: (state) => state.elementLists,
    showProp: (state) => state.showProp,
    propertyType: (state) => state.propertyType,
  },
  modules: {},
})

/**
 * Store 为 import useStore as Store，不用在每次useStore的时候导入Key
 * @returns { Function } Store<IStroe>
 */
export const useStore = (): Store<IStroe> => vuexUseStore(KStore)
