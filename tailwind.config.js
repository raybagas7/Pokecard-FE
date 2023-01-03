/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: { tablet: '724px', '2xl': '1536px' },
    extend: {
      flex: {
        2: '2 2 0%',
      },
      borderRadius: {
        'poke-15': '15px',
      },
      zIndex: {
        1: '1',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      colors: {
        'black-steam': '#161b22',
        'red-poke': '#e41f25',
        'purple-legend-light': '#8350c3',
        'purple-legend-dark': '#40267d',
        'orange-poke': '#f58216',
        'yellow-poke': '#ffff00',
        'purple-poke': '#9d4edd',
      },
      blur: {
        xs: '2px',
      },
      height: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
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
          '100%': { bottom: '10px' },
        },
        fade_in: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        fade_in_slide_up: {
          '0%': { opacity: '0%', transform: 'translateY(20px)' },
          '100%': { opacity: '100%', transform: 'translateY(0px)' },
        },
        fade_in_slide_left: {
          '0%': { opacity: '0%', transform: 'translateX(50px)' },
          '100%': { opacity: '100%', transform: 'translateX(0px)' },
        },
        default_lift_card: {
          '0%': { bottom: '10px' },
          '100%': { bottom: '0px' },
        },
        default_slide_left: {
          '0%': { opacity: '0%', transform: 'translateX(0px)' },
          '100%': { opacity: '100%', transform: 'translateX(50px)' },
        },
        horizontal_shake: {
          '0%': { transform: 'translateX(0px)' },
          '5%': { transform: 'translateX(1.3px)' },
          '10%': { transform: 'translateX(-1.3px)' },
          '15%': { transform: 'translateX(1.3px)' },
          '20%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        expand_info_showcase: 'expand_info_showcase 0.5s forwards',
        lift_card: 'lift_card 0.25s forwards',
        fade_in_slide_up: 'fade_in_slide_up 1s forwards',
        fade_in_slide_left: 'fade_in_slide_left 1.5s forwards',
        fade_in: 'fade_in 1s forwards',
        default_lift_card: 'default_lift_card 0.25s forwards',
        default_slide_left: 'default_slide_left 1.5s forwards',
        horizontal_shake: 'horizontal_shake 3s infinite',
      },
    },
  },
  plugins: [],
};
