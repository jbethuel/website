import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { routes } from '../config/routes'

const navbarItems = [
  {
    path: routes.home,
    label: 'HOME',
  },
  {
    path: routes.cv,
    label: 'CV',
  },
  {
    path: routes.tech,
    label: 'TECH',
  },
  {
    path: routes.projects,
    label: 'PROJECTS',
  },
  {
    path: routes.contact,
    label: 'CONTACT',
  },
  {
    path: routes.gear,
    label: 'GEAR',
  },
]

export const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Fragment>
      <header>
        <div className="title">
          <h1>JBethuel</h1>
        </div>
        <div className="theme-switcher" onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}>
          {theme === 'light' ? (
            <Image alt="moon" src="https://svgur.com/i/eiJ.svg" height={40} width={40} />
          ) : (
            <Image alt="sun" src="https://svgur.com/i/ejt.svg" height={40} width={40} />
          )}
        </div>
      </header>
      <nav>
        {navbarItems.map((item, index) => (
          <Fragment key={index}>
            <Link href={item.path}>{item.label}</Link>
            <span>{navbarItems.length - 1 !== index && '•'}</span>
          </Fragment>
        ))}
      </nav>
    </Fragment>
  )
}
