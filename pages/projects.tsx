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
    title: "Ulam PH",
    details:
      "Ulam in Filipino dialect means (viand). The app provides a curated list of Filipino viands that you can make or cook at your home. (Open sourcing it soon)",
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
