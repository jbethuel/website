import { BlogItem, Navbar } from '@blog/components';
import { routes } from 'config';
import { blogItems } from 'constants/blog';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

const BlogList: React.FC = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar activeTab={routes.blog} />
      <main className="blogs">
        {blogItems.map(item => (
          <BlogItem key={item.id} blog={item} onClick={() => router.push(`/blog/${item.url}`)} />
        ))}
      </main>
    </Fragment>
  );
};

export default BlogList;
