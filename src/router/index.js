import Vue from 'vue'
import Router from 'vue-router'
import Login from './../components/user/Login'
import Register from './../components/user/Register'
import Home from '../components/blog/home.vue'
import Mood from '../components/blog/mood.vue'
import Tech from '../components/blog/technology.vue'
import Look from '../components/blog/look.vue'
import Life from '../components/blog/life.vue'
import AboutMe from '../components/blog/aboutme.vue'
import Message from '../components/blog/message.vue'
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
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'home',
        requireAuth: true
      }
    },
    {
      path: '/mood',
      name: 'mood',
      component: Mood,
      meta: {
        title: 'mood',
        requireAuth: true
      }
    },
    {
      path: '/tech',
      name: 'tech',
      component: Tech,
      meta: {
        title: 'tech',
        requireAuth: true
      }
    },
    {
      path: '/look',
      name: 'look',
      component: Look,
      meta: {
        title: 'look',
        requireAuth: true
      }
    },
    {
      path: '/life',
      name: 'life',
      component: Life,
      meta: {
        title: 'life',
        requireAuth: true
      }
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe,
      meta: {
        title: 'aboutme',
        requireAuth: true
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta: {
        title: 'message',
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
