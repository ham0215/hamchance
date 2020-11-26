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
import InternalLink from 'components/InternalLink';
import InnerContents from 'components/InnerContents';

const CustomPaper = styled(Paper)`
  padding: 6px 16px;
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
        自分がシステム開発をする上で心がけているTipsを中心に、Advent Calendarにちなんで25個集めてみました。
      </Typography>
    </InnerContents>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            ソフトウェア開発の章
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
              <InternalLink to="/devtips">定期的にAgile宣言を思い出そう</InternalLink>
            </Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              <InternalLink to="/devtips">yagniを都合よく使ってませんか？</InternalLink>
            </Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              <InternalLink to="/devtips">シヨウとゲンジョウ</InternalLink>
            </Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              <InternalLink to="/devtips">理想とそこまでのステップを定義しよう</InternalLink>
            </Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              <InternalLink to="/devtips">難しく考えずとりあえずTDDを始めてみよう</InternalLink>
            </Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              <InternalLink to="/devtips">仕様はテストで担保する</InternalLink>
            </Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              <InternalLink to="/devtips">マスターデータ、まだDBに入れてるの？</InternalLink>
            </Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            可読性の章
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
              <InternalLink to="/devtips">可読性を上げることに全力を尽くす</InternalLink>
            </Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomPaper elevation={3}>
            <Typography variant="h6" component="h1">
              <InternalLink to="/devtips">判定に複数条件を使う場合はメソッドを作る</InternalLink>
            </Typography>
          </CustomPaper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </Contents>
);
