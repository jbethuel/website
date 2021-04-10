import React, { Fragment } from 'react';
import useDarkMode from 'use-dark-mode';
import { useRouter } from 'next/router';
import { moon, sun, WithIcon } from '@blog/components';
import { dark, light } from 'utils/colors';

const Sun = (args: { onClick: () => void }) => (
  <WithIcon color={light.color} icon={sun} onClick={args.onClick} size={40} />
);
const Moon = (args: { onClick: () => void }) => (
  <WithIcon color={dark.color} icon={moon} onClick={args.onClick} size={40} />
);

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

export const Navbar: React.FC = () => {
  const router = useRouter();
  const theme = useDarkMode(true);
  const isDarkMode = theme.value;
  const toggle = () => theme.toggle;
  return (
    <nav className="navbar">
      <div className="title" onClick={() => router.push('/')}>
        JBethuel
      </div>
      <div className="menu">
        {navbarItems.map((item, index) => (
          <Fragment key={index}>
            {index !== 0 && divider}
            <a className="link" onClick={() => router.push(item.path)}>
              {item.label}
            </a>
          </Fragment>
        ))}
      </div>
      {typeof window !== 'undefined' && (
        <div className="toggle" onClick={() => theme.toggle()}>
          {isDarkMode ? <Moon onClick={toggle} /> : <Sun onClick={toggle} />}
        </div>
      )}
    </nav>
  );
};
