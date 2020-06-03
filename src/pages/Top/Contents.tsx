import React from 'react';
import styled from 'styled-components/macro';
import BlackSection from 'components/BlackSection';
import SectionHeading from 'components/SectionHeading';

const ContentsWrapper = styled.div`
  display: table;
  width: 100%;
  margin-top: 60px;
  table-layout: fixed;
`;

const ContentsBox = styled.div<{ img: string }>`
  position: relative;
  display: table-cell;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    /* background: url('/images/contents/hamchance.png') no-repeat; */
    background: url(${({ img }) => img}) no-repeat;
    background-size: 100% 100%;
    opacity: 0.2;
    transform: scaleY(-1);
  }
`;

const ContentsImage = styled.img`
  display: block;
  width: 100%;
  margin: 0 0 60%;
`;

const ContentsDescription = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 50%;
  overflow-y: auto;
`;

const ContentsDescriptionInner = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const ContentsText = styled.p`
  display: table-cell;
  vertical-align: middle;
  font-size: 1.2rem;
  line-height: 2;
`;

const ContentsButton = styled.button`
  width: 60%;
  margin-top: 20px;
  padding: 9px;
  border: 1px solid #fff;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
`;

export default function About() {
  return (
    <BlackSection>
      <SectionHeading>CONTENTS</SectionHeading>
      <ContentsWrapper>
        <ContentsBox img="/images/contents/hamchance.png">
          <ContentsImage
            src="/images/contents/hamchance.png"
            alt="hamchance.com"
          />
          <ContentsDescription>
            <ContentsDescriptionInner>
              <ContentsText>
                Hamchance.com
                <br />
                ham&apos;s ポータルページ
                <br />
                <ContentsButton>READ MORE</ContentsButton>
              </ContentsText>
            </ContentsDescriptionInner>
          </ContentsDescription>
        </ContentsBox>
        <ContentsBox img="/images/contents/hamkabu.png">
          <ContentsImage src="/images/contents/hamkabu.png" alt="ハム株" />
          <ContentsDescription>
            <ContentsDescriptionInner>
              <ContentsText>
                ハムちゃんの投資日記
                <br />
                投資についての雑多な日記
                <br />
                <ContentsButton>READ MORE</ContentsButton>
              </ContentsText>
            </ContentsDescriptionInner>
          </ContentsDescription>
        </ContentsBox>
        <ContentsBox img="/images/contents/tajiri-tozan.png">
          <ContentsImage
            src="/images/contents/tajiri-tozan.png"
            alt="Tajiri Tozan"
          />
          <ContentsDescription>
            <ContentsDescriptionInner>
              <ContentsText>
                Tajiri Tozan
                <br />
                登山に行った記録
                <br />
                <ContentsButton>READ MORE</ContentsButton>
              </ContentsText>
            </ContentsDescriptionInner>
          </ContentsDescription>
        </ContentsBox>
        <ContentsBox img="/images/contents/yamanotenki.jpg">
          <ContentsImage
            src="/images/contents/yamanotenki.jpg"
            alt="Tajiri Tozan"
          />
          <ContentsDescription>
            <ContentsDescriptionInner>
              <ContentsText>
                山の天気LineBot
                <br />
                山の天気を教えてくれるLineBot
                <br />
                <ContentsButton>READ MORE</ContentsButton>
              </ContentsText>
            </ContentsDescriptionInner>
          </ContentsDescription>
        </ContentsBox>
      </ContentsWrapper>
    </BlackSection>
  );
}
