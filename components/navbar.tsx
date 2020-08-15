import React, { useState } from 'react'

const Header = () => {
  const [isOpen, set] = useState(false)
  return (
    <header className='bg-gray-900 container mx-auto mt-4 lg:w-1/2 md:w-4/5 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3'>
      <div className='flex items-center justify-between px-4 py-3 sm:p-0'>
        <div>
          <a
            href='/'
            className='block px-2 py-1 text-white font-semibold text-2xl rounded hover:bg-white hover:text-gray-900'
          >
            JBethuel
          </a>
        </div>
        <div className='sm:hidden'>
          <button
            onClick={() => set(!isOpen)}
            type='button'
            className='block text-gray-500 hover:text-white focus:text-white focus:outline-none'
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              {isOpen && (
                <path
                  fillRule='evenodd'
                  d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                />
              )}
              {!isOpen && (
                <path
                  fillRule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`sm:block ${isOpen ? 'block' : 'hidden'}`}>
        <div className='px-2 pt-2 pb-4 sm:flex sm:p-0'>
          <a
            href='/gear'
            className='block px-2 py-1 text-white text-right font-semibold rounded hover:bg-white hover:text-gray-900'
          >
            GEAR
          </a>
          <a
            href='/tech'
            className='block px-2 py-1 text-white text-right font-semibold rounded hover:bg-white hover:text-gray-900'
          >
            TECH
          </a>
          <a
            href='/work'
            className='block px-2 py-1 text-white text-right font-semibold rounded hover:bg-white hover:text-gray-900'
          >
            WORK
          </a>
          <a
            href='/contact'
            className='block px-2 py-1 text-white text-right font-semibold rounded hover:bg-white hover:text-gray-900'
          >
            CONTACT
          </a>
          <a
            href='/blog'
            className='block px-2 py-1 text-white text-right font-semibold rounded hover:bg-white hover:text-gray-900'
          >
            BLOG
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
