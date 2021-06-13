import { Navbar } from '@blog/components';
import { routes } from 'config';
import React, { Fragment } from 'react';

const Contact = () => {
  return (
    <Fragment>
      <Navbar activeTab={routes.contact} />
      <main className="contact">
        <p>You can always reach me out at</p>
        <div className="details">
          <p>email: jbethueldc@gmail.com</p>
          <p>github: github.com/jbethuel</p>
        </div>
      </main>
    </Fragment>
  );
};

export default Contact;
