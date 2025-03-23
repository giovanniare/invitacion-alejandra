module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    darkMode: false,
    extend: {
      colors: {
        'mocha-sel': '#A25C43',
        'natural-sel': '#C9AF9E',
        'gold-sel': '#B98651',
        'mocha-sel': '#A25C43',
        'copper-sel': '#CB6439',

      }
    } 
  },
  plugins: [require("flowbite/plugin")],
};