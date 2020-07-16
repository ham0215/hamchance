import React from 'react';
import styled from 'styled-components/macro';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SiteTitle from 'components/SiteTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SiteHeader = styled.header`
  padding: 60px 30px 80px;
`;

const SiteDiscription = styled.p`
  margin-bottom: 50px;
  font-size: 1.2rem;
`;

export default function Header() {
  const classes = useStyles();

  return (
    <SiteHeader>
      <SiteTitle>Hamchance.com</SiteTitle>
      <SiteDiscription>
        登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアが
        <br />
        たまに気になる技術を試すページ
      </SiteDiscription>
      <div className={classes.root}>
        <Button variant="contained" href="#about">
          ABOUT
        </Button>
        <Button variant="contained" color="primary" href="#profile">
          PROFILE
        </Button>
      </div>
    </SiteHeader>
  );
}
