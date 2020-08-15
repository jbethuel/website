import React from 'react'

import Navbar from '../components/navbar'
import SEO from '../components/seo'
import Container from '../components/container'

const Contact = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <Container>
        <p className='text-white text-lg'>
          You can always reach me out @ jbethueldc@gmail.com
        </p>
        <p className='text-white text-lg'>Mobile +639958479106</p>
      </Container>
    </>
  )
}

export default Contact
