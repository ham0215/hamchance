import React, { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import firebase from 'components/Firebase';
import styled from 'styled-components/macro';
import 'firebaseui/dist/firebaseui.css';
import TopContents from 'components/TopContents';

const SiteTitle = styled.p`
  margin: 30px 0;
  font-size: 2rem;
  line-height: 2.5;
`;

const Contents = styled(TopContents)`
  padding: 130px 0;
`;

export default function Login() {
  useEffect(() => {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: () => true,
        uiShown: () => {
          const loader = document.getElementById('loader');
          if (loader) loader.style.display = 'none';
        },
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      tosUrl: '/terms/terms-of-service',
      privacyPolicyUrl: '/terms/privacy-policy',
    };
    ui.start('#firebaseui-auth-container', uiConfig);
  });

  return (
    <Contents>
      <SiteTitle>Welcome to hamchance.com</SiteTitle>
      <div id="firebaseui-auth-container" />
      <div id="loader">Loading...</div>
    </Contents>
  );
}
