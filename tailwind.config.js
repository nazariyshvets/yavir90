/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tektur: ["Tektur", "sans-serif"],
      },
      colors: {
        primary: "#ffa500",
        white: "#fff",
        "deep-black": "#151515",
        charcoal: "#333",
        "steel-gray": "#808080",
      },
      boxShadowColor: {
        white: "#ffffff55",
      },
    },
  },
  plugins: [],
};
