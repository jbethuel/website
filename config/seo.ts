import type { DefaultSeoProps } from 'next-seo'

export const seoConfig: DefaultSeoProps = {
  title: 'JBethuel - Software Engineer',
  description: 'JBethuel - Software Engineer',
  additionalMetaTags: [
    {
      property: 'keywords',
      content: 'joseph bethuel, dela cruz, jbethuel, software, engineer, fullstack, philippines',
    },
  ],
  twitter: {
    handle: 'https://twitter.com/_jbethuel',
    site: '@site',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jbethuel.com/',
    title: 'JBethuel - Software Engineer',
    description: 'JBethuel - Software Engineer',
    site_name: 'jbethuel.com',
  },
}
