import { Navbar } from '@blog/components';
import { routes } from 'config';
import { blogItems } from 'constants/blog';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogItems.find(each => each.url === slug) || null;
  return (
    <Fragment>
      <Navbar activeTab={routes.blog} />
      <main className="blog" dangerouslySetInnerHTML={{ __html: blog && blog.content }} />
    </Fragment>
  );
};

export default Blog;
