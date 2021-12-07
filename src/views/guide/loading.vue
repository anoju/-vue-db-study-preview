<template>
  <ui-page title="loading">
    <guide-navi />
    <h2 class="gd__h1 first">
      로딩창열기 예제
    </h2>
    <div>
      <h2 class="gd__h2">
        마크업 형태
      </h2>
      <div class="btn-wrap">
        <div class="flex">
          <div>
            <button
              class="button line"
              @click="isLoading = true"
            >
              로딩창 열기
            </button>
          </div>
          <div>
            <button
              class="button line"
              style="z-index: 501"
              @click="isLoading = false"
            >
              로딩창 닫기
            </button>
          </div>
        </div>
      </div>

      <h2 class="gd__h2">
        컴포넌트 형태
      </h2>
      <div class="btn-wrap">
        <div class="flex">
          <div>
            <button
              class="button line"
              @click="isLoading2 = true"
            >
              로딩창 열기
            </button>
          </div>
          <div>
            <button
              class="button line"
              style="z-index: 501"
              @click="isLoading2 = false"
            >
              로딩창 닫기
            </button>
          </div>
        </div>
      </div>

      <h2 class="gd__h2">
        app.vue의 로딩 + 공통함수
      </h2>
      <div class="btn-wrap">
        <div class="flex">
          <div>
            <button
              class="button line"
              @click="loadingOpen"
            >
              로딩창(app.vue) 열기
            </button>
          </div>
          <div>
            <button
              class="button line"
              style="z-index: 501"
              @click="loadingClose"
            >
              로딩창(app.vue) 닫기
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 마크업 로딩창 -->
    <div
      v-if="isLoading"
      class="loading-wrap"
    >
      <div class="tl">
        <div>
          <div
            class="loading-icon"
            role="img"
            aria-label="화면을 불러오는중입니다."
          >
            <div />
          </div>
        </div>
      </div>
    </div>
    <!--// 마크업 로딩창 -->

    <!-- 컴포넌트 로딩창 -->
    <ui-loading :open="isLoading2" />
    <!-- // 컴포넌트 로딩창 -->
  </ui-page>
</template>

<script>
import guideNavi from '@/components/page/guideNavi.vue'

export default {
  name: 'Loading',
  components: {
    guideNavi,
  },
  data() {
    return {
      isLoading: false,
      isLoading2: false,
    }
  },
  methods: {
    loadingOpen() {
      this.$loading()
    },
    loadingClose() {
      this.$loading(false)
    },
  },
}
</script>
