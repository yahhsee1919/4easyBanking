module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        greenGradient: "#33D35E",
        blueGradient: "#2AB6D9",
        green: "#30C88F",
        darkBlue: "#2D314D",
        grey: "#9597A5",
      },
    },
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
    backgroundImage: (theme) => ({
      heroMobile: "url(../images/bg-intro-mobile.svg)",
      heroDesktop: "url(../images/bg-intro-desktop.svg)",
    }),
  },
  plugins: [],
};
