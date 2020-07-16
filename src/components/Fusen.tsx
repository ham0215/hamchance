import React from 'react';
import styled from 'styled-components/macro';

const Contents = styled.div`
  padding-left: 60px;
  width: 300px;
  position: relative;
  z-index: 0;
  color: black;

  ul li {
    font-size: 0.9em;
    margin: 1.6em 0;
    padding: 1em;
    position: relative;
    background: linear-gradient(to right, #ffffcc 0%, #f1f1c1 0.5%, #f1f1c1 13%, #ffffcc 16%);
  }

  ul li::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    bottom: 5px;
    right: 0;
    height: 15px;
    width: 99%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    transform: rotate(2deg);
  }

  ul li:nth-child(odd) {
    background: linear-gradient(to right, #ffffcc 0%, #f1f1c1 0.5%, #f1f1c1 13%, #ffffcc 16%);
  }
  ul li:nth-child(even) {
    background: linear-gradient(to right, #fdf8e6 0%, #f5ecda 0.5%, #f5ecda 13%, #fdf8e6 16%);
    margin: 1.6em 0em !important;
  }
`;

export default function Fusen() {
  return (
    <Contents>
      <ul>
        <li>付箋紙っぽいデザインの1</li>
        <li>付箋紙っぽいデザインの2</li>
        <li>付箋紙っぽいデザインの3</li>
      </ul>
    </Contents>
  );
}
