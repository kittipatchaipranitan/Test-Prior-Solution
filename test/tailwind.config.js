/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://www.cdg.co.th/website/wp-content/uploads/2023/05/Press-Release-Vaccine.webp')",
        'footer-texture': "url('https://www.cdg.co.th/website/wp-content/uploads/2023/05/Press-Release-Vaccine.webp')",
      } ,  fontFamily: {
        // Add Sarabun font family with different weights and styles
        sarabun: ['Sarabun', 'sans-serif'],
      },
    },

  },
  plugins: [],
}