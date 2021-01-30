import React from 'react'
import useDarkMode from 'use-dark-mode'
import { useRouter } from 'next/router'
import { moon, sun, WithIcon } from '@blog/icon'
import { dark, light } from 'utils/colors'

const Sun = (args: { onClick: () => void }) => (
  <WithIcon color={light.color} icon={sun} onClick={args.onClick} size={40} />
)
const Moon = (args: { onClick: () => void }) => (
  <WithIcon color={dark.color} icon={moon} onClick={args.onClick} size={40} />
)
const divider = <span className="divider">•</span>

const Navbar = () => {
  const router = useRouter()
  const theme = useDarkMode(true)
  const isDarkMode = theme.value
  const toggle = () => theme.toggle
  return (
    <nav className="navbar">
      <div className="title" onClick={() => router.push('/')}>
        JBethuel
      </div>
      <div className="menu">
        <a className="link" onClick={() => router.push('/tech')}>
          TECH
        </a>
        {divider}
        <a className="link" onClick={() => router.push('/contact')}>
          CONTACT
        </a>
        {divider}
        <a className="link" onClick={() => router.push('/blog')}>
          BLOG
        </a>
        {divider}
        <a className="link" onClick={() => router.push('/gear')}>
          GEAR
        </a>
      </div>
      {typeof window !== 'undefined' && (
        <div className="toggle" onClick={() => theme.toggle()}>
          {isDarkMode ? <Moon onClick={toggle} /> : <Sun onClick={toggle} />}
        </div>
      )}
    </nav>
  )
}

export default Navbar
