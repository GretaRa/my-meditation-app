/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rocky-river': "url('./assets/stones_water_stream.jpg')",
        'forest': "url('./assets/forest.jpg')",
      }
    },
  },
  plugins: [],
}

