import React from 'react';
import { Typography } from '@material-ui/core';
import Contents from 'components/Contents';
import InnerContents from 'components/InnerContents';

import Items from './Items';

export default () => (
  <Contents>
    <Typography variant="h4">システム開発Tips 25</Typography>
    <InnerContents>
      <Typography variant="subtitle1">自分がシステム開発をする上で心がけているTipsを25個集めてみました。</Typography>
    </InnerContents>
    <Items />
  </Contents>
);
