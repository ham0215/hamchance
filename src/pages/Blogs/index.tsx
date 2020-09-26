import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Blog from './Blog';
import mds from './data.json';

export default () => {
  const blogs = mds.map((md) => (
    <Route key={md} path={`/blogs/${md}`}>
      <Blog mdPath={`/mds/${md}.md`} />
    </Route>
  ));
  const index = mds.map((md) => (
    <div>
      <Link to={`/blogs/${md}`}>{md}</Link>
    </div>
  ));
  return (
    <Switch>
      {blogs}
      <Route>{index}</Route>
    </Switch>
  );
};
