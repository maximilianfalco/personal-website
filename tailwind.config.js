/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-primary": "#ffffff",
        "light-secondary": "#E3E8EF",
        "dark-primary": "#242424",
        "dark-secondary": "#839D9A",
      },
      screens: {
        '4k': '2560px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

