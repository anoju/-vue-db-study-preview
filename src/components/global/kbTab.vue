<template>
  <div
    v-if="!linkTo && !!$slots.default"
    :id="href"
    ref="tabpanel"
    role="tabpanel"
    class="tab_panel"
    :class="{active:isActive}"
    :aria-labelledby="btnId"
    :aria-expanded="isActive?'true':'false'"
    :data-height="height"
  >
    <slot />
  </div>
</template>

<script>
let uuid = 0
export default {
  name: 'KbTab',
  props: {
    value: { type: [String, Number], default: null },
    title: { type: String, required: true },
    active: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    hide: { type: Boolean, default: false },
    to: { type: [String, Location], default: null },
    linkTo: { type: [String, Location], default: null },
    tabStyle: { type: String, default: null },
  },
  data() {
    return {
      isActive: false,
      height: 0,
    }
  },
  computed: {
    listeners() {
      if (this.disabled) {
        return null
      }
      return this.$listeners
    },
    href() {
      let rtnVal = null
      if (this.linkTo !== null) {
        rtnVal = `${this.linkTo}`
      } else if (this.$slots.default === undefined) {
        rtnVal = ''
      } else {
        rtnVal = `tab_panel_${this.uuid}`
      }
      return rtnVal
    },
    btnId() {
      let rtnVal = null
      if (this.linkTo === null) {
        if (this.$slots.default === undefined) {
          rtnVal = null
        } else {
          rtnVal = `tab_btn_${this.uuid}`
        }
      }
      return rtnVal
    },
  },
  beforeCreate() {
    this.uuid = uuid.toString()
    uuid += 1
  },
  mounted() {
    this.isActive = this.active
    if (this.to !== null && this.to === this.$route.path) this.isActive = true
    if (this.$slots.default !== undefined) this.getHeight()
  },
  methods: {
    getHeight() {
      this.$el.setAttribute('style', 'display:block;height:0;opacity:0;')
      this.height = this.$el.scrollHeight
      this.$el.removeAttribute('style')
    },
  },
}
</script>
