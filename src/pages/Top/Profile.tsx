import React from 'react';
import styled from 'styled-components/macro';
import SectionHeading from 'components/SectionHeading';
import Twitter from 'components/Twitter';
import Github from 'components/Github';
import Qiita from 'components/Qiita';
import SpeakerDeck from 'components/SpeakerDeck';
import SectionText from 'components/SectionText';

const Section = styled.section`
  padding: 80px 0;
`;

export default function Profile() {
  return (
    <Section id="profile">
      <SectionHeading>PROFILE</SectionHeading>
      <SectionText>hogehogehogehogehogehoge</SectionText>
      <Twitter />
      <Github />
      <Qiita />
      <SpeakerDeck />
    </Section>
  );
}
