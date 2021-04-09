import { Header, Navbar } from '@blog/components';
import React from 'react';

const Blog = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <main className="blog">404 page not found</main>
    </div>
  );
};

export default Blog;
