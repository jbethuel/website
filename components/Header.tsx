import { Box } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { routes } from "../config/routes";

const navbarItems = [
  {
    path: routes.home,
    label: "HOME",
  },
  {
    path: routes.cv,
    label: "CV",
  },
  {
    path: routes.tech,
    label: "TECH",
  },
  {
    path: routes.projects,
    label: "PROJECTS",
  },
  {
    path: routes.contact,
    label: "CONTACT",
  },
  {
    path: routes.gear,
    label: "GEAR",
  },
];

export function Header() {
  const { pathname } = useRouter();
  return (
    <Fragment>
      <Box
        component="header"
        sx={{
          margin: "20px 20px 0px 20px",
          display: "grid",
          gridTemplateColumns: "0.9fr 0.1fr",
          alignItems: "center",
        }}
      >
        <h1>JBethuel</h1>
      </Box>
      <Box
        component="nav"
        sx={{
          margin: "0px 20px 10px 20px",
          display: "flex",
          flexWrap: "wrap",

          a: {
            fontSize: "18px",
            fontWeight: "bold",
          },
        }}
      >
        {navbarItems.map((item, index) => (
          <Fragment key={index}>
            <Link href={item.path}>{item.label}</Link>
            <Box component="span" sx={{ margin: "0px 10px" }}>
              {navbarItems.length - 1 !== index && "•"}
            </Box>
          </Fragment>
        ))}
      </Box>
    </Fragment>
  );
}
