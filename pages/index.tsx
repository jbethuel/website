import React, { ReactNode } from 'react'

import Navbar from '../components/navbar'
import SEO from '../components/seo'

const Home = (): ReactNode => {
  return (
    <>
      <SEO />
      <Navbar />
      <div className='container mx-auto mt-4 lg:w-1/2 md:w-4/5'>
        <p className='text-white px-6'>
          Hello! I'm Joseph Bethuel Dela Cruz, <br />a software engineer based
          at Cagayan de Oro City, Philippines. Software engineer based at
          Cagayan de Oro City, Philippines.
        </p>
        <p className='text-white px-6 mt-4'>
          I have been a software engineer for more than 3 years in a startup
          company which was founded locally and the said company is currently
          operating in 6 cities here in the Philippines. It is my first job and
          I am designated as a mobile software engineer using React Native.
          Eventhough I am working on a mobile app, I have also worked on its
          backend features.
        </p>
      </div>
    </>
  )
}

export default Home
