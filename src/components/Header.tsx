import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import firebase from 'components/Firebase';
import { User } from 'firebase/app';
import HeaderMenu from 'components/HeaderMenu';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
}));

export default function Header() {
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
    <AppBar position="static">
      <Toolbar>
        <HeaderMenu />
        <Typography variant="h6" className={classes.title}>
          <Link href="/" color="inherit" underline="none">
            Hamchance.com
          </Link>
        </Typography>
        {loginButton}
      </Toolbar>
    </AppBar>
  );
}
