import { Navbar } from '@blog/components';
import { routes } from 'config';
import React, { Fragment } from 'react';

const Gear = () => {
  return (
    <Fragment>
      <Navbar activeTab={routes.gear} />
      <main className="gears">
        <section className="gear">
          <h3 className="title">Macbook Pro 2020 13"</h3>
          <div className="specs">
            <p>- Intel i5</p>
            <p>- Intel Iris 645</p>
            <p>- 8GB RAM</p>
            <p>- 256 SSD</p>
          </div>
        </section>
        <section className="gear">
          <h3 className="title">Peripherals</h3>
          <div className="specs">
            <p>- Viewsonic VA2418 (24" 75hz)</p>
            <p>- Keychron K2 (Gateron Brown)</p>
            <p>- Logitech M720</p>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Gear;
