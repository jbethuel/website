import React, { ReactElement } from 'react'
import CategorySelector from '../../client/components/category-selector'
import BlogItem from '../../client/components/blog-item'

const BlogItems = [
  {
    key: Math.random().toString(),
    type: 'tech',
    url: '/blog/setup-cra-redux',
    title: 'Setup your CRA Redux with cleaner code',
    date: 'June 11, 2020',
    subtitle: 'Very minimal setup with using redux-toolkit and hooks.'
  }
]

const Blog = (): ReactElement => {
  return (
    <div className='container mx-auto mt-4 lg:w-1/2 md:w-4/5 px-6'>
      <div className='sm:w-full md:w-1/2 lg:w-1/2'>
        <CategorySelector />
      </div>
      {BlogItems.map(each => (
        <BlogItem
          key={each.key}
          url={each.url}
          title={each.title}
          date={each.date}
          subtitle={each.subtitle}
        />
      ))}
    </div>
  )
}

export default Blog
