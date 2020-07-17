module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.tsx',
      './pages/**/*.tsx'
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}