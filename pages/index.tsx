import React, { Fragment } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Content>
        <>
          <p>
            Hi! I&apos;m Joseph Bethuel, a Philippine-based software engineer
            and currently working from home.
          </p>
          <p>
            I have been in the industry for almost 5 years, and a degree in
            Bachelor of Science in Information Technology. I have been exposed
            in the technology for as long as I can remember, playing computer
            games for ungodly hours and got interested in making one.
          </p>
          <p>
            I&apos;m currently working as a frontend developer for a startup
            overseas. I also know full stack development and always working on
            something that can improve my skills . You can find my previous
            works on my page.
          </p>
        </>
      </Content>
    </Fragment>
  );
}
