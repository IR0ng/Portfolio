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
        black: {
          DEFAULT: '#585858',
          100: '#363636',
          200: '#1E1E1E',
        },
        gray: {
          DEFAULT: '#D9D9D9',
          100: '#777777',
        },
      },
    },
  },
  plugins: [],
}
