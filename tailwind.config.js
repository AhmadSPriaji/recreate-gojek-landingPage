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
        rad: '2.5rem',
        radMd: '4rem',
        radLg: '6rem',
      },
      fontSize: {
        judul: '',
      }

    },
  },
  plugins: [],
}
