import fetch from '@/utils/fetch'

export const login = (data: string) =>
  fetch({
    url: '/login',
    method: 'POST',
    data,
    // body: data,
  })
