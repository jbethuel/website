import React from 'react'
import Head from '@blog/head'
import Navbar from '@blog/navbar'

const Home = () => {
  return (
    <div className="page">
      <Head />
      <Navbar />
      <main className="home">
        <p>
          <b>Hi, I'm Joseph Bethuel</b> <br />
          A software engineer based at Cagayan de Oro City, Philippines.
          <br />
          <br />
        </p>
        <p>
          I have been a software engineer for more than three (3) years. My
          first job was with a startup company which was founded locally and it
          is currently operating in several cities here in the Philippines. I
          have been designated as a mobile software engineer using React Native
          therein. Even though I am working on a mobile app, I have also worked
          on numerous backend features.
          <br />
          <br />
        </p>
        <p>
          Coding is more than just a job, it is one thing I am passionate about.
          It excites me and it challenges me at the same time. I do my best to
          gradually learn and discover new things about my craft.
        </p>
      </main>
    </div>
  )
}

export default Home
