/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      "bright-orange": "hsl(31, 77%, 52%)",
      "dark-cyan": "hsl(184, 100%, 22%)",
      "very-dark-cyan": "hsl(179, 100%, 13%)",
      "transparent-white": "hsla(0, 0%, 100%, 0.75)",
      "very-light-grey": "hsl(0, 0%, 95%)"
    },
    screens: {
      mobile: "375px",
      laptop: "1440px"
    },

    extend: {
      fontFamily:{
        "big-shoulder-display": ['Big Shoulders Display', 'cursive'],
        "lexend-deca": ['Lexend Deca', 'sans-serif']
      },

      fontWeight:{
        regular: 400,
        bold: 700
      }
    },
  },
  plugins: [],
}

