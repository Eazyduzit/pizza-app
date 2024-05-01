/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
export const theme = {
  extend: {
    colors: {
      // "gray-20": "#F8F4EB",
      // "gray-50": "#EFE6E6",
      // "gray-100": "#DFCCCC",
      // "gray-500": "#5E0000",
      "primary-100": "#F0F5F9",
      "primary-200": "#C9D6DF",
      // "primary-500": "#FF6B66",
      "secondary-100": "#52616B",
      "secondary-200": "#1E2022",
    },
    // backgroundImage: (theme) => ({
    //   "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
    //   "mobile-home": "url('./assets/HomePageGraphic.png')",
    // }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    // content: {
    //   evolvetext: "url('./assets/EvolveText.png')",
    //   abstractwaves: "url('./assets/AbstractWaves.png')",
    //   sparkles: "url('./assets/Sparkles.png')",
    //   circles: "url('./assets/Circles.png')",
    // },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
}
export const plugins = []
