import React, { useState, Dispatch } from 'react';
import RootRouter from 'pages';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import firebase from 'components/Firebase';
import { User } from 'firebase/app';

type UserContext = {
  user: User | null;
  setUser: Dispatch<User | null> | undefined;
};

export const UserContext = React.createContext<UserContext>({
  user: null,
  setUser: undefined,
});

export default function App() {
  const [currentUser, setUser] = useState<User | null>(null);
  firebase.auth().onAuthStateChanged(user => {
    setUser(user);
  });

  return (
    <BrowserRouter>
      <ThemeProvider>
        <ColorModeProvider>
          <UserContext.Provider value={{ user: currentUser, setUser }}>
            <RootRouter />
          </UserContext.Provider>
        </ColorModeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
