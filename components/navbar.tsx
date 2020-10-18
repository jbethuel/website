import useDarkMode from 'use-dark-mode'
import { Moon, Sun } from '@blog/icon'

const divider = <span className="divider">•</span>

const Navbar = () => {
  const theme = useDarkMode(true)
  const isDarkMode = theme.value
  return (
    <nav className="navbar">
      <div className="title">JBethuel</div>
      <div className="menu">
        <a href="/about" className="link">
          ABOUT
        </a>
        {divider}
        <a href="/work" className="link">
          WORK
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
          {isDarkMode ? Moon : Sun}
        </div>
      )}
    </nav>
  )
}

export default Navbar
