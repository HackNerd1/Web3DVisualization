import Axios from 'axios'
import { baseUrl, timeOut } from 'src/config/index'
import { handleHTTPError } from '@/utils/error'

Axios.defaults.baseURL = baseUrl
Axios.defaults.timeout = timeOut
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Axios.interceptors.request.use((config) => {
  // const token = sessionStorage.getItem('token')
  // if (token && token !== '') config.headers['token'] = token
  // config.data = qs.stringify(config.data)
  // config.data = qs.stringify
  return config
})

Axios.interceptors.response.use(
  (response) => {
    const { code } = response.data || {}
    if (code >= 200 && code < 300) return response
    else return handleHTTPError(code)
  },
  (error) => {
    const res = error.response || {}
    handleHTTPError(res.status)
    return error
  },
)

export default Axios
