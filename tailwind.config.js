module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 17%)",
        secondary: "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        body: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('./images/pattern-bg.png')",
      },
      height: {
        mobile: "300px",
        desktop: "280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
