export default [
  {
    path: '/guide',
    name: 'guide',
    component: {
      render(c) { return c('router-view') },
    },
    children: [
      {
        path: 'index',
        // name: 'guideIndex',
        component: () => import('@/views/guide/index.vue'),
      },
      {
        path: 'form',
        // name: 'guideForm',
        component: () => import('@/views/guide/form.vue'),
      },
      {
        path: 'list',
        // name: 'guideList',
        component: () => import('@/views/guide/list.vue'),
      },
      {
        path: 'loading',
        // name: 'guideLoading',
        component: () => import('@/views/guide/loading.vue'),
      },
      {
        path: 'swiper',
        // name: 'guideSwiper',
        component: () => import('@/views/guide/swiper.vue'),
      },
      {
        path: 'tab',
        // name: 'guideTab',
        component: () => import('@/views/guide/tab.vue'),
      },
      {
        path: 'vuetify',
        // name: 'guideVuetify',
        component: () => import('@/views/guide/vuetify.vue'),
      },
    ],
  },

  /*
  {
    path: '/guide/index',
    name: 'guideIndex',
    component: () => import('@/views/guide/index.vue'),
  },
  {
    path: '/guide/form',
    name: 'guideForm',
    component: () => import('@/views/guide/form.vue'),
  },
  {
    path: '/guide/list',
    name: 'guideList',
    component: () => import('@/views/guide/list.vue'),
  },
  {
    path: '/guide/loading',
    name: 'guideLoading',
    component: () => import('@/views/guide/loading.vue'),
  },
  {
    path: '/guide/swiper',
    name: 'guideSwiper',
    component: () => import('@/views/guide/swiper.vue'),
  },
  {
    path: '/guide/tab',
    name: 'guideTab',
    component: () => import('@/views/guide/tab.vue'),
  },
  */
]
