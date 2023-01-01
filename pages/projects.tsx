import { Box, List } from "@mantine/core";
import { Fragment } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

interface Link {
  label: string;
  url: string;
}

interface Project {
  title: string;
  details: string;
  links?: Link[];
}

const projects: Project[] = [
  {
    title: "jbethuel.com",
    details: "Simple website built with Nextjs",
    links: [
      {
        label: "url",
        url: "https://jbethuel.com",
      },
      {
        label: "code",
        url: "https://github.com/jbethuel/website",
      },
    ],
  },
  {
    title: "Typescript Monorepo Project",
    details: "Sample architecture of Typescript projects across your company.",
    links: [
      {
        label: "code",
        url: "https://github.com/jbethuel/monorepo",
      },
    ],
  },
];

export default function Projects() {
  return (
    <Fragment>
      <Header />
      <Content>
        <List>
          {projects.map((item, index) => (
            <Box key={index} sx={{ marginBottom: 10 }}>
              <List.Item>
                {item.title} - {item.details}
              </List.Item>

              <List withPadding>
                {item.links?.map((each, index) => (
                  <List.Item key={index}>
                    {each.label} -{" "}
                    <a href={each.url} target="__blank">
                      {each.url}
                    </a>
                  </List.Item>
                ))}
              </List>
            </Box>
          ))}
        </List>
      </Content>
    </Fragment>
  );
}
