/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": ".5rem",
      },
      colors: {
        "light-primary": "#ffffff",
        "light-secondary": "#E3E8EF",
        "dark-primary": "#242424",
        "dark-secondary": "#313131",
      },
      screens: {
        '4k': '2560px',
      },
      fontFamily: {
        AltoneTrial: ["AltoneTrial"],
        JetBrainsMono: ["JetBrainsMono"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

