import { Fragment } from 'react'
import Head from 'next/head'

import '../config/styles.css'

function HomePage({ Component }) {
  return (
    <Fragment>
      <Head>
        <title>JBethuel - Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="JBethuel - Software Engineer" key="title" />
      </Head>
      <div className="header-container">
        <div className="header-logo-container">
          <h1>
            <a className="header-logo" href="/">JBethuel</a>
          </h1>
        </div>
        <div className="header-menu-container">
          <a className="header-link" href="/">TECH</a>
          <a className="header-link" href="/blog">BLOG</a>
          <a className="header-link" href="/contact">CONTACT</a>
        </div>
      </div>
      <Component />
    </Fragment>
  )
}

export default HomePage