import eventBus from '@/components/eventBus.vue'

export default {
  install(Vue) {
    if (this.installed) return

    this.installed = true
    Vue.prototype.$removeComma = this.removeComma
    Vue.prototype.$loading = this.loading
    Vue.prototype.$scrollTo = this.scrollTo
    Vue.prototype.$getOffset = this.getOffset
    Vue.prototype.$bodyLock = this.bodyLock
    Vue.prototype.$bodyUnlock = this.bodyUnlock
  },
  removeComma(val) {
    if (val === null || val === undefined) return ''
    return val.toString().replace(/,/gi, '')
  },
  loading(state = true) {
    if (state) {
      eventBus.$emit('loading-open')
    } else {
      eventBus.$emit('loading-close')
    }
  },
  scrollTo(el, val, speed, fn) {
    if (speed === undefined)speed = 500
    let $el = window.document.scrollingElement || window.document.body || window.document.documentElement
    if (el !== undefined && el !== '') {
      if (typeof el === 'string') {
        $el = document.querySelector(el)
      } else {
        $el = el
      }
    }
    if ($el === null) return
    let leftVal = $el.scrollLeft
    let topVal = $el.scrollTop
    if (val !== undefined && val !== '') {
      if (val.left !== undefined)leftVal = val.left
      if (val.top !== undefined)topVal = val.top
    }
    this.$anime({
      targets: $el,
      scrollLeft: leftVal,
      scrollTop: topVal,
      duration: speed,
      easing: 'easeInOutQuad',
      complete: (() => {
        if (fn !== undefined && typeof fn === 'function') {
          fn()
        }
      }),
    })
  },
  getOffset(element) {
    let $el = element
    let $elX = 0
    let $elY = 0
    let isSticky = false
    while ($el && !Number.isNaN($el.offsetLeft) && !Number.isNaN($el.offsetTop)) {
      let $style = window.getComputedStyle($el)
      // const $matrix = new WebKitCSSMatrix($style.transform);
      if ($style.position === 'sticky') {
        isSticky = true
        $el.style.position = 'static'
      }
      $elX += $el.offsetLeft
      // $elX += $matrix.m41; //translateX
      $elY += $el.offsetTop
      // $elY += $matrix.m42;  //translateY
      if (isSticky) {
        isSticky = false
        $el.style.position = ''
      }
      $el = $el.offsetParent
      if ($el !== null) {
        $style = window.getComputedStyle($el)
        $elX += parseInt($style.borderLeftWidth, 10)
        $elY += parseInt($style.borderTopWidth, 10)
      }
    }
    return { left: $elX, top: $elY }
  },
  bodyLock() {
    const bodyElm = document.querySelector('body')
    bodyElm.style.overflow = 'hidden'
  },
  bodyUnlock() {
    const bodyElm = document.querySelector('body')
    bodyElm.style.overflow = ''
  },
}
