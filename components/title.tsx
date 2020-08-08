import React from 'react'

interface TitleProps {
  text: string
}

const Title = (args: TitleProps) => (
  <p className='mt-8 mb-2 text-xl font-bold'>{args.text}</p>
)

export default Title
