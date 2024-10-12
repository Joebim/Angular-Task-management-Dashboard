/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "green": {
          "primary": "#76BC6A",
          "300": "#CBE2C8",
          "200": "#DFEDDF",
          "100": "#E8EEEA",
          "50": "#F3F7F5",
        },
        "neutral": {
          "primary": "#D6DFEA",
        },
        "black": {
          "primary": "#111111",
          "100": "#D1D6D3",
          "50": "#E9EDEB",
        },
        "sunny": {
          "primary": "#E9FF79",
          "200": "#E8FB9D",
          "100": "#E6F3BD",
        }
      },
    },
  },
  plugins: [],
}
