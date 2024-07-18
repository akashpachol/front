

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#00adb5',
        'yellow':'#EDA415',
        'naviBlue':'#003F62',
        'text':'Montserrat'
      },
    },
  },
  plugins: [],
}