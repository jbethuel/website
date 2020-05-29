import { Fragment } from 'react'
import Head from 'next/head'

import Navbar from '../client/components/navbar'
import '../client/tailwind.css'

function HomePage({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>JBethuel - Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="JBethuel - Software Engineer" key="title" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default HomePage