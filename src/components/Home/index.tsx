import Image from 'next/image';
import { Container, Title } from './styles';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Twitter, Github, Qiita, Speakerdeck, Zenn } from '@icons-pack/react-simple-icons';

const Profile = styled.div`
  flex-grow: 1;
  text-align: left;
  margin: 120px auto 80px auto;
`;

const Card = styled(Paper)`
  max-width: 500px;
`;

const ImageDiv = styled.div`
  width: 128px;
  height: 128px;
`;

const Img = styled.img`
  margin: auto;
  display: block:
  max-width: 100%;
  max-height: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Title>Hamchance.com</Title>
      <div>登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのアウトプット記録</div>
      <Profile>
        <Card>
          <Grid container spacing={2}>
            <Grid item>
              <ImageDiv>
                <Img alt="ham" src="/images/ham.jpg" />
              </ImageDiv>
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
        </Card>
      </Profile>
      <Grid container>
        <Grid item>
          <IconButton href="https://twitter.com/hamchance0215" target="_blank" rel="noopener noreferrer">
            <Twitter color="#1DA1F2" size={30} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://github.com/ham0215" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={30} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://qiita.com/ham0215" target="_blank" rel="noopener noreferrer">
            <Qiita color="#55C500" size={30} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://speakerdeck.com/ham0215" target="_blank" rel="noopener noreferrer">
            <Speakerdeck color="#009287" size={30} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://zenn.dev/hamchance" target="_blank" rel="noopener noreferrer">
            <Zenn color="#3EA8FF" size={30} />
          </IconButton>
        </Grid>
        <IconButton href="https://note.com/hamchance" target="_blank" rel="noopener noreferrer">
          <Image src="/images/note.svg" alt="note" width="30px" height="30px" />
        </IconButton>
      </Grid>
    </Container>
  );
}
