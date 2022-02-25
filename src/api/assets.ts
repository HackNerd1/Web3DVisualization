import fetch from '@/utils/fetch'
import { IPage } from '@/api/index'

export const test = () =>
  fetch({
    url: '/assets/group',
    method: 'GET',
    // data,
    // body: data,
  })

/**
 * 分页查询
 * @param params
 * @returns
 */
export const fetchGroup = (params: IPage) =>
  fetch({
    url: '/assets/group',
    method: 'GET',
    params,
    // data,
    // body: data,
  })
