/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
    theme: {
      extend: {
        colors: {
          yel: "#FFD143",
          org: "#FF9153",
        },
      },
    },
  }
} 
