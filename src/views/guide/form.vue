<template>
  <ui-page title="form">
    <p>기본 태그</p>
    <div>
      <input
        id="checkbox"
        v-model="checked"
        type="checkbox"
      >
      <label for="checkbox">{{ checked }}</label>
    </div>
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
    <br>
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
      <br>
      <ui-select
        v-model="selected2"
        :options="options"
      />
      <div />
    </div>
  </ui-page>
</template>

<script>
// import uiPage from '@/components/global/uiPage.vue'
// import uiSelect from '@/components/global/uiSelect.vue'

export default {
  name: 'Index',
  // components: {
  //   uiPage,
  //   uiSelect,
  // },
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
