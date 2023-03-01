import { Paper, Text } from "@mantine/core";
import { Fragment } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Content>
        <>
          <p>
            Bethuel is a software engineer with 6 years of experience in the
            industry, specializing in fullstack development. Throughout his
            career, he have worked on a variety of projects, ranging from small
            startups to large enterprise-level applications.
          </p>
          <p>
            With extensive experience in ReactJS, I have developed and deployed
            performant frontend applications. I have a deep understanding of its
            ecosystem and can work with different state management libraries, UI
            libraries, UI playground, testing framework(TDD), build tools such
            as Webpack, Vite, NextJS and finally deployed them into different
            cloud platforms.
          </p>
          <p>
            I have written backend systems, using NodeJS, mainly on serverless
            infrastructure, leveraging the power of cloud computing to create
            flexible and cost-effective solutions. I&apos;ve worked with AWS
            Lambda, API Gateway, Google Firebase and other cloud services to
            create highly scalable systems that can adapt to changing business
            needs.
          </p>
          <p>
            Additionally, I configured CI/CD of these systems. Setting up
            pipelines that automatically checks code lints, run tests and code
            coverage threshold. This also involves deploying frontend and
            backend code into their cloud platforms. Also setting up a monorepo
            codebase where the frontend and backend lives in the same repository
            and shares the same utilies and types using Yarn workspace,
            Turborepo.
          </p>
        </>
      </Content>
    </Fragment>
  );
}
