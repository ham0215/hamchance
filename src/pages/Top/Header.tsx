import React from 'react';
import styled from 'styled-components/macro';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SiteHeader = styled.header`
  padding: 60px 30px 80px;
  height: 100vh;
`;

const SiteDiscription = styled.p`
  margin-bottom: 50px;
  font-size: 1.2rem;
`;

const SiteTitle = styled.h1`
  margin-top: 35px;
  font-size: 5rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
`;

export default function Header() {
  const classes = useStyles();

  return (
    <SiteHeader>
      <SiteTitle>Hamchance.com</SiteTitle>
      <SiteDiscription>
        子育てと株取引とお酒で忙しいWebエンジニアが
        <br />
        適当に遊ぶためのサイト
      </SiteDiscription>
      <div className={classes.root}>
        <Button variant="contained" href="#about">
          ABOUT
        </Button>
        <Button variant="contained" color="primary" href="#profile">
          PROFILE
        </Button>
      </div>
      <Footer>1 / 5 Header</Footer>
    </SiteHeader>
  );
}
