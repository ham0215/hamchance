import React from 'react';
import styled from 'styled-components/macro';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SiteHeader = styled.header`
  padding: 170px 30px 80px;
`;

const SiteSubTitle = styled.p`
  margin: 0 0 30px;
  letter-spacing: 1px;
  font-size: 1.6rem;

  ::before,
  ::after {
    content: '';
    display: inline-block;
    width: 140px;
    height: 2px;
    margin: 0 30px;
    background-color: #fff;
    vertical-align: middle;
  }
`;

const SiteTitle = styled.h1`
  margin: 50px 0 40px;
  font-fize: 7.6rem;
`;

const SiteDiscription = styled.p`
  margin-bottom: 50px;
  font-size: 1.6rem;
`;

export default function Header() {
  const classes = useStyles();

  return (
    <SiteHeader>
      <SiteSubTitle>ham&apos;s sandbox</SiteSubTitle>
      <SiteTitle>Hamchance.com</SiteTitle>
      <SiteDiscription>
        登山とジョギングとお酒の合間に気になる技術を試す実験ページ
      </SiteDiscription>
      <div className={classes.root}>
        <Button variant="contained" href="#about">
          ABOUT
        </Button>
        <Button variant="contained" color="primary" href="#contanct">
          SEMD MESSAGE
        </Button>
      </div>
    </SiteHeader>
  );
}
