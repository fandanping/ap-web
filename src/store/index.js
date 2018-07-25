import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/address/user'
import search from './modules/address/search'
import mark from './modules/address/mark'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    userModule: user,
    addressSearchModule: search,
    addressMarkModule: mark
  }
})
