/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';

const GridItem = styled(Grid)`
  margin: 0 10px 0 10px;
`;

const AmazonImg = styled.img`
  margin: 10px 10px 50px 10px;
`;

const AmazonImgTag = styled.img`
  margin: 0px !important;
  border: none !important;
`;

type Props = {
  title: string;
  url: string;
  imgSrc: string;
  imgTagSrc: string;
};

export default function Book({ title, url, imgSrc, imgTagSrc }: Props) {
  return (
    <GridItem item>
      <a target="_blank" href={url}>
        <AmazonImg alt={title} src={imgSrc} />
      </a>
      <AmazonImgTag src={imgTagSrc} width="1" height="1" alt={title} />
    </GridItem>
  );
}
