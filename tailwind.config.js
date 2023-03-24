/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#101820',
        primary: '#00880D',
        langit: '#4AC9E3',
      },
      borderRadius: {
        xxl: '8.5rem',
      }

    },
  },
  plugins: [],
}
