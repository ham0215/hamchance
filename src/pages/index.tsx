import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AdventCalendar = lazy(() => import(/* webpackChunkName: 'adventcalendar' */ './AdventCalendar'));
const Blogs = lazy(() => import(/* webpackChunkName: 'blogs' */ './Blogs'));
const Books = lazy(() => import(/* webpackChunkName: 'books' */ './Books'));
const Login = lazy(() => import(/* webpackChunkName: 'login' */ './Login'));
const Top = lazy(() => import(/* webpackChunkName: 'top' */ './Top'));
const Terms = lazy(() => import(/* webpackChunkName: 'terms' */ './Terms'));

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Header />
        <Switch>
          <Route path="/adventcalendar" component={AdventCalendar} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/books" component={Books} />
          <Route path="/login" exact component={Login} />
          <Route path="/terms" component={Terms} />
          <Route component={Top} />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
