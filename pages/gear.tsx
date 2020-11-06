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
          <p>- i5 8th Gen</p>
          <p>- Iris 645</p>
          <p>- 8GB RAM DDR3</p>
          <p>- 256 SSD</p>
        </div>

        <h3 className="title">Custom PC</h3>
        <div className="specs">
          <p>- Ryzen 5 2600</p>
          <p>- Asus TUF GTX 1660 Super</p>
          <p>- Corsair Vengeance LPX 16GB 3200hz</p>
          <p>- Kingston A2000 NVMe 256GB SSD</p>
        </div>
      </main>
    </div>
  )
}

export default Gear
