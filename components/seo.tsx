import React, { ReactNode } from 'react'
import NextHead from 'next/head'

type HeadProps = {
  title?: string
  description?: string
  children?: ReactNode
}

const Head = ({
  title = 'JBethuel - Software Engineer',
  description = 'JBethuel - Work, Blog, Tech.',
  children
}: HeadProps) => {
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name='og:title' content={title} />

      {/* Description */}
      <meta name='description' content={description} />
      <meta name='og:description' content={description} />

      {/* General */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Language' content='en' />

      <meta name='twitter:site' content='@_jbethuel' />
      <meta name='apple-mobile-web-app-title' content='jbethuel.com' />
      <meta name='author' content='JBethuel' />

      {/* TODO: Favicons */}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='theme-color' content='#ffffff' />

      {children}
    </NextHead>
  )
}

export default Head
