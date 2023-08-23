<template>
  <div class="p-4">
    <div
      v-for="(item, menuKey) in menuItems"
      :key="menuKey"
      class="border-b-2 border-gray-200 py-2"
    >
      <div class="md:hidden">
        <button
          class="w-full flex justify-between items-center"
          @click="toggleItem(item.id)"
        >
          <span class="font-bold italic text-offblack">{{ item.title }}</span>
          <span class="text-xl px-2">
            {{ isActive(item.id) ? '-' : '+' }}
          </span>
        </button>

        <div v-if="isActive(item.id)" class="mt-2">
          <slot name="content" :item="item"></slot>
        </div>
      </div>
      <div class="hidden md:block">
        <slot name="content" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'MobileAccordion',
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    activeItems: [],
  }),

  methods: {
    toggleItem(id) {
      const index = this.activeItems.indexOf(id)
      if (index === -1) {
        this.activeItems.push(id)
      } else {
        this.activeItems.splice(index, 1)
      }
    },
    isActive(id) {
      return this.activeItems.includes(id)
    },
  },
}
</script>
<style scoped>
/* A simple transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
