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
