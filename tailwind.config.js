/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-twitter': '#1d9bf0',
      },
      spacing:{
        '100': '600px'
      }
    },
  },
  plugins: [],
}

