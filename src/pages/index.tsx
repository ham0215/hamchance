import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const MarunouchiLunch = lazy(() =>
  import(/* webpackChunkName: 'marunouchi-lunch' */ './MarunouchiLunch'),
);
const Login = lazy(() => import(/* webpackChunkName: 'login' */ './Login'));

export default function RootRouter() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/marunouchi-lunch" exact component={MarunouchiLunch} />
        <Route component={Login} />
      </Switch>
    </Suspense>
  );
}
