import React, { Fragment } from 'react'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="contact">
        Reach me out at: <br />
        jbethueldc@gmail.com
      </main>
    </Fragment>
  )
}
