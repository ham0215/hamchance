import React, { useState, Dispatch } from 'react';
import RootRouter from 'pages';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import firebase from 'components/Firebase';
import { User } from 'firebase/app';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

type UserContextType = {
  user: User | null;
  setUser: Dispatch<User | null> | undefined;
};

export const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: undefined,
});

export default function App() {
  const [currentUser, setUser] = useState<User | null>(null);
  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserContext.Provider value={{ user: currentUser, setUser }}>
          <RootRouter />
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
