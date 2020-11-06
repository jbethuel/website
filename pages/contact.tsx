import React from 'react'
import Head from '@blog/head'
import Navbar from '@blog/navbar'

const Contact = () => {
  return (
    <div className="page">
      <Head />
      <Navbar />
      <main className="contact">
        <p>You can always reach me out at</p>
        <div className="details">
          <p>email: jbethueldc@gmail.com</p>
          <p>mobile: +639958479106</p>
        </div>
      </main>
    </div>
  )
}

export default Contact
