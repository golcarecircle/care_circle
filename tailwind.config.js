module.exports = {
  mode : 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1920px',
      },
      fontFamily : {
        sans : ['Barlow', 'sans-serif']
      },
      colors : {
        gray : {
          100 : '#E6E4EB',
          200 : '#C4C2D1',
          300 : '#A2A0B7',
          400 : '#7F7D9D',
          500: '#ABBBC2',
          700: '#4F516B',
          900: '#34364A',
          800: '#4F516B',
        },
        primary : '#3A8EF6',
        accent : {
          blue: '#65B0F6',
          orange: '#FFB572',
          red: '#FF7CA3',
          green: '#50D1AA',
          purple : '#9290FE',
          danger: '#d9534f'
        }
      },
      boxShadow : {
        primary : '0px 8px 24px rgba(234, 124, 105, 0.32)',
        'inverse-top' : '4px 4px 0 #252836',
        'inverse-bottom' : '4px -4px 0 #252836'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}