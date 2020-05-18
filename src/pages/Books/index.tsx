import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'components/Firebase';
import { User } from 'firebase/app';

export default function Books() {
  const [currentUser, setUser] = useState<User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  });

  if (currentUser) {
    return (
      <div>
        <div>Logged in</div>
        <button type="button" onClick={() => firebase.auth().signOut()}>
          signOut
        </button>
      </div>
    );
  }
  return (
    <div>
      <div>Not logged in</div>
      <Link to="/login">Login</Link>
    </div>
  );
}
