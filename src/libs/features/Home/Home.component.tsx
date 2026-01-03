'use client';

import { SiFacebook, SiGithub, SiLinkedin, SiQiita, SiSpeakerdeck, SiZenn } from '@icons-pack/react-simple-icons';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import { Card, Container, Profile, SubTitle, Title } from './Home.styles';
import { ProductLink } from './ProductLink';
import { XProductLink } from './XProductLink';

export function Home() {
  return (
    <Container>
      <Title>Hamchance.com</Title>
      <SubTitle>登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのアウトプット記録</SubTitle>
      <Profile>
        <Card>
          <CardHeader
            avatar={<Avatar alt="ham" src="/static/images/ham.svg" sx={{ width: 160, height: 160 }} />}
            title="Naoto Hamada"
            subheader="Software Engineer"
          />
          <CardContent sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <XProductLink />
              <ProductLink href="https://github.com/ham0215" productName="GitHub" name="ham0215">
                <SiGithub color="black" size={46} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              </ProductLink>
              <ProductLink href="https://qiita.com/ham0215" productName="Qiita" name="@ham0215">
                <SiQiita color="#55C460" size={46} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              </ProductLink>
              <ProductLink href="https://note.com/hamchance" productName="Note" name="@hamchance">
                <Image src="/static/images/note2.svg" alt="note" width="46" height="46" />
              </ProductLink>
              <ProductLink href="https://speakerdeck.com/ham0215" productName="Speaker Deck" name="ham0215">
                <SiSpeakerdeck color="#009287" size={46} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              </ProductLink>
              <ProductLink href="https://zenn.dev/hamchance" productName="Zenn" name="@hamchance">
                <SiZenn color="#3EA8FF" size={46} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              </ProductLink>
              <ProductLink href="https://sizu.me/ham" productName="しずかなインターネット" name="ham">
                <Image src="/static/images/sizu.svg" alt="しずかなインターネット" width="46" height="46" />
              </ProductLink>
              <ProductLink href="https://www.linkedin.com/in/ham0215/" productName="LinkedIn" name="ham0215">
                <SiLinkedin color="#2867B2" size={46} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              </ProductLink>
              <ProductLink href="https://www.wantedly.com/id/hamchance" productName="Wantedly" name="hamchance">
                <Image src="/static/images/wantedly.svg" alt="wantedly" width="46" height="46" />
              </ProductLink>
              <ProductLink href="https://www.facebook.com/naoto.hamada.9" productName="Facebook" name="naoto.hamada">
                <SiFacebook color="#3b5998" size={46} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              </ProductLink>
              <ProductLink href="https://youtrust.jp/users/ham" productName="YOUTRUST" name="ham">
                <Image src="/static/images/youtrust.avif" alt="youtrust" width="46" height="46" />
              </ProductLink>
              <ProductLink href="https://connpass.com/user/ham0215/" productName="connpass" name="ham0215">
                <Image src="/static/images/connpass.png" alt="connpass" width="46" height="46" />
              </ProductLink>
              <ProductLink href="https://hamchance.hatenablog.jp/" productName="はてなブログ" name="hamchance0215">
                <Image src="/static/images/hatenablog.svg" alt="はてなブログ" width="46" height="46" />
              </ProductLink>
              <ProductLink href="https://findy-code.io/skills-share/2XRMHItDvoLRN" productName="Findy" name="hamada">
                <Image src="/static/images/findy.jpg" alt="findy" width="46" height="46" />
              </ProductLink>
              <ProductLink href="https://lapras.com/public/ham" productName="LAPRAS" name="ham">
                <Image src="/static/images/lapras.png" alt="lapras" width="46" height="46" />
              </ProductLink>
              <ProductLink
                href="https://bsky.app/profile/hamchance.bsky.social"
                productName="Bluesky"
                name="@hamchance.bsky.social"
              >
                <Image src="/static/images/bluesky.jpg" alt="bluesky" width="46" height="46" />
              </ProductLink>
            </Grid>
          </CardContent>
        </Card>
      </Profile>
    </Container>
  );
}
