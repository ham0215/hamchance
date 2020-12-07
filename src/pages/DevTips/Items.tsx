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
    <Item title="同じ判定条件でも意味が違うならaliasを作る" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item title="その定数、本当に必要ですか？" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item title="定数名に値の情報を入れすぎない" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item
      title="三項演算子やカッコなしのifはやめよう。は嘘"
      to="/devtips"
      linkType="internal"
      icon={<FastfoodIcon />}
    />
    <Item title="複雑な処理の入り口は1つにしよう" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item title="早期リターンしよう" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item title="if条件は組み合わせずに分割しよう" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item
      title="汎用的な機能を実装するときは使う側が簡単に使えるか？を意識しよう"
      to="https://qiita.com/ham0215/items/b3938c5ee6fab08fceaa"
      linkType="external"
      icon={<FastfoodIcon />}
    />
    <Item title="勘違いしない名前をつけよう" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item title="見てわかるコメント入れない" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item
      title="レビューで理解しづらいコードを見かけたら指摘しよう"
      to="/devtips"
      linkType="internal"
      icon={<FastfoodIcon />}
    />
    <Item
      title="Webアプリケーションのコードレビューで気にしている観点"
      to="https://qiita.com/ham0215/items/493d31b26497e4a671a4"
      linkType="external"
      icon={<FastfoodIcon />}
    />
    <Item
      section="Gitの章"
      title="Gitユースケース "
      to="https://qiita.com/ham0215/items/b4c68f1c63e2fa710326"
      linkType="external"
      icon={<FastfoodIcon />}
    />
    <Item title="作業するプルリクは1人ごとに作る" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item title="squashマージの罠" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
    <Item title="gitでマージの流れを守ろう" to="/devtips" linkType="internal" icon={<FastfoodIcon />} />
  </Timeline>
);
