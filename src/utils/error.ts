import router from '@/router'

type IStatusCode = number

/**
 * 处理状态码
 * @param code
 */
export const handleHTTPError = (code: IStatusCode) => {
  if (code === 401) {
    router.push('/login')
    sessionStorage.removeItem('auth') // TODO 修改城JWT
  } else if (code === 403) router.push('/403')
  else if (code === 500) router.push('/500')
}
