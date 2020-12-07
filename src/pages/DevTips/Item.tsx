import React from 'react';
import styled from 'styled-components';
import { Typography, Paper } from '@material-ui/core';
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from '@material-ui/lab';
import InternalLink from 'components/InternalLink';
import ExternalLink from 'components/ExternalLink';

const CustomPaper = styled(Paper)`
  padding: 6px 16px;
`;

type Props = {
  section?: string;
  title: string;
  to: string;
  linkType: 'internal' | 'external';
  icon: React.ReactElement;
};

Item.defaultProps = { section: null };

export default function Item({ section, title, to, linkType, icon }: Props) {
  const link =
    linkType === 'internal' ? (
      <InternalLink to={to}>{title}</InternalLink>
    ) : (
      <ExternalLink href={to} variant="body2">
        {title}
      </ExternalLink>
    );

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        {section && (
          <Typography variant="body2" color="textSecondary">
            {section}
          </Typography>
        )}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <CustomPaper elevation={3}>
          <Typography variant="h6" component="h1">
            {link}
          </Typography>
        </CustomPaper>
      </TimelineContent>
    </TimelineItem>
  );
}
