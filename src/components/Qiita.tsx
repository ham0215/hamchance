import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Qiita } from '@icons-pack/react-simple-icons';

export default function QiitaIconButton() {
  return (
    <div>
      <IconButton href="https://qiita.com/ham0215" target="_blank" rel="noopener noreferrer">
        <Qiita color="#55C500" size={30} />
      </IconButton>
    </div>
  );
}
