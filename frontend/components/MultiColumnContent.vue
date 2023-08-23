<template>
  <div>
    <div v-for="(section, key) in sections" :key="key">
      <div>
        <span class="font-bold italic text-offblack">
          {{ section.title }}
        </span>
        <ul class="mt-2">
          <li
            v-for="(subItem, subItemkey) in section.subItems"
            :key="subItemkey"
          >
            <a :href="subItem.link" class="italic text-blue">{{
              subItem.text
            }}</a>
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
  },
}
</script>
