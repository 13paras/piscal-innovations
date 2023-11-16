/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#09a223",
        pinkish: "#FFDFDF",
        darkGreen: '#047f19',
      },
    },
  },
  plugins: [],
};
