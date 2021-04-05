import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Twitter } from '@icons-pack/react-simple-icons';

export default function TwitterIconButton() {
  return (
    <div>
      <IconButton href="https://twitter.com/hamchance0215" target="_blank" rel="noopener noreferrer">
        <Twitter color="#1DA1F2" size={30} />;
      </IconButton>
    </div>
  );
}
