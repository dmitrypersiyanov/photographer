/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/public/index.html",
    "./src/App.js",
  ],
  theme: {
    extend: {
      colors: {
        fancy: "#2cffbb",
        darkest: "#15202B",
        darker: "#192734",
        plum: "#362952",
        "dark-plum": "#231b36",
        darkless: "#22303C",
        insta:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        "text-primary": "#ffff",
        "text-secondary": "#8899A6",
        "text-semiprimary": "rgba(44, 255, 187, 0.6)",
      },
      minHeight: {
        500: "500px",
      },
      boxShadow: {
        glow: "0 0px 13px 5px rgb(44 255 187 / 0.8), 0 4px 6px -4px rgb(44 255 187 / 0.8)",
        // 'glow': '0 0px 65px 22px rgb(44 255 187 / 0.8), 0 -1px 6px -4px rgb(44 255 187 / 0.8)',
        "navigation-shadow": "0 1px 6px 0 rgb(32 33 36 / 28%)",
      },
      height: {
        "grid-height": "500px",
        "small-height": "300px",
      },
      screens: {
        small: { max: "500px" },
      },
      fontWeight: {
        active: { "font-weight": 900 },
      },
      fontFamily: {
        dream: ["Dreamland-0vWd", "cursive"],
        vibes: ["GreatVibes-Regular", "cursive"],
      },
      backgroundImage: {
        insta:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
      },
      dropShadow: {
        "12xl": "0 15px 15px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        "5xl": ["0 5px 6px rgb(0 0 0 / 0.9)", "0 2px 2px rgb(0 0 0 / 0.3)"],
      },
    },
  },
  plugins: [],
};
