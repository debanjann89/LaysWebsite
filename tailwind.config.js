/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lays-yellow': '#F4C430',
        'lays-red': '#D2122E',
        'lays-blue': '#004B87',
      },
      fontFamily: {
        'display-hero': ['"Bebas Neue"', 'Impact', 'sans-serif'],
        'headline-lg': ['"Montserrat"', 'sans-serif'],
        'headline-md': ['"Montserrat"', 'sans-serif'],
        'body-lg': ['"Montserrat"', 'sans-serif'],
        'body-md': ['"Montserrat"', 'sans-serif'],
        'label-sm': ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
