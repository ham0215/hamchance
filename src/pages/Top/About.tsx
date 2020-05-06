import React from 'react';
import SectionHeading from 'components/SectionHeading';
import SectionText from 'components/SectionText';
import SectionSubText from 'components/SectionSubText';
import WhiteSection from 'components/WhiteSection';

export default function About() {
  return (
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
  );
}
