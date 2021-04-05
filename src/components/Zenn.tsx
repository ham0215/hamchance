import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Zenn } from '@icons-pack/react-simple-icons';

export default function ZennIconButton() {
  return (
    <div>
      <IconButton href="https://zenn.dev/hamchance" target="_blank" rel="noopener noreferrer">
        <Zenn color="#3EA8FF" size={30} />;
      </IconButton>
    </div>
  );
}
