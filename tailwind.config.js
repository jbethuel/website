module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.tsx',
      './pages/**/*.tsx'
    ],
    defaultExtractor: content => content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
