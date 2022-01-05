module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(max-height: 800px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
}
