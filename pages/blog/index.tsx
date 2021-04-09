import { BlogItem, Header, Navbar } from '@blog/components';
import { blogItems } from 'constants/blog';
import Link from 'next/link';
import React from 'react';

const BlogList = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <main className="blog">
        {blogItems.map(item => (
          <Link href={`/blog/${item.url}`} key={item.id}>
            <BlogItem blog={item} onClick={() => {}} />
          </Link>
        ))}
      </main>
    </div>
  );
};

export default BlogList;
