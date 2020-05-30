module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './client/**/*.tsx',
      './pages/**/*.tsx'
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}