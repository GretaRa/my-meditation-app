/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rock-water-stream': "url('./assets/stones_water_stream.jpg')",
        
      }
    },
  },
  plugins: [],
}

