/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ravo-primary": "rgb(12, 128, 126)",
      },
    },
  },
  plugins: [],
};
