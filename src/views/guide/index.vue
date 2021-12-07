<template>
  <ui-page title="Index">
    <guide-navi />
    <h1 class="t-center">
      index
    </h1>
    <div
      class="gd_index-box"
    >
      스크롤 확인용 임시 박스
    </div>
  </ui-page>
</template>

<script>
import guideNavi from '@/components/page/guideNavi.vue'

export default {
  name: 'Index',
  components: {
    guideNavi,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
.gd_index-box {
  background:#eee;
  height:150vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 1.6rem;
}
</style>
