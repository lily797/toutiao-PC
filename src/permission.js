import router from './router'
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/home')) {
    const res = window.localStorage.getItem('user-info')
    if (res) {
      const userInfo = JSON.parse(res)
      if (userInfo && userInfo.token) {
        next()
      } else {
        next('/login') // 没有token
      }
    } else {
      next('/login') // 不存在res
    }
  } else {
    next() // 不以home开头
  }
})
export default router
