import React from 'react';
import styled from 'styled-components/macro';

const Footer = styled.footer`
  padding: 12px 12px;
  font-size: 0.8rem;
  background-color: #3f51b5;
  color: white;
`;

const Copy = styled.p`
  text-align: right;
`;

export default function Skills() {
  return (
    <Footer>
      <Copy>&copy; 2020 ham</Copy>
    </Footer>
  );
}
