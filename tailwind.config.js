/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      flex: {
        2: '2 2 0%',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      colors: {
        'black-steam': '#161b22',
        'red-poke': '#e41f25',
        'purple-legend-light': '#8350c3',
        'purple-legend-dark': '#40267d',
      },
      blur: {
        xs: '2px',
      },
      backgroundImage: {
        'fb-undefined': "url('/public/images/card-white-gold.png')",
        'fb-normal': "url('/public/images/card-white-gold.png')",
        'fb-shiny': "url('/public/images/card-gold.png')",
        'fb-legendary': "url('/public/images/card-purple-gold.png')",
        'fb-legendary-shine':
          "url('/public/images/card-purple-gold-shine.png')",
      },
      padding: {
        '2px': '2px',
      },
      keyframes: {
        expand_info_showcase: {
          '0%': { height: '25%' },
          '100%': { height: '100%', 'border-radius': '0.5rem' },
        },
        lift_card: {
          '0%': { bottom: '0px' },
          '100%': { bottom: '5px' },
        },
      },
      animation: {
        expand_info_showcase: 'expand_info_showcase 0.5s forwards',
        lift_card: 'lift_card 0.25s forwards',
      },
    },
  },
  plugins: [],
};
