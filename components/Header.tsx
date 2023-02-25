import { Box } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useContext } from "react";
import { routes } from "../config/routes";
import { ThemeContext } from "./ThemeProvider";

interface NavbarItem {
  path: string;
  label: string;
  isExternal: boolean;
}

const navbarItems: NavbarItem[] = [
  {
    path: routes.home,
    label: "HOME",
    isExternal: false,
  },
  {
    path: routes.cv,
    label: "CV",
    isExternal: true,
  },
  {
    path: routes.projects,
    label: "PROJECTS",
    isExternal: false,
  },
  {
    path: routes.contact,
    label: "CONTACT",
    isExternal: false,
  },
  {
    path: routes.gear,
    label: "GEAR",
    isExternal: false,
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
        <Image
          alt={isDarkTheme ? "moon" : "sun"}
          src={
            isDarkTheme
              ? "https://assets.jbethuel.com/sun.svg"
              : "https://assets.jbethuel.com/moon.svg"
          }
          style={{ cursor: "pointer" }}
          height={40}
          width={40}
          onClick={toggleThemeHandler}
        />
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
            <Link
              href={item.path}
              {...(item.isExternal && {
                ...{ target: "_blank", rel: "noreferrer" },
              })}
            >
              {item.label}
            </Link>
            <Box component="span" sx={{ margin: "0px 10px" }}>
              {navbarItems.length - 1 !== index && "•"}
            </Box>
          </Fragment>
        ))}
      </Box>
    </Fragment>
  );
}
