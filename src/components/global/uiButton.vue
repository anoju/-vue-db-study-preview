<template>
  <button
    ref="button"
    type="button"
    class="button"
    :disabled="disabled"
    v-on="listeners"
  >
    <strong v-if="$slots.prev">
      <slot name="prev" />
    </strong>
    <span v-if="$slots.default">
      <slot />
    </span>
    <strong v-if="$slots.next">
      <slot name="next" />
    </strong>
  </button>
</template>

<script>

export default {
  name: 'UiButton',
  props: {
    disabled: { type: Boolean, default: false },
  },
  data() {
    return {
    }
  },
  computed: {
    listeners() {
      if (this.disabled) {
        return null
      }
      return this.$listeners
    },
  },
  methods: {
  },
}
</script>
