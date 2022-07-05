<template>
  <div
    :class="[tabmenuClass, {'line-moving': islineMoving, 'top__fixed':isFixed}]"
    :style="wrapStyle"
  >
    <div
      ref="wrap"
      class="tab-inner"
      :class="{'tab-fixed':fixed}"
      :style="fixedStyle"
    >
      <div
        ref="line"
        class="tab-line"
        aria-hidden="true"
        :style="{width:`${lineWidth}px`,left:`${lineLeft}px`}"
      />
      <div
        class="tablist"
        role="tablist"
      >
        <div
          v-for="(tab, i) in childrens"
          :key="i"
          class="tab"
          :class="{active:tab.active, disabled:tab.disabled, hide:tab.hide}"
          role="presentation"
          :style="tab.tabStyle"
        >
          <router-link
            v-if="tab.to !== null && !tab.disabled && !disabled"
            :id="tab.id"
            :to="tab.to"
            role="tab"
            :aria-controls="tab.link"
            :aria-selected="tab.active? 'true': 'false'"
            :aria-disabled="tab.disabled || disabled"
            :style="tab.tabStyle"
          >
            {{ tab.text }}
          </router-link>
          <a
            v-else
            :id="tab.id"
            :href="tab.link !== null?tab.link:'#'"
            role="tab"
            :target="tab.href !== null?'_blank':null"
            :aria-controls="tab.link"
            :aria-selected="tab.active? 'true': 'false'"
            :aria-disabled="tab.disabled || disabled"
            :style="tab.tabStyle"
            v-on="tab.listeners"
            @click="selectTab(tab, $event, i)"
          >{{ tab.text }}</a>
        </div>
      </div>
    </div>
    <div
      v-if="isScrollable && isScrollableLeft"
      class="tab-blur left"
    />
    <div
      v-if="isScrollable && isScrollableRight"
      class="tab-blur right"
    />
    <div
      v-if="!!$slots.default"
    >
      <slot />
    </div>
  </div>
</template>

<script>
let uuid = 0
export default {
  name: 'UiTabs',
  props: {
    value: { type: [String, Number], default: null },
    fixed: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    tabs: { type: Array, default: null },
  },
  data() {
    return {
      childrens: [],
      childTxt: [],
      isNewTab: true,
      index: null,
      isFixed: false,
      islineMoving: false,
      lineLeft: 0,
      lineWidth: 0,
      lastScrollPosition: 0,
      isScrollable: false,
      isScrollableLeft: false,
      isScrollableRight: false,
      isFixedTopChk: false,
      wrapStyle: null,
      fixedStyle: null,
      noWatch: false,
    }
  },
  computed: {
    tabmenuClass() {
      return [
        {
          tabmenu: !this.type2 && !this.type3,
          tabmenu2: this.type2,
          tabmenu3: this.type3,
          scrollable: this.isScrollable,
          disabled: this.disabled,
        },
        this.tabsClass,
      ]
    },
  },
  watch: {
    value(newVal) {
      if (newVal !== '') this.indexChk(newVal)
    },
    index: {
      immediate: true,
      handler(newVal) {
        if (this.value === null && newVal === null) {
          this.index = 0
          this.$emit('input', 0)
        } else {
          this.watchEvt(this.index)
        }
      },
    },
  },
  beforeCreate() {
    this.uuid = uuid.toString()
    uuid += 1
  },
  beforeMount() {
    // console.log(this.uuid)
  },
  mounted() {
    this.readySet()
    this.noWatch = true
    window.addEventListener('resize', this.linePosition)
    this.$nextTick(() => {
      // console.log(this.$el.innerText.replace(/\n/g, ''))
      if (this.childrens.length) {
        this.isScrollableChk()
        if (this.fixed) {
          let sclBody = this.$el.closest('.scl__body')
          if (sclBody === null)sclBody = window
          sclBody.addEventListener('scroll', this.tabFixed)
          this.tabFixed()
          this.$once('hook:beforeDestroy', () => {
            sclBody.removeEventListener('scroll', this.tabFixed)
          })
        }
      }
    })
    this.$refs.wrap.addEventListener('scroll', this.isScrollableChk)
  },
  beforeDestroy() {
    if (this.isNewTab) {
      const stateObj = {}
      stateObj.child = this.childTxt
      stateObj.lineLeft = this.lineLeft
      stateObj.lineWidth = this.lineWidth
      stateObj.end = true
      this.$store.state.tabState.push(stateObj)
    } else {
      this.$store.state.tabState.forEach((el) => {
        if (JSON.stringify(el.child) === JSON.stringify(this.childTxt)) {
          el.lineLeft = this.lineLeft
          el.lineWidth = this.lineWidth
          el.end = true
        }
      })
    }

    this.$refs.wrap.removeEventListener('scroll', this.isScrollableChk)
    window.removeEventListener('resize', this.linePosition)
    if (this.islineMoving) this.$refs.line.removeEventListener('transitionend', this.linePositionEnd)
  },
  methods: {
    readySet() {
      this.$children.forEach((el) => {
        if (el.$vnode.componentOptions.tag === 'ui-tab') {
          this.childTxt.push(el.text.trim())
          this.childrens.push(el)
        }
      })
      if (this.$store.state.tabState.length) {
        this.$store.state.tabState.forEach((el) => {
          if (JSON.stringify(el.child) === JSON.stringify(this.childTxt)) {
            this.isNewTab = false
            this.lineLeft = el.lineLeft
            this.lineWidth = el.lineWidth
            el.end = false
          }
        })
      }
      // console.log('readySet', this.$store.state.tabState)

      if (this.tabs !== null) {
        this.tabs.forEach((tab) => {
          const obj = {
            text: tab.text,
            disabled: (tab.disabled !== undefined ? tab.disabled : false),
            hide: (tab.hide !== undefined ? tab.hide : false),
            value: (tab.value !== undefined ? tab.value : null),
            to: (tab.to !== undefined ? tab.to : null),
            href: (tab.href !== undefined ? tab.href : null),
            link: (tab.panel !== undefined ? tab.panel : null),
          }
          this.childrens.push(obj)
        })
      }

      this.indexChk(this.value)
    },
    selectTab(selectTab, event, idx) {
      event.preventDefault()
      if (this.disabled || selectTab.disabled) return
      this.childrens.forEach((tab, i) => {
        if (idx === i) {
          tab.active = true
          this.sclCenter(event.target)
          const emitVal = (tab.value !== null) ? tab.value : i
          this.index = i
          this.$emit('input', emitVal)
        } else {
          tab.active = false
        }
      })
      if (this.isFixed) {
        const sclY = this.$getOffset(this.$el).top
        let wrap = this.$el.closest('.scl__body')
        if (wrap === null)wrap = window.document.scrollingElement || window.document.body || window.document.documentElement
        this.$scrollTo(wrap, { top: sclY }, 300)
      }
    },
    sclCenter(el) {
      const elX = el.parentNode.offsetLeft + el.offsetLeft
      const elW = el.offsetWidth
      const $wrap = this.$refs.wrap
      const sclLeft = elX - (document.body.clientWidth / 2) + (elW / 2)
      this.$scrollTo($wrap, { left: sclLeft }, 300)
    },
    linePosition() {
      const $wrap = this.$refs.wrap
      if ($wrap === undefined) return
      const active = this.$refs.wrap.querySelector('.tab.active')
      if (active !== null) {
        this.islineMoving = true
        this.lineWidth = active.querySelector('a').offsetWidth
        this.lineLeft = active.offsetLeft + active.querySelector('a').offsetLeft
        this.$refs.line.addEventListener('transitionend', this.linePositionEnd)
      }
    },
    linePositionEnd() {
      this.islineMoving = false
      this.$refs.line.removeEventListener('transitionend', this.linePositionEnd)
    },
    isScrollableChk() {
      const { wrap } = this.$refs
      const wrapLeft = wrap.scrollLeft
      const sclWidth = wrap.scrollWidth
      if (wrap.offsetWidth < sclWidth) {
        this.isScrollable = true
      } else {
        this.isScrollable = false
      }
      if (wrapLeft < 20) {
        this.isScrollableLeft = false
      } else {
        this.isScrollableLeft = true
      }
      if (wrap.scrollWidth < (wrapLeft + wrap.offsetWidth) + 20) {
        this.isScrollableRight = false
      } else {
        this.isScrollableRight = true
      }
    },
    tabFixed() {
      const $pageClass = '.page'
      const $lockClass = '.lock'
      const $headerClass = '.header'
      const $sclBodyClass = '.scl__body'
      const $popHeadClass = '.pop_head'
      const $popBodyClass = '.pop_body'

      let wrap = this.$el.closest($sclBodyClass)
      if (wrap === null) wrap = window
      if ((this.$el.closest($pageClass) !== null && !this.$el.closest($pageClass).classList.contains($lockClass.substring(1))) || wrap.classList.contains($popBodyClass.substring(1))) {
        const elWrap = (wrap === window) ? document : wrap
        const fixedEls = elWrap.querySelectorAll('.top__fixed')
        let fixedTop = 0
        if (fixedEls.length) {
          fixedEls.forEach((el) => {
            if (this.$el === el) return
            fixedTop += el.firstChild.offsetHeight
          })
        }
        if (elWrap !== document) {
          const $prevEl = elWrap.previousElementSibling
          if ($prevEl !== null) {
            const $prevClassList = $prevEl.classList
            if ($prevClassList.contains($popHeadClass.substring(1))) {
              fixedTop += $prevEl.firstChild.offsetHeight
            }
          }
        } else {
          const $header = document.querySelector($headerClass)
          if ($header !== null) {
            fixedTop += $header.firstChild.offsetHeight
          }
        }
        const $fixedMargin = fixedTop
        const $child$height = this.$el.firstChild.offsetHeight
        const $sclTop = (wrap === window) ? wrap.pageYOffset : wrap.scrollTop
        if (this.$getOffset(this.$el).top < ($sclTop + $fixedMargin)) {
          this.isFixed = true
          if ($child$height > 0 && !this.isFixedTopChk) {
            this.fixedStyle = { top: `${fixedTop}px` }
            this.wrapStyle = { height: `${$child$height}px` }
            this.isFixedTopChk = true
          }
        } else {
          this.isFixed = false
          if (this.isFixedTopChk) {
            this.fixedStyle = null
            this.wrapStyle = null
            this.isFixedTopChk = false
          }
        }
      }
    },
    indexChk(val) {
      if (val === null) {
        this.childrens.forEach((child, i) => {
          if (child.to === this.$route.path) {
            this.index = i
          }
        })
      } else if (typeof val === 'number' || (parseInt(val, 10) >= 0 && `${parseInt(val, 10)}`.length === val.length)) {
        this.index = typeof val === 'number' ? val : parseInt(val, 10)
      } else if (typeof val === 'string') {
        this.childrens.forEach((tab, i) => {
          if (tab.value !== null) {
            if (tab.value === val) {
              this.index = i
            }
          }
        })
      }
    },
    watchEvt(val) {
      this.indexChk(val)
      this.childrens.forEach((tab, i) => {
        if (i === val) {
          tab.active = true
        } else {
          tab.active = false
        }
      })
      setTimeout(() => {
        this.linePosition()
        const $active = this.$el.querySelector('.tab.active a')
        if ($active !== null) this.sclCenter($active)
      }, 10)
    },
  },
}
</script>
