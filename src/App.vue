<template>
  <div id="app">
    <router-view />
    <ui-loading :open="isLoading" />
  </div>
</template>
<script>
// import UiLoading from '@/components/global/uiLoading.vue'
import eventBus from '@/components/eventBus.vue'

export default {
  name: 'App',
  // components: {
  //   UiLoading,
  // },
  data() {
    return {
      isLoading: false,
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        // 탭 util
        this.$nextTick(() => {
          if (this.$store.state.tabState.length) {
            const rermoveTabIdx = []
            this.$store.state.tabState.forEach((el, i) => {
              if (el.end)rermoveTabIdx.unshift(i)
            })
            if (rermoveTabIdx.length) {
              rermoveTabIdx.forEach((idx) => {
                this.$store.state.tabState.splice(idx, 1)
              })
            }
          }
        })
      }
    },
  },
  mounted() {
    eventBus.$on('loading-open', this.loadingOpen)
    eventBus.$on('loading-close', this.loadingClose)
  },
  methods: {
    loadingOpen() {
      this.isLoading = true
    },
    loadingClose() {
      this.isLoading = false
    },
  },
}
</script>
