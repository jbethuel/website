import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import React from 'react'
import { seoConfig } from '../config/seo'
import '../styles/index.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark">
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
