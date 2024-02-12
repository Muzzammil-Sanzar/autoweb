/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          150: "#154178",
          250: '#F4F4F4',
          350: '#3DC2F7'
        },
      }
    },
  },
  plugins: [],
}

