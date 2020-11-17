import React from 'react';
import styled from 'styled-components';
import { Typography, Paper } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Contents from 'components/Contents';
import ExternalLink from 'components/ExternalLink';
import InnerContents from 'components/InnerContents';

const CustomPaper = styled(Paper)`
  padding: 6px 16px;
`;

const SecondaryTimelineConnector = styled(TimelineConnector)`
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

export default () => (
  <Contents>
    <Typography variant="h4">システム開発Tips 25</Typography>
    <InnerContents>
      <Typography variant="subtitle1">
        Qiitaで参加している
        <ExternalLink href="https://qiita.com/advent-calendar/2020/visits" variant="body1">
          VISITS Advent Calendar 2020
        </ExternalLink>
        の16日目のネタとして、システム開発のTipsを集めたサイトを自作しました。
        <br />
        自分が心がけているTipsを中心に、Advent Calendarに合わせて25個集めてみました。
      </Typography>
    </InnerContents>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            1日
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <FastfoodIcon />
          </TimelineDot>
          <SecondaryTimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FastfoodIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </Contents>
);
