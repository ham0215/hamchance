import Image from 'next/image';
import { Container, Title, Profile, SubTitle, Card } from './styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Twitter, Github, Qiita, Speakerdeck, Zenn } from '@icons-pack/react-simple-icons';
import ExternalLink from 'components/atoms/ExternalLink';

export default function Home() {
  return (
    <Container>
      <Title>Hamchance.com</Title>
      <SubTitle>登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのアウトプット記録</SubTitle>
      <Profile>
        <Card>
          <CardHeader
            avatar={<Avatar alt="ham" src="/images/ham.png" sx={{ width: 160, height: 160 }} />}
            title="Naoto Hamada"
            subheader="Software Engineer"
          />
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <ExternalLink href="https://twitter.com/hamchance0215">
                  <Grid container spacing={4}>
                    <Grid item>
                      <Twitter color="#1DA1F2" size={60} />
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
                </ExternalLink>
              </Grid>
              <Grid item xs={12}>
                <ExternalLink href="https://github.com/ham0215">
                  <Grid container spacing={4}>
                    <Grid item>
                      <Github color="black" size={60} />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        GitHub
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ham0215
                      </Typography>
                    </Grid>
                  </Grid>
                </ExternalLink>
              </Grid>
              <Grid item xs={12}>
                <ExternalLink href="https://qiita.com/ham0215">
                  <Grid container spacing={4}>
                    <Grid item>
                      <Qiita color="#55C500" size={60} />
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
                </ExternalLink>
              </Grid>
              <Grid item xs={12}>
                <ExternalLink href="https://speakerdeck.com/ham0215">
                  <Grid container spacing={4}>
                    <Grid item>
                      <Speakerdeck color="#009287" size={60} />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        Speaker Deck
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ham0215
                      </Typography>
                    </Grid>
                  </Grid>
                </ExternalLink>
              </Grid>
              <Grid item xs={12}>
                <ExternalLink href="https://zenn.dev/hamchance">
                  <Grid container spacing={4}>
                    <Grid item>
                      <Zenn color="#3EA8FF" size={60} />
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
                </ExternalLink>
              </Grid>
              <Grid item xs={12}>
                <ExternalLink href="https://note.com/hamchance">
                  <Grid container spacing={4}>
                    <Grid item>
                      <Image src="/images/note.svg" alt="note" width="60px" height="60px" />
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
                </ExternalLink>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Profile>
    </Container>
  );
}
