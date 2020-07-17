import React, { ReactNode } from 'react'

import SEO from '../components/seo'

const Contact = (): ReactNode => {
  return (
    <>
      <SEO />
      <div className='container mx-auto mt-4 lg:w-1/2 md:w-4/5 px-6'>
        <p className='text-white text-lg'>
          You can always reach me out @ jbethueldc@gmail.com
        </p>
        <p className='text-white text-lg'>Mobile +639958479106</p>
      </div>
    </>
  )
}

export default Contact
