/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#121212",
        secondaryBackground: "#2D2D2D",
        accentBackground: "",
        primaryButton: "#2D2D2D",
        successButton: "",
        dangerButton: "",
        disabledButton: "",
        primaryText: "#FFFFFF",
        secondaryText: "#A9A9A9",
        accentText: "",
        danger: "#bb2124",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
