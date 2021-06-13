import { Navbar } from '@blog/components';
import React, { Fragment } from 'react';

const Blog = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="notfound">404 page not found</main>
    </Fragment>
  );
};

export default Blog;
