import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 注入token
  const userInfo = window.localStorage.getItem('user-info')
  const token = userInfo ? JSON.parse(userInfo).token : null
  config.headers.Authorization = `Bearer ${token}` // 将token注入到请求参数
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // 对响应数据做处理
  return response.data ? response.data : {}
}, function (error) {
  // 统一处理错误信息
  const code = error.response.status ? error.response.status : ''// 获取错误的状态码
  let message = ''
  switch (code) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '非实名认证用户'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401: // 针对token过期或失效的处理
      message = 'token过期或未传'
      window.localStorage.clear()
      window.location.hash = '#/login'
      break
    default:
      message = '未知错误！'
      break
  }
  Message({ message, type: 'warning' })
  return new Promise()
})

export default axios
