import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
  html {
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    font-size: 1.3rem;
    font-family: 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  } 
`;
