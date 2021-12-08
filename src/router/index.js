import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from './hello'
import guide from './guide'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/hello/home',
  },
  {
    path: '*',
    component: () => import('@/views/404.vue'),
  },
  ...hello,
  ...guide,
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    return {
      selector: to.hash,
    }
  }
  return { x: 0, y: 0 }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior,
})

export default router
