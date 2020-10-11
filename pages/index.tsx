import React from 'react'
import Head from '@blog/head'
import useDarkMode from 'use-dark-mode'

const Home = () => {
  const darkMode = useDarkMode(false)
  return (
    <div className="page responsive-sample">
      <Head />
      <button onClick={() => darkMode.toggle()}>hello</button>
    </div>
  )
}

export default Home
