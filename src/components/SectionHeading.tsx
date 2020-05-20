import styled from 'styled-components/macro';

const SectionHeading = styled.h2`
  display: inline-block;
  position: relative;
  margin: 30px 0 15px;
  padding-bottom: 15px;
  font-size: 4rem;
  letter-spacing: 2px;

  ::before,
  ::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #999;
  }

  ::before {
    bottom: 5px;
  }
`;

export default SectionHeading;
