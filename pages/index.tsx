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
          Hello! I'm Joseph Bethuel Dela Cruz, <br />a software engineer based
          at Cagayan de Oro City, Philippines.
        </p>
        <p className='text-white px-6 mt-4'>
          I have been a software engineer for more than three (3) years. My
          first job was with a startup company which was founded locally and it
          is currently operating in several cities here in the Philippines. I
          have been designated as a mobile software engineer using React Native
          therein. Even though I am working on a mobile app, I have also worked
          on numerous backend features.
        </p>
        <p className='text-white px-6 mt-4'>
          Coding is more than just a job, it is one thing I am passionate about.
          It excites me and it challenges me at the same time. I do my best to
          gradually learn and discover new things about my craft.
        </p>
      </Container>
    </>
  )
}

export default Home
