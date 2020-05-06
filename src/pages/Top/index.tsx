import React from 'react';
import TopContents from 'components/TopContents';
import styled from 'styled-components/macro';
import TopHeader from 'pages/Top/TopHeader';

const WhiteSection = styled.section`
  padding: 80px 0;
  background-color: #fff;
  color: #333;
`;

const BlackSection = styled.section`
  padding: 80px 0;
  background-color: #383634;
`;

const SectionHeading = styled.h2`
  position: relative;
  display: inline-block;
  margin: 30px 0 15px;
  padding-bottom: 15px;
  letter-spacing: 2px;
  font-size: 4rem;
  ::before,
  ::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #999;
  }
  ::before {
    bottom: 5px;
  }
`;

const SectionText = styled.p`
  margin: 30px 0;
  line-height: 2.5;
`;

const SectionSubText = styled.p`
  margin: 30px 0;
  line-height: 2.5;
  font-size: small;
`;

export default function Top() {
  return (
    <TopContents>
      <TopHeader />
      <WhiteSection id="about">
        <SectionHeading>ABOUT</SectionHeading>
        <SectionText>
          Webエンジニアをしているhamが趣味の合間に気になる技術を試すためのページです。
        </SectionText>
        <SectionSubText>
          各機能に特に意味はないのでご注意ください。
          <br />
          例えばヘッダーにログイン機能がありますがログインしても何もできませんw
          (firebaseのログインを試したかっただけです)
          <br />
          雑に試すため、機能が急に増減したり、表示できなくなったりするかもしれません。
        </SectionSubText>
        <SectionSubText>
          トップページの構成は
          <a
            href="https://www.shoeisha.co.jp/book/detail/9784798141572"
            target="_blank"
            rel="noopener noreferrer"
          >
            『HTML5/CSS3モダンコーディング』
          </a>
          を参考にしています。
          <br />
          コンポーネントは
          <a
            href="https://material-ui.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            material-ui
          </a>
          を使っています。
          <br />
          cssはめっぽう弱いのでとても参考になりました！
        </SectionSubText>
      </WhiteSection>
      <BlackSection>
        <SectionHeading>CONTENTS</SectionHeading>
        <SectionText>開発中...!!</SectionText>
      </BlackSection>
      <section>skills</section>
      <section id="contact">contact</section>
      <footer>footer</footer>
    </TopContents>
  );
}
