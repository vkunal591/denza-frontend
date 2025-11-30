/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,ejs}", // adjust to your project
    "./views/**/*.ejs"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0047FF',
      }
    }
  },
  plugins: [],
};
