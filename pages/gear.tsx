import React from 'react'

import Navbar from '../components/navbar'
import SEO from '../components/seo'
import Container from '../components/container'

const Gear = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <Container>
        <p className='text-white px-6'>
          • Macbook Pro 13" 2020 i5-8th Gen 8GB 256 SSD <br />
          <a
            className='underline'
            target='_blank'
            rel='noreferrer'
            href='https://www.apple.com/ph/shop/buy-mac/macbook-pro/13-inch'
          >
            https://www.apple.com/ph/shop/buy-mac/macbook-pro/13-inch
          </a>
        </p>
        <p className='text-white px-6 mt-2'>
          • Logitech M720 <br />
          <a
            className='underline'
            target='_blank'
            rel='noreferrer'
            href='https://www.logitech.com/en-ph/product/m720-triathlon.910-004792.html'
          >
            https://www.logitech.com/en-ph/product/m720-triathlon.910-004792
          </a>
        </p>
        <p className='text-white px-6 mt-2'>
          • Logitech K380 <br />
          <a
            className='underline'
            target='_blank'
            rel='noreferrer'
            href='https://www.logitech.com/en-ph/product/multi-device-keyboard-k380?crid=1762'
          >
            https://www.logitech.com/en-ph/product/multi-device-keyboard-k380
          </a>
        </p>
      </Container>
    </>
  )
}

export default Gear
