/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        linen: "#f8f6f1",
        blush: "#f7d7c4",
        mist: "#d7e5f4",
        ember: "#f05a28"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        glow: "0 24px 60px -36px rgba(15, 23, 42, 0.4)"
      }
    }
  },
  plugins: []
};
