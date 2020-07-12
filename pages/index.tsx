import React, { ReactNode } from 'react'

const Home = (): ReactNode => {
  return (
    <div className='container mx-auto mt-4 lg:w-1/2 md:w-4/5'>
      <p className='text-white px-6'>
        Hello! I'm Joseph Bethuel Dela Cruz <br />
        Software engineer based at Cagayan de Oro City, Philippines.
      </p>
      <p className='text-white px-6 mt-4'>
        I have been software engineer for about 3+ years in a startup company
        which was founded and operating locally. This is my first job and
        designated as a mobile software engineer using React Native. Even though
        I am working on mobile app, I also worked on backend stuffs for the
        features that we implemented.
      </p>
    </div>
  )
}

export default Home
