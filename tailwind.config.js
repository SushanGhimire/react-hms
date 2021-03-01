module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: "#B99365",
        text2: "#d4b28a",
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans"],
        rubik: ["Rubik", "sans"],
      },
      spacing: {
        100: "26rem",
        102: "30rem",
        104: "34rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
