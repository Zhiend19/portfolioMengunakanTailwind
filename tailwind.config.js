/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors :{        
        dark: 'rgb(15, 23, 42)',
        cyan: '#0891b2',
        sky: '#0369a1',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

