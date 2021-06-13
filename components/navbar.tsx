import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const attribute = 'theme';
const divider = <span className="divider">•</span>;

const navbarItems: { path: string; label: string }[] = [
  {
    path: '/tech',
    label: 'TECH'
  },
  {
    path: '/projects',
    label: 'PROJECTS'
  },
  {
    path: '/contact',
    label: 'CONTACT'
  },
  {
    path: '/blog',
    label: 'BLOG'
  },
  {
    path: '/gear',
    label: 'GEAR'
  }
];

type Theme = 'light' | 'dark';

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [theme, setTheme] = useState<Theme>('dark');

  const toggle = () => {
    const defaultTheme = document.documentElement.getAttribute(attribute) ?? 'dark';
    const themeToBeSet = defaultTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute(attribute, themeToBeSet);
    setTheme(themeToBeSet);
  };

  const renderThemeSwitch = () => {
    if (!typeof document) return null;

    return (
      <div className="toggle" onClick={toggle}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </div>
    );
  };

  useEffect(() => {
    if (!typeof document) return null;

    const defaultTheme = (document.documentElement.getAttribute(attribute) as Theme) ?? 'dark';
    setTheme(defaultTheme);
  }, [typeof document]);

  return (
    <nav className="navbar">
      <div className="title" onClick={() => router.push('/')}>
        JBethuel
      </div>
      <div className="menu">
        {navbarItems.map((item, index) => (
          <Fragment key={index}>
            {index !== 0 && divider}
            <a className="link" href={item.path} onClick={() => router.push(item.path)}>
              {item.label}
            </a>
          </Fragment>
        ))}
      </div>
      {renderThemeSwitch()}
    </nav>
  );
};
