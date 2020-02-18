import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const MarunouchiLunch = lazy(() =>
  import(/* webpackChunkName: 'marunouchi-lunch' */ './MarunouchiLunch'),
);
const Login = lazy(() => import(/* webpackChunkName: 'login' */ './Login'));
const Top = lazy(() => import(/* webpackChunkName: 'top' */ './Top'));
const Sendgrid = lazy(() =>
  import(/* webpackChunkName: 'sendgrid' */ './Sendgrid'),
);

export default function RootRouter() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/marunouchi-lunch" exact component={MarunouchiLunch} />
        <Route path="/login" exact component={Login} />
        <Route path="/sendgrid" exact component={Sendgrid} />
        <Route component={Top} />
      </Switch>
    </Suspense>
  );
}
