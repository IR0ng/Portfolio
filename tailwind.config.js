/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#D9D9D9',
          100: '#777777',
          200: '#585858',
          300: '#363636',
          400: '#1E1E1E',
        },
      },
    },
  },
  plugins: [],
}
