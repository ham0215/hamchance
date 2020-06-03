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
          description="ham's ポータルページ"
        />
        <ContentsBox
          img="/images/contents/hamkabu.png"
          title="ハムちゃんの投資日記"
          description="投資についての雑多な日記"
        />
        <ContentsBox
          img="/images/contents/tajiri-tozan.png"
          title="Tajiri Tozan"
          description="登山に行った記録"
        />
        <ContentsBox
          img="/images/contents/yamanotenki.jpg"
          title="山の天気LineBot"
          description="山の天気を教えてくれるLineBot"
        />
      </ContentsWrapper>
    </BlackSection>
  );
}
