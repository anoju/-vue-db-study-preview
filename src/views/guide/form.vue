<template>
  <ui-page title="form">
    <guide-navi />
    <h2 class="gd__h1 first">
      vue 폼요소
    </h2>
    <h3 class="gd__h2">
      기본 태그 출력형태
    </h3>
    <div>
      <h4 class="gd__h3">
        체크박스
      </h4>
      <div>
        <div>
          <input
            id="checkbox"
            v-model="checked"
            type="checkbox"
          >
          <label for="checkbox">{{ checked }}</label>
        </div>
        <p>(단일체크박스일때) 기본으로 true, false를 반환함</p>
        <br>
        <div>
          <input
            id="checkbox"
            v-model="checked2"
            false-value="0"
            true-value="1"
            type="checkbox"
          >
          <label for="checkbox">{{ checked2 }}</label>
        </div>
        <p>(단일체크박스일때) false-value, true-value을 이용하여 반환값을 설정가능</p>
        <br>
        <div>
          <input
            id="jack"
            v-model="checkedNames"
            type="checkbox"
            value="Jack"
          >
          <label for="jack">Jack</label>
          <input
            id="john"
            v-model="checkedNames"
            type="checkbox"
            value="John"
          >
          <label for="john">John</label>
          <input
            id="mike"
            v-model="checkedNames"
            type="checkbox"
            value="Mike"
          >
          <label for="mike">Mike</label>
          <br>
          <span>Checked names: {{ checkedNames }}</span>
        </div>
        <p>v-model로 다중 체크박스가 연결 시 배열로 value값을 반환함</p>
      </div>
      <h4 class="gd__h3">
        select
      </h4>
      <div>
        <select v-model="selected">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ selected }}</span>

        <br><br>
        <select v-model="selected2">
          <option
            v-for="(option, i) in options"
            :key="i"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
        <br>
        <span>Selected: {{ selected2 }}</span>
      </div>
      <h3 class="gd__h2">
        커스텀 컴포넌트
      </h3>
      <div>
        <h4 class="gd__h3">
          select
        </h4>
        <div>
          <ui-select
            v-model="selected2"
            :options="options"
          />
        </div>
      </div>
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
      checked: false,
      checked2: '0',
      checkedNames: [],
      selected: 'A',
      selected2: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ],
    }
  },
}
</script>
