import React from 'react'
import { BlogItem, Header, Navbar } from '@blog/components'
import { Blog } from '@blog/models'

const items: Blog[] = [
  {
    id: '1',
    title: 'Sample Blog Post 😆',
    subTitle: 'Technically its still a work in progress..',
    tags: ['random', 'fluff']
  }
]

const BlogList = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <main className="blog">
        {items.map(item => (
          <BlogItem key={item.id} {...item} onClick={() => {}} />
        ))}
      </main>
    </div>
  )
}

export default BlogList
