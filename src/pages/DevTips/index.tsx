import React from 'react';
import { Typography } from '@material-ui/core';
import Contents from 'components/Contents';
import ExternalLink from 'components/ExternalLink';
import InnerContents from 'components/InnerContents';

import Items from './Items';

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
    <Items />
  </Contents>
);
