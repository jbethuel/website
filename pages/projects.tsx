import { Box } from "@mantine/core";
import { Fragment } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

export default function Projects() {
  return (
    <Fragment>
      <Header />
      <Content>
        <Box>
          <h2>Ulam PH</h2>
          <p>
            Ulam in Filipino dialect means (viand). The app provides a curated
            list of Filipino viands that you can make or cook at your home.
          </p>
          <Box>
            <h4>Tech Stack:</h4>
            <Box>Language: Typescript</Box>
            <Box>
              Front End: React (CRA, Next), React Native, React Query, Zustand,
              Antd, Sass
            </Box>
            <Box>Back End/Services: Auth0, Fastify(Node), MongoDB, Swagger</Box>
            <Box>
              DevOps: Github Actions, AWS(Route 53, ACM, S3, Cloudfront, API
              Gateway, ECR, Lambda)
            </Box>
          </Box>
          <Box>
            <h4>Links:</h4>
            <Box>
              Github:{" "}
              <a
                href="https://github.com/jbethuel/ulam-ph"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/jbethuel/ulam-ph
              </a>
            </Box>
            <Box>
              Website:{" "}
              <a href="https://ulam.ph" target="_blank" rel="noreferrer">
                https://ulam.ph
              </a>
            </Box>
            <Box>
              Dashboard:{" "}
              <a
                href="https://dashboard.ulam.ph"
                target="_blank"
                rel="noreferrer"
              >
                https://dashboard.ulam.ph
              </a>
            </Box>
          </Box>
        </Box>
      </Content>
    </Fragment>
  );
}
