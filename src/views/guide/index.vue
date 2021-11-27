<template>
  <ui-page title="메인화면">
    <div class="btn-wrap">
      <div class="flex">
        <div>
          <button
            class="button line"
            @click="isLoading = true"
          >
            로딩창(마크업) 열기
          </button>
        </div>
        <div>
          <button
            class="button line"
            style="z-index: 501"
            @click="isLoading = false"
          >
            로딩창(마크업) 닫기
          </button>
        </div>
      </div>
    </div>

    <div class="btn-wrap">
      <div class="flex">
        <div>
          <button
            class="button line"
            @click="isLoading2 = true"
          >
            로딩창(컴포넌트) 열기
          </button>
        </div>
        <div>
          <button
            class="button line"
            style="z-index: 501"
            @click="isLoading2 = false"
          >
            로딩창(컴포넌트) 닫기
          </button>
        </div>
      </div>
    </div>

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
    <br>
    <ui-tabs v-model="tabVal">
      <ui-tab>탭메뉴1</ui-tab>
      <ui-tab>탭메뉴2탭메뉴2</ui-tab>
      <ui-tab>탭메뉴3</ui-tab>
      <ui-tab>탭메뉴4탭메뉴4</ui-tab>
      <ui-tab>탭메뉴5</ui-tab>
      <ui-tab>탭메뉴6탭메뉴6</ui-tab>
      <ui-tab>탭메뉴7</ui-tab>
      <ui-tab>탭메뉴8</ui-tab>
      <ui-tab>탭메뉴9</ui-tab>
      <ui-tab>탭메뉴10</ui-tab>
      <ui-tab>탭메뉴11</ui-tab>
      <ui-tab>탭메뉴12</ui-tab>
    </ui-tabs>
    <br>
    tabVal:
    <input
      id=""
      v-model="tabVal"
      type="text"
    >
    <br>
    <br>
    <ui-swiper>
      <swiper-slide>
        <div class="img_banner_box">
          <img
            src="@/assets/images/temp/image-temp.jpg"
            alt=""
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img_banner_box">
          <img
            src="@/assets/images/temp/image-temp.jpg"
            alt=""
          >
        </div>
      </swiper-slide>
    </ui-swiper>
    <br>
    <br>
    <ui-select
      v-model="selectVal"
      :options="options"
    />
    <br>
    <br>
    <div>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
      <h2>가나다라마바사</h2>
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
import uiPage from '@/components/global/uiPage.vue'
import uiLoading from '@/components/global/uiLoading.vue'
import uiTabs from '@/components/global/uiTabs.vue'
import uiTab from '@/components/global/uiTab'
import uiSwiper from '@/components/global/uiSwiper.vue'
import uiSelect from '@/components/global/uiSelect.vue'

export default {
  name: 'Index',
  components: {
    uiPage,
    uiLoading,
    uiTabs,
    uiTab,
    uiSwiper,
    uiSelect,
  },
  data() {
    return {
      isLoading: false,
      isLoading2: false,
      tabVal: 2,
      selectVal: 1,
      options: [
        { text: '선택1', value: 1 },
        { text: '선택2', value: 2 },
        { text: '선택3', value: 3, disabled: true },
        { text: '선택4', value: 4 },
        { text: '선택4', value: 4 },
        { text: '선택5', value: 5 },
      ],
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
