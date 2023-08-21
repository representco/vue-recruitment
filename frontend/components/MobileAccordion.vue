<template>
  <div class="p-4">
    <!-- Mobile View -->
    <div class="md:hidden">
      <div
        v-for="(item, menuKey) in menuItems"
        :key="menuKey"
        class="border-b-2 border-gray-200 py-2"
      >
        <button
          class="w-full flex justify-between items-center"
          @click="toggleItem(item.id)"
        >
          <span class="font-bold italic text-offblack">{{ item.title }}</span>
          <span class="text-xl px-2">
            {{ isActive(item.id) ? '-' : '+' }}
          </span>
        </button>
        <transition name="fade">
          <div v-if="isActive(item.id)" class="mt-2">
            <MultiColumnContent :sections="item.sections" />
          </div>
        </transition>
      </div>
    </div>
    <!-- Desktop View -->
    <div class="hidden md:block">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="grid grid-cols-25-75 xl:grid-cols-1 md:border-b xl:border-b-0"
      >
        <div class="md:p-4 xl:p-0 xl:border-b">
          <a :href="item.link" class="font-bold italic text-offblack">{{
            item.title
          }}</a>
          <p class="hidden xl:block">{{ item.description }}</p>
        </div>

        <MultiColumnContent
          :sections="item.sections"
          class="md:grid grid-flow-col grid-cols-2 grid-rows-4 xl:grid-cols-3 xl:grid-rows-3 gap-4 py-4"
        />
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'MobileAccordion',
  components: {
    MultiColumnContent: () => import('@/components/MultiColumnContent.vue'),
  },
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
