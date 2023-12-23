module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: { 100: "#d5b0f2", 400: "#973ae0", "100_01": "#dfc3f5" },
        green: { 200: "#99e1c4", A200: "#66d3a6", A700: "#00b66c" },
        light_blue: {
          50: "#e5f6ff",
          100: "#b2e6ff",
          900: "#006799",
          A400: "#00adff",
        },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_14": "#00000014" },
        teal: { 800: "#006d40", 900: "#00334c" },
        pink: { A400: "#ff0056" },
        blue_gray: { 900: "#322355" },
        gray: {
          100: "#f7f7f7",
          200: "#efefef",
          700: "#606060",
          900: "#002233",
        },
        orange: { A700: "#ff6b00" },
        yellow: { A700: "#ffd100" },
        blue: { 300: "#66cdff" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 4px  100px 0px #0000003f",
        bs1: "0px 50px  100px 0px #00000014",
      },
      fontFamily: {
        bricolagegrotesque: "Bricolage Grotesque",
        lexenddeca: "Lexend Deca",
        newsun: "New Sun",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
