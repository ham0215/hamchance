import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Top = lazy(() => import(/* webpackChunkName: 'top' */ './Top'));
const Edit = lazy(() => import(/* webpackChunkName: 'top' */ './Edit'));

export default function Books() {
  return (
    <Switch>
      <Route path="/books/edit" exact component={Edit} />
      <Route component={Top} />
    </Switch>
  );
}
