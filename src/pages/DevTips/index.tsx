import React from 'react';
import { Typography } from '@material-ui/core';
import { Timeline } from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Contents from 'components/Contents';
import ExternalLink from 'components/ExternalLink';
import InnerContents from 'components/InnerContents';

import Item from './Item';

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
      <Item
        section="ソフトウェア開発の章"
        title="定期的にAgile宣言を思い出そう"
        to="/devtips"
        linkType="internal"
        icon={<FastfoodIcon />}
      />
      <Item title="yagniを都合よく使ってませんか？" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
      <Item title="シヨウとゲンジョウ" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
      <Item title="理想とそこまでのステップを定義しよう" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
      <Item title="難しく考えずとりあえずTDDを始めてみよう" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
      <Item title="仕様はテストで担保する" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
      <Item title="マスターデータ、まだDBに入れてるの？" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
      <Item
        section="可読性の章"
        title="可読性を上げることに全力を尽くす"
        to="/devtips"
        linkType="internal"
        icon={<FastfoodIcon />}
      />
      <Item
        title="判定に複数条件を使う場合はメソッドを作る"
        to="/devtips"
        linkType="internal"
        icon={<FastfoodIcon />}
      />
    </Timeline>
  </Contents>
);
