module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        titleColor: "#1E1439",
        subTitleColor: "#211842",
        textColor: "#36314E",
        buttonColor: "#FE3F60",
        lilaColor: "#845AF7",
        blueColor: "#632AFF",
        yellowColor: "#FFC600",
        greenColor: "#1ADDC2",
      },
      fontFamily: {
        poppins: ["Poppins"],
        manrope: ["Manrope"],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1800px",
      // => @media (min-width: 1800px) { ... }

      "4xl": "2000px",
      // => @media (min-width: 2000px) { ... }
    },
  },
  plugins: [],
};
