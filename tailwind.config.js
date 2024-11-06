/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "rgb(139,93,65)",
        color2: "rgb(200,187,248)",
        color3: "rgb(249,65,114)",
        color4: "rgb(132,219,235)",
        color5: "rgb(194,226,156)",
        color6: "rgb(245,209,192)",
        color7: "rgb(255,225,172)",
        myCyan: "rgb(3,201,215)",
        lightCyan: "rgb(76, 243, 255)",
        darkCyan: "rgb(0, 160, 172)",
      },
    },
  },
  plugins: [],
};
