<template>
  <div :style="getStyle">
    <div v-for="(section, index) in sections" :key="index">
      <div class="inline-block mt-6">
        <h3 class="text-xxl italic mb-0">
          <a :href="section.link">
            {{ section.title }}
          </a>
        </h3>
        <ul>
          <li
            v-for="(subItem, index) in section.subItems"
            :key="index"
            class="mt-2 first:mt-3"
          >
            <a :href="subItem.link" class="text-blue hover:text-blueh">
              {{ subItem.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      default: () => [],
    },
    columnVariant: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    getStyle() {
      return {
        '-moz-column-count': this.columnVariant,
        '-moz-column-gap': '1rem',
        'column-gap': '1rem',
        'column-count': this.columnVariant,
      }
    },
  },
}
</script>
