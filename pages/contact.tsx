import React from 'react'
import { Header, Navbar } from '@blog/components'

const Contact = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <main className="contact">
        <p>You can always reach me out at</p>
        <div className="details">
          <p>email: jbethueldc@gmail.com</p>
        </div>
      </main>
    </div>
  )
}

export default Contact
