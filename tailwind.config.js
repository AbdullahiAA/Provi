module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('/src/assets/providus1.png')",
        "signup-image": "url('/src/assets/signupBG.png')",
      },
      width: {
        "login-width": "380px",
      },
      height: {
        "login-height": "600px",
        "signup-height": "770px",
        "side-height": "1024px",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        lblack: "#252733",
        lgray: "#9FA2B4",
        lighterGray: "#DDE2FF",
        bgray: "#F0F1F7",
        bggray: "#F7F8FC",
        ibgray: "#FCFDFE",
        grayScale: "#DFE0EB",
        grayShade: "#2F444F",
        buyellow: "#F7B811",
        siblack: "#363740",
        bImage: "#E5E5E5",
        textc: "#5E5873",
        ogold: "#F9B71220",
        gold: "#F9B712",
        tblue: "#3751FF",
        sgray: "#ACAFD260",
        sgry: "#ACAFD2",
        bdblack: "#00000070",
        metallicSilver: "#A4A6B3",
        error: "#FF0000",
      },
      gap: {
        700: "700px",
      },
      opacity: {
        10: "0.1",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
