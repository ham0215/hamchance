import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Note from 'images/note.svg';

export default function NoteIconButton() {
  return (
    <div>
      <IconButton href="https://note.com/hamchance" target="_blank" rel="noopener noreferrer">
        <img src={Note} alt="note" width="30px" />
      </IconButton>
    </div>
  );
}
