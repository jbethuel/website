import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <div className='container mx-auto mt-4 lg:w-1/2 md:w-4/5 px-6 text-white'>
      {props.children}
    </div>
  )
}

export default Container
