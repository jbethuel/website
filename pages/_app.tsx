import React from 'react'
import App from 'next/app'

import '../client/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp

// const HomePage = ({ Component, pageProps }): ReactNode => {
//   return (
//     <Fragment>
//       <Head>
//         <title>JBethuel - Software Engineer</title>
//         <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//         <meta
//           property='og:title'
//           content='JBethuel - Software Engineer'
//           key='title'
//         />
//       </Head>
//       <Navbar />
//       <Component {...pageProps} />
//     </Fragment>
//   )
// }

// export default HomePage
