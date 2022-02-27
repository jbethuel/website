import React, { Fragment } from 'react'
import Link from 'next/link'
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
  return (
    <Fragment>
      <header>
        <div className="title">
          <h1>JBethuel</h1>
        </div>
        {/* <div className="theme-switcher" onClick={() => {}}>
          {darkMode.value ? (
            <Image alt="sun" src="/icons/sun.svg" height={40} width={40} />
          ) : (
            <Image alt="moon" src="/icons/moon.svg" height={40} width={40} />
          )}
        </div> */}
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
