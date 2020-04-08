import React, { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import firebase from 'components/Firebase';
import 'firebaseui/dist/firebaseui.css';

export default function Login() {
  useEffect(() => {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult: any, redirectUrl: any) => {
          return true;
        },
        uiShown: () => {
          const loader = document.getElementById('loader');
          if (loader) loader.style.display = 'none';
        },
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      tosUrl: '/terms-of-service',
      privacyPolicyUrl: '/privacy-policy',
    };
    ui.start('#firebaseui-auth-container', uiConfig);
  });

  return (
    <div>
      <h1>Welcome to Hamchance.com</h1>
      <div id="firebaseui-auth-container" />
      <div id="loader">Loading...</div>
    </div>
  );
}
