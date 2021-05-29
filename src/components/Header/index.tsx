import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import HeaderMenu from 'components/Header/HeaderMenu';

const useStyles = makeStyles((theme) => ({
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

  return (
    <AppBar position="static">
      <Toolbar>
        <HeaderMenu />
        <Typography variant="h6" className={classes.title}>
          <Link href="/" color="inherit" underline="none">
            Hamchance.com
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
