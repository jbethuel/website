import React from 'react'
import useDarkMode from 'use-dark-mode'
import { useRouter } from 'next/router'
import { moon, sun, WithIcon } from '@blog/icon'
import { dark, light } from 'utils/colors'

interface ToggleIcon {
  onClick: () => void
}

const Sun = (args: ToggleIcon) => (
  <WithIcon color={light.color} icon={sun} onClick={args.onClick} size={40} />
)
const Moon = (args: ToggleIcon) => (
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
        <a href="/tech" className="link">
          TECH
        </a>
        {divider}
        <a href="/contact" className="link">
          CONTACT
        </a>
        {divider}
        <a href="/blog" className="link">
          BLOG
        </a>
        {divider}
        <a href="/gear" className="link">
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
