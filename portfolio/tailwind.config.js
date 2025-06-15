/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project structure
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}