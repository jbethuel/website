import React, { ReactElement } from 'react'
import Link from 'next/link'

interface IBlogItem {
  key: string
  url: string
  title: string
  date: string
  subtitle: string
}

const BlogItem = ({
  key,
  url,
  title,
  date,
  subtitle
}: IBlogItem): ReactElement => {
  return (
    <div className='my-10 h-24 p-2' key={key}>
      <Link href={url}>
        <a className='text-white text-2xl font-bold'>{title}</a>
      </Link>
      <p className='text-gray-300 text-xs mt-2'>- {date}</p>
      <p className='text-gray-300 text-base mt-4'>{subtitle}</p>
    </div>
  )
}

export default BlogItem
