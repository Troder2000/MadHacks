import React, { useEffect, useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import GoogleLogin from './components/GoogleLogin';
import EmailLogin from './components/EmailLogin';
import Logout from './components/Logout';
import AddPost from './components/AddPost';
import PostList from './components/PostList';

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
      <h1>Futuregram</h1>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <Logout />
          <AddPost />
          <PostList />
        </>
      ) : (
        <>
          <GoogleLogin />
          <EmailLogin />
        </>
      )}
    </div>
  );
}

export default App;
