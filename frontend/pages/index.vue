<template>
  <div>
    <MobileAccordion :menu-items="menuItems">
      <template #content="slotScope">
        <MultiColumnContent :sections="slotScope.item.sections" />
      </template>
    </MobileAccordion>

    <MobileAccordion :menu-items="menuItems">
      <template #content="slotScope">
        <div class="flex">
          <div class="md:w-1/3">
            <h2 class="font-bold italic text-offblack">
              <a :href="slotScope.item.link">{{ slotScope.item.title }}</a>
            </h2>
          </div>
          <MultiColumnContent
            class="md:grid md:w-2/3 grid-flow-col grid-cols-2 grid-rows-4 gap-4 py-4"
            :sections="slotScope.item.sections"
          />
        </div>
      </template>
    </MobileAccordion>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    MobileAccordion: () => import('@/components/MobileAccordion.vue'),
    MultiColumnContent: () => import('@/components/MultiColumnContent.vue'),
  },
  data: () => ({
    menuItems: [
      {
        id: '1',
        title: 'Honda',
        link: '/honda',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit sit amet ipsum lacinia vehicula. Aenean at sapien nec ante volutpat gravida.',
        sections: [
          {
            title: '1 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '2 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '3 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '4 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '5 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '6 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '7 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
        ],
      },
      {
        id: '2',
        title: 'Honda',
        link: '/honda',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit sit amet ipsum lacinia vehicula. Aenean at sapien nec ante volutpat gravida.',
        sections: [
          {
            title: '1 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '1 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '1 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '1 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '2 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
          {
            title: '3 Series',
            subItems: [
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
              {
                text: 'BMW 1 series Model Wheel & Tire Fitment Guide',
                link: '/link',
              },
            ],
          },
        ],
      },
    ],
  }),
}
</script>
