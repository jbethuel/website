import React from 'react'

import Navbar from '../components/navbar'
import SEO from '../components/seo'
import Container from '../components/container'

const Home = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <Container>
        <p className='text-white px-6'>
          Hello! I'm Joseph Bethuel Dela Cruz, <br />
          Software engineer based at Cagayan de Oro City, Philippines.
        </p>
        <p className='text-white px-6 mt-4'>
          I have been a software engineer for more than 3 years in a startup
          company which was founded locally and the said company is currently
          operating in 6 cities here in the Philippines. It is my first job and
          I am designated as a mobile software engineer using React Native. Even
          though I am working on a mobile app, I have also worked on its backend
          features.
        </p>
      </Container>
    </>
  )
}

export default Home
