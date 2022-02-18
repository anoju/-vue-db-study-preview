<template>
  <ui-page title="Index">
    <guide-navi />
    <h1 class="t-center">
      index
    </h1>
    <div class="copy--box">
      {{ code }}
      <ui-button
        class="line small"
        @click="copyTestingCode"
      >
        복사하기
      </ui-button>
      <input
        ref="copyInput"
        type="hidden"
        :value="code"
      >
    </div>
    <div
      class="gd_index-box"
    >
      스크롤 확인용 임시 박스
    </div>
    <h1
      id="hashH1"
      class="t-center"
    >
      hash scroll check
    </h1>
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
      code: '1234-qwer-5678-asdf',
    }
  },
  methods: {
    copyTestingCode() {
      const testingCodeToCopy = this.$refs.copyInput
      testingCodeToCopy.setAttribute('type', 'text')
      testingCodeToCopy.select()

      try {
        const successful = document.execCommand('copy')
        const msg = successful ? '완료' : '실패'
        alert(`테스트 코드 복사 ${msg}`)
      } catch (err) {
        alert('웁스, 복사 안되지롱')
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
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
<style lang="scss" scoped>
.copy--box{
  position: relative;
  text-align: center;
  padding: 20px;
  font-size: 1.8rem;
  input{
    position: absolute;
    right: 0;
    bottom: 0;
    // width: 0;
    // height: 0;
    opacity: 0;
    // z-index: -1;
  }
}
</style>
