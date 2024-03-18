/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffa500",
        white: "#fff",
        "deep-black": "#151515",
        charcoal: "#333",
        "steel-gray": "#808080",
      },
    },
  },
  plugins: [],
};
