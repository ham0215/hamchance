import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components/macro';
import GithubIcon from 'images/github.png';

const ImageText = styled.p`
  color: white;
  margin: 0 6px;
`;

export default function Twitter() {
  return (
    <div>
      <IconButton
        href="https://github.com/ham0215"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubIcon} alt="github" width="50px" />
        <ImageText>ham0215</ImageText>
      </IconButton>
    </div>
  );
}
