/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4486B5',
        secondary: '#F3F4FF',

        'custom-black-100': '#000',
        'custom-black-200': '#151515',
        'custom-black-300': '#1b1b1b',
        'custom-black-400': '#222',
        'custom-black-500': '#272727',
        'custom-black-600': '#333',
        'custom-black-700': '#444',

        'custom-gray-100': '#868686',
        'custom-gray-200': '#c7c7c7',

        'custom-blue-100': '#3355FF',
        'custom-blue-200': '#6699FF',
        'custom-blue-300': 'rgba(51, 153, 255, 0.1)',
        'custom-blue-400': 'rgba(51, 153, 255, 0.2)',
        'custom-blue-500': 'rgba(51, 153, 255, 0.3)',
        'custom-blue-600': 'rgba(51, 153, 255, 0.4)',
        'custom-blue-700': 'rgba(51, 153, 255, 0.6)',
      },
      keyframes: {
        'glow-icon': {
          '0%': {
            borderColor: 'theme("colors.custom-blue-100")',
            background:
              'linear-gradient(theme("colors.custom-blue-100"), theme("colors.custom-blue-400"))',
            color: 'theme("colors.custom-blue-100")',
            boxShadow:
              '0 0 0 theme("colors.custom-blue-400"), inset 0 0 0 theme("colors.custom-blue-300")',
          },
          '100%': {
            borderColor: 'theme("colors.custom-blue-200")',
            background:
              'linear-gradient(theme("colors.custom-blue-100"), theme("colors.custom-blue-400"))',
            color: 'theme("colors.custom-blue-100")',
            boxShadow:
              '0 0 0 theme("colors.custom-blue-700"), inset 1px 0 10px theme("colors.custom-blue-600")',
          },
        },
        'glow-input': {
          '0%': {
            borderColor: 'theme("colors.custom-blue-100")',
            boxShadow:
              '0 0 0 borderColor: theme("colors.custom-blue-400"), inset 0 0 0 borderColor: theme("colors.custom-blue-300")',
          },
          '100%': {
            borderColor: 'theme("colors.custom-blue-200")',
            boxShadow:
              '0 0 0 theme("colors.custom-blue-700"), inset 1px 0 10px theme("colors.custom-blue-600")',
          },
        },
      },
      animation: {
        'glow-icon': 'glow-icon 1s ease-out infinite alternate',
        'glow-input': 'glow-input 1s ease-out infinite alternate',
      },
    },
  },
  plugins: [],
}
