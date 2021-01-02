import React, { useState, Dispatch, createContext } from 'react';
import RootRouter from 'pages';
import { ThemeProvider } from 'styled-components';
import firebase from 'components/Firebase';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

type UserContextType = {
  user: firebase.User | null;
  setUser: Dispatch<firebase.User | null> | undefined;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: undefined,
});

export default function App() {
  const [currentUser, setUser] = useState<firebase.User | null>(null);
  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={{ user: currentUser, setUser }}>
        <RootRouter />
      </UserContext.Provider>
    </ThemeProvider>
  );
}
