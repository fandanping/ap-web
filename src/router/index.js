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
      path: '/address/search/marking',
      name: 'search',
      component: AddressSearch,
      meta: {
        title: '检索'
      }
    }
  ]
})
export default router
