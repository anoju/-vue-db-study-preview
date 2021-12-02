<script>
let uuid = 0
export default {
  name: 'UiTab',
  props: {
    value: { type: [String, Number], default: null },
    disabled: { type: Boolean, default: false },
    hide: { type: Boolean, default: false },
    to: { type: [String, Location], default: null },
    id: { type: String, default: null },
    panel: { type: String, default: null },
    href: { type: String, default: null },
    tabStyle: { type: String, default: null },
  },
  data() {
    return {
      active: false,
      text: null,
    }
  },
  computed: {
    listeners() {
      if (this.disabled) {
        return null
      }
      return this.$listeners
    },
    link() {
      let rtnVal = null
      if (this.href !== null) rtnVal = this.href
      else if (this.panel !== null) rtnVal = this.panel
      return rtnVal
    },
  },
  beforeCreate() {
    this.uuid = uuid.toString()
    uuid += 1
  },
  beforeMount() {
    this.text = this.$slots.default[0].text
  },
  methods: {
  },
  render() {
    // return this.$slots.default
    return false
  },
}
</script>
