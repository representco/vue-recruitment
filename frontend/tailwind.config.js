module.exports = {
  // mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: {
    options: {
      // safelist: [
      //   'grid-cols-2',
      //   'grid-cols-3',
      //   'grid-cols-4',
      //   'grid-cols-5',
      //   'grid-cols-6',
      //   'grid-cols-7',
      //   'grid-cols-8',
      //   'grid-cols-9',
      //   'grid-cols-10',
      // ],
    },
  },

  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif', 'arial'],
      robotocond: ['Roboto Condensed', 'sans-serif', 'arial'],
      trade: ['trade-gothic-next-condensed', 'sans-serif', 'arial'],
      montserrat: ['Montserrat', 'sans-serif', 'arial'],
    },
    extend: {
      boxShadow: {
        menu: '0 20px 40px -10px rgba(28, 28, 30, 0.1), 0 20px 40px 0 rgba(147, 147, 148, 0.2)',
      },
      zIndex: {
        55: '55',
        60: '60',
        65: '65',
        70: '70',
        100: '100', // modals
        110: '110',
      },
      colors: {
        modal: 'rgba(0, 0, 0, 0.8)',
        modald: 'rgba(0, 0, 0, 0.95)',
        modalw: 'rgba(255, 255, 255, 0.6)',
        blue: '#3b7cc0',
        blueh: '#4a9cf1',
        blued: '#2a66a5',
        blued2: '#2a6db3',
        bluedb: '#1c5a9a',
        orange: '#f08122',
        off: '#e43d30',
        sale: '#00bc70',
        'blue-9': 'rgba(59, 124, 192, 0.9)',
        'black-60': 'rgba(0,0,0, 0.6)',
        'blue-9h': 'rgba(56, 149, 246, 0.9)',
        'blue-darker': '#2c68b0',
        'light-gray': '#f1f3f6',
        'light-gray-border': '#e1e3e6',
        'light-gray-alt': '#d1d3d6',
        'brownish-gray': '#616161',
        'light-gray-2': '#e5e5e5',
        'light-gray-3': '#b1b3b6',
        'light-gray-darker': '#dce5ef',
        'light-gray-bg': '#F2F3F5',
        'lightest-gray': 'rgba(8, 10, 59, 0.1)',
        'dark-gray': '#333333',
        'darker-gray': '#222222',
        'lighter-gray': '#999999',
        'gray-link': 'rgba(19, 19, 19, 0.6)',
        'gray-link-hover': 'rgba(19, 19, 19, 0.9)',
        offblack: '#131313',
      },
      spacing: {
        full: '100%',
        img: '65%',
        half: '50%',
        15: '3.75rem',
      },
      gridTemplateColumns: {
        '25-75': '0.25fr 0.75fr',
      },
      transitionTimingFunction: {
        'quad-out': 'cubic-bezier(0.5, 1, 0.89, 1)',
      },
      listStyleType: {
        alpha: 'lower-alpha',
        roman: 'lower-roman',
      },
      // https://websemantics.uk/tools/responsive-font-calculator/ //clamp/safariFix
      fontSize: {
        tiny: '10px',
        'fluid-hero-mobile':
          'clamp(16px, calc(1rem + ((1vw - 3.2px) * 10.6583)), 50px);',
        'fluid-hero-desktop':
          'clamp(26px, calc(1.625rem + ((1vw - 6.4px) * 4.75)), 64px);',
        '4-5xl': '2.65rem',
      },
      gridTemplateRows: {
        // Simple rows
        12: 'repeat(12, minmax(0, 1fr))',
        13: 'repeat(13, minmax(0, 1fr))',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.33333%',
      },
    },
    screens: {
      tiny: '375px',
      xs: '425px',
      xsp: '540px',
      sm: '640px',
      md: '768px',
      nav: '1024px',
      lg: '1024px',
      lgp: '1280px',
      xl: '1440px',
      xlp: '1800px',

      portrait: { raw: '(orientation: portrait)' },
      landscape: { raw: '(orientation: landscape)' },
      print: { raw: 'print' },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
      padding: ['first'],
      borderWidth: ['first'],
    },
  },
  plugins: [
    require('tailwindcss-fluid')({
      textSizes: {
        ...[
          { s: 'xtiny', min: 4 },
          { s: 'tiny', min: 6 },
          { s: 'xs', min: 8 },
          { s: 'sm', min: 10 },
          { s: 'base', min: 12 },
          { s: 'lg', min: 14 },
          { s: 'xl', min: 16 },
          { s: '2xl', min: 20 },
          { s: '3xl', min: 26 },
          { s: '4xl', min: 32 },
          { s: '5xl', min: 36 },
          { s: '6xl', min: 56 },
          { s: '7xl', min: 68 },
          { s: '8xl', min: 92 },
          { s: '9xl', min: 120 },
        ].reduce(
          (a, { s, min }) => ({
            ...a,
            [s]: {
              min: `${min}px`,
              max: `${min * 7.5}px`,
              minvw: '320px',
              maxvw: '1240px',
            },
          }),
          {}
        ),
      },
    }),
  ],
}
