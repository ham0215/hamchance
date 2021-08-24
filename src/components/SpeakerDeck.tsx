import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Speakerdeck } from '@icons-pack/react-simple-icons';

export default function SpeakerdeckIconButton() {
  return (
    <div>
      <IconButton href="https://speakerdeck.com/ham0215" target="_blank" rel="noopener noreferrer">
        <Speakerdeck color="#009287" size={30} />
      </IconButton>
    </div>
  );
}
