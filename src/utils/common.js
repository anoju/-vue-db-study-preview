import eventBus from '@/components/eventBus.vue'

export default {
  install(Vue) {
    if (this.installed) return

    this.installed = true
    Vue.prototype.$removeComma = this.removeComma
    Vue.prototype.$loading = this.loading
    Vue.prototype.$scrollTo = this.scrollTo
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
}
