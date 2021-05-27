import React from 'react';
import styled from 'styled-components/macro';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import SectionHeading from 'components/SectionHeading';
import SectionText from 'components/SectionText';
import SectionSubText from 'components/SectionSubText';
import WhiteSection from 'components/WhiteSection';
import Keywords from 'components/Keywords';

const Topics = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: left;
`;

export default function About() {
  return (
    <WhiteSection id="about">
      <SectionHeading>ABOUT</SectionHeading>
      <SectionText>
        Webエンジニアの
        <Link href="#profile">ham</Link>
        が趣味の合間に気になる技術を試すためのページです。
      </SectionText>
      <SectionSubText>
        雑に試すため、機能が急に増減したり、表示が崩れたり、Internal Server
        Errorで何もできなくなったりするかもしれません。
      </SectionSubText>
      <SectionSubText>
        <Topics>
          <Typography variant="subtitle1" component="span">
            Keywords of the technology used on this site
          </Typography>
          <Card>
            <Keywords
              keywords={['React', 'Typescript', 'Vercel', 'Cloud Firestore', 'Firebase Authentication', 'material-ui']}
            />
          </Card>
        </Topics>
      </SectionSubText>
    </WhiteSection>
  );
}
