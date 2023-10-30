import { SiFacebook, SiGithub, SiLinkedin, SiQiita, SiSpeakerdeck, SiX, SiZenn } from '@icons-pack/react-simple-icons';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import { HomePresenter } from './Home.presenter';
import { Card, Container, Profile, SubTitle, Title } from './Home.styles';
import { ProductLink } from './ProductLink';
import { QrModal } from './QrModal';

export function Home() {
  const { openQrModal, handleOpenQrModal, handleCloseQrModal } = HomePresenter();

  return (
    <Container>
      <Title>Hamchance.com</Title>
      <SubTitle>登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのアウトプット記録</SubTitle>
      <Profile>
        <Card>
          <CardHeader
            avatar={<Avatar alt="ham" src="/static/images/ham.png" sx={{ width: 160, height: 160 }} />}
            title="Naoto Hamada"
            subheader="Software Engineer"
          />
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={4}>
              <ProductLink href="https://twitter.com/hamchance0215" productName="X" name="@hamchance0215" onClickQr={handleOpenQrModal}>
                <SiX color="black" size={60} />
              </ProductLink>
              <ProductLink href="https://github.com/ham0215" productName="GitHub" name="ham0215">
                <SiGithub color="black" size={60} />
              </ProductLink>
              <ProductLink href="https://qiita.com/ham0215" productName="Qiita" name="@ham0215">
                <SiQiita color="#55C500" size={60} />
              </ProductLink>
              <ProductLink href="https://speakerdeck.com/ham0215" productName="Speaker Deck" name="ham0215">
                <SiSpeakerdeck color="#009287" size={60} />
              </ProductLink>
              <ProductLink href="https://zenn.dev/hamchance" productName="Zenn" name="@hamchance">
                <SiZenn color="#3EA8FF" size={60} />
              </ProductLink>
              <ProductLink href="https://note.com/hamchance" productName="Note" name="@hamchance">
                <Image src="/static/images/note2.svg" alt="note" width="60" height="60" />
              </ProductLink>
              <ProductLink href="https://www.linkedin.com/in/ham0215/" productName="LinkedIn" name="ham0215">
                <SiLinkedin color="#2867B2" size={60} />
              </ProductLink>
              <ProductLink href="https://www.wantedly.com/id/hamchance" productName="Wantedly" name="hamchance">
                <Image src="/static/images/wantedly.svg" alt="wantedly" width="60" height="60" />
              </ProductLink>
              <ProductLink href="https://www.facebook.com/naoto.hamada.9" productName="Facebook" name="naoto.hamada">
                <SiFacebook color="#3b5998" size={60} />
              </ProductLink>
              <ProductLink href="https://youtrust.jp/users/ham" productName="YOUTRUST" name="ham">
                <Image src="/static/images/youtrust.avif" alt="youtrust" width="60" height="60" />
              </ProductLink>
              <ProductLink href="https://connpass.com/user/ham0215/" productName="connpass" name="ham0215">
                <Image src="/static/images/connpass.png" alt="connpass" width="60" height="60" />
              </ProductLink>
              <ProductLink href="https://lapras.com/public/ham" productName="LAPRAS" name="ham">
                <Image src="/static/images/lapras.png" alt="lapras" width="60" height="60" />
              </ProductLink>
            </Grid>
          </CardContent>
        </Card>
      </Profile>
      <QrModal open={openQrModal} onClose={handleCloseQrModal} />
    </Container>
  );
}
