import '../styles/index.scss';
import { seoConfig } from 'config/seo';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import React, { Fragment } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <DefaultSeo {...seoConfig} />
    <Component {...pageProps} />
  </Fragment>
);

export default MyApp;
