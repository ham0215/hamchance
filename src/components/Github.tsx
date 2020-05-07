import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from 'images/github.png';

export default function Twitter() {
  return (
    <div>
      <IconButton
        href="https://github.com/ham0215"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubIcon} alt="github" width="30px" />
      </IconButton>
    </div>
  );
}
