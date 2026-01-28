export default {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{js,ts}", // only your source JS/TS
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0066CC",
        "primary-green": "#00A86B",
        "light-blue": "#E6F2FF",
        "light-green": "#E8F5F1",
      },
    },
  },
  plugins: [],
};
