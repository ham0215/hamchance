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

const ContentsBox = styled.div`
  position: relative;
  display: table-cell;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background: url('/images/contents/hamchance.png') no-repeat;
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

const ContentsButton = styled.a`
  width: 60%;
  margin-top: 20px;
  padding: 3px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.15);
`;

export default function About() {
  return (
    <BlackSection>
      <SectionHeading>CONTENTS</SectionHeading>
      <ContentsWrapper>
        <ContentsBox>
          <ContentsImage
            src="/images/contents/hamchance.png"
            alt="hamchance.com"
          />
          <ContentsDescription>
            <ContentsDescriptionInner>
              <ContentsText>
                一つ目の事例
                <br />
                説明
                <br />
                <ContentsButton href="/">READ MORE</ContentsButton>
              </ContentsText>
            </ContentsDescriptionInner>
          </ContentsDescription>
        </ContentsBox>
        <ContentsBox>
          <ContentsImage src="/images/contents/hamkabu.png" alt="ハム株" />
          <ContentsDescription>
            <ContentsDescriptionInner>
              <ContentsText>
                一つ目の事例
                <br />
                説明
                <br />
                <ContentsButton href="/">READ MORE</ContentsButton>
              </ContentsText>
            </ContentsDescriptionInner>
          </ContentsDescription>
        </ContentsBox>
        <ContentsBox>
          <ContentsImage
            src="/images/contents/tajiri-tozan.png"
            alt="Tajiri Tozan"
          />
          <ContentsDescription>
            <ContentsDescriptionInner>
              <ContentsText>
                一つ目の事例
                <br />
                説明
                <br />
                <ContentsButton href="/">READ MORE</ContentsButton>
              </ContentsText>
            </ContentsDescriptionInner>
          </ContentsDescription>
        </ContentsBox>
        <ContentsBox>
          <ContentsImage
            src="/images/contents/yamanotenki.jpg"
            alt="Tajiri Tozan"
          />
          <ContentsDescription>
            <ContentsDescriptionInner>
              <ContentsText>
                一つ目の事例
                <br />
                説明
                <br />
                <ContentsButton href="/">READ MORE</ContentsButton>
              </ContentsText>
            </ContentsDescriptionInner>
          </ContentsDescription>
        </ContentsBox>
      </ContentsWrapper>
    </BlackSection>
  );
}
