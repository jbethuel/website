import { BlogItem, Header, Navbar } from '@blog/components';
import { blogItems } from 'constants/blog';
import { useRouter } from 'next/router';
import React from 'react';

const BlogList: React.FC = () => {
  const router = useRouter();

  return (
    <div className="page">
      <Header />
      <Navbar />
      <main className="blogs">
        {blogItems.map(item => (
          <BlogItem key={item.id} blog={item} onClick={() => router.push(`/blog/${item.url}`)} />
        ))}
      </main>
    </div>
  );
};

export default BlogList;
