import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';

const MarunouchiLunch = lazy(() =>
  import(/* webpackChunkName: 'marunouchi-lunch' */ './MarunouchiLunch'),
);
const Login = lazy(() => import(/* webpackChunkName: 'login' */ './Login'));
const Top = lazy(() => import(/* webpackChunkName: 'top' */ './Top'));
const TermsOfService = lazy(() =>
  import(/* webpackChunkName: 'terms-of-service' */ './TermsOfService'),
);
const PrivacyPolicy = lazy(() =>
  import(/* webpackChunkName: 'privacy-policy' */ './PrivacyPolicy'),
);

export default function RootRouter() {
  return (
    <Suspense fallback={null}>
      <Header />
      <Switch>
        <Route path="/marunouchi-lunch" exact component={MarunouchiLunch} />
        <Route path="/login" exact component={Login} />
        <Route path="/terms-of-service" exact component={TermsOfService} />
        <Route path="/privacy-policy" exact component={PrivacyPolicy} />
        <Route component={Top} />
      </Switch>
      <Footer />
    </Suspense>
  );
}
