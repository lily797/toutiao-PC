import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

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
export default axios
