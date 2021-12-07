<template>
  <div :class="className">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'UiTabPanel',
  props: {
  },
  data() {
    return {
      isSwiper: false,
    }
  },
  computed: {
    className() {
      return {
        'swiper-slide': this.isSwiper,
        'tab-swiper-slide': this.isSwiper,
        'tab-panel': !this.isSwiper,
      }
    },
  },
  beforeMount() {
    if (this.$parent.$options.name === 'UiTabPanels' && this.$parent.swiper) {
      this.isSwiper = true
    }
  },
  mounted() {
    // console.log(this.$parent.swiper)
  },
  destroyed() {
  },
  methods: {
  },
}
</script>
