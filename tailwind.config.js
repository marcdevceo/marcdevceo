/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        plum: '#2e003e',
        neon: '#b8ff00',
        graphite: '#1c1c1c',
        sky: '#00cfff',
        gold: '#EAB308',
        "iron-black": '#1b1f23',
        "turf-green": '#15803D',
        "light-gray": '#F4F4F5',
        "red-zone": '#B91C1C',
        primetime: '#A3E635',
      },
      fontFamily: {
        funky: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

