import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Github } from '@icons-pack/react-simple-icons';

export default function GithubIconButton() {
  return (
    <div>
      <IconButton href="https://github.com/ham0215" target="_blank" rel="noopener noreferrer">
        <Github color="white" size={30} />
      </IconButton>
    </div>
  );
}
