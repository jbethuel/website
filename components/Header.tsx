import React, { Fragment } from 'react'
import Image from 'next/image'
import useDarkMode from 'use-dark-mode'
import { routes } from '../config/routes'

const navbarItems = [
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
    path: routes.blog,
    label: 'BLOG',
  },
  {
    path: routes.gear,
    label: 'GEAR',
  },
]

export const Header = () => {
  const darkMode = useDarkMode(true)
  return (
    <Fragment>
      <header>
        <div className="title">
          <h1>JBethuel</h1>
        </div>
        <div className="theme-switcher" onClick={() => darkMode.toggle()}>
          {darkMode.value ? (
            <Image src="/icons/sun.svg" height={40} width={40} />
          ) : (
            <Image src="/icons/moon.svg" height={40} width={40} />
          )}
        </div>
      </header>
      <nav>
        {navbarItems.map((item, index) => (
          <Fragment>
            {item.label}
            <span>{navbarItems.length - 1 !== index && '•'}</span>
          </Fragment>
        ))}
      </nav>
    </Fragment>
  )
}
