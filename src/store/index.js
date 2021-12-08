import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabState: [],
    // tabState: {
    //   text: '',
    //   lineLeft: 0,
    //   lineWidth: 0,
    // },
  },
  getters: {
    menuInfo() {
      const rtnVal = {
        menus: [
          { link: '/hello', text: 'helloWorld' },
          { link: '/guide/index', text: 'guide' },
        ],
      }
      return rtnVal
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
})
