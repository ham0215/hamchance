import React from 'react';
import { List, ListItemText, Typography } from '@material-ui/core';
import Contents from 'components/Contents';
import InnerContents from 'components/InnerContents';
import Blog from './Blog';

export default () => {
  // const blogs = mds.map((md) => (
  //   <Route key={md} path={`/adventcalendar/${md}`}>
  //     <Blog mdPath={`/mds/${md}.md`} />
  //   </Route>
  // ));
  // const index = mds.map((md) => (
  //   <ListItem button component={Link} to={`/adventcalendar/${md}`}>
  //     <ListItemText primary={md} />
  //   </ListItem>
  // ));
  const hoge = 'hoge';
  return (
    <Contents>
      <Typography variant="h4">システム開発Tips 25</Typography>
      <InnerContents>
        <Typography variant="subtitle1">
          システム開発のTips集です。
          <br />
          QiitaのAdvent Calendar 2020のネタとして、システム開発のTipsを集めたサイトを自作しました。
          <br />
          Advent Calendarに習ってTipsを25個集めています。
        </Typography>
      </InnerContents>
    </Contents>
  );
};
