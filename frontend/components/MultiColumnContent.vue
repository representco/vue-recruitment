<template>
  <div :class="columnClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: [Number, String],
      default: 1,
    },
  },
  computed: {
    columnClass() {
      return `md:grid md:grid-cols-${this.columns}`
    },
  },
}
</script>
