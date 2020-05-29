import tailwindcss from 'tailwindcss'
import autofixer from 'autoprefixer'
import purge from '@fullhuman/postcss-purgecss'

module.exports = {
  // plugins: ['tailwindcss', 'postcss-preset-env'],
  plugins: [
    tailwindcss,
    autofixer,
    purge({
      content: [
        './components/**/*.tsx',
        './pages/**/*.tsx'
      ],
      defaultExtractor: content => content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
    })
  ]
}