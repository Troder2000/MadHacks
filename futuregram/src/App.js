import React, { useEffect, useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <HomePage /> : <LoginPage />}
    </div>
  );
}

export default App;
