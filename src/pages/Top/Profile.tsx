import React from 'react';
import styled from 'styled-components/macro';
import SectionHeading from 'components/SectionHeading';
import Twitter from 'components/Twitter';
import Github from 'components/Github';
import Qiita from 'components/Qiita';
import Zenn from 'components/Zenn';
import Note from 'components/Note';
import SpeakerDeck from 'components/SpeakerDeck';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import HamIcon from 'images/ham.jpg';

const Section = styled.section`
  padding: 80px 0;
  height: 100vh;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Section id="profile">
      <SectionHeading>PROFILE</SectionHeading>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="ham" src={HamIcon} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Typography gutterBottom variant="subtitle1">
                  Naoto Hamada (Twitter: @hamchance0215)
                </Typography>
                <Typography variant="body2" gutterBottom>
                  経歴
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  SIer → Web Engineer
                </Typography>
                <Typography variant="body2" gutterBottom>
                  趣味
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  登山 / ジョギング / 株 / お酒 / 競馬 / 子育て
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Grid container justify="center">
        <Grid item>
          <Twitter />
        </Grid>
        <Grid item>
          <Github />
        </Grid>
        <Grid item>
          <Qiita />
        </Grid>
        <Grid item>
          <SpeakerDeck />
        </Grid>
        <Grid item>
          <Zenn />
        </Grid>
        <Grid item>
          <Note />
        </Grid>
      </Grid>
    </Section>
  );
}
