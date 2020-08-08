import React, { ReactElement } from 'react'
import Link from 'next/link'

export interface IBlogItem {
  id: string
  type: string
  url: string
  title: string
  date: string
  subtitle: string
}

const BlogItem = ({
  id,
  url,
  title,
  date,
  subtitle
}: IBlogItem): ReactElement => {
  return (
    <div className='mt-5 mb-10 h-24 p-2' key={id}>
      <Link href={url}>
        <a className='text-white text-2xl font-bold'>{title}</a>
      </Link>
      <p className='text-gray-300 text-xs mt-2'>- {date}</p>
      <p className='text-gray-300 text-base mt-4'>{subtitle}</p>
    </div>
  )
}

export default BlogItem
