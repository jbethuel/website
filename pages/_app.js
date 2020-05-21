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
          <h2>JBethuel</h2>
        </div>
        <div className="header-menu-container">
          <span>
            <a href="/">ABOUT</a>
          </span>
          <span>
            <a href="/blog">BLOG</a>
          </span>
          <span>
            <a href="/contact">CONTACT</a>
          </span>
        </div>
      </div>
      <Component />
    </Fragment>
  )
}

export default HomePage