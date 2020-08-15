import React from 'react'

import Navbar from '../components/navbar'
import SEO from '../components/seo'
import Container from '../components/container'

const Tech = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <div className='container mx-auto mt-4 lg:w-1/2 md:w-4/5'>
        <div className='flex flex-wrap px-6'>
          <div className='w-1/2 mb-4 text-white'>
            <h1 className='text-bold text-xl font-semibold'>Language</h1>
            <ul>
              <li>• Javascript</li>
              <li>• Typescript</li>
            </ul>
          </div>
          <div className='w-1/2 mb-4 text-white'>
            <h1 className='text-bold text-xl font-semibold'>Front End</h1>
            <ul>
              <li>• React</li>
              <li>• React Native</li>
              <li>• Next</li>
            </ul>
          </div>
          <div className='w-1/2 mb-4 text-white'>
            <h1 className='text-bold text-xl font-semibold'>Node Backend</h1>
            <ul>
              <li>• Express</li>
              <li>• Hapi</li>
              <li>• GraphQL</li>
            </ul>
          </div>
          <div className='w-1/2 mb-4 text-white'>
            <h1 className='text-bold text-xl font-semibold'>
              Server / Database
            </h1>
            <ul>
              <li>• AWS (Elastic Beanstalk)</li>
              <li>• Digital Ocean</li>
              <li>• MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tech
