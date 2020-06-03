import React from 'react';
import styled from 'styled-components/macro';
import BlackSection from 'components/BlackSection';
import SectionHeading from 'components/SectionHeading';
import ContentsBox from 'pages/Top/ContentsBox';

const ContentsWrapper = styled.div`
  display: table;
  width: 100%;
  margin-top: 60px;
  table-layout: fixed;
`;

export default function Contents() {
  return (
    <BlackSection>
      <SectionHeading>CONTENTS</SectionHeading>
      <ContentsWrapper>
        <ContentsBox
          img="/images/contents/hamchance.png"
          title="Hamchance.com"
          summary="ham's ポータルページ"
          description="ham's ポータルページ"
          keywords={[
            'React',
            'Typescript',
            'Vercel',
            'Cloud Firestore',
            'Firebase Authentication',
            'material-ui',
          ]}
        />
        <ContentsBox
          img="/images/contents/hamkabu.png"
          title="ハムちゃんの投資日記"
          summary="投資についての雑多な日記"
          description="投資についての雑多な日記"
          keywords={['netlify', 'netlify-cms', 'gatsby']}
        />
        <ContentsBox
          img="/images/contents/tajiri-tozan.png"
          title="Tajiri Tozan"
          summary="登山に行った記録"
          description="登山に行った記録"
          keywords={['React', 'Typescript', 'Firebase Hosting']}
        />
        <ContentsBox
          img="/images/contents/yamanotenki.jpg"
          title="山の天気LineBot"
          summary="山の天気を教えてくれるLineBot"
          description="山の天気を教えてくれるLineBot"
          keywords={[
            'Ruby',
            'Rails',
            'Heroku',
            'Postgres',
            'Cloud Build',
            'Docker',
            'Line Messaging API',
          ]}
        />
      </ContentsWrapper>
    </BlackSection>
  );
}
