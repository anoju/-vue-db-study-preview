<template>
  <div
    class="kbtab_wrap"
    :class="{fixed:isFixed, tab2: type2}"
  >
    <div
      :class="tabmenuClass"
      :style="fixedStyle"
    >
      <div
        ref="tablist"
        class="tablist"
        :class="{tab__fixed:fixed}"
        role="tablist"
      >
        <div
          class="kbtab_line"
          aria-hidden="true"
          :style="{width:`${lineWrapWidth}px`,left:`${lineWrapLeft}px`}"
        >
          <i :style="{width:`${lineWidth}px`,left:`${lineLeft}px`}" />
        </div>
        <div
          v-for="(tab, i) in childrens"
          :key="i"
          class="tab"
          :class="{active:tab.isActive, disabled:tab.disabled, hide:tab.hide}"
          role="presentation"
          :style="tab.tabStyle"
        >
          <router-link
            v-if="tab.to !== null && !tab.disabled"
            :id="tab.btnId"
            :to="tab.to"
          >
            {{ tab.title }}
          </router-link>
          <a
            v-else
            :id="tab.btnId"
            :href="`#${tab.href}`"
            role="tab"
            :aria-controls="tab.href"
            :aria-selected="tab.isActive? 'true': 'false'"
            :aria-disabled="tab.disabled || disabled"
            v-on="tab.listeners"
            @click="selectTab(tab, $event, i)"
          >{{ tab.title }}</a>
        </div>
      </div>
      <div
        v-if="isScrollable && isScrollableLeft"
        class="tab_blur left"
      />
      <div
        v-if="isScrollable && isScrollableRight"
        class="tab_blur right"
      />
      <div
        v-if="!!$slots.tabNext"
      >
        <slot name="tabNext" />
      </div>
    </div>
    <slot name="between" />
    <div
      v-show="isContents"
      ref="tabContent"
      class="tab_content"
      :class="[contentClass]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import uiEventBus from '../eventBus.vue'

let uuid = 0
export default {
  name: 'KbTabs',
  props: {
    value: { type: [String, Number], default: null },
    fixed: { type: Boolean, default: false },
    query: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    tabsClass: { type: String, default: null },
    contentClass: { type: String, default: null },
    type2: { type: Boolean, default: false },
    type3: { type: Boolean, default: false },
    idx: { type: Number, default: null },
    tabs: { type: Array, default: null },
  },
  data() {
    return {
      isContents: false,
      isFixed: false,
      childrens: [],
      currIdx: null,
      lineLeft: 0,
      lineWidth: 0,
      lineWrapWidth: 0,
      lineWrapLeft: 0,
      lastScrollPosition: 0,
      isScrollable: false,
      isScrollableLeft: false,
      isScrollableRight: false,
      isFixedTopChk: false,
      fixedStyle: null,
      noWatch: false,
    }
  },
  computed: {
    tabmenuClass() {
      return [
        {
          kbtabmenu: !this.type2 && !this.type3,
          kbtabmenu2: this.type2,
          kbtabmenu3: this.type3,
          scrollable: this.isScrollable,
          disabled: this.disabled,
          flex_ty: !!this.$slots.tabNext,
        },
        this.tabsClass,
      ]
    },
  },
  watch: {
    idx() {
      if (this.idx !== null && !this.noWatch) {
        this.watchEvt(this.idx)
      }
    },
    value() {
      if (this.value !== null && !this.noWatch) {
        this.watchEvt(this.value)
      }
    },
    currIdx(t) {
      this.$emit('currentIdxTab', t)
    },
  },
  beforeCreate() {
    this.uuid = uuid.toString()
    uuid += 1
  },
  created() {
    if (this.idx !== null) this.currIdx = this.idx
  },
  beforeMount() {
  },
  mounted() {
    this.noWatch = true
    window.addEventListener('resize', this.linePosition)
    this.readySet()
    this.$nextTick(() => {
      if (this.childrens.length) {
        this.contentsChk()
        if (this.currIdx !== null) this.childrens[this.currIdx].isActive = true
        setTimeout(() => {
          const active = this.$el.querySelector('.tab.active')
          if (active === null) this.childrens[0].isActive = true
        }, 5)
      }
      let delay = 50
      if (Number(this.uuid) === 0) delay = 500
      setTimeout(() => {
        this.watchEvt(this.value)
        // this.linePosition();
        this.noWatch = false
      }, delay)
      if (this.fixed) {
        let sclBody = this.$el.closest('.scl__body')
        if (sclBody === null)sclBody = window
        sclBody.addEventListener('scroll', this.tabFixed)
        this.tabFixed()
        this.$once('hook:beforeDestroy', () => {
          sclBody.removeEventListener('scroll', this.tabFixed)
        })
      }
    })
    this.$el.querySelector('.tablist').addEventListener('scroll', this.lineWrapLeftPosition)
  },
  destroyed() {
    this.$el.querySelector('.tablist').removeEventListener('scroll', this.lineWrapLeftPosition)
    window.removeEventListener('resize', this.linePosition)
  },
  methods: {
    readySet() {
      this.$children.forEach((el) => {
        if (el.$vnode.componentOptions.tag === 'kb-tab') this.childrens.push(el)
      })

      if (this.tabs !== null) {
        this.tabs.forEach((tab) => {
          const obj = {
            title: tab.title,
            isActive: (tab.active !== undefined ? tab.active : false),
            disabled: (tab.disabled !== undefined ? tab.disabled : false),
            href: (tab.href !== undefined ? tab.href : ''),
          }
          this.childrens.push(obj)
        })
      }
    },
    contentsChk() {
      this.childrens.forEach((tab) => {
        if (tab.href !== '') this.isContents = true
      })
    },
    selectTab(selectTab, event, idx) {
      event.preventDefault()
      if (this.disabled || selectTab.disabled) return
      this.childrens.forEach((tab, i) => {
        if (tab.title === selectTab.title) {
          tab.isActive = true
          this.sclCenter(event.target)
          let emitVal = i
          if (tab.value !== null) emitVal = tab.value
          this.currIdx = i
          this.$emit('input', emitVal)
          if (tab.$el.childNodes.length !== 0 && tab.$el.querySelector('.ui-swiper-wrap') !== null) uiEventBus.$emit('kbSwiperUpdate', 'update')
        } else {
          tab.isActive = false
        }
      })
      if (this.isFixed) {
        let margin = 56
        if (this.type2)margin = 97
        const sclY = this.$getOffset(this.$el).top - margin
        let wrap = this.$el.closest('.scl__body')
        if (wrap === null)wrap = window.document.scrollingElement || window.document.body || window.document.documentElement
        this.$scrollTo(wrap, { top: sclY }, 300)
      }
      if (this.query) {
        const $path = this.$route.path
        if (idx === 0) {
          this.$router.replace($path)
        } else {
          this.$router.replace(`${$path}?tab=${idx}`)
        }
      }
    },
    sclCenter(el) {
      const elX = el.parentNode.offsetLeft + el.offsetLeft
      const elW = el.offsetWidth
      this.lineWidth = elW
      this.lineLeft = elX
      const $tablist = this.$refs.tablist
      const sclLeft = elX - (document.body.clientWidth / 2) + (elW / 2)
      this.$scrollTo($tablist, { left: sclLeft }, 300)
    },
    lineWrapLeftPosition() {
      const { tablist } = this.$refs
      const tablistLeft = tablist.scrollLeft
      this.lineWrapLeft = -tablistLeft
      this.isScrollableChk()
    },
    linePosition() {
      const $tablist = this.$refs.tablist
      if ($tablist === undefined) return
      const sclWidth = $tablist.scrollWidth
      this.lineWrapWidth = sclWidth
      const active = this.$refs.tablist.querySelector('.tab.active')
      if (active !== null) {
        this.lineWidth = active.querySelector('a').offsetWidth
        this.lineLeft = active.offsetLeft + active.querySelector('a').offsetLeft
        const tablistLeft = this.$refs.tablist.scrollLeft
        this.lineWrapLeft = -tablistLeft
        this.isScrollableChk()
      }
    },
    isScrollableChk() {
      const { tablist } = this.$refs
      const tablistLeft = tablist.scrollLeft
      const sclWidth = tablist.scrollWidth
      if (tablist.offsetWidth < sclWidth) {
        this.isScrollable = true
      } else {
        this.isScrollable = false
      }

      if (tablistLeft <= 16) {
        this.isScrollableLeft = false
      } else {
        this.isScrollableLeft = true
      }
      if (tablist.scrollWidth <= (tablistLeft + tablist.offsetWidth) + 16) {
        this.isScrollableRight = false
      } else {
        this.isScrollableRight = true
      }
    },
    tabFixed() {
      let wrap = this.$el.closest('.scl__body')
      if (wrap === null) wrap = window
      // console.log(this.$el.closest('.page'))
      if ((this.$el.closest('.page') !== null && !this.$el.closest('.page').classList.contains('lock')) || wrap.classList.contains('pop_body')) {
      // if (!this.$el.closest('.page').classList.contains('lock') || wrap.classList.contains('pop_body')) {
        const elWrap = (wrap === window) ? document : wrap
        const fixedEls = elWrap.querySelectorAll('.fixed')
        let fixedTop = 0
        if (fixedEls.length) {
          fixedEls.forEach((i) => {
            fixedTop += i.firstChild.offsetHeight
          })
        }
        if (elWrap !== document) {
          const $prevEl = elWrap.previousElementSibling
          if ($prevEl !== null) {
            const $prevClassList = $prevEl.classList
            if ($prevClassList.contains('pop_head')) {
              fixedTop += $prevEl.firstChild.offsetHeight
            }
          }
        }
        let margin = fixedTop
        const height = this.$el.firstChild.offsetHeight
        const sclTop = (wrap === window) ? wrap.scrollY : wrap.scrollTop
        if (sclTop < this.lastScrollPosition) margin -= height
        if (this.$getOffset(this.$el).top <= (sclTop + margin)) {
          this.isFixed = true
          if (height > 0 && !this.isFixedTopChk) {
            this.fixedStyle = { top: `${fixedTop}px` }
            this.isFixedTopChk = true
          }
        } else {
          this.isFixed = false
          if (this.isFixedTopChk) {
            this.fixedStyle = null
            this.isFixedTopChk = false
          }
          setTimeout(() => {
            this.lastScrollPosition = sclTop
          }, 1)
        }
      }
    },
    watchEvt(val, isLine = true) {
      if (typeof val === 'string') {
        this.childrens.forEach((tab, i) => {
          if (tab.value !== null) {
            if (tab.value === this.value) {
              this.currIdx = i
              tab.isActive = true
            } else {
              tab.isActive = false
            }
          }
        })
      } else if (typeof val === 'number') {
        this.currIdx = val
        this.childrens.forEach((tab, i) => {
          if (i === this.currIdx) {
            tab.isActive = true
          } else {
            tab.isActive = false
          }
        })
      }
      if (this.childrens[this.currIdx] !== undefined && this.childrens[this.currIdx].$el.childNodes.length && this.childrens[this.currIdx].$el.querySelector('.ui-swiper-wrap') !== null) {
        uiEventBus.$emit('kbSwiperUpdate', 'update')
      }
      if (isLine) {
        setTimeout(() => {
          this.linePosition()
          const $active = this.$el.querySelector('.tab.active a')
          if ($active !== null) this.sclCenter($active)
        }, 10)
      }
    },
  },
}
</script>
