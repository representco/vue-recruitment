<template>
  <div class="p-4">
    <div class="border-b-2 border-gray-200 py-2">
      <div class="md:hidden">
        <button
          class="w-full flex justify-between items-center"
          @click="toggleOpen"
        >
          <span class="font-bold italic text-offblack">{{ name }}</span>
          <span class="text-xl px-2">
            {{ isOpen ? '-' : '+' }}
          </span>
        </button>
      </div>
      <div class="accordion" :class="{ 'is-open': isOpen }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'MobileAccordion',
  props: {
    name: {
      type: String,
      default: '',
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    activeItems: [],
    isOpen: false,
  }),
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style scoped>
.toggle-button {
  display: block;
}

.accordion {
  display: none;
  transition: opacity 0.3s;
  opacity: 0;
}

.accordion.is-open {
  display: block;
  opacity: 1;
}

@media only screen and (min-width: 769px) {
  .toggle-button {
    display: none;
  }

  .accordion {
    display: block;
    opacity: 1;
  }
}
</style>
