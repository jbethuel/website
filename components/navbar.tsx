import { routes } from 'config/routes';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';

const attribute = 'theme';
const divider = <span className="divider">•</span>;

const navbarItems = [
  {
    path: routes.cv,
    label: 'CV'
  },
  {
    path: routes.tech,
    label: 'TECH'
  },
  {
    path: routes.projects,
    label: 'PROJECTS'
  },
  {
    path: routes.contact,
    label: 'CONTACT'
  },
  {
    path: routes.blog,
    label: 'BLOG'
  },
  {
    path: routes.gear,
    label: 'GEAR'
  }
];

type Theme = 'light' | 'dark';
interface NavbarProps {
  activeTab?: routes;
}

export const Navbar = (props: NavbarProps) => {
  const router = useRouter();
  const [theme, setTheme] = useState<Theme>('dark');

  // const toggle = () => {
  //   if (!typeof document) return;

  //   const defaultTheme = document.documentElement.getAttribute(attribute) ?? 'dark';
  //   const themeToBeSet = defaultTheme === 'dark' ? 'light' : 'dark';
  //   document.documentElement.setAttribute(attribute, themeToBeSet);
  //   setTheme(themeToBeSet);
  // };

  // const renderThemeSwitch = () => {
  //   if (!typeof document) return null;

  //   return (
  //     <div className="toggle" onClick={toggle}>
  //       {theme === 'dark' ? '☀️' : '🌙'}
  //     </div>
  //   );
  // };

  // useEffect(() => {
  //   if (!typeof document) return null;

  //   // const mql = window.matchMedia('(prefers-color-scheme: dark)');
  //   // console.log({ mql });
  //   const defaultTheme = (document.documentElement.getAttribute(attribute) as Theme) ?? 'dark';
  //   setTheme(defaultTheme);
  // }, [document]);

  return (
    <nav className="navbar">
      <div className="title" onClick={() => router.push('/')}>
        JBethuel
      </div>
      <div className="menu">
        {navbarItems.map((item, index) => (
          <Fragment key={index}>
            {index !== 0 && divider}
            <a
              className={`link ${props.activeTab === item.path && 'active'}`}
              href={item.path}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </a>
          </Fragment>
        ))}
      </div>
      {/* {renderThemeSwitch()} */}
    </nav>
  );
};
