import React, { ReactElement } from 'react'

interface TitleProps {
  text: string
}

const Title = (args: TitleProps): ReactElement => (
  <p className='mt-8 mb-2 text-xl font-bold'>{args.text}</p>
)

export default Title
