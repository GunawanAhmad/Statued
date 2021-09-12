const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { enabled: true, content: ["./build/**/*.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1023px" },
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
        "@md": { min: "640px", max: "767px" },
        "@lg": { min: "768px", max: "1023px" },
        "@xl": { min: "1024px", max: "1279px" },
        "@2xl": { min: "1280px", max: "1535px" },
      },

      zIndex: {
        "-10": "-10",
        99: "99",
      },
      width: {
        "120%": "120%",
      },
      cursor: {
        none: "none",
      },
      transformOrigin: {
        full: "100%",
      },
      transitionDelay: {
        10: "10ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      flexGrow: {
        1.5: "1.5",
        2: "2",
        3: "3",
      },
      borderWidth: {
        3: "3px",
      },
    },
    fontFamily: {
      sans: ["Poppins", defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
