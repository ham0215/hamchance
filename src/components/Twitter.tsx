import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from 'images/twitter.svg';

export default function Twitter() {
  return (
    <div>
      <IconButton
        href="https://twitter.com/hamchance0215"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={TwitterIcon} alt="twitter" width="30px" />
      </IconButton>
    </div>
  );
}
