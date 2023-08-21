<template>
  <div>
    <MobileAccordion :menu-items="menuItems" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    MobileAccordion: () => import('@/components/MobileAccordion.vue'),
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
