import React from 'react';
import styled from 'styled-components/macro';
import BlackSection from 'components/BlackSection';
import SectionHeading from 'components/SectionHeading';
import Link from '@material-ui/core/Link';

const ContentsWrapper = styled.div`
  display: table;
  width: 100%;
  margin-top: 60px;
  table-layout: fixed;
`;

const ContentsBox = styled.div`
  display: table-cell;
`;

const ContentsImage = styled.img`
  display: block;
  width: 100%;
  max-height: 300px;
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
          <p>
            一つ目の事例
            <br />
            説明
            <br />
            <Link href="/">READ MORE</Link>
          </p>
        </ContentsBox>
        <ContentsBox>
          <ContentsImage src="/images/contents/hamkabu.png" alt="ハム株" />
          <p>
            一つ目の事例
            <br />
            説明
            <br />
            <Link href="/">READ MORE</Link>
          </p>
        </ContentsBox>
        <ContentsBox>
          <ContentsImage
            src="/images/contents/tajiri-tozan.png"
            alt="Tajiri Tozan"
          />
          <p>
            一つ目の事例
            <br />
            説明
            <br />
            <Link href="/">READ MORE</Link>
          </p>
        </ContentsBox>
        <ContentsBox>
          <ContentsImage
            src="/images/contents/yamanotenki.jpg"
            alt="Tajiri Tozan"
          />
          <p>
            一つ目の事例
            <br />
            説明
            <br />
            <Link href="/">READ MORE</Link>
          </p>
        </ContentsBox>
      </ContentsWrapper>
    </BlackSection>
  );
}
