import React from 'react';
import styled from 'styled-components/macro';
import Link from '@material-ui/core/Link';

const Footer = styled.footer`
  padding: 10px 0 10px;
  font-size: 0.8rem;
  background-color: #3f51b5;
  color: #fff;
`;

const Copyright = styled.p`
  text-align: center;
  letter-spacing: 1px;
`;

const FooterList = styled.ul`
  margin: 0 auto;
  text-align: right;
`;

const FooterFirstItem = styled.li`
  display: inline-block;
  padding: 0 15px;
  letter-spacing: 1px;
`;

const FooterItem = styled(FooterFirstItem)`
  border-left: 1px solid #bbb;
`;

export default function Skills() {
  return (
    <Footer>
      <FooterList>
        <FooterFirstItem>
          <Link href="/privacy-policy" color="inherit" underline="none">
            Privacy Policy
          </Link>
        </FooterFirstItem>
        <FooterItem>
          <Link href="/terms-of-service" color="inherit" underline="none">
            Terms of service
          </Link>
        </FooterItem>
      </FooterList>
      <Copyright>Copyright ©︎ 2020 Ham</Copyright>
    </Footer>
  );
}
