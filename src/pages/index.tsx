import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from 'components/Firebase';
import { User } from 'firebase/app';

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function RootRouter() {
  const classes = useStyles();
  const [currentUser, setUser] = useState<User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  });

  let loginButton;
  if (currentUser) {
    loginButton = (
      <Button color="inherit" onClick={() => firebase.auth().signOut()}>
        Logout
      </Button>
    );
  } else {
    loginButton = (
      <Button color="inherit" href="/login">
        Login
      </Button>
    );
  }

  return (
    <Suspense fallback={null}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" color="inherit" underline="none">
              Hamchance.com
            </Link>
          </Typography>
          {loginButton}
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/marunouchi-lunch" exact component={MarunouchiLunch} />
        <Route path="/login" exact component={Login} />
        <Route path="/terms-of-service" exact component={TermsOfService} />
        <Route path="/privacy-policy" exact component={PrivacyPolicy} />
        <Route component={Top} />
      </Switch>
    </Suspense>
  );
}
