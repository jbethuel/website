import { Navbar } from '@blog/components';
import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="home">
        <p>
          Hi! I'm <b>Joseph Bethuel</b>, Philippine-based software engineer and currently working from home.
        </p>
        <p>
          I have been in the industry for almost 5 years, and a degree in Bachelor of Science in Information Technology.
          I have been exposed in the technology for as long as I can remember. Playing computer games for ungodly hours
          and reaped its consequences. But hey, I've made it as a career in the way.
        </p>
        <p>
          I'm currently working as a frontend developer for a startup overseas. I also know full stack development and
          always working on something that may improve my skills and maybe even monetize it. 😅 You can find my previous
          works on my{' '}
          <b>
            <a href="https://jbethuel.com/cv">CV page</a>
          </b>{' '}
          and projects in{' '}
          <b>
            <a href="https://github.com/jbethuel">github.</a>
          </b>
        </p>
      </main>
    </Fragment>
  );
};

export default Home;
