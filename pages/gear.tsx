import React from 'react'
import Head from '@blog/head'
import Navbar from '@blog/navbar'

const Gear = () => {
  return (
    <div className="page">
      <Head />
      <Navbar />
      <main className="gear">
        <h3 className="title">Macbook Pro 2020 13"</h3>
        <div className="specs">
          <p>- Intel i5</p>
          <p>- Intel Iris 645</p>
          <p>- 8GB RAM</p>
          <p>- 256 SSD</p>
        </div>
      </main>
    </div>
  )
}

export default Gear
