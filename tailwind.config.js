// tailwind.config.js
module.exports = {
  content: [
    './app.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './components/**/*.vue',
    './plugins/**/*.js',
  ],
  theme: {
    screens: {
      // наш новый "max" брейкпоинт — до 480px
      'max-sm': { 'max': '480px' },

      // стандартные (если нужны)
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}