import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SpeakerDeckIcon from 'images/speakerdeck.svg';

export default function Twitter() {
  return (
    <div>
      <IconButton
        href="https://speakerdeck.com/ham0215"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={SpeakerDeckIcon} alt="speakerdeck" width="50px" />
      </IconButton>
    </div>
  );
}
