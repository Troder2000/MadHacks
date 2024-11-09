import React, { useEffect, useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import LoginPage from './components/LoginPage';
import Logout from './components/Logout';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const appStyle = {
    backgroundImage: 'url("/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={appStyle}>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <Logout />
          <AddPost />
          <PostList />
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
