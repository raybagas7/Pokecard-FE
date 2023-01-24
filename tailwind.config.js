/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '725px',
      '2xl': '1537px',
      xl: '1281px',
      lg: '1025px',
      md: '769px',
      sm: '641px',
    },

    minHeight: {
      'half-screen': '50vh',
      screen: '100vh',
    },
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
        xxxs: '0.5rem',
        xxxxs: '0.4rem',
      },
      maxWidth: {
        '60px': '60px',
        '40px': '40px',
        '20px': '20px',
      },
      colors: {
        'black-steam': '#161b22',
        'red-poke': '#e41f25',
        'purple-legend-light': '#8350c3',
        'purple-legend-dark': '#40267d',
        'orange-poke': '#f58216',
        'yellow-poke': '#ffff00',
        'gold-poke': '#ffd400',
        'purple-poke': '#9d4edd',
        'hp-box': '#48bf53',
        'attack-box': '#c80808',
        'defense-box': '#2f57d1',
        'special-attack-box': '#ffbf00',
        'special-defense-box': '#a8a9ad',
        'speed-box': '#03bb99',
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
        720: '720px',
        594: '594.61px',
        460: '460px',
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
        720: '720px',
        460: '460px',
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
        6.5: '26px',
      },
      keyframes: {
        expand_info_showcase: {
          '0%': { height: '25%' },
          '100%': { height: '100%', 'border-radius': '0.75rem' },
        },
        default_expand_info: {
          '0%': { height: '100%', 'border-radius': '0.75rem' },
          '100%': { height: '25%' },
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
        shaking_brutally: {
          '0%': { transform: 'translate(1px, 1px)', rotate: '(0deg)' },
          '10%': { transform: 'translate(-1px, -2px)', rotate: '(-1deg)' },
          '20%': { transform: 'translate(-3px, 0px)', rotate: '(1deg)' },
          '30%': { transform: 'translate(3px, 2px)', rotate: '(0deg)' },
          '40%': { transform: 'translate(1px, -1px)', rotate: '(1deg)' },
          '50%': { transform: 'translate(-1px, 2px)', rotate: '(-1deg)' },
          '60%': { transform: 'translate(-3px, 1px)', rotate: '(0deg)' },
          '70%': { transform: 'translate(3px, 1px)', rotate: '(-1deg)' },
          '80%': { transform: 'translate(-1px, -1px)', rotate: '(1deg)' },
          '90%': { transform: 'translate(1px, 2px)', rotate: '(0deg)' },
          '100%': { transform: 'translate(1px, -2px)', rotate: '(-1deg)' },
        },
        expand_user_profile: {
          '0%': {
            height: '5rem',
            width: '5rem',
          },
          '100%': {
            margin: '0px',
            height: '100%',
            'max-height': '6rem',
            width: '20rem',
          },
        },
        expand_user_profile_lg: {
          '0%': {
            height: '4rem',
            width: '4rem',
          },
          '100%': {
            margin: '0px',
            height: '100%',
            'max-height': '5rem',
            width: '18rem',
          },
        },
        default_user_profile: {
          '0%': {
            margin: '0px',
            height: '100%',
            'max-height': '6rem',
            width: '20rem',
          },
          '100%': {
            height: '5rem',
            width: '5rem',
          },
        },
        default_user_profile_lg: {
          '0%': {
            margin: '0px',
            height: '100%',
            'max-height': '5rem',
            width: '18rem',
          },
          '100%': {
            height: '4rem',
            width: '4rem',
          },
        },
        fade_in_visit: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        fade_out_quantum: {
          '0%': { opacity: '100%', transform: 'scale(1)' },
          '100%': { opacity: '0%', transform: 'scale(0)' },
        },
        default_quantum: {
          '0%': { opacity: '0%', transform: 'scale(0)' },
          '100%': { opacity: '100%', transform: 'scale(1)' },
        },
        fade_out_quantum_bouncing: {
          '0%': { opacity: '100%', transform: 'scale(1)' },
          '30%': { opacity: '100%', transform: 'scale(1.07)' },
          '100%': {
            opacity: '0%',
            transform: 'scale(0)',
            visibility: 'hidden',
          },
        },
        default_quantum_bouncing: {
          '0%': { opacity: '0%', transform: 'scale(0)', visibility: 'visible' },
          '50%': {
            opacity: '0%',
            transform: 'scale(0)',
            visibility: 'visible',
          },
          '80%': { opacity: '100%', transform: 'scale(1.07)' },
          '100%': { opacity: '100%', transform: 'scale(1)' },
        },
        spinner: {
          '0%, 40%': { transform: 'rotate(0deg)' },
          '60%, 100%': { transform: 'rotate(-180deg)' },
        },
        spin_back: {
          '0%, 20%': { transform: 'rotate(0deg)' },
          '30%, 100%': { transform: 'rotate(-180deg)' },
        },
        default_offerer_profile: {
          '0%': {
            margin: '0px',
            height: '100%',
            width: '15rem',
          },
          '100%': {
            height: '6rem',
            width: '13rem',
          },
        },
        default_offerer_profile_xl: {
          '0%': {
            margin: '0px',
            height: '100%',
            width: '10rem',
          },
          '100%': {
            height: '4rem',
            width: '8rem',
          },
        },
        expand_offerer_profile: {
          '0%': {
            height: '6rem',
            width: '13rem',
          },
          '100%': {
            margin: '0px',
            height: '100%',
            'max-height': '460px',
            width: '15rem',
          },
        },
        expand_offerer_profile_xl: {
          '0%': {
            height: '4rem',
            width: '8rem',
          },
          '100%': {
            margin: '0px',
            height: '100%',
            width: '10rem',
          },
        },
        moving_profile_img: {
          '0%': { left: '0px', top: '180px' },
          '50%': { left: '0px', top: '100px' },
          '100%': { left: '75px', top: '100px' },
        },
        moving_profile_img_xl: {
          '0%': { left: '0px', top: '110px' },
          '50%': { left: '0px', top: '68px' },
          '100%': { left: '49px', top: '68px' },
        },
        moving_offerer_name: {
          '0%': {
            top: '180px',
            right: '0px',
            transform: 'scale(1)',
            'margin-top': '6px',
          },
          // '50%': { left: '0px', top: '100px' },
          '100%': {
            top: '180px',
            right: '58px',
            transform: 'scale(1.5)',
            'margin-top': '12px',
          },
        },
        moving_offerer_name_xl: {
          '0%': {
            top: '120px',
            right: '0px',
            transform: 'scale(1)',
            'margin-top': '6px',
          },
          // '50%': { left: '0px', top: '100px' },
          '100%': {
            top: '120px',
            right: '40px',
            transform: 'scale(1.3)',
            'margin-top': '12px',
          },
        },
        button_scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.3)' },
        },
        default_hide_slide_left: {
          '0%': { 'margin-right': '177px' },
          '100%': { 'margin-right': '0px' },
        },
        default_hide_slide_left_lg: {
          '0%': { 'margin-right': '114px' },
          '100%': { 'margin-right': '0px' },
        },
        hide_slide_left: {
          '0%': { 'margin-right': '0px' },
          '100%': { 'margin-right': '177px' },
        },
        hide_slide_left_lg: {
          '0%': { 'margin-right': '0px' },
          '100%': { 'margin-right': '114px' },
        },
      },
      animation: {
        expand_info_showcase: 'expand_info_showcase 0.2s forwards',
        default_expand_info: 'default_expand_info 0.5s forwards',
        lift_card: 'lift_card 0.25s forwards',
        fade_in_slide_up: 'fade_in_slide_up 1s forwards',
        fade_in_slide_left: 'fade_in_slide_left 1.5s forwards',
        fade_in: 'fade_in 1s forwards',
        default_lift_card: 'default_lift_card 0.25s forwards',
        default_slide_left: 'default_slide_left 1.5s forwards',
        horizontal_shake: 'horizontal_shake 3s infinite',
        shaking_brutally: 'shaking_brutally 2s infinite',
        expand_user_profile: 'expand_user_profile 0.5s forwards',
        default_user_profile: 'default_user_profile 0.5s forwards',
        fade_in_visit: 'fade_in_visit 0.5s forwards',
        fade_out_quantum: 'fade_out_quantum 0.5s forwards',
        default_quantum: 'default_quantum 0.7s forwards',
        fade_out_quantum_bouncing: 'fade_out_quantum_bouncing 0.5s forwards',
        default_quantum_bouncing: 'default_quantum_bouncing 1s forwards',
        spinner: 'spinner 4s linear infinite',
        spin_back: 'spin_back 2s linear infinite',
        default_offerer_profile: 'default_offerer_profile 0.5s forwards',
        default_offerer_profile_xl: 'default_offerer_profile_xl 0.5s forwards',
        default_user_profile_lg: 'default_user_profile_lg 0.5s forwards',
        expand_user_profile_lg: 'expand_user_profile_lg 0.5s forwards',
        expand_offerer_profile: 'expand_offerer_profile 0.5s forwards',
        expand_offerer_profile_xl: 'expand_offerer_profile_xl 0.5s forwards',
        moving_profile_img: 'moving_profile_img 0.5s forwards',
        moving_profile_img_xl: 'moving_profile_img_xl 0.5s forwards',
        moving_offerer_name: 'moving_offerer_name 0.5s forwards',
        moving_offerer_name_xl: 'moving_offerer_name_xl 0.5s forwards',
        button_scale: 'button_scale 0.5s forwards',
        default_hide_slide_left: 'default_hide_slide_left 0.5s forwards',
        default_hide_slide_left_lg: 'default_hide_slide_left_lg 0.5s forwards',
        hide_slide_left: 'hide_slide_left 0.5s forwards',
        hide_slide_left_lg: 'hide_slide_left_lg 0.5s forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
