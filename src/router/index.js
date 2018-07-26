import Vue from 'vue'
import Router from 'vue-router'
import Login from './../components/user/Login'
import Register from './../components/user/Register'
import AddressSearch from './../components/address/Search'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/address',
      name: 'Address',
      component: AddressSearch,
      meta: {
        title: '地址标引',
        requireAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  let token = window.localStorage.getItem('token')
  if (to.meta.requireAuth && !token) {
    next({
      path: '/login', query: {redirect: to.fullPath}
    })
  }
  router.afterEach(() => {
    window.scrollTo(0, 0)
  })
  next()
})
export default router
