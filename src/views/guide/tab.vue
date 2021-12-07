<template>
  <ui-page title="tab">
    <guide-navi />

    <h2 class="gd__h1 first">
      tab 예제
    </h2>
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
    }
  },
}
</script>
