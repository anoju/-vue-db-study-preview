import Vue from 'vue'
import anime from 'animejs/lib/anime.es'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/components'
import commonUI from './utils/common'
import directives from './utils/directives'

import 'swiper/css/swiper.css'
import './assets/scss/front.scss'

Vue.prototype.$anime = anime

Vue.use(components)
Vue.use(commonUI)
Vue.use(directives)
Vue.use(VueAwesomeSwiper, { SwiperSlide: 'swiper-slide' })
// Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
