module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('/src/assets/providus1.png')",
        "signup-image": "url('/src/assets/signupBG.png')",
      },
      borderWidth: {
        1.5: "1.5px",
        3: "3px",
      },
      margin: {
        "sidebar-sm": "180px",
        "sidebar-lg": "255px",
      },
      width: {
        "login-width": "380px",
        "sidebar-sm": "180px",
        "sidebar-md": "200px",
        "sidebar-lg": "255px",
      },
      height: {
        "login-height": "600px",
        "signup-height": "770px",
        "side-height": "1024px",
        "table-height": "400px",
      },
      minWidth: {
        "sidebar-md": "200px",
      },
      maxWidth: {
        "sidebar-lg": "255px",
      },
      minHeight: {
        "stats-height": "130px",
      },
      maxHeight: {
        "table-height": "400px",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        8: "8px",
        10: "10px",
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
        lavender: "#DDE2FF",
        bgray: "#F0F1F7",
        ghostWhite: "#F7F8FC",
        ibgray: "#FCFDFE",
        platinum: "#DFE0EB",
        charcoal: "#2F444F",
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
        8: "0.08",
        10: "0.1",
      },
      inset: {
        1: "1px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
