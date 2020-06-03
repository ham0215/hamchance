import React from 'react';
import styled from 'styled-components/macro';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from 'components/SectionHeading';
import SectionText from 'components/SectionText';
import SectionSubText from 'components/SectionSubText';
import WhiteSection from 'components/WhiteSection';

const useStyles = makeStyles(theme => ({
  contents: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Topics = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: left;
`;

export default function About() {
  const classes = useStyles();

  return (
    <WhiteSection id="about">
      <SectionHeading>ABOUT</SectionHeading>
      <SectionText>
        Webエンジニアの
        <Link href="#profile">ham</Link>
        が趣味の合間に気になる技術を試すためのページです。
      </SectionText>
      <SectionSubText>
        このサイトの各機能に特に意味はないのでご注意ください。
        <br />
        例えばヘッダーにログインボタンがありますがログインしても何もできませんw
        (firebaseのログインを試したかっただけです)
        <br />
        雑に試すため、機能が急に増減したり、表示が崩れたり、Internal Server
        Errorで何もできなくなったりするかもしれません。
      </SectionSubText>
      <SectionSubText>
        デザインスキルやCSSはめっぽう弱いのでトップページの構成は『
        <Link
          href="https://www.amazon.co.jp/gp/product/4798141577/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4798141577&linkCode=as2&tag=hamchance0215-22&linkId=6a6e4551d2657be755bde09ab7b7f14e"
          target="_blank"
        >
          HTML5/CSS3モダンコーディング
        </Link>
        』をベースに<Link href="https://ja.reactjs.org/">React</Link>
        で作成しました。
        <Topics>
          <Typography variant="subtitle1" component="span">
            Keywords of the technology used on this site
          </Typography>
          <Card>
            <CardContent className={classes.contents}>
              <Chip size="small" label="React" />
              <Chip size="small" label="Typescript" />
              <Chip size="small" label="Vercel" />
              <Chip size="small" label="Firebase" />
              <Chip size="small" label="material-ui" />
            </CardContent>
          </Card>
        </Topics>
      </SectionSubText>
    </WhiteSection>
  );
}
