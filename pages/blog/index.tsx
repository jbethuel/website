import React, { ReactNode } from 'react'

import CategorySelector from '../../components/category-selector'
import BlogItem from '../../components/blog-item'
import SEO from '../../components/seo'
import Navbar from '../../components/navbar'

const BlogItems = [
  // {
  //   key: Math.random().toString(),
  //   type: 'tech',
  //   url: '/blog/setup-cra-redux',
  //   title: 'Setup your CRA Redux with cleaner code',
  //   date: 'June 11, 2020',
  //   subtitle: 'Very minimal setup with using redux-toolkit and hooks.'
  // }
]

type BlogItem = {
  key: string
  type: string
  url: string
  title: string
  date: string
  subtitle: string
}

const Blog = (): ReactNode => {
  return (
    <>
      <SEO />
      <Navbar />
      <div className='container mx-auto mt-4 lg:w-1/2 md:w-4/5 px-6'>
        <div className='sm:w-full md:w-1/2 lg:w-1/2'>
          <CategorySelector />
        </div>
        {BlogItems.length === 0 && (
          <div className='mt-6'>
            <h2 className='text-lg text-white'>NO ENTRIES YET.</h2>
          </div>
        )}
        {BlogItems.map((each: BlogItem) => (
          <BlogItem
            key={each?.key}
            url={each?.url}
            title={each?.title}
            date={each?.date}
            subtitle={each?.subtitle}
          />
        ))}
      </div>
    </>
  )
}

export default Blog
