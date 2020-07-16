import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import QiitaIcon from 'images/qiita.png';

export default function Twitter() {
  return (
    <div>
      <IconButton href="https://qiita.com/ham0215" target="_blank" rel="noopener noreferrer">
        <img src={QiitaIcon} alt="qiita" height="30px" />
      </IconButton>
    </div>
  );
}
