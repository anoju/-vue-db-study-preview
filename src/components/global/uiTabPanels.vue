<template>
  <div
    class="ui-swiper-wrap tab-swiper-wrap"
  >
    <div
      v-swiper:uiTabPanels="swiperOption"
      class="ui-swiper"
      :class="{loop:loop, 'auto-height':autoHeight}"
      @ready="swiperReady"
      @slideChangeTransitionEnd="swiperChangeEvt"
    >
      <div class="swiper-wrapper">
        <slot />
      </div>
      <div
        ref="pagination"
        class="swiper-pagination"
      />
    </div>
  </div>
</template>
<script>
import bus from '../eventBus.vue'

export default {
  name: 'UiTabPanels',
  props: {
    value: { type: [String, Number], default: null },
    autoHeight: { type: Boolean, default: true },
    loop: { type: Boolean, default: false },
  },
  data() {
    return {
      swiperOption: {},
    }
  },
  watch: {
    value() {
      if (this.value !== null && this.value !== '' && !Number.isNaN(this.value)) {
        if (!this.isChagned) this.uiTabPanels.slideTo(Number(this.value), 500)
        this.$emit('input', this.value)
        this.isChagned = false
      }
    },
  },
  beforeMount() {
    this.swiperOption = this.swiperOptionSet()
  },
  mounted() {
    bus.$on('uiTabPanelsUpdate', this.swiperUpdate)

    // console.log(this.swiperOptionSet)
  },
  destroyed() {
    bus.$off('uiTabPanelsUpdate', this.swiperUpdate)
  },
  methods: {
    swiperOptionSet() {
      let autoHeightOpt = true
      if (!this.autoHeight) autoHeightOpt = false
      console.log(autoHeightOpt)
      return {
        slidesPerView: 1,
        loop: !!this.loop,
        autoHeight: autoHeightOpt,
        threshold: 30,
        touchAngle: 30,
        pagination: {
          el: '.swiper-pagination',
          // el: this.$refs.pagination,
          clickable: true,
          // renderBullet(index, className) {
          //   return `<button type="button" class="${className}">${index + 1}번째 슬라이드</button>`
          // },
        },
      }
    },
    swiperUpdate() {
      setTimeout(() => {
        this.uiTabPanels.update()
      }, 20)
    },
    swiperReady() {
      this.$nextTick(() => {
        if (this.value !== null && this.value !== '' && !Number.isNaN(this.value)) this.uiTabPanels.slideTo(Number(this.value), 0)
      })
    },
    swiperPrevEvt() {
      this.uiTabPanels.slidePrev()
    },
    swiperNextEvt() {
      this.uiTabPanels.slideNext()
    },
    swiperChangeEvt() {
      if (this.value !== null && !this.isChagned) {
        this.isChagned = true
        clearTimeout(this.timer)
        if (this.value !== this.uiTabPanels.realIndex) this.$emit('input', this.uiTabPanels.realIndex)
        this.timer = setTimeout(() => {
          this.isChagned = false
        }, 10)
      }
    },
  },
}
</script>
