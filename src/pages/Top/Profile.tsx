import React from 'react';
import styled from 'styled-components/macro';
import SectionHeading from 'components/SectionHeading';
import SectionText from 'components/SectionText';

const Section = styled.section`
  padding: 80px 0;
`;

export default function Profile() {
  return (
    <Section id="profile">
      <SectionHeading>PROFILE</SectionHeading>
      <SectionText>開発中...!!</SectionText>
    </Section>
  );
}
