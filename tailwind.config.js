/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '992px',
      'lg': '1200px',
      'xl': '1386px',
      "2xl" : "1538px",
  },
  container:{
    center:true,
    padding:{
      xs:"20px",
    }
  },
    extend: {},
  },
  plugins: [],
}
