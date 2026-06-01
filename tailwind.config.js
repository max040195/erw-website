/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Arial Narrow", "Arial", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseRed: "pulseRed 2.8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(220, 38, 38, 0)" },
          "50%": { boxShadow: "0 0 28px rgba(220, 38, 38, .5)" },
        },
      },
    },
  },
  plugins: [],
};
