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
        myCyan: "rgb(3,201,215)",
        lightCyan: "rgb(76, 243, 255)",
        darkCyan: "rgb(0, 160, 172)",
      },
    },
  },
  plugins: [],
};
