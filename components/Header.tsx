import { Box } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useContext } from "react";
import { routes } from "../config/routes";
import { ThemeContext } from "./ThemeProvider";

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
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
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
        {isDarkTheme ? (
          <Image
            alt="sun"
            src="https://jbethuel-bucket.s3.ap-southeast-1.amazonaws.com/sun.svg"
            height={40}
            width={40}
            onClick={toggleThemeHandler}
          />
        ) : (
          <Image
            alt="sun"
            src="https://jbethuel-bucket.s3.ap-southeast-1.amazonaws.com/moon.svg"
            height={40}
            width={40}
            onClick={toggleThemeHandler}
          />
        )}
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
