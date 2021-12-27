import Image from 'next/image';
import { Container, Title } from './styles';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Twitter, Github, Qiita, Speakerdeck, Zenn } from '@icons-pack/react-simple-icons';

const Profile = styled.div`
  flex-grow: 1;
  text-align: left;
  margin: 120px auto 80px auto;
`;

const Card = styled(Paper)`
  max-width: 500px;
`;

export default function Home() {
  return (
    <Container>
      <Title>Hamchance.com</Title>
      <div>登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのアウトプット記録</div>
      <Profile>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar alt="ham" src="/images/ham.jpg" sx={{ width: 64, height: 64 }} />
            }
            title="Naoto Hamada"
            subheader="Software Engineer"
          />
          <CardContent>
            <Typography>
              Links
            </Typography>
            <Grid container>
              <Grid item>
                <IconButton href="https://twitter.com/hamchance0215" target="_blank" rel="noopener noreferrer">
                  <Twitter color="#1DA1F2" size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Twitter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @hamchance0215
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <IconButton href="https://github.com/ham0215" target="_blank" rel="noopener noreferrer">
                  <Github color="black" size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  GitHub
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @ham0215
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <IconButton href="https://qiita.com/ham0215" target="_blank" rel="noopener noreferrer">
                  <Qiita color="#55C500" size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Qiita
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @ham0215
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <IconButton href="https://speakerdeck.com/ham0215" target="_blank" rel="noopener noreferrer">
                  <Speakerdeck color="#009287" size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Speakerdeck
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @ham0215
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <IconButton href="https://zenn.dev/hamchance" target="_blank" rel="noopener noreferrer">
                  <Zenn color="#3EA8FF" size={30} />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Zenn
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @hamchance
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <IconButton href="https://note.com/hamchance" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/note.svg" alt="note" width="30px" height="30px" />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Note
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @hamchance
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Profile>
    </Container>
  );
}
