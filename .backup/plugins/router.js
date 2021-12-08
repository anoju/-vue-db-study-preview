import Vue from 'vue'
import Router from 'vue-router'
// import processUtil from '@/utils/processUtil'
// import netFunnelUtil from '@/utils/NetFunnelUtil'
// import lodash from 'lodash'

Vue.use(Router)

// const viewBase = '@/views/' // view 파일의 루트경로

let router = null

// eslint-disable-next-line
const scrollBehavior = function (to, from, savedPosition) {
  // console.log('scrollBehavior', to.hash)
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  }
  const position = {}

  // scroll to anchor by returning the selector
  if (to.hash) {
    position.selector = to.hash
    // console.log('document.querySelector(to.hash)', document.querySelector(to.hash))

    // bypass #1number check
    if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
      Vue.nextTick(() => {
        Vue.prototype.$hashScroll(to.hash)
      })
      // console.log('return', position)
      return position
    }

    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return false
  }

  return new Promise((resolve) => {
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some((m) => m.meta.scrollToTop)) {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }

    // wait for the out transition to complete (if necessary)
    this.app.$root.$once('triggerScroll', () => {
      // if the resolved position is falsy or an empty object,
      // will retain current scroll position.
      resolve(position)
    })
  })
}

export default {

  /**
   * 라우터 인스턴스 리턴
   * @returns
   */
  getInstance() {
    return router
  },

  /**
   * 라우터 생성하기
   */
  async createRouter() {
    const isDev = (process.env.NODE_ENV !== 'production')

    // router 데이터 생성
    const routerData = {
      mode: 'history',
      scrollBehavior,
      base: process.env.BASE_URL,
      routes: [],
    }
    // 유량제어 소스 로드
    // await netFunnelUtil.loadScript('/js/netfunnel.js').then((res) => console.log(res))
    // await netFunnelUtil.loadScript('/js/netfunnelskin.js').then((res) => console.log(res))

    // API를 통한 메뉴응답 대기후 리턴
    /*
    await import('@/assets/router.json') // 임시적용
      .then((res) => {
        if ((res.default instanceof Array) && res.default.length > 0) {
          routerData.routes = this.parseRoutesFromMenudata(res.default)
        }
      })
      .catch((error) => {
        console.dir(error)
      })
    */

    // 개발환경 모드인 경우 추가적으로 메뉴 로딩
    let modules = null
    if (isDev === true) {
      console.log('this is development')
      modules = require.context('@/router', false, /\w+\.js$/)
    } else {
      modules = require.context('@/router', false, /[A-Z]+\.js$/) // 대문자 router 파일만 적재(적용여부 검토필요)
    }
    if (modules !== null) {
      modules.keys().forEach((key) => {
        const additionals = modules(key).default
        additionals.forEach((add) => {
          routerData.routes.push(add)
        })
      })
    }

    // beforeEnter 지정
    this.setBeforeEnter(routerData.routes)

    // 라우터 생성
    router = new Router(routerData)
    return router
  },

  /**
   * 외부에서 불러온 라우터정보를 view router 형태로 변환하기위한 메뉴파싱
   */
  parseRoutesFromMenudata(menus) {
    let routes = null
    if (menus instanceof Array && menus.length > 0) {
      routes = []
      menus.forEach((menu) => {
        const item = {}

        if (menu.name !== undefined) item.name = menu.name // 메뉴명
        if (menu.path !== undefined) item.path = menu.path // 경로
        if (menu.redirect !== undefined) item.redirect = menu.redirect // 리다이렉트
        if (menu.view !== undefined) {
          item.beforeEnter = this.beforeEnter
          item.component = () => import(`@/views/${menu.view}`) // template 표기법 사용시 expression 처리 오류발생
        }

        item.meta = menu.meta

        item.children = this.parseRoutesFromMenudata(menu.children)
        routes.push(item)
      })
    }
    return routes
  },

  /**
   * 페이지 접근시 인증관련 처리를 위해
   * 라우터의 point 마다 beforeEnter 세팅
   * @param {*} routes routerData.routes
   */
  setBeforeEnter(routes) {
    routes.forEach((item) => {
      if (item.children === undefined || (item.name !== undefined && item.name.indexOf('Home') > -1)) {
        item.beforeEnter = this.beforeEnter
        // console.log('set beforeEnter', item)
      }
      if (item.children instanceof Array) {
        this.setBeforeEnter(item.children)
      }
    })
  },
  /**
   * beforeEnter 수행부
   * @param {*} from
   * @param {*} to
   * @param {*} next
   */
  async beforeEnter(to, from, next) {
    console.log(to, from, next)
    /*
    let requireNetFunnel = false
    let requireAuth = null
    to.matched.forEach((item) => {
      if (item.meta && item.meta.requireNetFunnel) {
        requireNetFunnel = item.meta.requireNetFunnel
      }
      if (item.meta && item.meta.requireAuth) {
        requireAuth = item.meta.requireAuth
      }
    })

    if (requireNetFunnel) {
      console.log('유량제어 시작')
      const next1 = await netFunnelUtil.action({})
      console.log('>>>>> netFunnelRes', next1)
      if (!next1) {
        console.log('유량제어 블럭!')
        next(false)
        return
      }
      console.log('유량제어 종료')
    }

    // 로그인인증이 필요한 경우에는, app 이 mounted 완료되어야 하므로, 체크한다
    if (!lodash.isEmpty(requireAuth)) {
      const { app } = router(async () => {
        await processUtil.await(() => app.mounted, 5000)
          .then(() => {
            // netFunnelUtil.action({}, { success: this.success })
            let user = null
            app.$store.dispatch('auth/CHECK')
              .then((res) => {
                console.log('CHECK.resolve res ', res)
                user = res
              })
              .catch(() => {})
              .finally(() => {
                if (requireAuth === true && user == null) { // 로그인이 필요한데 로그인이 안된경우
                  next({
                    name: 'home',
                  }) // 로그인페이지로
                } else if (requireAuth === false && user != null) { // 로그인되어있으면 안되는데, 로그인이 되어있는 경우
                  next({
                    name: 'main',
                  }) // 메인페이지로
                } else { // 그렇지 않으면 패스
                  next()
                }
              })
          })
          .catch((error) => {
            console.error('router.js : app.mounted 체크 실패', error)
            next(false)
          })
      })()
    } else {
      next()
    }
    */
  },
}
