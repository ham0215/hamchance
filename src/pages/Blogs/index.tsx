import React from 'react';

export default () => {
  const blogs = ['hoge'];
  let blogDiv;
  blogs.forEach((blog) => {
    blogDiv = <div>{blog}</div>;
  });

  return <div>{blogDiv}</div>;
};
