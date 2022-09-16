module.exports = {
  content: ["index.html", "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2FC0A6",
        secondary: "#4C4C6D",
        dark: "#959A9F",
        light1: "#E8F6EF",
        light2: "#FFE194",
        white: "#F9F9F9",
        semidark: "#CBD5E1",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

// run this first npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
