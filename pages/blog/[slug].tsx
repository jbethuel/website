import React from 'react';
import { useRouter } from 'next/router';
import { Header, Navbar } from '@blog/components';
import { blogItems } from 'constants/blog';

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogItems.find(each => each.url === slug) || null;
  return (
    <div className="page">
      <Header />
      <Navbar />
      <main className="blog" dangerouslySetInnerHTML={{ __html: blog && blog.content }} />
    </div>
  );
};

export default Blog;
