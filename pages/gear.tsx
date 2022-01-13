import React, { Fragment } from 'react'
import { Header } from '../components/Header'

export default function Gear() {
  return (
    <Fragment>
      <Header />
      <main className="gears">
        <section className="gear">
          <h3 className="title">Workstation </h3>
          <div className="specs">
            <p>- Macbook Pro 2020 13&quot; (256GB, 8GB)</p>
          </div>
        </section>
        <section className="gear">
          <h3 className="title">Peripherals</h3>
          <div className="specs">
            <p>- Gigabyte G27Q (1440p, 144hz)</p>
            <p>- Keychron K2 (Brown Switch)</p>
            <p>- Logitech M720</p>
            <p>- Beats Studio Buds</p>
            <p>- KZ EDX IEM</p>
          </div>
        </section>
        <section className="gear">
          <h3 className="title">Gaming</h3>
          <div className="specs">
            <p>- Xbox Series X</p>
            <p>- Xbox Controller Carbon Black</p>
            <p>- PXN V9</p>
          </div>
        </section>
      </main>
    </Fragment>
  )
}
