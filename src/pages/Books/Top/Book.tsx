import React from 'react';
import styled from 'styled-components/macro';
import Link from '@material-ui/core/Link';

const BookLi = styled.li`
  position: relative;
  width: 240px;
  margin: 1px auto;
  padding: 15px;
  font-size: 16px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: 0.05em;
  border-radius: 8px;
  background-image: linear-gradient(
    0deg,
    #fff 25%,
    #8e8e8e 25%,
    #8e8e8e 50%,
    #fff 50%,
    #fff 75%,
    #8e8e8e 75%,
    #8e8e8e
  );
  background-size: 4px 4px;
  list-style-type: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  :nth-child(4n + 1) {
    border-top: 3px solid green;
    border-bottom: 3px solid green;
    border-left: 3px solid green;
  }

  :nth-child(4n + 2) {
    border-top: 3px solid red;
    border-bottom: 3px solid red;
    border-left: 3px solid red;
  }

  :nth-child(4n + 3) {
    border-top: 3px solid blue;
    border-bottom: 3px solid blue;
    border-left: 3px solid blue;
  }

  :nth-child(4n + 4) {
    border-top: 3px solid orange;
    border-bottom: 3px solid orange;
    border-left: 3px solid orange;
  }
`;

type Props = {
  title: string;
  url: string;
};

export default function Book(props: Props) {
  const { title, url } = props;
  return (
    <BookLi>
      <Link href={url} color="inherit" underline="none" target="_blank">
        {title}
      </Link>
    </BookLi>
  );
}
