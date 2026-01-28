/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0066CC',
        'primary-green': '#00A86B',
        'light-blue': '#E6F2FF',
        'light-green': '#E8F5F1',
      },
    },
  },
  plugins: [],
}
