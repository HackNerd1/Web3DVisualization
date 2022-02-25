/**
 * axios
 */

export const baseUrl = '/api'

export const timeOut = 3000

/**
 * Vue router
 */
export const titlePrefix = 'DVIS' // 标题前缀
export const titleSeparator = ' · ' // 标题分隔符
export const routeWhiteList = [
  // 路由白名单, 不需要校验是否登录
  '/login',
  '/404',
  '/403',
  '/500',
]
