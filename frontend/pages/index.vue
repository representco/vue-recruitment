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
        ],
      },
      {
        id: '2',
        title: 'Honda',
        link: '/honda',
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
        ],
      },
      {
        id: '3',
        title: 'Honda',
        link: '/honda',
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
        ],
      },
      {
        id: '4',
        title: 'Honda',
        link: '/honda',
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
        ],
      },
      {
        id: '5',
        title: 'Honda',
        link: '/honda',
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
        ],
      },
      {
        id: '6',
        title: 'Honda',
        link: '/honda',
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
        ],
      },
      {
        id: '7',
        title: 'Honda',
        link: '/honda',
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
        ],
      },
      {
        id: '8',
        title: 'Honda',
        link: '/honda',
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
        ],
      },
    ],
  }),
}
</script>
