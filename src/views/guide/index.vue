<template>
  <ui-page title="메인화면">
    <h2>로딩창열기 예제</h2>
    <div>
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
    </div>
    <br>
    <h2>swiper 예제</h2>
    <div>
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
    </div>

    <h2>tab 예제</h2>
    <div>
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
      <h3>탭컨텐츠가 swiper가 아님</h3>
      <ui-tab-panels v-model="tabVal">
        <ui-tab-panel>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠2 <br>
          탭 컨텐츠2 <br>
          탭 컨텐츠2 <br>
          탭 컨텐츠2 <br>
          탭 컨텐츠2 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠3 <br>
          탭 컨텐츠3 <br>
          탭 컨텐츠3 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠4 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠6 <br>
          탭 컨텐츠6 <br>
          탭 컨텐츠6 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠7 <br>
          탭 컨텐츠7 <br>
          탭 컨텐츠7 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠8 <br>
          탭 컨텐츠8 <br>
          탭 컨텐츠8 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠9 <br>
          탭 컨텐츠9 <br>
          탭 컨텐츠9 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠10 <br>
          탭 컨텐츠10 <br>
          탭 컨텐츠10 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠11 <br>
          탭 컨텐츠11 <br>
          탭 컨텐츠11 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠12 <br>
          탭 컨텐츠12 <br>
          탭 컨텐츠12 <br>
        </ui-tab-panel>
      </ui-tab-panels>
      <h3>탭컨텐츠가 swiper 일때</h3>
      <ui-tab-panels
        v-model="tabVal"
        swiper
      >
        <ui-tab-panel>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
          탭 컨텐츠1<br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠2 <br>
          탭 컨텐츠2 <br>
          탭 컨텐츠2 <br>
          탭 컨텐츠2 <br>
          탭 컨텐츠2 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠3 <br>
          탭 컨텐츠3 <br>
          탭 컨텐츠3 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠4 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
          탭 컨텐츠5 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠6 <br>
          탭 컨텐츠6 <br>
          탭 컨텐츠6 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠7 <br>
          탭 컨텐츠7 <br>
          탭 컨텐츠7 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠8 <br>
          탭 컨텐츠8 <br>
          탭 컨텐츠8 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠9 <br>
          탭 컨텐츠9 <br>
          탭 컨텐츠9 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠10 <br>
          탭 컨텐츠10 <br>
          탭 컨텐츠10 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠11 <br>
          탭 컨텐츠11 <br>
          탭 컨텐츠11 <br>
        </ui-tab-panel>
        <ui-tab-panel>
          탭 컨텐츠12 <br>
          탭 컨텐츠12 <br>
          탭 컨텐츠12 <br>
        </ui-tab-panel>
      </ui-tab-panels>
      <div v-if="tabVal === 5">
        tabVal가 5일때만 보임
      </div>
      <br>
      tabVal:
      <input
        id=""
        v-model="tabVal"
        type="text"
      >
    </div>
    <br>
    <br>

    <h2>select 예제</h2>
    <div>
      <ui-select
        v-model="selectVal"
        :options="options"
      />
    </div>
    <br>
    <br>
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
// import uiPage from '@/components/global/uiPage.vue'
// import uiLoading from '@/components/global/uiLoading.vue'
// import uiTabs from '@/components/global/uiTabs.vue'
// import uiTab from '@/components/global/uiTab'
// import uiSwiper from '@/components/global/uiSwiper.vue'
// import uiSelect from '@/components/global/uiSelect.vue'

export default {
  name: 'Index',
  // components: {
  //   uiPage,
  //   uiLoading,
  //   uiTabs,
  //   uiTab,
  //   uiSwiper,
  //   uiSelect,
  // },
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
