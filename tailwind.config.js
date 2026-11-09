/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "switch-red": "#E60012",
        "switch-blue": "#00A3E0",
        "switch-dark": "#0d0d0f",
      },
      fontFamily: {
        display: ["'Rodin Pro'", "'Nunito'", "sans-serif"],
      },
      boxShadow: {
        "tile-glow": "0 0 0 3px rgba(255,255,255,0.9), 0 10px 40px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
