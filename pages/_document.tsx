import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import Navbar from '../client/components/navbar'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
