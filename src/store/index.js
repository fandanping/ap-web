import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/address/user'
import search from './modules/address/search'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    userModule: user,
    addressModule: search
  }
})
