import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from 'components/Header';
import Footer from 'components/Footer';

const DevTips = lazy(() => import(/* webpackChunkName: 'devtips' */ './DevTips'));
const Blogs = lazy(() => import(/* webpackChunkName: 'blogs' */ './Blogs'));
const Top = lazy(() => import(/* webpackChunkName: 'top' */ './Top'));
const Terms = lazy(() => import(/* webpackChunkName: 'terms' */ './Terms'));

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Header />
        <Switch>
          <Route path="/devtips" component={DevTips} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/terms" component={Terms} />
          <Route component={Top} />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
