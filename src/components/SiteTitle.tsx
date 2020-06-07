import styled from 'styled-components/macro';

const SiteTitle = styled.h1`
  margin-top: 35px;
  font-size: 5rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export default SiteTitle;
