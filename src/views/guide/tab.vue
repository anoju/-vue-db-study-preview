<template>
  <ui-page title="tab">
    <guide-navi />

    <h2 class="gd__h1 first">
      tab 예제
    </h2>
    <div>
      <h3 class="gd__h2">
        일반 탭
      </h3>
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

        <ui-tab-panels
          v-model="tabVal"
          class="mt-20"
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
        <div class="mt-10">
          <strong>tabVal:</strong>
          <input
            v-model="tabVal"
            type="text"
          >
        </div>
      </div>

      <h4 class="gd__h3">
        기타 다른 영역에서 show, hide 해야할경우 v-if문을 사용하면 됨
      </h4>
      <div>
        <div v-if="tabVal === 0">
          tabVal가 0일때만 보임
        </div>
        <div v-else-if="tabVal === 2">
          tabVal가 2일때만 보임
        </div>
        <div v-else-if="tabVal === 5">
          tabVal가 5일때만 보임
        </div>

        <div v-if="tabVal%2 === 0">
          tabVal가 짝수일때만 보임
        </div>
        <div v-if="tabVal%3 === 0">
          tabVal가 3배수일때만 보임
        </div>
      </div>

      <h3 class="gd__h2">
        (패널이) swiper 탭
      </h3>
      <div>
        <ui-tabs v-model="tabVal2">
          <ui-tab>탭메뉴1</ui-tab>
          <ui-tab>탭메뉴2탭메뉴2</ui-tab>
          <ui-tab>탭메뉴3</ui-tab>
          <ui-tab>탭메뉴4탭메뉴4</ui-tab>
        </ui-tabs>
        <ui-tab-panels
          v-model="tabVal2"
          swiper
          class="mt-20"
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
            탭 컨텐츠4 <br>
            탭 컨텐츠4 <br>
            탭 컨텐츠4 <br>
            탭 컨텐츠4 <br>
            탭 컨텐츠4 <br>
          </ui-tab-panel>
        </ui-tab-panels>
        <div class="mt-10">
          <strong>tabVal2:</strong>
          <input
            v-model="tabVal2"
            type="text"
          >
        </div>
      </div>
    </div>
  </ui-page>
</template>

<script>
import guideNavi from '@/components/page/guideNavi.vue'

export default {
  name: 'Tab',
  components: {
    guideNavi,
  },
  data() {
    return {
      tabVal: 2,
      tabVal2: 1,
    }
  },
}
</script>
