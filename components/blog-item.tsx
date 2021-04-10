import React from 'react';
import { Blog } from '@blog/models';

type Props = {
  blog: Blog;
  onClick: () => void;
};

export const BlogItem: React.FC<Props> = props => {
  const { blog } = props;
  return (
    <div className="item" onClick={props.onClick}>
      <h3>{blog.title}</h3>
      {blog.tags.map(item => (
        <div className="tag">{item}</div>
      ))}
    </div>
  );
};
