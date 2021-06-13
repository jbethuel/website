import { DefaultSeoProps } from 'next-seo';

export const seoConfig: DefaultSeoProps = {
  defaultTitle: 'JBethuel - Software Engineer',
  description: 'JBethuel - Software Engineer',
  additionalMetaTags: [
    {
      property: 'keywords',
      content: 'bethuel, dela cruz, jbethuel, software, engineer, fullstack, philippines'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jbethuel.com/',
    title: 'JBethuel - Software Engineer',
    description: 'JBethuel - Software Engineer',
    site_name: 'jbethuel.so'
  }
};
