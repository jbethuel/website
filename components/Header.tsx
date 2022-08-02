import Image from "next/image";
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

export const Header = () => {
  const { pathname } = useRouter();
  return (
    <Fragment>
      <header>
        <div className="title">
          <h1>JBethuel</h1>
        </div>
        <div className="theme-switcher" style={{ cursor: "not-allowed" }}>
          <Image
            alt="sun"
            src="https://jbethuel-bucket.s3.ap-southeast-1.amazonaws.com/sun.svg"
            height={40}
            width={40}
          />
        </div>
      </header>
      <nav>
        {navbarItems.map((item, index) => (
          <Fragment key={index}>
            <Link
              href={item.path}
              className="active"
              // className={pathname === item.path ? "active" : ""}
            >
              {item.label}
              {/* {item.path === pathname && "TRUE"} */}
            </Link>
            <span>{navbarItems.length - 1 !== index && "•"}</span>
          </Fragment>
        ))}
      </nav>
    </Fragment>
  );
};
