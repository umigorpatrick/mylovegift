/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f6b3d8',
        secondary: '#f354a6',
        background: '#fff0f5',
      },
      fontFamily: {
        romantic: ['"Pacifico"', 'cursive'],
      },
      animation: {
        fall: 'fall 7s linear infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};