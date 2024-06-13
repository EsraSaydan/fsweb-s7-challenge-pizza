/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#CE2829",
        customYellow: "#FDC913",
        customGray: "#5F5F5F",
        customBoldGray: "#C292929",
        customBej: "#FAF7F2",
      },
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif;"],
        barlow: ["Barlow", "sans-serif;"],
        quattrocento: ["Quattrocento", "serif;"],
        satisfy: ["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
};
