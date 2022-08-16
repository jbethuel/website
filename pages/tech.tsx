import { Box, List } from "@mantine/core";
import { Fragment } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

interface Technology {
  title: string;
  details: string[];
}

const items: Technology[] = [
  {
    title: "Language",
    details: ["Typescript (main)", "Javascript", "Go (currently studying)"],
  },
  {
    title: "Frontend",
    details: [
      "React (CRA, Vite, Next)",
      "React Native",
      "Zustand, Redux, Redux Toolkit",
      "React Query",
      "Sass, Styled Components, Emotion",
      "MUI, Antd, Mantine",
      "Jest, React Testing Library, Sinon, Playwright, Cypress, Puppeteer",
    ],
  },
  {
    title: "Backend",
    details: [
      "Node (Express, Hapi, Fastify)",
      "MongoDB, Firebase, Supabase, FireCMS",
      "GraphQL, Swagger",
    ],
  },
  {
    title: "Cloud",
    details: [
      "Amazon Web Services (Route 53, S3, Cloudfront, ECS, ECR, SNS, SES)",
      "Google Cloud Platform (Firebase, Cloud Run, Container Registry)",
      "Vercel",
      "Netlify",
      "Cloudflare",
      "Microsoft Azure",
      "Digital Ocean",
    ],
  },
  {
    title: "Others",
    details: [
      "Monorepo (Yarn or Lerna)",
      "Github Actions, Google Cloud Build",
      "Docker",
      "Fastlane",
      "Notion, Jira",
    ],
  },
];

export default function Tech() {
  return (
    <Fragment>
      <Header />
      <Content>
        <List>
          {items.map((item, index) => (
            <Box key={index} sx={{ marginBottom: 10 }}>
              <List.Item>{item.title}</List.Item>

              <List withPadding>
                {item.details.map((detail, index) => (
                  <List.Item key={index}>{detail}</List.Item>
                ))}
              </List>
            </Box>
          ))}
        </List>
      </Content>
    </Fragment>
  );
}
