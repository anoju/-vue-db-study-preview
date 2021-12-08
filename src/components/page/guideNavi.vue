<template>
  <ui-tabs
    class="first"
    fixed
  >
    <ui-tab to="/guide/index">
      index
    </ui-tab>
    <ui-tab to="/guide/form">
      form
    </ui-tab>
    <ui-tab to="/guide/list">
      list
    </ui-tab>
    <ui-tab to="/guide/loading">
      loading
    </ui-tab>
    <ui-tab to="/guide/swiper">
      swiper
    </ui-tab>
    <ui-tab to="/guide/tab">
      tab
    </ui-tab>
  </ui-tabs>
  <!-- <kb-tabs
    class="first"
    fixed
  >
    <kb-tab
      to="/guide/index"
      title="index"
    />
    <kb-tab
      to="/guide/form"
      title="form"
    />
    <kb-tab
      to="/guide/list"
      title="list"
    />
    <kb-tab
      to="/guide/loading"
      title="loading"
    />
    <kb-tab
      to="/guide/swiper"
      title="swiper"
    />
    <kb-tab
      to="/guide/tab"
      title="tab"
    />
  </kb-tabs> -->
</template>

<script>

export default {
  name: 'GuideNavi',
  data() {
    return {
    }
  },
}
</script>
