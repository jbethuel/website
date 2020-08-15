import React from 'react'

import Navbar from '../components/navbar'
import Container from '../components/container'
import SEO from '../components/seo'

const Work = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <Container>
        <div className='px-6 mt-5'>
          <div className='w-full mb-4 text-white'>
            <h1 className='text-bold text-xl font-semibold'>Works</h1>
            <ul>
              <li className='mt-2 mb-2'>
                • APR 2017 - JUL 2020 <br />
                <a
                  className='underline'
                  target='_blank'
                  rel='noreferrer'
                  href='https://streetby.com'
                >
                  StreetBy (fullstack dev)
                </a>
              </li>
              <li className='mt-2 mb-2'>
                • DEC 2020 - FEB 2020
                <br />
                <a
                  className='underline'
                  target='_blank'
                  rel='noreferrer'
                  href='https://streetby.com'
                >
                  StreetBy Tours (development lead, halted due to pandemic)
                </a>
              </li>
              <li className='mt-2 mb-2'>
                • JUL 2020 - PRESENT
                <br />
                <a
                  className='underline'
                  target='_blank'
                  rel='noreferrer'
                  href='http://restoplus.co/'
                >
                  Restoplus (fullstack dev)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Work
