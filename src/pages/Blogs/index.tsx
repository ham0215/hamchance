import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Blog from './Blog';
import mds from './data.json';

export default () => {
  const blogs = mds.map((md) => (
    <Route key={md} path={`/blogs/${md}`}>
      <Blog mdPath={`/mds/${md}.md`} />
    </Route>
  ));
  const index = mds.map((md) => (
    <ListItem button component={Link} to={`/blogs/${md}`}>
      <ListItemText primary={md} />
    </ListItem>
  ));
  return (
    <Switch>
      {blogs}
      <Route>
        <List component="nav" aria-label="secondary mailbox folders">
          {index}
        </List>
      </Route>
    </Switch>
  );
};
