/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        example: "9000px",
      },
      marginTop: {
        half: "55%",
      },
    },
  },
  plugins: [],
};
