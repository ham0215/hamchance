import React from 'react';
import { Timeline } from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Item from './Item';

export default () => (
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
    <Item title="判定に複数条件を使う場合はメソッドを作る" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
  </Timeline>
);
