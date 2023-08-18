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
            <div v-for="(section, key) in item.sections" :key="key">
              <div class="font-bold italic text-offblack">
                {{ section.title }}
              </div>
              <ul>
                <li
                  v-for="(subItem, subItemKey) in section.subItems"
                  :key="subItemKey"
                >
                  <a :href="subItem.link" class="italic text-blue">{{
                    subItem.text
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!-- Desktop View -->
    <div class="hidden md:grid md:grid-cols-1 h-screen">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="flex border-b"
      >
        <div class="w-1/4 p-4">
          <a :href="item.link" class="font-bold italic text-offblack">{{
            item.title
          }}</a>
        </div>
        <div class="w-3/4 grid grid-cols-3 gap-4 p-4">
          <div v-for="(section, key) in item.sections" :key="key">
            <div>
              <span class="font-bold italic text-offblack">
                {{ section.title }}
              </span>
              <ul>
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
